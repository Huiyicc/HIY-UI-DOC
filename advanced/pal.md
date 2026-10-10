---
title: 平台适配层
---

# 平台适配层

PAL 封装显示、输入、剪贴板、运行循环和平台能力。

## 后端

平台后端由 `HIYUI_BACKEND` 选择，渲染方式由 `HIYUI_RENDER_BACKEND` 选择。OpenGL 是渲染路径，不是独立的操作系统平台后端。

| 后端 | 目标与边界 |
|---|---|
| `SDL` | Windows、Linux、macOS 与 Android；窗口和输入能力随目标平台变化 |
| `FBDEV` | Linux framebuffer／evdev；仅允许 AUTO 或 SW 渲染，默认使用点阵字体 |
| `EMSCRIPTEN` | 浏览器宿主；未提供的环境能力保持未知 |
| `EMBEDDED` | MCU／RTOS 接入未完成；配置阶段报错，要求补齐工具链、板级环境、PAL、显示／输入与字体资源 |
| `CUSTOM` | 由集成方提供平台实现；该选项不表示已提供 MCU／RTOS 后端 |

具体依赖与配置约束见 [编译参数](/build/options)。

## 接口

| 函数 | 结果 |
| --- | --- |
| `pal::display()` | 当前 `DisplayBackend` |
| `pal::input()` | 当前 `InputBackend` |
| `pal::caps()` | `SystemCaps` 能力快照 |
| `pal::run()` | 平台事件循环；反复调用传入的回调，回调返回 false 时退出 |
| `pal::setClipboardText()` | 写入 UTF-8 剪贴板；不支持的平台静默忽略 |
| `pal::getClipboardText()` | 读取 UTF-8 剪贴板；不支持或内容为空时返回空串 |

## 能力查询

`SystemCaps` 包含文件系统、GPU、触摸、窗口管理器、渲染后端、屏幕尺寸和 DPI。窗口透明能力通过 `DisplayBackend::surfaceCapabilities()` 查询。

调用平台相关功能前检查对应能力和函数指针。FBDEV 与 Emscripten 后端没有窗口管理器，不提供最小化、最大化等桌面操作。

页面布局通过 `layoutEnvironment(widget)` 查询局部内容尺寸、所属窗口的可用区以及输入能力，通过 `onEnvironmentChange()` 订阅变化。能力未报告时保持 `Unknown`；安全区或键盘遮挡未知时不能认定已完成避让。字段、单位与有效性见 [响应式布局](/core/responsive)。

## 缩放

`systemDpiScale()` 表示系统 DPI（系统 DPI 除以 96），`uiScale()` 表示应用屏幕适配，`dpiScale()` 为两者乘积。`scaled()` 和 `scaledF()` 将逻辑尺寸转换为画布尺寸。

`queryScreenInfo()` 返回显示器分辨率、工作区和设备像素比。应用可在 `resolveContentScale()` 中使用该信息。
