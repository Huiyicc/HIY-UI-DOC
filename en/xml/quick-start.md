---
title: XML Layout Quick Start
---

# XML Layout Quick Start

`XmlLayout` parses XML, builds the widget tree, and mounts the root widget to its parent in one synchronous call. All loading operations must be called on the Hiy-UI UI thread.

## Namespace

Built-in Hiy-UI widgets use the namespace URI `urn:hiyui:ui`. Documentation for built-in widgets usually declares this URI as the default namespace.

```xml
<VBox xmlns="urn:hiyui:ui" padding="16" gap="8">
  <Label text="{resource:title}"/>
  <Button text="Close" onClick="onClose"/>
</VBox>
```

An XML prefix acts as an alias for a URI within the current document only. Widget lookup uses the namespace URI and the local name; the prefix string is not used as module identity.

## Loading Entry Points

| Method | Input |
|---|---|
| `XmlLayout::fromFile` | File path; read through `sourceResolver` when it is set |
| `XmlLayout::fromString` | In-memory string |
| `XmlLayout::fromReader` | Synchronous read callback |

All three entry points accept a `Widget &` or `Ref<T>` parent. The corresponding C ABI entry points accept `hiyui_widget_t *` and enter the same native object loading path.

```cpp
XmlContext context;
context.setResource("title", "Settings");
context.registerCommand("onClose", onClose, userData);

XmlLayout layout = XmlLayout::fromFile(parent, "ui/panel.xml", context);
```

`XmlLayout` observes the mounted widget tree and does not own it. Destroying `XmlLayout` does not destroy widgets; after a widget is destroyed, lookup by ID returns an empty reference.

## Transactional Reload

`XmlReloadHost` keeps the mount parent fixed and owns the currently committed XML root tree. The file, string, and reader reload entry points all enforce strict mode.

```cpp
XmlReloadHost host(parent, context);
bool committed = host.reloadFromString(
    R"(<Label xmlns="urn:hiyui:ui" text="Preview"/>)");
```

On a successful load, the new root tree replaces the old root tree and keeps its sibling index. On a failed load, the candidate tree is destroyed and the current root tree stays unchanged. `diagnostics()`, `sourceId()`, and `dependencies()` describe the most recent load attempt; `layout()` and `get<T>()` query the currently committed layout. `reset()` destroys the current root tree and keeps the `XmlContext` passed at construction.

## ID and Types

```cpp
Ref<Label> title = layout.get<Label>("title");
lv_obj_t *raw = layout.getRaw("title");
```

`get<T>` returns an empty reference when the ID does not exist, the object is destroyed, or the registered type does not match. `getRaw` does not check the widget type.

## Diagnostics and Rollback

`diagnostics()` returns structured diagnostics; each item contains `source`, `line`, `column`, `code`, `element`, `attribute`, and `message`. `hasErrors()` indicates whether the result contains error-level diagnostics.

`XmlLoadOptions.strict` defaults to `true`. In strict mode, any error destroys the complete widget tree created in this load and clears its IDs; non-strict mode keeps partially created widgets. `XmlWindowLayout` always handles window content as a whole-tree transaction and returns no candidate window when a window property or its content has an error.

## Resource Limits

`XmlLoadOptions` controls error handling and resource limits; all three loading entry points accept it:

| Field | Type | Default | Description |
|---|---|---|---|
| `strict` | `bool` | `true` | Destroys the widget tree created in this load when the layout has an error |
| `maxDepth` | `size_t` | `64` | Maximum element nesting depth; the root element has depth 1 |
| `maxNodes` | `size_t` | `4096` | Maximum element count, including expanded Include content and item nodes |
| `maxBytes` | `size_t` | `4194304` | Maximum cumulative bytes of the root document and all Includes |
| `maxIncludeDepth` | `size_t` | `32` | Maximum Include nesting level |
| `sourceId` | `const char *` | `nullptr` | Canonical source ID for memory or reader root documents |
| `sourceResolver` | `XmlSourceResolver` | `{}` | Synchronous source resolver; the host file resolver is used when empty |

## Include

`Include` belongs to `urn:hiyui:ui` and its path attribute is named `src`.

```xml
<VBox xmlns="urn:hiyui:ui">
  <Include src="parts/actions.xml"/>
</VBox>
```

Each Include target is an independent XML document and does not inherit the referencing document's default namespace or prefixes. The target document must declare the namespaces it uses.

```xml
<HBox xmlns="urn:hiyui:ui" gap="8">
  <Button text="OK"/>
  <Button text="Cancel"/>
</HBox>
```

The root element of an Include target can also be a resource element. In this case `Include` must be a direct child of the widget, and the resource enters that widget's local resource scope.

```xml
<VBox xmlns="urn:hiyui:ui">
  <Include src="parts/strings.xml"/>
  <Label text="{resource:includedTitle}"/>
</VBox>
```

`parts/strings.xml`:

```xml
<String xmlns="urn:hiyui:ui" id="includedTitle" value="From Include"/>
```

An Include with a widget root element creates a child widget; an Include with a resource root element only declares resources. Resource elements cannot be used as non-direct descendants inside an ordinary widget subtree.

`sourceId()` returns the canonical source ID of the root document, and `dependencies()` returns the deduplicated Include source IDs. Circular references, Include depth, cumulative node, and cumulative byte limits are reported through structured diagnostics.

## Related Pages

- [Data Binding and Commands](/en/xml/data-binding)
- [Custom Widgets](/en/xml/custom-widget)
- [Schema and Offline Validation](/en/xml/schema-tools)
- [C Binding and XML Registration](/en/xml/c-binding)
