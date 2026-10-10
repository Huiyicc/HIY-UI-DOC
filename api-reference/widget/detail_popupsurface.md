---
title: "detail::PopupSurface"
---

# detail::PopupSurface <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/detail/popup_surface.h>`

**命名空间：** `hiyui`

浮窗弹出面板

`open()` 创建隐藏浮窗并注册弹出链，组件构建内容后调用 `finishLayout()` 按内容调窗并显示。关闭统一走 `close()`；弹出链或 display 删除触发的 外部关闭经 closeSession 调用 onClose 回调，回调返回后 session 失效。

## 公开方法

### open

```cpp
bool open(lv_display_t *parentDisp, int32_t panelX, int32_t panelY, int32_t contentW, int32_t contentH, int32_t shadowExtent)
```

打开浮窗

| 参数 | 说明 |
|---|---|
| `parentDisp` | 宿主 display |
| `panelX` | 面板期望位置 X，宿主画布像素 |
| `panelY` | 面板期望位置 Y，宿主画布像素 |
| `contentW` | 内容宽度，画布像素 |
| `contentH` | 内容高度，画布像素 |
| `shadowExtent` | 内容阴影外扩，画布像素 |


**返回值：** 创建失败返回 false，调用方回退内嵌弹出

### contentParent

```cpp
lv_obj_t * contentParent() const
```

内容挂载点，未打开时返回 nullptr

### finishLayout

```cpp
void finishLayout(lv_obj_t *content)
```

内容构建完成后按内容调窗并显示

| 参数 | 说明 |
|---|---|
| `content` | 内容根对象，位于 `contentParent()` 内 |

### takeFocusGroup

```cpp
lv_group_t * takeFocusGroup(lv_obj_t *initialFocus)
```

创建焦点组并接管键盘输入

| 参数 | 说明 |
|---|---|
| `initialFocus` | 初始聚焦对象 |


**返回值：** 焦点组，未打开时返回 nullptr，关闭时自动恢复原组

### previousGroup

```cpp
lv_group_t * previousGroup() const
```

浮窗打开前捕获的焦点组，未打开时返回 nullptr

### onClose

```cpp
void onClose(std::function< void()> cb)
```

绑定外部关闭回调

### close

```cpp
void close() noexcept
```

关闭浮窗，未打开时无操作，可重复调用

### isOpen

```cpp
bool isOpen() const
```

查询是否处于打开状态
