---
title: Schema 与离线校验
---

# Schema 与离线校验

`XmlSchema` 是 Registry 元数据与 XML 文档级规则的可序列化快照，用于属性参考、编辑器提示和不创建 UI 对象的离线校验。

## 格式对照

| 格式 | 内容 | 用途 |
|---|---|---|
| Registry snapshot | 当前进程中已注册模块和组件的深拷贝元数据 | 生成 Schema，检测注册表 revision |
| 专用 Schema XML | 文档规则、模块、组件、属性、默认值、范围和枚举值 | 持久化与工具间交换 |
| XSD | 一个 namespace 的元素和属性投影 | XML 编辑器补全与基础检查 |
| Markdown 参考 | 按模块和组件组织的属性表 | 离线查阅 |

专用 Schema XML 使用 namespace URI `urn:hiyui:xml-schema`，是完整元数据的保存格式。XSD 每次只导出一个 namespace，不替代专用 Schema XML。

## 构建工具

启用 XML 布局和 XML 工具目标：

```sh
cmake -S . -B build -DHIYUI_ENABLE_XML_LAYOUT=ON -DHIYUI_BUILD_XML_TOOLS=ON
cmake --build build --target hiyui_xml_tool
```

`HIYUI_BUILD_XML_TOOLS=ON` 要求同时设置 `HIYUI_ENABLE_XML_LAYOUT=ON`。生成的可执行文件名为 `hiyui-xml`，并静态链接 Hiy-UI。

## 命令

| 命令 | 结果 |
|---|---|
| `hiyui-xml schema <output\|->` | 从内置组件 Registry 生成专用 Schema XML |
| `hiyui-xml merge <output\|-> <schema>...` | 合并一个或多个专用 Schema XML |
| `hiyui-xml xsd <schema> <namespace-uri> <output\|->` | 从专用 Schema XML 投影指定 namespace 的 XSD |
| `hiyui-xml reference <schema> <output\|->` | 从专用 Schema XML 生成 Markdown 属性参考 |
| `hiyui-xml validate <schema> <xml>` | 使用专用 Schema XML 校验布局或 Window XML |

`schema`、`merge`、`xsd` 和 `reference` 的输出路径为 `-` 时写入标准输出。诊断写入标准错误，包含 source、行列、诊断代码、元素和属性信息。

| 退出码 | 含义 |
|---|---|
| `0` | 命令完成，校验结果有效 |
| `1` | Schema 读取、生成或 XML 校验失败 |
| `2` | 参数形式错误或无法写入输出 |

生成内置组件 Schema：

```sh
hiyui-xml schema hiyui.schema.xml
```

合并内置组件与扩展组件 Schema：

```sh
hiyui-xml merge designer.schema.xml hiyui.schema.xml extension.schema.xml
```

参与合并的 Schema 必须具有相同的文档级规则和通用属性。相同 namespace 的模块内容完全一致时只保留一份；内容不一致时命令返回退出码 `1`，并报告冲突 namespace。多个输入生成的 Schema 将 `registryRevision` 设置为 `0`，表示结果不对应单一 Registry snapshot。

为内置组件 namespace 生成 XSD：

```sh
hiyui-xml xsd hiyui.schema.xml urn:hiyui:ui hiyui-ui.xsd
```

校验布局文件：

```sh
hiyui-xml validate hiyui.schema.xml ui/main.xml
```

## 库 API

从当前 Registry 生成 Schema 并校验文件：

```cpp
XmlSchema schema =
    xmlSchemaFromRegistry(XmlRegistry::instance().snapshot());
XmlSchemaTextResult text = xmlSchemaToXml(schema);
XmlValidationResult result = xmlValidateFile("ui/main.xml", schema);
```

合并多个已解析 Schema：

```cpp
const std::array<XmlSchema, 2> inputs = {builtinSchema, extensionSchema};
XmlSchemaMergeResult merged = xmlMergeSchemas(inputs);
```

`xmlSchemaFromXml` 读取专用 Schema XML。`xmlMergeSchemas` 执行与 `merge` 命令相同的严格合并。`xmlSchemaToXsd` 和 `xmlSchemaToMarkdown` 分别生成 XSD 投影和 Markdown 参考。返回结果包含结构化诊断；存在错误级诊断时 `valid()` 返回 `false`。

`registryRevision` 记录生成 Schema 时的 Registry revision。模块或组件注册状态变化后，新 snapshot 和新 Schema 反映新的 revision；已有 snapshot 与 Schema 保持不变。

## 校验范围

离线校验覆盖 XML 语法、namespace、元素、属性类型、必填属性、binding 适用性、子元素模式、资源元素、ItemList、ItemTree、Repeater、Window、Include 和加载资源限制。

资源校验包含直接子元素位置、必填 `id`、同一作用域中的重复 `id`、Style 状态和 Include 资源根元素。Repeater 校验包含唯一 `ItemTemplate`、唯一组件根、`items` collection 表达式、item 表达式位置、模板 `id` 限制和嵌套 Repeater 限制。表达式校验还覆盖字符串插值、标量属性的完整表达式要求及 `twoWay` 目标契约。

校验器不创建 LVGL 对象，也不读取 `XmlContext` 中的命令、资源、样式、binding 和 collection 当前值。resource、binding 和 collection 名称是否存在由运行时 context 决定；离线校验只检查表达式语法和允许位置。

XSD 投影包含资源子元素和 Template 子元素结构。namespace 间引用、运行时 context 和完整文档语义仍由 `hiyui-xml validate` 或 `xmlValidate` 检查。

`XmlLoadOptions` 的 source resolver 和资源限制同样适用于 `xmlValidate` 与 `xmlValidateFile`。校验结果的 `dependencies` 返回去重后的 Include source ID，可供上层文件监听器建立依赖关系。

## 设计器集成

`hiyui-xml schema` 只注册 Hiy-UI 内置组件。设计器可以单独保存该 Schema，并将每个扩展导出的 Schema 作为独立输入交给 `merge`。设计器的组件面板读取合并结果中的 module、namespace、preferred prefix、widget 和 attribute 元数据，不需要链接扩展组件类型。

需要在设计器进程中加载的自定义模块通过公开注册 API 完成注册，再通过 `XmlRegistry::snapshot()` 和 `xmlSchemaFromRegistry` 生成 Schema。注册或注销模块后重新取得 snapshot；已有 snapshot 和 Schema 保持不变，可继续用于当前文档或失败回滚。

动态模块文件的发现、加载和卸载由桌面设计器管理。Hiy-UI Registry 负责 namespace、注册令牌、深拷贝元数据和 revision；库不加载动态库，也不监听文件变化。

`XmlReloadHost` 负责候选树加载、成功提交、失败回滚和旧树销毁。文件监听由设计器管理；监听器在根文档或 Include 依赖变化后调用 reload。`sourceId()` 与 `dependencies()` 提供最近一次加载尝试的根文档和 Include source ID。

## 相关页面

- [XML 布局快速上手](/xml/quick-start)
- [自定义 XML 组件](/xml/custom-widget)
- [C 绑定与 XML 注册](/xml/c-binding)
