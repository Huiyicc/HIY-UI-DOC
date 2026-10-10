---
title: 调试工具
---

# 调试工具

调试功能需要在构建时用 CMake 选项开启，默认关闭。组件调试边框、性能监视器、内存监视器各自独立开关。

## 编译选项

| CMake 选项 | 默认值 | 说明 |
| --- | --- | --- |
| `HIYUI_DEBUG_OUTLINE` | `OFF` | 编译组件调试边框 |
| `HIYUI_DEBUG_PERF` | `OFF` | 编译性能监视器（FPS、渲染耗时与 CPU 占用） |
| `HIYUI_DEBUG_MEM` | `OFF` | 编译进程内存监视器（RSS 与峰值） |

选项关闭时相关代码不进入产物，对应运行时 API 为空操作。

```sh
cmake -B build -DHIYUI_DEBUG_OUTLINE=ON -DHIYUI_DEBUG_PERF=ON -DHIYUI_DEBUG_MEM=ON
```

安卓端推荐在 `android/local.properties` 中通过下列键开启：

```properties
hiyui.debugOutline=true
hiyui.debugPerf=true
hiyui.debugMem=true
```

`HIYUI_DEBUG_PERF` 联动 LVGL 的 `LV_USE_PERF_MONITOR`；WebAssembly 构建中 `LV_USE_SYSMON` 为 0，该项不生效。`HIYUI_DEBUG_MEM` 不依赖 LVGL 监视器配置，WebAssembly 构建中同样不生效。

## 组件调试边框

开启 `HIYUI_DEBUG_OUTLINE` 后，调用 `setComponentOutline(true)` 为所有组件（含浮层）绘制 1px 红色边框。

```cpp
hiyui::setComponentOutline(true);
```

`Application::run()` 启动时读取环境变量 `DEBUG`，值为 `1` 时自动开启组件边框。

```sh
DEBUG=1 ./app
```

运行时切换开关，边框随之出现或消失，关闭后不再参与绘制。

`setXmlDebugOutline(bool)` 与 `xmlDebugOutline()` 是别名，行为分别与 `setComponentOutline()`、`componentOutline()` 一致。

## 性能与内存监视器

开启 `HIYUI_DEBUG_PERF` 或 `HIYUI_DEBUG_MEM` 后，`Application::run()` 启动时在默认屏幕角落显示对应监视器，无需运行时调用。

- 性能监视器显示于右下角，内容为 FPS、渲染耗时与 CPU 占用。Windows 与桌面 Linux 读取系统级 CPU；Android 读取本进程 CPU，单核满载计为 100%，多核同时满载截断为 100%。
- 内存监视器显示于左下角，内容为本进程驻留内存（RSS）与运行期峰值，每 300ms 刷新一次；平台无法读取时显示 `RSS n/a`。

两项监视器不响应环境变量与运行时开关。

## API

| 函数 | 返回 | 说明 |
| --- | --- | --- |
| `setComponentOutline(bool enabled)` | `void` | 开启或关闭组件调试边框；`HIYUI_DEBUG_OUTLINE` 关闭时为空操作 |
| `componentOutline()` | `bool` | 返回当前开关状态，编译期未启用时为 `false` |

声明位于 `<hiyui/misc/debug.h>`。

## 相关页面

- [Application](/core/application)
