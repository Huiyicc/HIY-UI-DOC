---
title: 自定义 XML 组件
---

# 自定义 XML 组件

自定义 XML 组件由模块和组件描述共同注册。模块以 namespace URI 标识，组件以模块内的 local name 标识。注册、注销和 snapshot 查询必须在 Hiy-UI UI 线程调用。

字段工具声明在 `xml_attr.h`，模块与组件注册声明在 `xml_registry.h`，`register*Widget` 辅助模板声明在 `xml_factory.h`。

## Props 与字段

Props 保持纯 POD，所有字段具有默认值。

```cpp
struct BadgeProps {
  const char *text = nullptr;
  uint32_t bg = HIYUI_DEFAULT;
  int fontSize = 14;
};
```

字段工具从 `Props{}` 提取默认值，并生成类型、范围和可绑定性元数据。

| 字段工具 | Props 成员类型 |
|---|---|
| `xmlIntField` | 有符号整数 |
| `xmlUIntField` | 无符号整数 |
| `xmlBoolField` | `bool` |
| `xmlFloatField` | 浮点数 |
| `xmlStringField` | `const char *` |
| `xmlPointerStringField` | `const void *` |
| `xmlColorField` | `uint32_t` |
| `xmlEnumField` | 枚举 |

为字段设置显示名称和说明：

```cpp
const XmlField badgeFields[] = {
    xmlStringField<BadgeProps, &BadgeProps::text>(
        "text", {.bindable = true, .description = "显示文本。", .displayName = "文本"}),
    xmlColorField<BadgeProps, &BadgeProps::bg>("bg", nullptr,
        {.description = "背景颜色。", .displayName = "背景色"}),
    xmlIntField<BadgeProps, &BadgeProps::fontSize>("fontSize", 0, 72,
        {.description = "文字字号。", .displayName = "字号"}),
};
```

`XmlAttributeOptions` 可设置 `required`、`bindable`、`description` 和 `displayName`。注册结果中的 `XmlAttributeSpec` 保存类型 `kind`、显示名、说明、默认值和范围。显示名为空时，工具显示原始 `name`；XML 属性名始终使用 `name`。

枚举表分别声明 XML 值、对应数值和展示文字：

```cpp
const XmlEnumValue alignments[] = {
    {"Start", static_cast<int64_t>(Align::Start), "起始对齐"},
    {"Center", static_cast<int64_t>(Align::Center), "居中对齐"},
};
const XmlAttributeSpec alignment = xmlEnumAttribute("align", alignments,
    {.description = "内容对齐方式。", .displayName = "对齐"});
```

`XmlEnumValue::displayName` 为空时显示该选项的 `name`。Registry snapshot 深拷贝全部注解，设计器保存枚举值时仍写入 `Start`、`Center` 等 XML 名称。

HIYDesignUI 根据 `kind` 选择属性编辑器：

| 属性类型 | 编辑方式 |
|---|---|
| String、Identifier、Command、Resource、Source | 文本输入 |
| Integer、UnsignedInteger、Number | 原始文本与数值步进 |
| Boolean、Enumeration | 选择器，展示文字与保存值分离 |
| Color | 色板与原始值输入，可保留主题色、特殊色值和表达式 |

新组件填写注册注解并随库重新构建后，HIYDesignUI 自动读取这些字段，无需增加属性名映射代码。注册注解只控制属性展示，加载校验仍遵守原有类型、范围和绑定契约。

## 模块与组件注册

```cpp
XmlModuleRegistrationOwner module(
    XmlRegistry::instance().registerModule({
        .namespaceUri = "urn:example:controls",
        .name = "Example Controls",
        .version = "1",
        .preferredPrefix = "controls",
    }));

XmlRegistrationOwner badge(
    registerLeafWidget<Badge, BadgeProps>(
        module.token(), "Badge", badgeFields, XmlChildMode::None,
        validateBadgeProperty, setBadgeProperty));
```

`XmlModuleRegistrationOwner` 析构时注销模块及其全部组件。`XmlRegistrationOwner` 析构时只注销对应组件。所有组件 owner 应先于 module owner 析构。

同一 namespace 内不能重复注册 local name。不同 namespace 可以注册相同 local name。注册表深拷贝模块名称、local name、字段和属性元数据；回调代码及其 `userData` 必须保持有效，直到注册资源释放。

## XML 使用

```xml
<VBox xmlns="urn:hiyui:ui"
      xmlns:controls="urn:example:controls">
  <controls:Badge text="状态" fontSize="14"/>
</VBox>
```

prefix 可以在不同文档中改变，只要 URI 保持一致。未声明 prefix 或未注册 URI 会产生 `UnknownTag`。

## 子组件模式

| 注册工具 | 工厂约定 | 子组件模式 |
|---|---|---|
| `registerLeafWidget` | `init(parent)` | `None` 或 `WidgetChildren` |
| `registerContainerWidget` | `init(parent, props)` | `WidgetChildren` |
| `registerItemListWidget` | `init(parent)` 与 item collector | `ItemList` |
| `registerChildHostWidget` | `init(parent)` 与 child host | `WidgetChildren` |

ItemList 的 item 标签与所属组件使用同一 namespace。自定义 ItemList 的 item 属性由 `XmlAttributeSpec` 数组声明，不支持运行时 binding。

```cpp
const XmlAttributeSpec itemAttributes[] = {
    xmlStringAttribute("text", {.required = true}),
    xmlIntAttribute("data"),
};
```

内置 List 示例：

```xml
<List xmlns="urn:hiyui:ui">
  <Item text="苹果" data="1"/>
  <Item text="香蕉" data="2"/>
</List>
```

## 可绑定属性

可绑定性属于字段或附加属性的 `XmlAttributeSpec`，不存在独立属性名白名单。组件存在任一可绑定属性时，`propertyValidator` 与 `propertySetter` 必须同时提供。validator 只验证值；setter 应用已经通过验证的值。

`valueKind` 与 `valueReader` 必须成对提供，用于命令事件的当前值。未提供时，命令事件的 value 为 `None`。

## Registry Snapshot

`XmlRegistry::snapshot()` 返回深拷贝结果，包含 revision、通用属性、模块、组件、组件属性、item 属性、默认值、范围和枚举值。模块或组件注销后，已有 snapshot 保持不变；新 snapshot 反映新的 revision。

该 snapshot 是属性参考、专用 Schema 导出和离线校验工具的元数据入口。动态库发现和加载不属于 Hiy-UI 注册表职责。

## 相关页面

- [数据绑定与命令](/xml/data-binding)
- [Schema 与离线校验](/xml/schema-tools)
- [C 绑定与 XML 注册](/xml/c-binding)
- [XML 布局快速上手](/xml/quick-start)
