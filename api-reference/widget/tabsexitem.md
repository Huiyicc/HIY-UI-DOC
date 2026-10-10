---
title: "TabsExItem"
---

# TabsExItem <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/tabs_ex.h>`

**命名空间：** `hiyui`

会话标签项配置。

`title` 为空时使用 `host`；`iconCodepoint` 非零时优先于 `iconSrc`。 `data` 用于绑定外部会话对象索引。

## 公开成员

### title

```cpp
const char * title
```

自定义标题，空值时使用 host。

### host

```cpp
const char * host
```

Host/IP 文本，UTF-8 编码。

### iconCodepoint

```cpp
uint32_t iconCodepoint
```

Material Symbols 图标码点，0 表示无图标。

### iconSrc

```cpp
const void * iconSrc
```

图片路径在设置时复制；描述符及像素借用至标签项移除或替换。

### iconStyle

```cpp
FontIconStyle iconStyle
```

字体图标轴参数。

### connection

```cpp
TabConnectionState connection
```

连接状态。

### showStatus

```cpp
bool showStatus
```

是否显示连接状态指示点。

### closable

```cpp
bool closable
```

是否允许关闭；关闭控件仅在 Hover/Active 时显示。

### pinned

```cpp
bool pinned
```

是否置于 Pin 分组。

### disabled

```cpp
bool disabled
```

是否禁用激活和拖拽。

### data

```cpp
int data
```

用户绑定数据。
