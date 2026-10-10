---
title: "MenuItemNode"
---

# MenuItemNode <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/menu.h>`

**Namespace:** `hiyui`

Internal runtime node of a menu item, flat array plus tree encoding.

All nodes are stored in MenuState::nodes in preorder traversal order. The tree structure is encoded through parentNodeIndex and childNodeIndices.

## Public Members

### parentNodeIndex

```cpp
int parentNodeIndex
```

Parent node index, -1 = top level.

### depth

```cpp
int depth
```

Nesting depth, 0 = top level.

### isParent

```cpp
bool isParent
```

Has child items.

### isSeparator

```cpp
bool isSeparator
```

Is a separator line.

### expanded

```cpp
bool expanded
```

Current expanded state.

### rowObj

```cpp
lv_obj_t * rowObj
```

Clickable row object.

### groupTagObj

```cpp
lv_obj_t * groupTagObj
```

Group label object, separator nodes only.

### childrenContainer

```cpp
lv_obj_t * childrenContainer
```

Children container, parent items only.

### chevronObj

```cpp
lv_obj_t * chevronObj
```

Expand chevron, parent items only.

### labelContainerObj

```cpp
lv_obj_t * labelContainerObj
```

Text container, target of the bounce animation.

### labelObj

```cpp
lv_obj_t * labelObj
```

Text label.

### iconContainerObj

```cpp
lv_obj_t * iconContainerObj
```

Icon container, target of the bounce animation.

### iconObj

```cpp
lv_obj_t * iconObj
```

Current icon object.

### iconObjOld

```cpp
lv_obj_t * iconObjOld
```

Old icon object during the transition, cross-fade.

### iconCodepoint

```cpp
uint32_t iconCodepoint
```

Icon codepoint, used for dynamic fill switching.

### iconStyle

```cpp
FontIconStyle iconStyle
```

Original icon style.

### iconSize

```cpp
uint32_t iconSize
```

Icon size.

### iconScaleAnim

```cpp
lv_anim_t iconScaleAnim
```

New icon expand animation, scale 128→256.

### iconFadeAnim

```cpp
lv_anim_t iconFadeAnim
```

Old icon fade-out animation, opacity 255→0.

### iconShrinkAnim

```cpp
lv_anim_t iconShrinkAnim
```

Old icon shrink animation, scale 256→128.

### iconBounceAnim

```cpp
lv_anim_t iconBounceAnim
```

Icon bounce animation, y offset.

### labelBounceAnim

```cpp
lv_anim_t labelBounceAnim
```

Text bounce animation, y offset.

### childNodeIndices

```cpp
std::vector< int > childNodeIndices
```

Direct child node indices.

### leafIndex

```cpp
int leafIndex
```

Leaf node index, -1 = not a leaf.

### data

```cpp
int data
```

User data.

### chevronAngle

```cpp
int chevronAngle
```

Chevron angle, 0=\/↓, 1800=/\↑, unit 0.1 degree.

### textCache

```cpp
std::string textCache
```

Cached text content, used for popup panel rebuilds.

### spacerObj

```cpp
lv_obj_t * spacerObj
```

Flexible spacer, used by parent items in wide mode.
