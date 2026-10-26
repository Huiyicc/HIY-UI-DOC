---
title: "State"
---

# State <Badge type="info" text="类" />

**头文件：** `#include <hiyui/core/state.h>`

**命名空间：** `hiyui`

可订阅的响应式状态句柄

拷贝共享同一状态节点，移动后源句柄失效；State 之间的赋值不可用。 读取、写入、订阅和派发均在 UI 线程进行。



| 名称 | 说明 |
|---|---|
| `T` | int32_t、bool 或 std::string |

## 公开方法

### State

```cpp
State()
```

创建值为 T{} 的独立状态。

### State

```cpp
State(T initial)
```

创建独立状态；初始值经固定规则规范化，不派发变化。

### get

```cpp
T get() const
```

读取当前值。

| 名称 | 说明 |
|---|---|
| `` | 句柄已移动时 |

### set

```cpp
State & set(T value)
```

规范化并同步提交；失败抛出 StateError。

### operator=

```cpp
State & operator=(T value)
```

与 set 完全相同。

### trySet

```cpp
StateWriteResult trySet(T value)
```

规范化并提交，返回完整结果，不抛出写入错误。

### valid

```cpp
bool valid() const
```

句柄仍持有状态节点时返回 true；移动后的源句柄返回 false。

### watch

```cpp
StateSubscription< T > watch(F &&f)
```

订阅后续有效变化；建立时不调用回调。

| 参数 | 说明 |
|---|---|
| `f` | 签名为 void(const T&amp;, const T&amp;)，引用仅在回调期间有效 |


**返回值：** 作用域订阅，丢弃句柄即取消订阅

## 静态方法

### bounded

```cpp
static State bounded(int32_t initial, int32_t min, int32_t max)
```

创建固定闭区间的整数状态。

| 名称 | 说明 |
|---|---|
| `` | min 大于 max 时 |

### text

```cpp
static State text(std::string initial, TextRules rules)
```

创建固定文本规则的状态。

| 名称 | 说明 |
|---|---|
| `` | 初始值不是有效 UTF-8 或包含内嵌 NUL 时 |
