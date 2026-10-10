---
title: "DropdownState"
---

# DropdownState <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/dropdown.h>`

**命名空间：** `hiyui`

下拉选择运行时状态，生命周期跟随 LVGL 对象

堆分配后挂载到 lv_obj_t 的 user_data 上， 通过 LV_EVENT_DELETE 回调自动释放。

## 公开成员

### optionList

```cpp
std::vector< std::string > optionList
```

解析后的选项列表

### itemDataList

```cpp
std::vector< int > itemDataList
```

各选项用户绑定数据

### selectedIdx

```cpp
int selectedIdx
```

当前选中索引

### isOpen

```cpp
bool isOpen
```

弹出列表是否打开

### labelObj

```cpp
lv_obj_t * labelObj
```

显示当前选中文字的 label

### listPanel

```cpp
lv_obj_t * listPanel
```

弹出的列表容器，挂 screen 或浮窗

### overlay

```cpp
lv_obj_t * overlay
```

透明拦截层，点击外部关闭

### ddObj

```cpp
lv_obj_t * ddObj
```

反向引用 dropdown 对象

### valueCb

```cpp
std::function< void()> valueCb
```

值变化回调

### popupSurface

```cpp
detail::PopupSurface * popupSurface
```

浮窗面板，Window 模式持有，关闭时释放

### editable

```cpp
bool editable
```

可编辑模式

### searchEnabled

```cpp
bool searchEnabled
```

搜索过滤开关

### setTextInternal

```cpp
bool setTextInternal
```

程序化设文本中，跳过输入触发的自动打开

### matchFn

```cpp
std::function< bool(const std::string &, const std::string &)> matchFn
```

搜索匹配插槽，空 = 默认大小写不敏感子串匹配

### query

```cpp
std::string query
```

当前搜索文本

### editObj

```cpp
lv_obj_t * editObj
```

可编辑模式文本区

### searchBox

```cpp
lv_obj_t * searchBox
```

弹出列表顶部搜索输入框

### itemsBox

```cpp
lv_obj_t * itemsBox
```

选项按钮容器，含搜索框时存在

### noMatchLabel

```cpp
lv_obj_t * noMatchLabel
```

无匹配提示

### scrollCarrier

```cpp
lv_obj_t * scrollCarrier
```

实际滚动容器，listPanel 或 itemsBox

### scrollListeners

```cpp
std::vector< std::pair< lv_obj_t *, lv_event_dsc_t * > > scrollListeners
```

滚动监听，(祖先对象, 事件描述符) 列表，关闭时移除

### listAnim

```cpp
lv_anim_t listAnim
```

展开/收缩几何动画槽

### listAnimOpa

```cpp
lv_anim_t listAnimOpa
```

收缩淡出动画槽(独立时长)

### closePending

```cpp
bool closePending
```

收缩动画进行中(防重入)

### openDownward

```cpp
bool openDownward
```

当前展开方向

### panelX0

```cpp
int32_t panelX0
```

面板起始 x

### padTop

```cpp
int32_t padTop
```

面板上内边距

### padBottom

```cpp
int32_t padBottom
```

面板下内边距

### ddTargetY

```cpp
int32_t ddTargetY
```

锚点项终点屏幕中心 y(贴 ddObj 边缘)

### expandPanelH

```cpp
int32_t expandPanelH
```

展开终点高度

### expandContentH

```cpp
int32_t expandContentH
```

列表内容总高

### revealBottomY

```cpp
int32_t revealBottomY
```

向上展开时面板底边对齐的内容坐标

### anchorTopY

```cpp
int32_t anchorTopY
```

向下展开:面板顶锚 y

### anchorBottomY

```cpp
int32_t anchorBottomY
```

向上展开:面板底锚 y

### panelH0

```cpp
int32_t panelH0
```

收缩起点高度

### scrollY0

```cpp
int32_t scrollY0
```

收缩起点 scroll_y

### scrollYTarget

```cpp
int32_t scrollYTarget
```

收缩终点 scroll_y

### itemScreenY0

```cpp
int32_t itemScreenY0
```

锚点项起始屏幕中心 y

### itemContentCenterY

```cpp
int32_t itemContentCenterY
```

锚点项内容坐标中心 y

### hEnd

```cpp
int32_t hEnd
```

收缩终点高度(单行)
