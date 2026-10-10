---
title: "Progress"
---

# Progress <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/progress.h>`

**命名空间：** `hiyui`

进度条组件

**继承自：** `hiyui::Chainable< Progress >`

## 公开方法

### value

```cpp
Progress & value(int v, Notify notify=Notify::No) &
```

运行时设置值，触发动画

| 参数 | 说明 |
|---|---|
| `v` | 新值 [0,100] |

### value

```cpp
int value() const
```

获取当前目标值

### text

```cpp
Progress & text(const char *t) &
```

设置自定义文字

### text

```cpp
Progress & text(const LocalizedText &text) &
```

绑定随语言更新的文案，复制描述；普通字符串调用替换此绑定。

### activeColor

```cpp
Progress & activeColor(uint32_t color) &
```

运行时设置激活色

### activeColor

```cpp
Progress & activeColor(ThemeRole role) &
```

绑定激活色到主题语义角色，主题切换时自动更新

### trackColor

```cpp
Progress & trackColor(ThemeRole role) &
```

绑定轨道色到主题语义角色，主题切换时自动更新

### gradientEndColor

```cpp
Progress & gradientEndColor(ThemeRole role) &
```

绑定渐变终止色到主题语义角色，主题切换时自动更新

### segments

```cpp
Progress & segments(const ProgressSegment *segs, int count) &
```

运行时设置分段

### currentStep

```cpp
Progress & currentStep(int step) &
```

Steps 模式设置当前步骤

### currentStep

```cpp
int currentStep() const
```

获取当前步骤，Steps 模式，0-based

### stepCount

```cpp
int stepCount() const
```

获取步骤总数，Steps 模式
