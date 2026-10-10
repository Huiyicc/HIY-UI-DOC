---
title: "MenuItemNode"
---

# MenuItemNode <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/menu.h>`

**命名空间：** `hiyui`

菜单项内部运行时节点，扁平数组 + 树编码

所有节点以前序遍历顺序存入 MenuState::nodes， 通过 parentNodeIndex / childNodeIndices 编码树结构。

## 公开成员

### parentNodeIndex

```cpp
int parentNodeIndex
```

父节点索引，-1 = 顶层

### depth

```cpp
int depth
```

嵌套层级，0 = 顶层

### isParent

```cpp
bool isParent
```

有子项

### isSeparator

```cpp
bool isSeparator
```

分隔线

### expanded

```cpp
bool expanded
```

当前展开状态

### rowObj

```cpp
lv_obj_t * rowObj
```

可点击行对象

### groupTagObj

```cpp
lv_obj_t * groupTagObj
```

分组标签对象，仅分隔线节点

### childrenContainer

```cpp
lv_obj_t * childrenContainer
```

子项容器，仅父项

### chevronObj

```cpp
lv_obj_t * chevronObj
```

展开箭头，仅父项

### labelContainerObj

```cpp
lv_obj_t * labelContainerObj
```

文字容器，弹跳动画作用对象

### labelObj

```cpp
lv_obj_t * labelObj
```

文字标签

### iconContainerObj

```cpp
lv_obj_t * iconContainerObj
```

图标容器，弹跳动画作用对象

### iconObj

```cpp
lv_obj_t * iconObj
```

当前图标对象

### iconObjOld

```cpp
lv_obj_t * iconObjOld
```

过渡期间的旧图标对象，cross-fade

### iconCodepoint

```cpp
uint32_t iconCodepoint
```

图标码点，用于 fill 动态切换

### iconStyle

```cpp
FontIconStyle iconStyle
```

图标原始样式

### iconSize

```cpp
uint32_t iconSize
```

图标大小

### iconScaleAnim

```cpp
lv_anim_t iconScaleAnim
```

新图标扩展动画，scale 128→256

### iconFadeAnim

```cpp
lv_anim_t iconFadeAnim
```

旧图标淡出动画，opacity 255→0

### iconShrinkAnim

```cpp
lv_anim_t iconShrinkAnim
```

旧图标收缩动画，scale 256→128

### iconBounceAnim

```cpp
lv_anim_t iconBounceAnim
```

图标弹跳动画，y 偏移

### labelBounceAnim

```cpp
lv_anim_t labelBounceAnim
```

文字弹跳动画，y 偏移

### childNodeIndices

```cpp
std::vector< int > childNodeIndices
```

直接子节点索引

### leafIndex

```cpp
int leafIndex
```

叶节点索引，-1 = 非叶

### data

```cpp
int data
```

用户绑定数据

### chevronAngle

```cpp
int chevronAngle
```

箭头角度，0=\/↓, 1800=/\↑, 0.1度

### textCache

```cpp
std::string textCache
```

缓存文字内容，用于弹出面板重建

### spacerObj

```cpp
lv_obj_t * spacerObj
```

弹性空白，宽模式父项用
