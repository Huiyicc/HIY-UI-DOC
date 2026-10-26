---
title: "Label"
---

# Label <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/label.h>`

**命名空间：** `hiyui`

文本标签组件

支持运行时修改文本和多状态样式。



**参见：** `LabelProps`


**参见：** `Widget`

**继承自：** `hiyui::Chainable< Label >`

## 保护方法

### primaryTextObj

```cpp
virtual lv_obj_t * primaryTextObj() const override
```

返回组件的主文本对象，内层 label/textarea，供 selectableText 等文本能力使用

派生类按需 override 返回自己的主文本对象；基础文本节点默认返回自身。

## 公开方法

### Label

```cpp
Label(lv_obj_t *raw)
```

包装已有 LVGL 对象

### Label

```cpp
Label(LabelProps props={})
```

通过属性聚合构造

| 参数 | 说明 |
|---|---|
| `props` | text 在构造时复制，nullptr 保留默认文本。 |

### init

```cpp
Label & init(lv_obj_t *parent) &
```

在父对象上创建 LVGL label 对象

### init

```cpp
Label & init(Widget &parent) &
```

在父对象上创建 LVGL label 对象

### text

```cpp
Label & text(const std::string &t) &
```

运行时修改显示文本

### text

```cpp
Label & text(const char *t) &
```

运行时修改显示文本

| 参数 | 说明 |
|---|---|
| `t` | UTF-8 编码 |

### text

```cpp
Label & text(const LocalizedText &t) &
```

绑定随语言更新的文本，复制描述；普通 text 调用替换此绑定。

### bindText

```cpp
Label & bindText(State< std::string > state, BindingHandle *handle=nullptr) &
```

绑定状态文本，State 变化更新显示

替换本属性的静态文案与国际化绑定；解除后保留当前显示文本。 挂载前调用时保存配置，挂载完成时建立连接并应用当前值。



| 参数 | 说明 |
|---|---|
| `handle` | 可选出参，接收解绑句柄；挂载前传入时在挂载完成时指向连接 |

### bindText

```cpp
Label & bindText(State< T > state, F &&converter, BindingHandle *handle=nullptr) &
```

绑定状态与转换器

转换器接收状态值，返回 std::string 或 LocalizedText；返回 `LocalizedText` 时语言变化重新翻译且不触发业务订阅。转换器内不得写入任何 State。

### clearTextBinding

```cpp
Label & clearTextBinding() &
```

解除文本绑定（含数据绑定与国际化绑定），保留当前显示文本；重复调用无操作。
