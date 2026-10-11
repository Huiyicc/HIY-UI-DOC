---
title: SDK Packaging and Integration
---

# SDK Packaging and Integration

CMake installs the SDK into a separate directory. `package_sdk.py` turns that installation into a ZIP archive with a file manifest and a SHA-256 checksum.

## Artifacts

| `--kind` | Contents | Consumer entry point |
| --- | --- | --- |
| `cpp-sdk` | C++ static libraries, dependency development files, headers, CMake package, resource tools, and licenses | `find_package(hiyui CONFIG REQUIRED)`, target `hiyui::hiyui` |
| `c-sdk` | C shared library, C headers, icon constants, Windows import library, CMake package, and licenses | `find_package(hiyui-c CONFIG REQUIRED)`, target `hiyui::c` |
| `runtime` | C shared library, runtime manifest, and licenses | Deploy with the application; `runtime_library` in `manifest.json` identifies the library |

Desktop SDK installation supports Windows with an MSVC-compatible toolchain, as well as Linux and macOS, using the SDL backend. Android, FBDEV, and Emscripten use their respective source build entry points.

A C SDK consumer only needs to enable the C language. The runtime producer uses the LVGL, SDL, and FreeType development files. Consumers must still meet the target system, architecture, and runtime dependency requirements.

The C ABI is currently marked `experimental`. Use C headers and a Runtime from the same build; matching product version numbers do not make arbitrary runtimes interchangeable.

## Building and packaging

