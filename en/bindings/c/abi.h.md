---
title: "abi.h"
---

# abi.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/abi.h>`

Runtime interface identification and optional feature queries.

Queries in this file support concurrent, repeated calls from any thread without application initialization.

## Macros

### HIYUI_C_CAP_XML_LAYOUT

XML layout support.

### HIYUI_C_CAP_FREETYPE

FreeType font support.

### HIYUI_C_CAP_HARFBUZZ

HarfBuzz text shaping.

### HIYUI_C_CAP_FFMPEG

FFmpeg video support; does not indicate hardware decoding availability.

### HIYUI_C_CAP_ACCESSIBILITY

System accessibility backend; does not indicate a connected screen reader.

### HIYUI_C_CAP_DIAGNOSTICS

Diagnostics are included in this build configuration.

## Functions

### hiyui_c_abi_version

```c
uint32_t hiyui_c_abi_version(void)
```

Queries the runtime ABI version, independently of the product version.

0 indicates an experimental ABI; two zero values do not imply interchangeable runtimes.

### hiyui_c_interface_fingerprint

```c
const char * hiyui_c_interface_fingerprint(void)
```

Queries the interface fingerprint matching interface.fingerprint in the C SDK manifest.

A non-NULL, read-only SHA-256 string of 64 lowercase hexadecimal characters followed by NUL; valid until the runtime is unloaded and must not be freed. Matching fingerprints do not guarantee structure layout or binary compatibility.

### hiyui_c_capabilities

```c
uint64_t hiyui_c_capabilities(void)
```

Queries optional features included in the runtime, independently of device or service availability.

A bitmask of HIYUI_C_CAP_* values; 0 means none of the listed optional features are included, and callers must ignore unknown bits.
