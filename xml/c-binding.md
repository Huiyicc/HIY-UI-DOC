---
title: C 绑定与 XML 注册
---

# C 绑定与 XML 注册

C XML ABI 的当前版本为 v1，版本常量是 `HIYUI_XML_ABI_VERSION`。不存在旧结构、旧签名或小结构兼容读取。所有带 `struct_size` 和 `abi_version` 的输入、输出结构都必须使用对应的 `HIYUI_XML_*_INIT` 宏初始化，且 `struct_size` 必须等于当前结构大小。

本页接口必须在 Hiy-UI UI 线程调用。回调代码必须保持可调用，直到对应注册资源释放。

## 模块注册

模块以 namespace URI 标识。

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

`preferred_prefix` 仅用于工具显示和导出，XML 解析按 namespace URI 查找模块。`hiyui_xml_unregister_module` 注销模块及其全部组件。

## 属性元数据

`hiyui_xml_attribute_spec_t` 描述属性名称、类型、必填状态、可绑定性、默认值、范围、枚举值、说明和显示名。属性及枚举项的 `display_name` 只用于展示，为 `NULL` 或空字符串时显示 `name`；注册时复制这些字符串。

注册带显示名和枚举标签的属性：

```c
static const hiyui_xml_enum_value_t size_values[] = {
    {"Small", 0, "小"},
    {"Medium", 1, "中"},
    {"Large", 2, "大"},
};

hiyui_xml_attribute_spec_t attributes[2] = {
    HIYUI_XML_ATTRIBUTE_SPEC_INIT,
    HIYUI_XML_ATTRIBUTE_SPEC_INIT,
};
attributes[0].name = "text";
attributes[0].required = 1;
attributes[0].bindable = 1;
attributes[0].display_name = "文本";
attributes[0].description = "组件显示的文字。";
attributes[1].name = "size";
attributes[1].display_name = "尺寸";
attributes[1].kind = HIYUI_XML_ATTRIBUTE_ENUMERATION;
attributes[1].enum_values = size_values;
attributes[1].enum_value_count = 3;
attributes[1].has_default = 1;
attributes[1].default_integer = 1;
```

| kind | 值语法 |
|---|---|
| `HIYUI_XML_ATTRIBUTE_STRING` | 任意字符串 |
| `HIYUI_XML_ATTRIBUTE_INTEGER` | 有符号整数与 `min_integer`/`max_integer` |
| `HIYUI_XML_ATTRIBUTE_UNSIGNED_INTEGER` | 无符号整数与 `max_unsigned_integer` |
| `HIYUI_XML_ATTRIBUTE_NUMBER` | 数值与 `min_number`/`max_number` |
| `HIYUI_XML_ATTRIBUTE_BOOLEAN` | `true`、`false`、`1`、`0`、`yes`、`no` |
| `HIYUI_XML_ATTRIBUTE_COLOR` | 固定颜色、颜色哨兵值或主题角色 |
| `HIYUI_XML_ATTRIBUTE_ENUMERATION` | `enum_values` 中声明的名称 |
| `HIYUI_XML_ATTRIBUTE_IDENTIFIER` | 非空标识符字符串 |
| `HIYUI_XML_ATTRIBUTE_COMMAND` | 非空命令名 |
| `HIYUI_XML_ATTRIBUTE_RESOURCE` | 非空资源名 |
| `HIYUI_XML_ATTRIBUTE_SOURCE` | 非空 source 字符串 |

## 组件注册

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

| 字段 | 说明 |
|---|---|
| `local_name` | 模块内的 XML local name，不包含 prefix |
| `factory` | 创建一个直接子组件的工厂回调 |
| `child_mode` | `None`、`Widgets`、`ItemList` 或 `ItemTree`；`Template` 是内置 `Repeater` 的内部模式 |
| `item_tag` | ItemList 或 ItemTree 的 item local name |
| `item_collector` | ItemList 收集回调 |
| `tree_item_collector` | ItemTree 递归收集回调 |
| `item_allows_children` | ItemList 的 item 是否允许包含组件子树 |
| `resource_only` | 是否为加载器内部处理的资源元素 |
| `attributes` | 组件属性元数据数组 |
| `item_attributes` | item 属性元数据数组 |
| `top_item_attributes` | ItemTree 顶层 item 属性元数据数组 |
| `property_validator` | 运行时 binding 验证回调 |
| `property_setter` | 运行时 binding 应用回调 |
| `value_kind` | 命令事件值类型 |
| `value_reader` | 命令事件值读取回调 |
| `user_data` | 回调用户数据 |
| `destroy_user_data` | 注册资源释放后的用户数据销毁回调 |

