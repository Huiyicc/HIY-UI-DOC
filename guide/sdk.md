---
title: SDK 打包与接入
---

# SDK 打包与接入

SDK 通过 CMake 安装到独立目录，再由 `package_sdk.py` 生成 ZIP 归档、文件清单和 SHA-256 校验和。

## 产物对照

| `--kind` | 内容 | 消费入口 |
| --- | --- | --- |
| `cpp-sdk` | C++ 静态库、依赖开发文件、头文件、CMake 包、资源工具和许可证 | `find_package(hiyui CONFIG REQUIRED)`，目标 `hiyui::hiyui` |
| `c-sdk` | C 动态库、C 头文件、图标常量、Windows 导入库、CMake 包和许可证 | `find_package(hiyui-c CONFIG REQUIRED)`，目标 `hiyui::c` |
| `runtime` | C 动态库、运行清单和许可证 | 随应用部署，库路径见 `manifest.json` 的 `runtime_library` |

桌面 SDK 安装支持 Windows 的 MSVC 兼容工具链、Linux 和 macOS，使用 SDL 后端。Android、FBDEV 和 Emscripten 使用各自的源码构建入口。

C SDK 的消费端只需启用 C 语言；LVGL、SDL 和 FreeType 的开发文件由运行库的生产端使用。消费端仍须满足目标系统、架构和运行依赖要求。

当前 C ABI 标记为 `experimental`。C 头文件与 Runtime 应来自同一构建；产品版本号相同不代表任意两个运行库可以互换。

## 构建与打包

