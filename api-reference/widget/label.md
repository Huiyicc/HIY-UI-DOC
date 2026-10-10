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
