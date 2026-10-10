---
title: Schema and Offline Validation
---

# Schema and Offline Validation

`XmlSchema` is a serializable snapshot of Registry metadata and XML document-level rules, used for attribute references, editor hints, and offline validation that creates no UI objects.

## Format Comparison

| Format | Content | Purpose |
|---|---|---|
| Registry snapshot | Deep-copied metadata of the modules and widgets registered in the current process | Generating Schemas, detecting the registry revision |
| Dedicated Schema XML | Document rules, modules, widgets, attributes, default values, ranges, and enum values | Persistence and interchange between tools |
| XSD | Projection of the elements and attributes of one namespace | XML editor completion and basic checks |
| Markdown reference | Attribute tables organized by module and widget | Offline lookup |

The dedicated Schema XML uses the namespace URI `urn:hiyui:xml-schema` and is the storage format for the complete metadata. An XSD exports one namespace at a time and does not replace the dedicated Schema XML.

## Build Tools

Enable the XML layout and XML tools targets:

```sh
cmake -S . -B build -DHIYUI_ENABLE_XML_LAYOUT=ON -DHIYUI_BUILD_XML_TOOLS=ON
cmake --build build --target hiyui_xml_tool
```

`HIYUI_BUILD_XML_TOOLS=ON` requires `HIYUI_ENABLE_XML_LAYOUT=ON` to be set as well. The produced executable is named `hiyui-xml` and links Hiy-UI statically.

## Commands

| Command | Result |
|---|---|
| `hiyui-xml schema <output\|->` | Generates the dedicated Schema XML from the built-in widget Registry |
| `hiyui-xml merge <output\|-> <schema>...` | Merges one or more dedicated Schema XML files |
| `hiyui-xml xsd <schema> <namespace-uri> <output\|->` | Projects the XSD of the given namespace from a dedicated Schema XML |
| `hiyui-xml reference <schema> <output\|->` | Generates the Markdown attribute reference from a dedicated Schema XML |
| `hiyui-xml validate <schema> <xml>` | Validates layout or Window XML against a dedicated Schema XML |

When the output path of `schema`, `merge`, `xsd`, or `reference` is `-`, output is written to standard output. Diagnostics are written to standard error and contain the source, line and column, diagnostic code, element, and attribute information.

| Exit Code | Meaning |
|---|---|
| `0` | Command completed; the validation result is valid |
| `1` | Schema reading or generation failed, or XML validation failed |
| `2` | Malformed arguments, or the output could not be written |

Generate the built-in widget Schema:

```sh
hiyui-xml schema hiyui.schema.xml
```

Merge the built-in widget and extension widget Schemas:

```sh
hiyui-xml merge designer.schema.xml hiyui.schema.xml extension.schema.xml
```

Schemas taking part in a merge must have the same document-level rules and common attributes. Module content for the same namespace is kept once only when it is fully identical; on differing content the command returns exit code `1` and reports the conflicting namespaces. A Schema generated from multiple inputs sets `registryRevision` to `0`, meaning the result does not correspond to a single Registry snapshot.

Generate the XSD for the built-in widget namespace:

```sh
hiyui-xml xsd hiyui.schema.xml urn:hiyui:ui hiyui-ui.xsd
```

Validate a layout file:

```sh
hiyui-xml validate hiyui.schema.xml ui/main.xml
```

## Library API

Generate a Schema from the current Registry and validate a file:

```cpp
XmlSchema schema =
    xmlSchemaFromRegistry(XmlRegistry::instance().snapshot());
XmlSchemaTextResult text = xmlSchemaToXml(schema);
XmlValidationResult result = xmlValidateFile("ui/main.xml", schema);
```

Merge multiple parsed Schemas:

```cpp
const std::array<XmlSchema, 2> inputs = {builtinSchema, extensionSchema};
XmlSchemaMergeResult merged = xmlMergeSchemas(inputs);
```

`xmlSchemaFromXml` reads a dedicated Schema XML. `xmlMergeSchemas` performs the same strict merge as the `merge` command. `xmlSchemaToXsd` and `xmlSchemaToMarkdown` generate the XSD projection and the Markdown reference respectively. Returned results contain structured diagnostics; `valid()` returns `false` when error-level diagnostics exist.

`registryRevision` records the Registry revision at Schema generation time. After module or widget registration state changes, new snapshots and new Schemas reflect the new revision; existing snapshots and Schemas stay unchanged.

## Validation Coverage

Offline validation covers XML syntax, namespaces, elements, attribute types, required attributes, binding applicability, child modes, resource elements, ItemList, ItemTree, Repeater, Window, Include, and loading resource limits.

Resource validation covers direct child position, required `id`, duplicate `id` within one scope, Style states, and Include resource root elements. Repeater validation covers a unique `ItemTemplate`, a unique widget root, the `items` collection expression, item expression positions, template `id` restrictions, and nested Repeater restrictions. Expression validation also covers string interpolation, the complete-expression requirement of scalar attributes, and the `twoWay` target contract.

The validator creates no LVGL objects and does not read the current commands, resources, styles, bindings, or collections in `XmlContext`. Whether resource, binding, and collection names exist is decided by the runtime context; offline validation checks only expression syntax and allowed positions.

The XSD projection includes resource child elements and Template child element structure. Cross-namespace references, the runtime context, and full document semantics are still checked by `hiyui-xml validate` or `xmlValidate`.

The source resolver and resource limits of `XmlLoadOptions` apply to `xmlValidate` and `xmlValidateFile` as well. The `dependencies` of a validation result returns the deduplicated Include source IDs, which a host file watcher can use to build dependency relations.

## Designer Integration

`hiyui-xml schema` registers only the Hiy-UI built-in widgets. A designer can save this Schema separately and pass each extension's exported Schema to `merge` as an independent input. The designer's widget palette reads module, namespace, preferred prefix, widget, and attribute metadata from the merge result and does not need to link extension widget types.

Custom modules that must load inside the designer process register through the public registration APIs, then generate a Schema through `XmlRegistry::snapshot()` and `xmlSchemaFromRegistry`. After a module is registered or unregistered, take a new snapshot; existing snapshots and Schemas stay unchanged and remain usable for the current document or for rollback on failure.

Discovery, loading, and unloading of dynamic module files are managed by the desktop designer. The Hiy-UI Registry owns namespaces, registration tokens, deep-copied metadata, and revisions; the library loads no dynamic libraries and watches no files.

`XmlReloadHost` handles candidate tree loading, commit on success, rollback on failure, and old tree destruction. File watching is managed by the designer; the watcher calls reload after the root document or an Include dependency changes. `sourceId()` and `dependencies()` provide the root document and Include source IDs of the most recent load attempt.

## Related Pages

- [XML Layout Quick Start](/en/xml/quick-start)
- [Custom XML Widgets](/en/xml/custom-widget)
- [C Binding and XML Registration](/en/xml/c-binding)
