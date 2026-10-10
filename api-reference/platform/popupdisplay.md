---
title: "PopupDisplay"
---

# PopupDisplay <Badge type="info" text="类" />

**头文件：** `#include <hiyui/platform/popup_display.h>`

**命名空间：** `hiyui`

离屏 popup display，RAII 持有

析构时先删除绑定的 indev，再 lv_display_delete（驱动销毁 popup 窗口）。

## 静态方法

### create

```cpp
static std::unique_ptr< PopupDisplay > create(lv_display_t *parentDisp, int offsetX, int offsetY, int initW, int initH, bool transparent)
```

创建离屏 popup display

| 参数 | 说明 |
|---|---|
| `parentDisp` | 父 display，popup 作为其子窗口 |
| `offsetX` | 相对父窗口原点的 X 偏移，SDL 逻辑像素 |
| `offsetY` | 相对父窗口原点的 Y 偏移，SDL 逻辑像素 |
| `initW` | 初始宽度，画布像素 |
| `initH` | 初始高度，画布像素 |
| `transparent` | 是否启用 per-pixel alpha |


**返回值：** 创建失败返回 nullptr

### createStandalone

```cpp
static std::unique_ptr< PopupDisplay > createStandalone(lv_display_t *referenceDisp, int screenX, int screenY, int initW, int initH, bool transparent)
```

创建独立顶级窗口 display（无父窗口）

用于系统托盘等脱离主窗口的弹出场景。窗口初始隐藏且不显示在任务栏或窗口 列表中，调用方按内容尺寸调整后自行 SDL_ShowWindow。



| 参数 | 说明 |
|---|---|
| `referenceDisp` | 字体和缩放参考 display；nullptr 表示当前默认 display |
| `screenX` | SDL 桌面坐标 X |
| `screenY` | SDL 桌面坐标 Y |
| `initW` | 初始宽度，画布像素 |
| `initH` | 初始高度，画布像素 |
| `transparent` | 是否启用 per-pixel alpha |


**返回值：** 创建失败返回 nullptr

### fromDisplay

```cpp
static PopupDisplay * fromDisplay(lv_display_t *display) noexcept
```

查找存活的弹窗宿主；非弹窗 display 返回 nullptr，返回值不转移所有权。

### resolveHostDisplay

```cpp
static lv_display_t * resolveHostDisplay(lv_display_t *disp) noexcept
```

解析全局浮层应挂载的 display。 弹窗 display 沿宿主链上溯返回首个非弹窗 display；宿主链断裂或为 独立窗口时返回第一个非弹窗 display，无候选时原样返回。

## 公开方法

### display

```cpp
lv_display_t * display() const
```

底层 LVGL display

### screen

```cpp
lv_obj_t * screen() const
```

活动屏幕对象，菜单 panel 挂载点

### sdlWindow

```cpp
SDL_Window * sdlWindow() const
```

底层 SDL 窗口

### setBackdrop

```cpp
bool setBackdrop(lv_obj_t *panel, bool enabled)
```

为屏幕首个子面板绑定系统模糊，关闭后释放原生资源。

**返回值：** 模糊已启用时返回 true；未启用、不支持或启用失败时返回 false。

### clearBackdrop

```cpp
void clearBackdrop(lv_obj_t *panel) noexcept
```

解除指定面板的模糊绑定，未绑定该面板时无操作。

### resizeCanvas

```cpp
void resizeCanvas(int width, int height) noexcept
```

按画布像素同步调整窗口与 display 分辨率

调整期间抑制 SDL 尺寸事件回灌 display 分辨率，避免 zoom 与 input_scale 不一致时分辨率被改写。
| 参数 | 说明 |
|---|---|
| `width` | 目标画布宽度，像素 |
| `height` | 目标画布高度，像素 |

### releaseFromDisplayDelete

```cpp
void releaseFromDisplayDelete()
```

释放由外部删除流程接管的 display 和关联输入设备

### releaseFromWindowDestroy

```cpp
void releaseFromWindowDestroy() noexcept
```

标记 SDL 窗口已由外部销毁，保留 display 供延迟回收。
