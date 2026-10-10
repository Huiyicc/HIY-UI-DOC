---
title: Resources, Data Binding and Commands
---

# Resources, Data Binding and Commands

`XmlContext` stores the string resources, styles, bindings, collections, menu resources, and commands of one XML usage domain. Copying an `XmlContext` shares the underlying state; the same context remains usable after a layout reload.

## XML Resource Scope

`String`, `Style`, and, when SDL3 is enabled, `ContextMenu` are resource elements and create no UI objects. A resource element must be a direct child of a widget and must declare a non-empty `id`.

```xml
<VBox xmlns="urn:hiyui:ui" gap="8">
  <String id="title" value="Playlist"/>
  <Style id="section" bg="Surface" radius="8" padH="12" padV="8"
         shadowBlur="2" shadowColor="#000000" shadowOpacity="18"
         shadowBottom="true" shadowPlacement="Inset">
    <State name="Hovered" bg="SurfaceVariant"/>
  </Style>

  <Label text="{resource:title}"/>
  <HBox style="section">
    <Label text="Content"/>
  </HBox>
</VBox>
```

The direct resources of a widget apply to all of its non-resource child elements; declaration order does not affect references. An inner widget can declare a resource with the same name; an inner declaration overrides the outer declaration. When a name is not found in the XML scope, the lookup continues with the resources in `XmlContext`. Resource `id` values within the same scope stay unique across resource types.

The `value` of a `String` is the text referenced by `{resource:name}` expressions. The normal state of a `Style` uses element attributes; other states use `State` child elements.

| `Style` Attribute | Value |
|---|---|
| `bg`, `color`, `borderColor`, `shadowColor`, `gradientFrom`, `gradientTo`, `backdropTint` | Fixed color or theme role |
| `fontSize` | Integer greater than 0 |
| `radius`, `padH`, `padV`, `marginH`, `marginV`, `borderWidth`, `shadowBlur` | Integer greater than or equal to 0 |
| `shadowOffsetX`, `shadowOffsetY` | Integer |
| `lineHeight` | Number from `0.5` to `4` |
| `opacity`, `shadowOpacity`, `gradientFromOpacity`, `gradientToOpacity`, `gradientMainStop`, `gradientGradStop`, `backdropOpacity`, `backdropTintOpacity` | `0` to `255` |
| `backdropBlurRadius` | `0` to `254` |
| `shadowTop`, `shadowRight`, `shadowBottom`, `shadowLeft` | Boolean |
| `shadowPlacement` | `Outer` or `Inset` |
| `gradientDir` | `None`, `Vertical`, or `Horizontal` |
| `transition` | Milliseconds, greater than or equal to 0 |

When none of the four shadow edge attributes is declared, the shadow applies to all edges by default. After any one of them is declared, the four attributes jointly determine the active edges, and undeclared edges are treated as `false`.

`State.name` accepts `Hovered`, `Pressed`, `Focused`, `Checked`, or `Disabled`. The remaining style attributes are the same as `Style`, but `State` does not support `backdropTint`, `backdropOpacity`, `backdropTintOpacity`, and `backdropBlurRadius`. Colors that use theme roles are re-resolved on runtime theme changes.

C++ can also register global resources and styles on the context:

```cpp
context.setResource("title", "Settings");
context.setStyle("section", {
    .normal = {.radius = 8, .padH = 12, .padV = 8},
});
```

## Attribute Expressions

| Expression | Allowed Location | Result |
|---|---|---|
| `{resource:name}` | Ordinary widget attributes | The string in the current resource scope |
| `{binding:name}` | Attributes marked as bindable, and `commandParameter` | The runtime value in the context |
| `{i18n:id\|source}` | A complete bindable string attribute | The translation for the current language; resolved by the internationalization fallback rules when missing |
| `{collection:name}` | `Repeater.items` | The named collection |
| `{item:field}` | `ItemTemplate` widget tree | A field of the current collection item |
| `{item:index}` | `ItemTemplate` widget tree | The zero-based index of the current item |

resource, binding, and item expressions can be combined in string attributes:

```xml
<Label xmlns="urn:hiyui:ui"
       text="{resource:title} · {binding:count} items"/>
```

