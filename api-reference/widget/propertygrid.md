---
title: "PropertyGrid"
---

# PropertyGrid <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/property_grid.h>`

**命名空间：** `hiyui`

支持自定义编辑器及同步、异步确认的属性设计器。 所有操作在 UI 线程进行，程序更新默认不通知；链式配置和事件可在挂载前设置。 数据查询和编辑操作要求挂载，失效时返回空值、false 或无效会话。

**继承自：** `hiyui::Chainable< PropertyGrid >`

## 公开方法

### properties

```cpp
PropertyGrid & properties(std::vector< PropertyItem > items) &
```

原子替换属性树并取消旧草稿与请求；无效描述保留原树，错误见 lastError。

### insert

```cpp
bool insert(PropertyItem item, PropertyId parent=HIYUI_NO_PROPERTY)
```

追加属性子树，parent 为 HIYUI_NO_PROPERTY 时追加根节点；失败不修改数据。

### update

```cpp
bool update(PropertyItem item)
```

替换已有属性描述及子树并取消该子树的草稿和请求；失败不修改数据。

### remove

```cpp
bool remove(PropertyId id)
```

移除子树；无此属性返回 false。

### property

```cpp
std::optional< PropertyItem > property(PropertyId id) const
```

返回包含子属性的描述副本；无此属性返回空值。

### value

```cpp
bool value(PropertyId id, PropertyValue value, Notify notify=Notify::No)
```

更新正式值并使旧应答失效；有未提交输入时保留草稿并标记冲突。

### value

```cpp
std::optional< PropertyValue > value(PropertyId id) const
```

无此属性返回空值，属性自身的空值包含在 optional 内。

### lastError

```cpp
std::string lastError() const
```

返回最近一次结构或程序赋值失败的原因，成功操作清除错误。

### status

```cpp
PropertyStatus status(PropertyId id) const
```

无此属性返回 Idle。

### filter

```cpp
PropertyGrid & filter(std::string text) &
```

按名称和说明筛选；ASCII 不区分大小写，保留匹配祖先及未提交草稿。

### select

```cpp
bool select(PropertyId id, Notify notify=Notify::No)
```

选中可见属性，HIYUI_NO_PROPERTY 清除选择；未通过当前编辑提交时返回 false。

### edit

```cpp
bool edit(PropertyId id)
```

开始编辑；不可编辑或当前草稿未通过提交时返回 false。 未注册专用编辑器的 Tuple 展开并编辑首个可编辑子项。

### reset

```cpp
bool reset(PropertyId id)
```

默认值通过相同校验和应答流程提交，无默认值时返回 false。

### cancelRequest

```cpp
bool cancelRequest(PropertyId id)
```

取消此属性的等待请求并保留候选草稿，不撤销调用方已执行的外部操作。

### registerEditor

```cpp
PropertyGrid & registerEditor(std::string key, PropertyEditorFactory factory, PropertyFormatter formatter={}) &
```

注册或替换实例内编辑器；空工厂注销，并使该编辑器会话失效。

### commitHandler

```cpp
PropertyGrid & commitHandler(PropertyCommitHandler handler) &
```

替换唯一提交处理器并取消等待请求；空处理器恢复本地校验后直接提交。

### onChange

```cpp
PropertyGrid & onChange(F &&fn, EventHandle *handle=nullptr) &
```

追加正式值变更订阅；未改变的非 Mixed 值不重复通知。

### onSelect

```cpp
PropertyGrid & onSelect(F &&fn, EventHandle *handle=nullptr) &
```

追加选择订阅，清除选择时收到 HIYUI_NO_PROPERTY。

### onStateChange

```cpp
PropertyGrid & onStateChange(F &&fn, EventHandle *handle=nullptr) &
```

追加编辑状态订阅，收到发生变化的属性 ID。 Tuple 及其子项的共享状态使用父 Tuple 的 ID 通知。