注册成功后，注册表接管 `user_data`；注销且所有加载引用释放后调用 `destroy_user_data`。注册失败时所有权仍归调用方。注销组件后，新加载不再解析该组件，已有自定义属性 binding 不再调用其 setter。

`ItemTree` 的 `tree_item_collector` 接收由 `hiyui_xml_tree_item_t` 组成的顶层数组，每个节点通过 `children` 和 `child_count` 提供递归子项。节点及属性指针只在 collector 回调期间有效。`top_item_attributes` 只约束顶层 item；该数组为空时，顶层 item 使用 `item_attributes`。

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

普通 ItemTree 必须同时提供 `factory` 和 `tree_item_collector`。`resource_only = 1` 只适用于 ItemTree，并且不能提供 `factory` 或 `tree_item_collector`。该模式没有 C 资源收集回调；需要由 C 模块接收递归数据时使用普通 ItemTree。

动态模块文件的发现、加载和卸载由上层桌面应用管理；Hiy-UI 只提供注册令牌和元数据生命周期。

## 工厂回调

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

工厂必须创建一个 `parent` 的直接子组件。`child_host` 为空时使用 `obj`；非空时必须是 `obj` 或其后代。通用 XML 属性由加载器在工厂返回后统一应用。

## Registry Snapshot

`hiyui_xml_registry_snapshot_create` 返回深拷贝 snapshot。读取顺序为 module、widget、attribute、enum value。

| 接口 | 读取内容 |
|---|---|
| `hiyui_xml_registry_snapshot_revision` | 注册表 revision |
| `hiyui_xml_registry_snapshot_get_module` | namespace 与模块显示信息 |
| `hiyui_xml_registry_snapshot_get_widget` | local name、子组件模式与属性数量 |
| `hiyui_xml_registry_snapshot_get_common_attribute` | 通用属性元数据 |
| `hiyui_xml_registry_snapshot_get_widget_attribute` | 组件、item 或顶层 item 属性元数据 |
| `hiyui_xml_registry_snapshot_get_widget_enum_value` | 属性枚举项 |

已有 snapshot 在模块或组件注销后保持有效，直到 `hiyui_xml_registry_snapshot_destroy`。

`hiyui_xml_attribute_metadata_t::display_name` 和 `hiyui_xml_enum_value_metadata_t::display_name` 返回借用字符串，未设置时为 `NULL`，有效期至 snapshot 销毁。更新库后，C 调用方须使用对应版本的头文件重新构建，使属性描述和元数据结构大小一致。

## 上下文与加载

| C 接口 | 用途 |
|---|---|
| `hiyui_xml_context_create` / `destroy` | 创建、销毁上下文句柄 |
| `hiyui_xml_context_register_command` | 注册命令 |
| `hiyui_xml_context_register_menu_resource` / `remove_menu_resource` | 注册、移除应用侧菜单资源 |
| `hiyui_xml_context_set_resource` / `set_style` / `set_binding` | 设置资源、样式和 binding |
| `hiyui_xml_context_update_binding` | 验证并更新 binding，返回结果句柄 |
| `hiyui_xml_context_last_binding_result` | 取得最近一次同步 binding 更新的结果副本 |
| `hiyui_xml_context_set_collection` | 替换具名 collection |
| `hiyui_xml_context_append_collection_item` / `hiyui_xml_context_insert_collection_item` | 追加或插入 collection 项 |
| `hiyui_xml_context_replace_collection_item` / `hiyui_xml_context_remove_collection_item` | 替换或删除 collection 项 |
| `hiyui_xml_context_clear_collection` | 清空具名 collection |
| `hiyui_xml_layout_from_file` / `from_string` / `from_memory` / `from_reader` | 加载普通布局 |
| `hiyui_xml_reload_host_create` / `reload_*` / `destroy` | 管理拥有型整树事务重载宿主 |
| `hiyui_xml_window_from_file` / `from_string` | 事务加载 Window |