Non-string attributes accept only one complete expression. For example, `value="{binding:volume}"` is valid and `value="1{binding:volume}"` is invalid. Literal braces use &#123;&#123; and &#125;&#125;.

Resource and item expressions are evaluated when the widget is created. A binding expression keeps its subscription and re-evaluates the whole attribute when any referenced value changes. A missing resource produces the `UnknownResource` error; a missing binding produces the `UnknownBinding` warning, after which calling `setBinding` supplies a value to the existing subscription.

## Internationalization Expressions

`{i18n:id|source}` uses a non-empty message ID and source text. Register language packs before loading a layout; after `setLocale()` is called, bound attributes are updated, and subscriptions are removed when the widget is destroyed.

The following label, button, and input placeholder texts use internationalization expressions.

```xml
<VBox xmlns="urn:hiyui:ui">
  <Label text="{i18n:app.title|Settings}"/>
  <Button text="{i18n:app.save|Save}"/>
  <Input placeholder="{i18n:app.search|Search}"/>
</VBox>
```

The expression must occupy the entire bindable string attribute; it cannot be combined with literal text, other expressions, or nested braces, and named parameters and plurals are not supported. For texts that take parameters, set them through the C++ or C text binding APIs. An internationalization expression cannot be a `twoWay` target and cannot be used on resource attributes, which disallow binding.

Adding the XML files or their directories to `target_link_i18n(app SOURCES ...)`, or passing them to `scripts/i18n.py extract --sources`, extracts all texts before pages are created. For language pack format and embedded or external loading, see [Internationalization](/en/core/i18n).

## Runtime Binding

```cpp
context.setBinding("volume", "50");
context.setBinding("count", "3");
```

```xml
<VBox xmlns="urn:hiyui:ui">
  <Slider value="{binding:volume}"/>
  <Label text="Volume {binding:volume}, {binding:count} items"/>
</VBox>
```

When a widget is destroyed, its subscriptions are removed automatically. `XmlAttributeSpec.bindable` on a widget field or attached attribute decides whether binding is allowed. The common bindable attributes are `hidden`, `enabled`, `scrollable`, `opacity`, and `flex`.

`updateBinding` validates all valid targets first. If any target fails validation, the new value is not stored and no setter is called. After validation passes, targets are applied one by one; `targetCount` is the number of valid targets and `updatedCount` is the number applied successfully. `ApplyFailed` means a setter rejected a value that had already passed validation; targets that were already updated are not rolled back. `setBinding` returns whether this update succeeded, and `lastBindingUpdateResult` returns the full result of the most recent synchronous update.

When `setBinding` or `updateBinding` is called again while a binding update is in progress, requests are queued in call order. A `BindingError` is produced when the queue exceeds its internal limit.

## Two-Way Binding

The value of `twoWay` is the attribute name on the current widget to write back to. The target attribute must be a single complete binding expression, and the widget must register `valueKind` and `valueReader` for its current value.

```xml
<Slider xmlns="urn:hiyui:ui"
        value="{binding:volume}"
        twoWay="value"/>
```

When the widget raises a value-changed event, the current value is written back to `volume`, and other subscriptions of the same binding update accordingly. When any target rejects the new value, the context keeps the old value and the widget that triggered the update is restored to the context's current value; the failure is returned by `lastBindingUpdateResult()`.

`twoWay` specifies one attribute. Interpolated expressions, widgets without a value reader, and non-bindable attributes cannot be two-way targets.

## Collection and Repeater

Each collection item consists of named string fields. Field names cannot be empty or duplicated, and `index` is a reserved name.

```cpp
const XmlCollectionField first[] = {
    {"id", "track-01"}, {"title", "Night Drive"}};
const XmlCollectionField second[] = {
    {"id", "track-02"}, {"title", "After Rain"}};
const XmlCollectionItem songs[] = {
    {first, std::size(first)}, {second, std::size(second)}};

XmlCollectionUpdateResult result = context.setCollection("playlist", songs);
```

`Repeater` uses the layout attributes of VBox and requires one `items` attribute and one `ItemTemplate`. The template must contain a single widget root node.

