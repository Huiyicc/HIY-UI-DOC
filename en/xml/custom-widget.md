---
title: Custom XML Widgets
---

# Custom XML Widgets

A custom XML widget is registered by a module together with a widget description. A module is identified by a namespace URI, and a widget by its local name within the module. Registration, unregistration, and snapshot queries must be called on the Hiy-UI UI thread.

Field helpers are declared in `xml_attr.h`, module and widget registration in `xml_registry.h`, and the `register*Widget` helper templates in `xml_factory.h`.

## Props and Fields

Props stay pure POD, and all fields have default values.

```cpp
struct BadgeProps {
  const char *text = nullptr;
  uint32_t bg = HIYUI_DEFAULT;
  int fontSize = 14;
};
```

Field helpers extract default values from `Props{}` and generate type, range, and bindability metadata.

| Field Helper | Props Member Type |
|---|---|
| `xmlIntField` | Signed integer |
| `xmlUIntField` | Unsigned integer |
| `xmlBoolField` | `bool` |
| `xmlFloatField` | Floating-point number |
| `xmlStringField` | `const char *` |
| `xmlPointerStringField` | `const void *` |
| `xmlColorField` | `uint32_t` |
| `xmlEnumField` | Enumeration |

```cpp
const XmlField badgeFields[] = {
    xmlStringField<BadgeProps, &BadgeProps::text>(
        "text", {.bindable = true}),
    xmlColorField<BadgeProps, &BadgeProps::bg>("bg"),
    xmlIntField<BadgeProps, &BadgeProps::fontSize>("fontSize", 0, 72),
};
```

`XmlAttributeOptions` can set `required`, `bindable`, and `description`. Enum fields use an explicit `XmlEnumValue` table, and the Registry snapshot keeps the enum names and values.

## Module and Widget Registration

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

`XmlModuleRegistrationOwner` unregisters the module and all of its widgets on destruction. `XmlRegistrationOwner` unregisters only its own widget on destruction. All widget owners must be destroyed before the module owner.

A local name cannot be registered twice within one namespace. Different namespaces can register the same local name. The registry deep-copies module names, local names, fields, and attribute metadata; callback code and its `userData` must stay valid until the registration resources are released.

## XML Usage

```xml
<VBox xmlns="urn:hiyui:ui"
      xmlns:controls="urn:example:controls">
  <controls:Badge text="Status" fontSize="14"/>
</VBox>
```

A prefix can change between documents as long as the URI stays the same. An undeclared prefix or an unregistered URI produces `UnknownTag`.

## Child Modes

| Registration Helper | Factory Contract | Child Mode |
|---|---|---|
| `registerLeafWidget` | `init(parent)` | `None` or `WidgetChildren` |
| `registerContainerWidget` | `init(parent, props)` | `WidgetChildren` |
| `registerItemListWidget` | `init(parent)` with an item collector | `ItemList` |
| `registerChildHostWidget` | `init(parent)` with a child host | `WidgetChildren` |

The item tag of an ItemList uses the same namespace as its widget. The item attributes of a custom ItemList are declared by an `XmlAttributeSpec` array and do not support runtime binding.

```cpp
const XmlAttributeSpec itemAttributes[] = {
    xmlStringAttribute("text", {.required = true}),
    xmlIntAttribute("data"),
};
```

Built-in `List` example:

```xml
<List xmlns="urn:hiyui:ui">
  <Item text="Apple" data="1"/>
  <Item text="Banana" data="2"/>
</List>
```

## Bindable Attributes

Bindability belongs to the `XmlAttributeSpec` of a field or attached attribute; there is no separate whitelist of attribute names. When a widget has any bindable attribute, `propertyValidator` and `propertySetter` must be provided together. The validator only validates values; the setter applies values that have already passed validation.

`valueKind` and `valueReader` must be provided as a pair and supply the current value for command events. When they are not provided, the command event value is `None`.

## Registry Snapshot

`XmlRegistry::snapshot()` returns a deep copy containing the revision, common attributes, modules, widgets, widget attributes, item attributes, default values, ranges, and enum values. After a module or widget is unregistered, existing snapshots stay unchanged; new snapshots reflect the new revision.

This snapshot is the metadata entry point for attribute references, dedicated Schema export, and offline validation tools. Discovering and loading dynamic libraries is not a Hiy-UI registry responsibility.

## Related Pages

- [Data Binding and Commands](/en/xml/data-binding)
- [Schema and Offline Validation](/en/xml/schema-tools)
- [C Binding and XML Registration](/en/xml/c-binding)
- [XML Layout Quick Start](/en/xml/quick-start)
