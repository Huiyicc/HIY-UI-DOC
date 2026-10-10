---
title: "Container"
---

# Container <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/container.h>`

**命名空间：** `hiyui`

CRTP 容器基类，为派生类提供 operator() 子组件挂载能力

通过 operator()(children...) 将子组件挂载到当前容器。 未挂载时持有子组件配置；挂载后由父控件管理子控件生命周期。 具名子组件须显式 std::move，原包装器移空，已绑定 `Ref` 保持关联。



| 名称 | 说明 |
|---|---|
| `Derived` | 派生类类型，CRTP，用于链式调用返回派生类引用。 例如 `Button` 继承 `Container<Button>`， 左值调用返回左值引用，右值调用返回右值引用。 |


**参见：** `Widget`

**继承自：** `hiyui::Chainable< Derived >`

## 公开方法

### operator()

```cpp
Derived & operator()(Children &&...children) &
```

挂载子组件到当前容器

| 名称 | 说明 |
|---|---|
| `Children` | `Widget` 派生类型包 |

| 参数 | 说明 |
|---|---|
| `children` | 子组件右值，调用后源包装器移空；已挂载子控件改挂当前容器。 |


**返回值：** 派生类引用，支持链式调用