```xml
<Repeater xmlns="urn:hiyui:ui"
          items="{collection:playlist}" gap="8" fill="width">
  <ItemTemplate>
    <Button text="{item:index}. {item:title}"
            commandParameter="{item:id}"
            onClick="openSong"/>
  </ItemTemplate>
</Repeater>
```

The template widget tree cannot declare `id` and cannot nest `Repeater`. A `Repeater` can declare direct resources before its `ItemTemplate`; these resources are visible to every template instance. When the collection is not yet registered, the Repeater is created with an empty collection and produces the `UnknownBinding` warning; setting a collection with the same name afterwards creates the corresponding items.

| Method | Result |
|---|---|
| `setCollection` | Replaces the complete collection |
| `appendCollectionItem` | Appends one item at the end |
| `insertCollectionItem` | Inserts one item at the given index |
| `replaceCollectionItem` | Replaces the item at the given index |
| `removeCollectionItem` | Removes the item at the given index |
| `clearCollection` | Clears the collection; creates an empty collection when it does not exist |

Each update first creates candidate content for every valid Repeater. If any candidate fails to be created, the original collection and all existing Repeaters stay unchanged. `XmlCollectionUpdateResult.itemCount` is the item count after success, and `updatedRepeaterCount` is the number of Repeaters committed in this update.

## Commands and Parameters

The `onClick`, `onPress`, `onLongPress`, and `onChange` attributes reference named commands.

```cpp
void openSong(const XmlCommandEvent &event, void *userData) {
  auto *state = static_cast<PlayerState *>(userData);
  if (event.value.kind == XmlValueKind::String)
    state->open(event.value.string);
}

XmlContextRegistration command =
    context.registerCommand("openSong", openSong, &state);
```

```xml
<Button xmlns="urn:hiyui:ui"
        text="Open"
        onClick="openSong"
        commandParameter="track-01"/>
```

When `commandParameter` is not set, the event value comes from the `valueReader` registered by the widget; when no reader is registered it is `None`. With a parameter set, the event value is `String`. The parameter allows string interpolation and resource, binding, and item expressions; binding reads the current value when the event fires.

An unregistered command produces the `UnknownHandler` warning and the command name is kept. Registering a command with the same name afterwards makes existing widgets respond to events. After a command is unregistered, later events from existing widgets no longer call it.

## Menu Resources

Menu XML is available only when `LV_USE_SDL3` is enabled. `ContextMenu` is a resource element and can be referenced by the `contextMenu` attribute of any widget or by a top-level `MenuBar` item.

```xml
<VBox xmlns="urn:hiyui:ui">
  <ContextMenu id="fileMenu" mode="Window">
    <Item text="Open" shortcut="Ctrl+O" onClick="onOpen"/>
    <Item separator="true"/>
    <Item text="Exit" disabled="true"/>
  </ContextMenu>

  <MenuBar>
    <Item text="File" contextMenu="fileMenu"/>
  </MenuBar>
  <Box contextMenu="fileMenu"/>
</VBox>
```

Menu items support `text`, `shortcut`, `iconCodepoint`, `separator`, `disabled`, `onClick`, and recursive `Item`. `ContextMenu.mode` accepts `Inline` or `Window`. Application-side menus can be registered through `registerMenuResource` and referenced with the same resource name.

## Whole-Tree Replacement

`XmlReloadHost` reuses the `XmlContext` passed at construction across loads. On a successful load it commits the candidate tree and destroys the old root tree; on a failed load it destroys the candidate tree and keeps the current tree.

```cpp
XmlReloadHost host(parent, context);
host.reloadFromFile("ui/panel.xml");

context.updateBinding("volume", "75");
host.reloadFromFile("ui/panel.xml");
```

Whole-tree replacement does not keep widget instance state. Resources, styles, bindings, collections, menu resources, and commands in the context remain valid after a successful replacement.

## Related Pages

- [XML Layout Quick Start](/en/xml/quick-start)
- [Custom XML Widgets](/en/xml/custom-widget)
- [Schema and Offline Validation](/en/xml/schema-tools)
- [C Binding and XML Registration](/en/xml/c-binding)
- [Internationalization](/en/core/i18n)
