---
title: "PropertyItem"
---

# PropertyItem <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/property_value.h>`

**命名空间：** `hiyui`

拥有型属性描述，传入设计器时复制或移动，id 必须非零且全树唯一。 Tuple 的 children 必须为非空的标量叶属性序列；不支持嵌套 Tuple 或空元组值。 Tuple 未提供 value 时从 children 汇总；提供时覆盖各子项值。默认值同理，汇总要求每项均有默认值。 Mixed 元组仍须提供符合各子项约束的代表值。 Tuple 子项共用整组草稿、等待和冲突状态；修改子项结构须 update 父 Tuple。

## 公开成员

### editor

```cpp
std::string editor
```

非空时使用对应注册工厂；未注册时不能编辑。

### userData

```cpp
void * userData
```

借用数据，须存活至属性移除且相关回调结束。

### mixed

```cpp
bool mixed
```

多对象值不一致；未修改的草稿不会提交。

### modified

```cpp
bool modified
```

未设置默认值时由调用方或成功提交标记。

### localizedName

```cpp
std::optional< LocalizedText > localizedName
```

设置后覆盖 name，用于显示、筛选和排序。

### localizedDescription

```cpp
std::optional< LocalizedText > localizedDescription
```

设置后覆盖 description，用于说明和筛选。
