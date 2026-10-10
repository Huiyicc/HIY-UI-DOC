---
title: "Toast"
---

# Toast <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/toast.h>`

**命名空间：** `hiyui`

浮动层通知组件

挂载到 lv_layer_top()，不影响主窗口布局。同一位置最多完整显示 2 条， 超出时旧通知自动淡出并回缩布局。



**参见：** `ToastProps`

**继承自：** `hiyui::Chainable< Toast >`

## 公开方法

### message

```cpp
Toast & message(const char *value) &
```

设置通知文字，普通文本取消翻译绑定，nullptr 显示空文字。

### message

```cpp
Toast & message(LocalizedText value) &
```

绑定通知文字，复制文案与参数并随语言更新。

### Toast

```cpp
Toast(lv_obj_t *raw)
```

包装已有 LVGL 对象

### Toast

```cpp
Toast(ToastProps props={})
```

通过属性聚合构造

### show

```cpp
Toast & show() &
```

显示通知

通知对象挂载到 lv_layer_top()，show() 返回后底层对象由队列自管理， C++ 包装不再持有 raw_。

## 静态方法

### info

```cpp
static void info(LocalizedText message, int duration=3000, ToastPosition pos=ToastPosition::TopCenter)
```

显示随语言更新的通知，复制文案与参数。

### success

```cpp
static void success(LocalizedText message, int duration=3000, ToastPosition pos=ToastPosition::TopCenter)
```

显示随语言更新的通知，复制文案与参数。

### warning

```cpp
static void warning(LocalizedText message, int duration=3000, ToastPosition pos=ToastPosition::TopCenter)
```

显示随语言更新的通知，复制文案与参数。

### error

```cpp
static void error(LocalizedText message, int duration=3000, ToastPosition pos=ToastPosition::TopCenter)
```

显示随语言更新的通知，复制文案与参数。

### info

```cpp
static void info(const char *msg, int duration=3000, ToastPosition pos=ToastPosition::TopCenter)
```

信息通知快捷调用

| 参数 | 说明 |
|---|---|
| `duration` | 自动消失时间 (ms)，0 = 不自动关闭 |

### success

```cpp
static void success(const char *msg, int duration=3000, ToastPosition pos=ToastPosition::TopCenter)
```

成功通知快捷调用

| 参数 | 说明 |
|---|---|
| `duration` | 自动消失时间 (ms)，0 = 不自动关闭 |

### warning

```cpp
static void warning(const char *msg, int duration=3000, ToastPosition pos=ToastPosition::TopCenter)
```

警告通知快捷调用

| 参数 | 说明 |
|---|---|
| `duration` | 自动消失时间 (ms)，0 = 不自动关闭 |

### error

```cpp
static void error(const char *msg, int duration=3000, ToastPosition pos=ToastPosition::TopCenter)
```

错误通知快捷调用

| 参数 | 说明 |
|---|---|
| `duration` | 自动消失时间 (ms)，0 = 不自动关闭 |
