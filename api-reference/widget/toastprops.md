---
title: "ToastProps"
---

# ToastProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/toast.h>`

**命名空间：** `hiyui`

通知创建属性

## 公开成员

### message

```cpp
const char * message
```

通知文本，UTF-8 编码

### type

```cpp
ToastType type
```

通知类型

### position

```cpp
ToastPosition position
```

弹出位置

### duration

```cpp
int duration
```

自动消失时间 (ms)，0 = 不自动关闭

### maxWidth

```cpp
int maxWidth
```

最大宽度，单位主题逻辑像素