Producing an SDK from source requires the [build environment](/en/build/#environment). Run the following commands from the repository root, with `python` pointing to Python 3.9 or later.

### C SDK and Runtime

Build the shared library with the C SDK profile, install its runtime and development components, then package each artifact.

```bash
cmake -S . -B build/sdk-c -C cmake-local/profiles/desktop-c-sdk.cmake
cmake --build build/sdk-c --config Release --target hiyui-c
cmake --install build/sdk-c --config Release --component hiyui-c-runtime --prefix build/stage-c
cmake --install build/sdk-c --config Release --component hiyui-c-development --prefix build/stage-c
python scripts/package_sdk.py --prefix build/stage-c --out build/packages --kind c-sdk
python scripts/package_sdk.py --prefix build/stage-c --out build/packages --kind runtime
```

Installing `hiyui-c-runtime` alone is sufficient to package a Runtime. The C SDK requires both components. A relative `--prefix` is resolved against the working directory of the install command.

### C++ SDK

Use separate build and installation directories for the C++ static SDK.

```bash
cmake -S . -B build/sdk-cpp -C cmake-local/profiles/desktop-cpp-sdk.cmake
cmake --build build/sdk-cpp --config Release
cmake --install build/sdk-cpp --config Release --prefix build/stage-cpp
python scripts/package_sdk.py --prefix build/stage-cpp --out build/packages --kind cpp-sdk
```

### Configuration

Both profiles set initial CMake cache values. Override them with `-D` on the first configuration; an existing build directory keeps its cached values.

| Setting | C SDK profile | C++ SDK profile |
| --- | --- | --- |
| `HIYUI_INSTALL_C_SDK` | `ON` | `OFF` |
| `HIYUI_INSTALL_SDK` | `OFF` | `ON` |
| `HIYUI_BUILD_C_BINDING` | `ON` | `OFF` |
| `HIYUI_BACKEND` | `SDL` | `SDL` |
| `HIYUI_RENDER_BACKEND` | `SW` | `SW` |
| `HIYUI_ENABLE_XML_LAYOUT` | `ON` | `ON` |
| `HIYUI_USE_HARFBUZZ` | `OFF` | `OFF` |
| `HIYUI_ENABLE_FFMPEG` | `OFF` | `OFF` |
| Build configuration | `Release` | `Release` |

The C SDK profile also sets `HIYUI_C_STATIC=OFF`, `HIYUI_BUILD_C_DEMO=OFF`, and `HIYUI_ICON_FULL_FONT=ON`. Both profiles disable FreeType's external PNG, zlib, bzip2, Brotli, and HarfBuzz dependencies. Select a different configuration when those font decoding features are required.

For Debug, set `-DCMAKE_BUILD_TYPE=Debug` with a single-config generator or `-DCMAKE_CONFIGURATION_TYPES=Debug` with a multi-config generator, and pass `--config Debug` to build, install, and packaging commands. Select the generator, toolchain, and target architecture through `-G`, `-A`, or a toolchain file.

Use different installation directories for different product versions, feature combinations, or toolchains. Installation rejects an existing SDK with a mismatched identity, or existing SDK files without an identity manifest.

The packager reads the installation directory and requires no Git workspace, tag, or formal release acceptance materials. `--out` must be outside the installation directory. An existing archive or checksum with the same name causes an error. Both SDKs include `tools/package_sdk.py`.

## Consuming an extracted SDK

After extraction, the directory containing `manifest.json` is the SDK root. The default header and library directories are `include` and `lib`. Pass the absolute SDK root path through `CMAKE_PREFIX_PATH`.

### C application

Import the C package and link `hiyui::c` in the application's `CMakeLists.txt`.

```cmake
cmake_minimum_required(VERSION 3.20)
project(my_c_app LANGUAGES C)

find_package(hiyui-c CONFIG REQUIRED)
add_executable(my_c_app main.c)
target_link_libraries(my_c_app PRIVATE hiyui::c)

if(WIN32)
    add_custom_command(TARGET my_c_app POST_BUILD
        COMMAND ${CMAKE_COMMAND} -E copy_if_different
            "$<TARGET_FILE:hiyui::c>" "$<TARGET_FILE_DIR:my_c_app>"
        VERBATIM)
endif()
```

This `main.c` queries the loaded runtime's product version without creating a window.

```c
#include <hiyui/c/app.h>
#include <stdio.h>

int main(void) {
    puts(hiyui_c_version());
    return 0;
}
```

Configure and build Release from the application directory.

```bash
cmake -S . -B build -DCMAKE_PREFIX_PATH="/absolute/path/to/c-sdk" -DCMAKE_BUILD_TYPE=Release -DCMAKE_CONFIGURATION_TYPES=Release
cmake --build build --config Release
```

The repository's `test/package_consumer_c` compares the loaded library's product version, ABI version, and interface fingerprint with the expected values from the SDK, and prints its capability mask. Any mismatch produces a nonzero exit code. Use this C-only project as an external consumer with `CMAKE_PREFIX_PATH` pointing to a relocated SDK.

The program also checks four posting rejection cases: a null callback, a scheduler that has not started, null user data, and a null destroy function. Successful checks print `Post UI rejection cleanup: passed`; failures identify the case and produce a nonzero exit code. The program does not start the UI, so it does not check execution or cleanup threads for accepted tasks.

### C++ application

Use the package's application configuration and deployment functions in `CMakeLists.txt`.

```cmake
cmake_minimum_required(VERSION 3.20)
project(my_cpp_app LANGUAGES C CXX)

if(NOT MSVC)
    enable_language(ASM)
endif()
find_package(hiyui CONFIG REQUIRED)
add_executable(my_cpp_app main.cpp)
hiyui_setup_application(my_cpp_app)
hiyui_install_application(my_cpp_app)
```

Use the [minimal application](/en/guide/quick-start#minimal-application) as `main.cpp`. Point `CMAKE_PREFIX_PATH` to the C++ SDK and select a build configuration installed in that package.

The C++ SDK checks the target system, architecture, compiler ID and full version, MSVC toolset, and installed configurations. `hiyui_setup_application()` links `hiyui::hiyui`, checks and sets the application's CRT, and handles application icons. Other static dependencies in the application must also use a matching CRT.

The script included in the SDK can generate a desktop application project. `--config` must select an installed configuration.

```bash
python /absolute/path/to/cpp-sdk/tools/create_application.py my_app --sdk /absolute/path/to/cpp-sdk --config Release
```

Configure, build, and install from the generated application directory.

```bash
cmake --preset hiyui
cmake --build --preset hiyui
cmake --install build --config Release --component desktop_app --prefix dist
```

On Windows and Linux, the executable is installed under `dist/bin` and licenses under `dist/share/desktop_app/hiyui`. macOS produces `dist/desktop_app.app`, with licenses under `Contents/Resources/hiyui` inside the application bundle.

The install function deploys the executable and licenses. The target environment supplies required system libraries; deploy any other dynamic dependencies used by the application separately.

### C++ consumer acceptance

`test/package_consumer` provides four SDK consumer programs.

| Program | Coverage |
| --- | --- |
| `hiyui_smoke_builtin` | Default built-in icons |
| `hiyui_smoke_custom` | Application-specific icon subset |
| `hiyui_smoke_full` | Complete icon font |
| `hiyui_smoke_direct` | Direct linking to `hiyui::hiyui` |

Copy `test/package_consumer` outside the repository and run these commands from that directory. Point `CMAKE_PREFIX_PATH` to the extracted and relocated C++ SDK. Building custom icons requires the Python font tools.

```bash
cmake -S . -B build -DCMAKE_PREFIX_PATH="/absolute/path/to/cpp-sdk" -DCMAKE_BUILD_TYPE=Release -DCMAKE_CONFIGURATION_TYPES=Release -DCMAKE_FIND_USE_PACKAGE_REGISTRY=OFF -DCMAKE_FIND_USE_SYSTEM_PACKAGE_REGISTRY=OFF -DHIYUI_CONSUMER_SMOKE=ON
cmake --build build --config Release
cmake --install build --config Release --prefix dist
```

Run all four installed programs in an available desktop session. Executables are under `dist/bin` on Windows and Linux, or inside each `.app/Contents/MacOS` directory on macOS. Each successful run prints one `HIYUI_SMOKE` record with the SDK version and `font_ready`, `glyph_rendered`, and `loop_completed` all set to `true`, then exits with code `0`.

## C ABI queries

`<hiyui/c/abi.h>` provides runtime identification and build feature queries. It is also included by `<hiyui/c/hiyui.h>`. These queries require no application initialization and support concurrent, repeated calls from any thread.

| Method | Returns | Description |
| --- | --- | --- |
| `hiyui_c_abi_version()` | `uint32_t` | ABI version, independent of the product version; currently `0`, corresponding to the header macro `HIYUI_C_ABI_VERSION` |
| `hiyui_c_interface_fingerprint()` | `const char *` | Interface fingerprint matching `interface.fingerprint` in the C package manifest |
| `hiyui_c_capabilities()` | `uint64_t` | Bitmask of optional features enabled at build time |

ABI version `0` indicates an experimental ABI. Two zero values do not promise interchangeable runtimes. The interface fingerprint identifies public header contents; it does not prove structure layout or binary compatibility.

The fingerprint is a non-`NULL` string containing 64 lowercase hexadecimal characters followed by NUL. The runtime owns this string, which remains valid until the runtime is unloaded. Callers must neither modify nor free it.

The capability mask uses the following constants. Callers must ignore unknown bits. A zero result means none of the listed features are included.

| Value | Description |
| --- | --- |
| `HIYUI_C_CAP_XML_LAYOUT` | XML layout |
| `HIYUI_C_CAP_FREETYPE` | FreeType font support |
| `HIYUI_C_CAP_HARFBUZZ` | HarfBuzz text shaping |
| `HIYUI_C_CAP_FFMPEG` | FFmpeg video support |
| `HIYUI_C_CAP_ACCESSIBILITY` | System accessibility backend |
| `HIYUI_C_CAP_DIAGNOSTICS` | Diagnostics included in the current build configuration |

These bits describe features included in the runtime, independently of device or service availability. For example, the FFmpeg bit does not guarantee hardware decoding, and the accessibility bit does not indicate a connected screen reader.

This program prints the interface fingerprint and returns a nonzero exit code when XML layout support is absent.

```c
#include <hiyui/c/abi.h>
#include <stdio.h>

int main(void) {
    puts(hiyui_c_interface_fingerprint());
    return (hiyui_c_capabilities() & HIYUI_C_CAP_XML_LAYOUT) ? 0 : 1;
}
```

## Posting C callbacks

`hiyui_post_ui(cb, ud, destroy)` in `<hiyui/c/misc.h>` posts a callback to the UI thread and can be called from ordinary threads.

| Value | Description |
| --- | --- |
| `HIYUI_POST_ACCEPTED` | The task is queued and its callback runs at most once; tasks still pending when the main loop stops are canceled |
| `HIYUI_POST_QUEUE_FULL` | The queue is full; the task is not queued and its callback is not invoked |
| `HIYUI_POST_STOPPED` | The callback is `NULL`, the scheduler has not started or has stopped, or an internal allocation or enqueue operation threw an exception; the task is not queued and its callback is not invoked |

When `destroy` is non-`NULL`, the call takes ownership of `ud` and invokes `destroy` exactly once, including rejection paths. The caller must not free the state again or reuse it for a retry. `ud` may be `NULL` and is passed unchanged to the callback and destroy function.

After enqueueing, callback execution and state cleanup take place on the UI thread. State is released after the callback returns; tasks still pending when the main loop stops are cleaned up without executing their callbacks. Rejected tasks are cleaned up on the posting thread before the posting function returns.

When `destroy` is `NULL`, the library does not clean up `ud`. The caller must keep it valid throughout the callback.

Posting does not wait for callback completion. When posted from another thread, the callback and cleanup may finish before the posting function returns. Neither the callback nor the destroy function may throw exceptions; language bindings must handle exceptions or panics within the host language.

## Runtime deployment

Extract the Runtime into the application's deployment directory. Keep `manifest.json` and the manifests and licenses under `share/hiyui`. The `runtime_library` field gives the actual shared library filename.

| Platform | Default library directory | Application deployment |
| --- | --- | --- |
| Windows | `bin` | Put `hiyui-c.dll` next to the application executable, or let the host specify the library path explicitly |
| Linux | `lib` | Keep the runtime file and its loader filenames; an application in `bin` can set `INSTALL_RPATH` to `$ORIGIN/../lib` |
| macOS | `lib` | Keep the runtime file and its loader filenames; an application in `bin` can set `INSTALL_RPATH` to `@loader_path/../lib` |

Adjust the application's search path when changing `CMAKE_INSTALL_LIBDIR`. Language hosts should locate the runtime relative to their own package location.

`runtime_dependencies.resolved` and `unresolved` record dependency scan results from the producer's machine and may include transitive dependencies. The target environment supplies required system libraries; the application deploys other dynamic dependencies. These scan lists differ from the archive's file list. Enabling features such as FFmpeg also requires deploying their dynamic libraries and licenses.

## Artifact manifest

Each SDK or Runtime ZIP produced by `package_sdk.py` contains `manifest.json` at its root. A `.sha256` file with the archive's name is written next to it.

| Field | Purpose |
| --- | --- |
| `version`, `configuration`, `platform` | Select the product version, configuration, system, and architecture; unknown minimum OS or libc versions are `null` |
| `features` | Inspect features enabled at build time |
| `interface` | Inspect interface stability and the header fingerprint; C packages also include `abi_version`, export names, and function and callback calling conventions |
| `family_id` | Match the build identities of runtime and development files |
| `build_id` | Distinguish artifacts with different metadata or file contents; the C SDK and Runtime have separate values |
| `files` | Relative file paths, roles, sizes, and SHA-256 hashes |
| `validation` | Ordinary packages report `unverified`; build, runtime, and compatibility acceptance require separate evidence |

## Formal C++ releases

Release validation uses `desktop-cpp-sdk.cmake` and `package_sdk.py --kind cpp-sdk`. It covers SDK packaging and relocation, component tests, the application template, all four consumer programs, and the QR example.

The source repository and submodules must have no uncommitted changes. Release scripts, configuration, and dependencies must be tracked in version control. The environment requires desktop build tools, an available desktop session, and Python 3.9 or later with `fonttools` and `brotli`. `--work` must name a new directory outside the repository.

Run automated validation from the repository root.

```bash
python scripts/release_sdk.py --work ../hiyui-cpp-release-validation
```

Success prints `Automated validation passed` and produces `results/validation.json` and a pending `results/manual-acceptance.json`. Follow the manual acceptance operations for the application template and QR example, and record the tester, date, and actual result of each case.

A final release requires a `v<version>` tag pointing to the source commit used for validation and completed manual acceptance for those archives. Use the matching report to generate the release directory. `--out` must name a new directory outside the repository.

```bash
python scripts/package_release.py --out ../hiyui-cpp-release --validation ../hiyui-cpp-release-validation/results/validation.json
```

The release directory contains SDK, application, source, and validation evidence archives, plus the release `manifest.json` and `SHA256SUMS.txt`. The manifest inside the SDK retains `validation: unverified`. Formal validation results are recorded in the release manifest and evidence, with claims limited to the platforms actually validated.

## Related pages

- [Build Overview](/en/build/)
- [Build Options](/en/build/options)
- [C Gallery](/en/build/c-gallery)
- [Quick Start](/en/guide/quick-start)
