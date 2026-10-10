---
title: "TreeNodeConfig"
---

# TreeNodeConfig <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/tree.h>`

**命名空间：** `hiyui`

树节点配置，用户传入

## 公开成员

### iconCodepoint

```cpp
uint32_t iconCodepoint
```

文本前自定义图标码点

### expanded

```cpp
bool expanded
```

初始展开

### checked

```cpp
bool checked
```

初始勾选

### disabled

```cpp
bool disabled
```

禁用

### checkable

```cpp
bool checkable
```

是否允许勾选，全局 checkable=true 时生效

### userData

```cpp
void * userData
```

用户自定义数据

### lazyLoad

```cpp
std::function< void(TreeNodeId)> lazyLoad
```

异步加载回调，首次展开时触发

### localizedText

```cpp
std::optional< LocalizedText > localizedText
```

设置后覆盖原文本，并随语言切换更新；描述在传入组件时复制。