从源码生产 SDK 需要 [编译环境](/build/#环境)。以下命令在仓库根目录执行，`python` 应指向 Python 3.9 或更高版本。

### C SDK 与 Runtime

使用 C SDK 配置构建共享库，依次安装运行文件和开发文件，再分别打包。

```bash
cmake -S . -B build/sdk-c -C cmake-local/profiles/desktop-c-sdk.cmake
cmake --build build/sdk-c --config Release --target hiyui-c
cmake --install build/sdk-c --config Release --component hiyui-c-runtime --prefix build/stage-c
cmake --install build/sdk-c --config Release --component hiyui-c-development --prefix build/stage-c
python scripts/package_sdk.py --prefix build/stage-c --out build/packages --kind c-sdk
python scripts/package_sdk.py --prefix build/stage-c --out build/packages --kind runtime
```

`hiyui-c-runtime` 可单独安装并打包为 Runtime；完整 C SDK 需要两个安装组件。相对 `--prefix` 以执行安装命令时的工作目录为基准。

### C++ SDK

使用单独的构建目录和安装目录生产 C++ 静态 SDK。

```bash
cmake -S . -B build/sdk-cpp -C cmake-local/profiles/desktop-cpp-sdk.cmake
cmake --build build/sdk-cpp --config Release
cmake --install build/sdk-cpp --config Release --prefix build/stage-cpp
python scripts/package_sdk.py --prefix build/stage-cpp --out build/packages --kind cpp-sdk
```

### 配置选择

两个配置文件设置初始 CMake cache 值。首次配置时可用 `-D` 指定其他值；已有构建目录保留已缓存的值。

| 配置项 | C SDK 配置 | C++ SDK 配置 |
| --- | --- | --- |
| `HIYUI_INSTALL_C_SDK` | `ON` | `OFF` |
| `HIYUI_INSTALL_SDK` | `OFF` | `ON` |
| `HIYUI_BUILD_C_BINDING` | `ON` | `OFF` |
| `HIYUI_BACKEND` | `SDL` | `SDL` |
| `HIYUI_RENDER_BACKEND` | `SW` | `SW` |
| `HIYUI_ENABLE_XML_LAYOUT` | `ON` | `ON` |
| `HIYUI_USE_HARFBUZZ` | `OFF` | `OFF` |
| `HIYUI_ENABLE_FFMPEG` | `OFF` | `OFF` |
| 构建配置 | `Release` | `Release` |

C SDK 配置还设置 `HIYUI_C_STATIC=OFF`、`HIYUI_BUILD_C_DEMO=OFF` 和 `HIYUI_ICON_FULL_FONT=ON`。两个配置均关闭 FreeType 的外部 PNG、zlib、bzip2、Brotli 和 HarfBuzz 依赖；需要这些字体解码功能时应另选配置。

选择 Debug 时，单配置生成器设置 `-DCMAKE_BUILD_TYPE=Debug`，多配置生成器设置 `-DCMAKE_CONFIGURATION_TYPES=Debug`；构建、安装和打包均传入 `--config Debug`。生成器、工具链和目标架构由 `-G`、`-A` 或工具链文件选择。

不同产品版本、功能组合或工具链使用不同安装目录。安装目录中已有 SDK 的身份不匹配，或已有 SDK 文件缺少身份清单时，安装会拒绝继续。

打包器读取安装目录，不要求 Git 工作区、tag 或正式发布验收材料。`--out` 必须位于安装目录之外，已有同名归档或校验和文件时会报错。C SDK 和 C++ SDK 均附带 `tools/package_sdk.py`。

## 接入已解压的 SDK

解压后，以包含 `manifest.json` 的目录作为 SDK 根目录，默认头文件和库目录为 `include` 和 `lib`。`CMAKE_PREFIX_PATH` 使用 SDK 根目录的绝对路径。

### C 应用

应用的 `CMakeLists.txt` 导入 C 包并链接 `hiyui::c`。

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

以下 `main.c` 查询已加载运行库的产品版本，无需创建窗口。

```c
#include <hiyui/c/app.h>
#include <stdio.h>

int main(void) {
    puts(hiyui_c_version());
    return 0;
}
```

从应用目录配置并构建 Release。

```bash
cmake -S . -B build -DCMAKE_PREFIX_PATH="/absolute/path/to/c-sdk" -DCMAKE_BUILD_TYPE=Release -DCMAKE_CONFIGURATION_TYPES=Release
cmake --build build --config Release
```

仓库中的 `test/package_consumer_c` 使用纯 C 工程，将所加载库的产品版本、ABI 版本和接口指纹与 SDK 提供的预期值比较，并输出能力掩码；任一比较失败时返回非零退出码。可将它作为外部消费入口，并把 `CMAKE_PREFIX_PATH` 指向搬迁后的 SDK。

该程序还检查空回调、调度器未启动、空用户数据和空销毁函数四种投递拒绝场景。检查通过时输出 `Post UI rejection cleanup: passed`，失败时输出具体场景并返回非零退出码。程序不启动 UI，检查范围不包含接受后的回调执行和释放线程。

### C++ 应用

应用的 `CMakeLists.txt` 使用安装包提供的配置与部署函数。

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

`main.cpp` 可使用 [快速开始的最小应用](/guide/quick-start#最小应用)。配置命令中的 `CMAKE_PREFIX_PATH` 指向 C++ SDK，并选择包内已安装的构建配置。

C++ SDK 检查目标系统、架构、编译器 ID 与完整版本、MSVC 工具集和已安装配置。`hiyui_setup_application()` 链接 `hiyui::hiyui`，检查并设置应用 CRT，处理应用所用图标。应用的其他静态依赖也需要匹配 CRT。

SDK 附带的脚本可生成桌面应用工程，`--config` 必须选择包内已安装的配置。

```bash
python /absolute/path/to/cpp-sdk/tools/create_application.py my_app --sdk /absolute/path/to/cpp-sdk --config Release
```

在生成的应用目录执行配置、构建和安装。

```bash
cmake --preset hiyui
cmake --build --preset hiyui
cmake --install build --config Release --component desktop_app --prefix dist
```

Windows 和 Linux 的程序安装到 `dist/bin`，许可证安装到 `dist/share/desktop_app/hiyui`。macOS 输出 `dist/desktop_app.app`，许可证位于应用包的 `Contents/Resources/hiyui`。

安装函数部署可执行文件和许可证。目标环境提供所需系统库，应用使用的其他动态依赖须另行部署。

### C++ 消费验收

`test/package_consumer` 提供四种 SDK 消费程序。

| 程序 | 覆盖内容 |
| --- | --- |
| `hiyui_smoke_builtin` | 默认内置图标 |
| `hiyui_smoke_custom` | 应用自定义图标子集 |
| `hiyui_smoke_full` | 完整图标字体 |
| `hiyui_smoke_direct` | 直接链接 `hiyui::hiyui` |

将 `test/package_consumer` 复制到仓库外目录，在该目录执行以下命令。`CMAKE_PREFIX_PATH` 指向已解压搬迁的 C++ SDK；自定义图标构建需要 Python 字体工具。

```bash
cmake -S . -B build -DCMAKE_PREFIX_PATH="/absolute/path/to/cpp-sdk" -DCMAKE_BUILD_TYPE=Release -DCMAKE_CONFIGURATION_TYPES=Release -DCMAKE_FIND_USE_PACKAGE_REGISTRY=OFF -DCMAKE_FIND_USE_SYSTEM_PACKAGE_REGISTRY=OFF -DHIYUI_CONSUMER_SMOKE=ON
cmake --build build --config Release
cmake --install build --config Release --prefix dist
```

在可用的桌面会话中运行安装后的四个程序。Windows 和 Linux 的程序位于 `dist/bin`，macOS 程序位于各自的 `.app/Contents/MacOS`。成功时各输出一条 `HIYUI_SMOKE`，其中版本与 SDK 一致，`font_ready`、`glyph_rendered`、`loop_completed` 均为 `true`，退出码为 `0`。

## C ABI 查询

`<hiyui/c/abi.h>` 提供运行库识别与编译功能查询，也由 `<hiyui/c/hiyui.h>` 包含。这些查询无需初始化应用，可从任意线程并发、重复调用。

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `hiyui_c_abi_version()` | `uint32_t` | ABI 版本，独立于产品版本；当前值为 `0`，对应头文件宏 `HIYUI_C_ABI_VERSION` |
| `hiyui_c_interface_fingerprint()` | `const char *` | 与 C 包清单 `interface.fingerprint` 一致的接口指纹 |
| `hiyui_c_capabilities()` | `uint64_t` | 编译时启用的可选功能位掩码 |

ABI 版本 `0` 表示实验期；两个 `0` 相等不构成运行库可互换的承诺。接口指纹用于核对公开头文件内容，不能证明结构体布局或二进制兼容。

指纹返回值非 `NULL`，包含 64 个小写十六进制字符及末尾 NUL。该字符串由运行库持有，在运行库卸载前有效，调用方不得修改或释放。

能力掩码使用以下常量；调用方应忽略未知位。返回 `0` 表示未包含表中所列功能。

| 值 | 说明 |
| --- | --- |
| `HIYUI_C_CAP_XML_LAYOUT` | XML 布局 |
| `HIYUI_C_CAP_FREETYPE` | FreeType 字体实现 |
| `HIYUI_C_CAP_HARFBUZZ` | HarfBuzz 文本整形 |
| `HIYUI_C_CAP_FFMPEG` | FFmpeg 视频功能 |
| `HIYUI_C_CAP_ACCESSIBILITY` | 系统无障碍后端 |
| `HIYUI_C_CAP_DIAGNOSTICS` | 当前构建配置包含诊断功能 |

这些位只表示运行库包含相应功能，不反映设备或服务的运行状态。例如，FFmpeg 位不保证硬件解码可用，无障碍位不表示读屏服务已连接。

以下程序打印接口指纹，并在未编译 XML 布局功能时返回非零退出码。

```c
#include <hiyui/c/abi.h>
#include <stdio.h>

int main(void) {
    puts(hiyui_c_interface_fingerprint());
    return (hiyui_c_capabilities() & HIYUI_C_CAP_XML_LAYOUT) ? 0 : 1;
}
```

## C 回调投递

`<hiyui/c/misc.h>` 中的 `hiyui_post_ui(cb, ud, destroy)` 将回调投递到 UI 线程，可从普通线程调用。

| 值 | 说明 |
| --- | --- |
| `HIYUI_POST_ACCEPTED` | 任务已入队，回调至多执行一次；主循环停止时尚未执行的任务取消执行 |
| `HIYUI_POST_QUEUE_FULL` | 队列已满，未入队，不调用回调 |
| `HIYUI_POST_STOPPED` | 回调为 `NULL`、调度器未启动或已停止，或发生内部分配或入队异常；未入队，不调用回调 |

`destroy` 非 `NULL` 时，调用即接管 `ud`，包含拒绝路径在内恰好调用一次 `destroy`。调用方不得再次释放或复用同一份状态重试。`ud` 可以为 `NULL`，仍原样传给回调和销毁函数。

入队后，回调执行和状态释放均在 UI 线程：正常执行时在回调返回后释放；主循环停止时，尚未执行的任务只释放状态。拒绝时，在投递线程、本函数返回前释放状态。

`destroy` 为 `NULL` 时，库不清理 `ud`，调用方必须保证其在回调期间有效。

投递不等待回调完成；从其他线程投递时，回调及释放可能先于投递函数返回。回调和销毁函数均不得抛出异常；语言绑定须在语言侧处理异常或 panic。

## Runtime 部署

Runtime 解压到应用部署目录，保留 `manifest.json`、`share/hiyui` 下的清单和许可证。共享库的实际名称以 `runtime_library` 为准。

| 平台 | 默认库目录 | 应用部署要求 |
| --- | --- | --- |
| Windows | `bin` | `hiyui-c.dll` 与应用可执行文件放在同一目录，或由宿主显式指定加载路径 |
| Linux | `lib` | 保留运行库文件及其加载名称；应用在 `bin` 时可设置 `INSTALL_RPATH` 为 `$ORIGIN/../lib` |
| macOS | `lib` | 保留运行库文件及其加载名称；应用在 `bin` 时可设置 `INSTALL_RPATH` 为 `@loader_path/../lib` |

更改 `CMAKE_INSTALL_LIBDIR` 后，相应调整应用的查找路径。语言宿主应根据自身包位置定位运行库。

`runtime_dependencies.resolved` 和 `unresolved` 记录生产机器上的依赖扫描结果，可能包含间接依赖。所需系统库由目标环境提供，其他动态依赖由应用部署；这些扫描列表不等同于包内文件列表。启用 FFmpeg 等额外功能时还需处理对应动态库和许可证。

## 产物清单

`package_sdk.py` 生成的每份 SDK 或 Runtime ZIP 根目录包含 `manifest.json`，归档旁附带同名 `.sha256` 文件。

| 字段 | 用途 |
| --- | --- |
| `version`、`configuration`、`platform` | 选择产品版本、构建配置、系统和架构；未知最低系统或 libc 版本为 `null` |
| `features` | 查看编译时启用的功能 |
| `interface` | 查看接口稳定状态和头文件指纹；C 包还包含 `abi_version`、导出名称及函数和回调的调用约定 |
| `family_id` | 核对运行文件与开发文件的构建身份 |
| `build_id` | 区分包含不同元信息或文件内容的产物；C SDK 与 Runtime 的值各自独立 |
| `files` | 包内文件的相对路径、角色、大小和 SHA-256 |
| `validation` | 普通打包结果为 `unverified`；编译、运行与兼容性验收需另行取得证据 |

## C++ 正式发布

正式发布验收使用 `desktop-cpp-sdk.cmake` 与 `package_sdk.py --kind cpp-sdk`，覆盖 SDK 打包与搬迁、组件测试、模板应用、四种消费程序及 QR 示例。

源码及子模块必须无未提交改动，发布脚本、配置和依赖须纳入版本控制。环境需要桌面构建工具、可用的桌面会话，以及包含 `fonttools` 和 `brotli` 的 Python 3.9 或更高版本。`--work` 必须指定仓库外尚不存在的目录。

从仓库根目录运行自动验收。

```bash
python scripts/release_sdk.py --work ../hiyui-cpp-release-validation
```

成功后输出 `Automated validation passed`，并生成 `results/validation.json` 和待填写的 `results/manual-acceptance.json`。按人工验收文件中的操作验证模板应用和 QR 示例，填写执行人、时间和各项实际结果。

正式版本要求 `v<版本号>` tag 指向验收使用的源码提交，并完成该批归档的人工验收。使用对应报告生成发行目录，`--out` 必须为仓库外的新目录。

```bash
python scripts/package_release.py --out ../hiyui-cpp-release --validation ../hiyui-cpp-release-validation/results/validation.json
```

发行目录包含 SDK、应用、源码和验收证据归档，以及发布清单 `manifest.json` 和 `SHA256SUMS.txt`。SDK 内部清单保留 `validation: unverified`；正式发布结论记录在发行目录的清单及验收证据中，按实际完成验收的平台声明。

## 相关页面

- [编译总览](/build/)
- [编译参数](/build/options)
- [C 画廊](/build/c-gallery)
- [快速开始](/guide/quick-start)
