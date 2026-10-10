---
title: "Ref"
---

# Ref <Badge type="info" text="类" />

**头文件：** `#include <hiyui/misc/ref.h>`

**命名空间：** `hiyui`

组件引用，提供对已挂载组件的延迟访问

保存控件绑定，原包装器移动、解除绑定或析构不影响该引用。 不持有组件所有权；访问和存活判断均须在 UI 线程进行。



| 名称 | 说明 |
|---|---|
| `T` | 提供 explicit T(lv_obj_t*) 构造函数的组件类型 |


**参见：** `Widget::ref()`

## 公开方法

### Ref

```cpp
Ref(const T &widget)
```

绑定组件；复制引用不延长组件生命周期。

### bind

```cpp
void bind(const T &widget)
```

替换当前绑定，不改变此前复制出的引用。

### reset

```cpp
void reset()
```

清除当前引用，不删除组件或改变其他引用。

### bind

```cpp
void bind(lv_obj_t *r)
```

绑定底层 LVGL 对象指针

重复调用替换既有绑定。



| 参数 | 说明 |
|---|---|
| `r` | 来自 `Widget::ref()` 传入的 lv_obj_t* 指针 |

### operator-&gt;

```cpp
Proxy operator->()
```

通过 -&gt; 访问目标组件方法，非 const 版本

返回临时包装器并转发方法调用；目标失效时调试版断言。



**返回值：** 临时代理；通过 -&gt; 链式调用取得的包装器引用仅在当前完整表达式内有效。

### operator-&gt;

```cpp
Proxy operator->() const
```

通过 -&gt; 访问目标组件方法，const 版本

与非 const 版本相同，目标失效时调试版断言。



**返回值：** 临时代理；通过 -&gt; 链式调用取得的包装器引用仅在当前完整表达式内有效。

### operator bool

```cpp
operator bool() const
```

检查引用是否仍然有效

**返回值：** true 表示绑定的对象仍然存活

未挂载、引用被移出、目标或父控件请求删除后返回 false。

### destroy

```cpp
void destroy() const
```

请求删除目标及其子树；立即使引用失效，实际释放在 UI 主循环中完成。 在 UI 线程调用；空引用及重复调用无操作。

### with

```cpp
bool with(F &&f) const
```

引用有效时以借用包装器同步调用 f

不延长目标组件生命周期；不得在 f 之外保存参数包装器的引用。



| 参数 | 说明 |
|---|---|
| `f` | 可调用对象，签名为 void(T&amp;) |


**返回值：** 完成调用返回 true；引用无效时未调用并返回 false

### raw

```cpp
lv_obj_t * raw() const
```

获取底层 LVGL 对象指针

**返回值：** 绑定的指针，未绑定、移出或组件删除后返回 nullptr。
