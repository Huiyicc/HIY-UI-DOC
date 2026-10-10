---
title: "UserStyleRegistry"
---

# UserStyleRegistry <Badge type="info" text="类" />

**头文件：** `#include <hiyui/style/user_style_registry.h>`

**命名空间：** `hiyui`

用户组件类型注册表，Meyer 单例

registerType 按 id 单调递增分配，100 起，上限 255，同名重复注册幂等。 `Theme::styleFor` 对 isUserType 为真的类型自动委托到本表。

## 静态方法

### isUserType

```cpp
static bool isUserType(WidgetType t)
```

id ≥ 100 即用户组件类型

## 公开方法

### registerType

```cpp
WidgetType registerType(const char *name, UserStyleFactory factory)
```

注册一个具名用户组件类型

| 参数 | 说明 |
|---|---|
| `name` | 类型名，调用方保证注册期稳定 |
| `factory` | 默认样式工厂，可为 nullptr，表示无主题默认样式 |


**返回值：** 分配的 WidgetType，≥100；id 耗尽或 name 为空返回 `WidgetType::Base`

### styleFor

```cpp
StyleSet styleFor(WidgetType type, const Theme &theme) const
```

按 id 查默认 `StyleSet`

**返回值：** 未注册或 factory 为空时返回空 `StyleSet`

### find

```cpp
bool find(const char *name, WidgetType &out) const
```

按名称查询已注册 id

**返回值：** 未注册返回 false