binding 更新结果通过 `hiyui_xml_binding_result_status`、`hiyui_xml_binding_result_target_count`、`hiyui_xml_binding_result_updated_count` 和诊断读取接口访问。每个结果都是独立句柄，使用后调用 `hiyui_xml_binding_result_destroy`。

collection 项由具名字符串字段组成，字段名 `index` 保留给 Repeater。设置 collection 时，字段名称和值都会被深拷贝。

```c
hiyui_xml_collection_field_t fields[] = {
    {"id", "track-01"}, {"title", "Night Drive"}};
hiyui_xml_collection_item_t items[] = {{fields, 2}};
hiyui_xml_collection_result_t *result =
    hiyui_xml_context_set_collection(context, "playlist", items, 1);
hiyui_xml_collection_result_destroy(result);
```

collection 结果通过 `hiyui_xml_collection_result_status`、`hiyui_xml_collection_result_item_count`、`hiyui_xml_collection_result_updated_repeater_count` 和诊断读取接口访问。任一 Repeater 候选创建失败时，原 collection 和 UI 保持不变。每个结果使用后调用 `hiyui_xml_collection_result_destroy`。

应用侧注册菜单资源：

```c
static void on_undo(hiyui_widget_t *owner) {
    (void)owner;
    hiyui_confirm_dialog_ask("菜单命令", "撤销", NULL, NULL, NULL);
}

hiyui_context_menu_item_t items[] = {
    {.text = "撤销", .shortcut = "Ctrl+Z", .action = on_undo},
};
int registered = hiyui_xml_context_register_menu_resource(
    context, "editMenu", items, 1, HIYUI_POPUP_MODE_INLINE);
```

XML 通过组件或 `MenuBar` 顶层 `Item` 的 `contextMenu="editMenu"` 引用该资源。

菜单资源接口仅在 SDL3 启用时返回成功。注册调用复制名称、递归菜单结构、`text` 和 `shortcut`，同名注册替换原资源；`item_count` 可以为 0，非零时 `items` 不得为空。`icon_src` 指向的资源在菜单资源移除或 context 销毁前必须保持有效。`hiyui_xml_context_remove_menu_resource` 在资源存在并成功移除时返回非零。

从内存字符串加载普通布局：

```c
static const char xml[] =
    "<Label xmlns=\"urn:hiyui:ui\" text=\"状态\"/>";

hiyui_xml_load_options_t options = HIYUI_XML_LOAD_OPTIONS_INIT;
options.source_id = "memory:/status.xml";

hiyui_xml_layout_t *layout =
    hiyui_xml_layout_from_string(parent, xml, context, &options);
```

整树事务重载：

```c
hiyui_xml_reload_host_t *host = hiyui_xml_reload_host_create(parent, context);

if (!hiyui_xml_reload_host_reload_string(host, xml, &options)) {
    size_t diagnostic_count = hiyui_xml_reload_host_diagnostic_count(host);
}

hiyui_xml_reload_host_destroy(host);
```

reload 始终按严格模式加载。成功时替换当前根树，失败时保留当前根树。`hiyui_xml_reload_host_destroy` 销毁宿主及其当前根树。诊断和 source ID 字符串在下一次 reload、reset 或宿主销毁后失效；组件句柄在成功 reload、reset 或宿主销毁后失效。

resolver 的 `hiyui_xml_source_t` 输出由库使用 `HIYUI_XML_SOURCE_INIT` 初始化。resolver 返回的字符串只需在回调期间有效，加载调用返回前复制 source ID 和内容。

## 相关页面

- [自定义 XML 组件](/xml/custom-widget)
- [数据绑定与命令](/xml/data-binding)
- [Schema 与离线校验](/xml/schema-tools)
- [XML 布局快速上手](/xml/quick-start)
