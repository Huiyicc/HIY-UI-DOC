---
title: C Binding and XML Registration
---

# C Binding and XML Registration

The current version of the C XML ABI is v1, with the version constant `HIYUI_XML_ABI_VERSION`. There are no legacy structs, legacy signatures, or compatibility reads of smaller structs. Every input and output struct carrying `struct_size` and `abi_version` must be initialized with the corresponding `HIYUI_XML_*_INIT` macro, and its `struct_size` must equal the current struct size.

Interfaces on this page must be called on the Hiy-UI UI thread. Callback code must stay callable until the corresponding registration resources are released.

## Module Registration

A module is identified by a namespace URI.

```c
hiyui_xml_module_spec_t module = HIYUI_XML_MODULE_SPEC_INIT;
module.namespace_uri = "urn:example:controls";
module.name = "Example Controls";
module.version = "1";
module.preferred_prefix = "controls";

hiyui_xml_registration_t module_reg = hiyui_xml_register_module(&module);
if (module_reg.status != HIYUI_XML_REGISTRATION_SUCCESS)
  return 0;
```

`preferred_prefix` is used only for tool display and export; XML parsing looks up modules by namespace URI. `hiyui_xml_unregister_module` unregisters the module and all of its widgets.

## Attribute Metadata

`hiyui_xml_attribute_spec_t` describes the attribute name, type, required state, bindability, default value, range, enum values, description, and display name. The `display_name` fields of attributes and enum entries affect display only; `NULL` or an empty string uses `name`. These strings are copied during registration.

Register attributes with display names and enum labels:

```c
static const hiyui_xml_enum_value_t size_values[] = {
    {"Small", 0, "Small size"},
    {"Medium", 1, "Medium size"},
    {"Large", 2, "Large size"},
};

hiyui_xml_attribute_spec_t attributes[2] = {
    HIYUI_XML_ATTRIBUTE_SPEC_INIT,
    HIYUI_XML_ATTRIBUTE_SPEC_INIT,
};
attributes[0].name = "text";
attributes[0].required = 1;
attributes[0].bindable = 1;
attributes[0].display_name = "Text";
attributes[0].description = "Text displayed by the widget.";
attributes[1].name = "size";
attributes[1].display_name = "Size";
attributes[1].kind = HIYUI_XML_ATTRIBUTE_ENUMERATION;
attributes[1].enum_values = size_values;
attributes[1].enum_value_count = 3;
attributes[1].has_default = 1;
attributes[1].default_integer = 1;
```

| Kind | Value Syntax |
|---|---|
| `HIYUI_XML_ATTRIBUTE_STRING` | Any string |
| `HIYUI_XML_ATTRIBUTE_INTEGER` | Signed integer with `min_integer`/`max_integer` |
| `HIYUI_XML_ATTRIBUTE_UNSIGNED_INTEGER` | Unsigned integer with `max_unsigned_integer` |
| `HIYUI_XML_ATTRIBUTE_NUMBER` | Number with `min_number`/`max_number` |
| `HIYUI_XML_ATTRIBUTE_BOOLEAN` | `true`, `false`, `1`, `0`, `yes`, `no` |
| `HIYUI_XML_ATTRIBUTE_COLOR` | Fixed color, color sentinel value, or theme role |
| `HIYUI_XML_ATTRIBUTE_ENUMERATION` | Names declared in `enum_values` |
| `HIYUI_XML_ATTRIBUTE_IDENTIFIER` | Non-empty identifier string |
| `HIYUI_XML_ATTRIBUTE_COMMAND` | Non-empty command name |
| `HIYUI_XML_ATTRIBUTE_RESOURCE` | Non-empty resource name |
| `HIYUI_XML_ATTRIBUTE_SOURCE` | Non-empty source string |

## Widget Registration

```c
hiyui_xml_widget_spec_t spec = HIYUI_XML_WIDGET_SPEC_INIT;
spec.local_name = "Badge";
spec.factory = badge_factory;
spec.child_mode = HIYUI_XML_CHILD_NONE;
spec.attributes = attributes;
spec.attribute_count = 2;
spec.property_validator = badge_property_validator;
spec.property_setter = badge_property_setter;

hiyui_xml_registration_t widget_reg =
    hiyui_xml_register_widget(module_reg.token, &spec);
if (widget_reg.status != HIYUI_XML_REGISTRATION_SUCCESS) {
  hiyui_xml_unregister_module(module_reg.token);
  return 0;
}
```

