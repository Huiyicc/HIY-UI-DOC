---
title: "abi.h"
---

# abi.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/abi.h>`

运行库接口识别与可选功能查询。

本文件的查询可从任意线程并发、重复调用，无需初始化应用。

## 宏定义

### HIYUI_C_CAP_XML_LAYOUT

XML 布局功能。

### HIYUI_C_CAP_FREETYPE

FreeType 字体实现。

### HIYUI_C_CAP_HARFBUZZ

HarfBuzz 文本整形。

### HIYUI_C_CAP_FFMPEG

FFmpeg 视频功能，不表示硬件解码可用。

### HIYUI_C_CAP_ACCESSIBILITY

系统无障碍后端，不表示读屏服务已连接。

### HIYUI_C_CAP_DIAGNOSTICS

当前构建配置包含诊断功能。

## 函数

### hiyui_c_abi_version

```c
uint32_t hiyui_c_abi_version(void)
```

查询运行库的 ABI 版本，独立于产品版本。

**返回值：** 0 表示实验期，两个 0 相等不代表运行库可互换。

### hiyui_c_interface_fingerprint

```c
const char * hiyui_c_interface_fingerprint(void)
```

查询与 C SDK 清单 interface.fingerprint 一致的接口指纹。

**返回值：** 非 NULL 的只读 SHA-256 字符串，由 64 个小写十六进制字符及末尾 NUL 组成；运行库卸载前有效，不得释放。 指纹相同不保证结构体布局或二进制兼容。

### hiyui_c_capabilities

```c
uint64_t hiyui_c_capabilities(void)
```

查询运行库包含的可选功能，不反映运行时设备或服务状态。

**返回值：** HIYUI_C_CAP_* 的位掩码；0 表示不包含所列可选功能，调用方应忽略未知位。