| Field | Description |
|---|---|
| `local_name` | XML local name within the module, without the prefix |
| `factory` | Factory callback that creates one direct child widget |
| `child_mode` | `None`, `Widgets`, `ItemList`, or `ItemTree`; `Template` is the internal mode of the built-in `Repeater` |
| `item_tag` | Item local name for ItemList or ItemTree |
| `item_collector` | ItemList collection callback |
| `tree_item_collector` | ItemTree recursive collection callback |
| `item_allows_children` | Whether an ItemList item may contain a widget subtree |
| `resource_only` | Whether this is a resource element handled inside the loader |
| `attributes` | Widget attribute metadata array |
| `item_attributes` | Item attribute metadata array |
| `top_item_attributes` | ItemTree top-level item attribute metadata array |
| `property_validator` | Runtime binding validation callback |
| `property_setter` | Runtime binding apply callback |
| `value_kind` | Command event value type |
| `value_reader` | Command event value read callback |
| `user_data` | Callback user data |
| `destroy_user_data` | User data destroy callback invoked after registration resources are released |

After successful registration the registry takes ownership of `user_data`; `destroy_user_data` is called after unregistration once all load references are released. On failed registration ownership stays with the caller. After a widget is unregistered, new loads no longer parse it and existing custom attribute bindings no longer call its setter.

The `tree_item_collector` of an `ItemTree` receives a top-level array of `hiyui_xml_tree_item_t`, where each node provides recursive children through `children` and `child_count`. Node and attribute pointers are valid only during the collector callback. `top_item_attributes` constrains only top-level items; when that array is empty, top-level items use `item_attributes`.

```c
hiyui_xml_widget_spec_t tree = HIYUI_XML_WIDGET_SPEC_INIT;
tree.local_name = "TreeMenu";
tree.factory = tree_menu_factory;
tree.child_mode = HIYUI_XML_CHILD_ITEM_TREE;
tree.item_tag = "Item";
tree.tree_item_collector = collect_menu_tree;
tree.item_attributes = item_attributes;
tree.item_attribute_count = item_attribute_count;
tree.top_item_attributes = root_attributes;
tree.top_item_attribute_count = root_attribute_count;
```

An ordinary ItemTree must provide both `factory` and `tree_item_collector`. `resource_only = 1` applies only to ItemTree and must not provide `factory` or `tree_item_collector`. That mode has no C resource collection callback; use an ordinary ItemTree when a C module needs to receive recursive data.

Discovery, loading, and unloading of dynamic module files are managed by the hosting desktop application; Hiy-UI provides only registration tokens and the metadata lifetime.

## Factory Callback

```c
static hiyui_xml_widget_result_t badge_factory(
    hiyui_widget_t *parent, const hiyui_xml_attr_t *attrs, size_t attr_count,
    hiyui_xml_factory_context_t *context, void *user_data) {
  const char *text = hiyui_xml_attr_get(attrs, attr_count, "text");
  if (!text) {
    hiyui_xml_factory_context_error(context, HIYUI_XML_INVALID_ATTRIBUTE, "text",
                                 "text is required");
    return (hiyui_xml_widget_result_t){0};
  }
  hiyui_widget_t *label =
      hiyui_label_create(parent, &(hiyui_label_props_t){.text = text});
  return (hiyui_xml_widget_result_t){.obj = label};
}
```

The factory must create one direct child widget of `parent`. When `child_host` is empty, `obj` is used; when set, it must be `obj` or a descendant of it. Common XML attributes are applied by the loader after the factory returns.

## Registry Snapshot

`hiyui_xml_registry_snapshot_create` returns a deep-copied snapshot. The read order is module, widget, attribute, enum value.

| Interface | Reads |
|---|---|
| `hiyui_xml_registry_snapshot_revision` | Registry revision |
| `hiyui_xml_registry_snapshot_get_module` | Namespace and module display information |
| `hiyui_xml_registry_snapshot_get_widget` | Local name, child mode, and attribute count |
| `hiyui_xml_registry_snapshot_get_common_attribute` | Common attribute metadata |
| `hiyui_xml_registry_snapshot_get_widget_attribute` | Widget, item, or top-level item attribute metadata |
| `hiyui_xml_registry_snapshot_get_widget_enum_value` | Attribute enum entries |

An existing snapshot stays valid after modules or widgets are unregistered, until `hiyui_xml_registry_snapshot_destroy`.

`hiyui_xml_attribute_metadata_t::display_name` and `hiyui_xml_enum_value_metadata_t::display_name` return borrowed strings, or `NULL` when unset, valid until snapshot destruction. After updating the library, rebuild C callers with its matching headers so attribute description and metadata struct sizes agree.

## Context and Loading

| C Interface | Purpose |
|---|---|
| `hiyui_xml_context_create` / `destroy` | Creates and destroys a context handle |
| `hiyui_xml_context_register_command` | Registers a command |
| `hiyui_xml_context_register_menu_resource` / `remove_menu_resource` | Registers and removes application-side menu resources |
| `hiyui_xml_context_set_resource` / `set_style` / `set_binding` | Sets resources, styles, and bindings |
| `hiyui_xml_context_update_binding` | Validates and updates a binding, returning a result handle |
| `hiyui_xml_context_last_binding_result` | Returns a copy of the most recent synchronous binding update result |
| `hiyui_xml_context_set_collection` | Replaces a named collection |
| `hiyui_xml_context_append_collection_item` / `hiyui_xml_context_insert_collection_item` | Appends or inserts a collection item |
| `hiyui_xml_context_replace_collection_item` / `hiyui_xml_context_remove_collection_item` | Replaces or removes a collection item |
| `hiyui_xml_context_clear_collection` | Clears a named collection |
| `hiyui_xml_layout_from_file` / `from_string` / `from_memory` / `from_reader` | Loads ordinary layouts |
| `hiyui_xml_reload_host_create` / `reload_*` / `destroy` | Manages an owning whole-tree transactional reload host |
| `hiyui_xml_window_from_file` / `from_string` | Loads a Window transactionally |

Binding update results are accessed through `hiyui_xml_binding_result_status`, `hiyui_xml_binding_result_target_count`, `hiyui_xml_binding_result_updated_count`, and the diagnostic read interfaces. Each result is an independent handle; call `hiyui_xml_binding_result_destroy` after use.

A collection item consists of named string fields, and the field name `index` is reserved for Repeater. When a collection is set, field names and values are deep-copied.

```c
hiyui_xml_collection_field_t fields[] = {
    {"id", "track-01"}, {"title", "Night Drive"}};
hiyui_xml_collection_item_t items[] = {{fields, 2}};
hiyui_xml_collection_result_t *result =
    hiyui_xml_context_set_collection(context, "playlist", items, 1);
hiyui_xml_collection_result_destroy(result);
```

Collection results are accessed through `hiyui_xml_collection_result_status`, `hiyui_xml_collection_result_item_count`, `hiyui_xml_collection_result_updated_repeater_count`, and the diagnostic read interfaces. If any Repeater candidate fails to be created, the original collection and UI stay unchanged. Call `hiyui_xml_collection_result_destroy` after using each result.

Register an application-side menu resource:

```c
static void on_undo(hiyui_widget_t *owner) {
    (void)owner;
    hiyui_confirm_dialog_ask("Menu Command", "Undo", NULL, NULL, NULL);
}

hiyui_context_menu_item_t items[] = {
    {.text = "Undo", .shortcut = "Ctrl+Z", .action = on_undo},
};
int registered = hiyui_xml_context_register_menu_resource(
    context, "editMenu", items, 1, HIYUI_POPUP_MODE_INLINE);
```

XML references this resource through `contextMenu="editMenu"` on a widget or on a top-level `MenuBar` `Item`.

Menu resource interfaces return success only when SDL3 is enabled. The registration call copies the name, the recursive menu structure, `text`, and `shortcut`; a registration with the same name replaces the original resource. `item_count` may be 0; when non-zero, `items` must not be empty. The resource pointed to by `icon_src` must stay valid until the menu resource is removed or the context is destroyed. `hiyui_xml_context_remove_menu_resource` returns non-zero when the resource exists and is removed successfully.

Load an ordinary layout from an in-memory string:

```c
static const char xml[] =
    "<Label xmlns=\"urn:hiyui:ui\" text=\"Status\"/>";

hiyui_xml_load_options_t options = HIYUI_XML_LOAD_OPTIONS_INIT;
options.source_id = "memory:/status.xml";

hiyui_xml_layout_t *layout =
    hiyui_xml_layout_from_string(parent, xml, context, &options);
```

Whole-tree transactional reload:

```c
hiyui_xml_reload_host_t *host = hiyui_xml_reload_host_create(parent, context);

if (!hiyui_xml_reload_host_reload_string(host, xml, &options)) {
    size_t diagnostic_count = hiyui_xml_reload_host_diagnostic_count(host);
}

hiyui_xml_reload_host_destroy(host);
```

Reload always loads in strict mode. On success the current root tree is replaced; on failure the current root tree is kept. `hiyui_xml_reload_host_destroy` destroys the host and its current root tree. Diagnostic and source ID strings become invalid after the next reload, reset, or host destruction; widget handles become invalid after a successful reload, reset, or host destruction.

The `hiyui_xml_source_t` output of a resolver is initialized by the library with `HIYUI_XML_SOURCE_INIT`. Strings returned by a resolver only need to stay valid during the callback; the load call copies the source ID and content before returning.

## Related Pages

- [Custom XML Widgets](/en/xml/custom-widget)
- [Data Binding and Commands](/en/xml/data-binding)
- [Schema and Offline Validation](/en/xml/schema-tools)
- [XML Layout Quick Start](/en/xml/quick-start)
