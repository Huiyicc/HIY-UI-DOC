---
title: "TokenInt"
---

# TokenInt <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/style/token.h>`

**命名空间：** `hiyui`

整型 `Token` 包装器，int

与 `TokenValue` 类似，但用于间距、圆角、字体大小等整型字段。 支持隐式从 int 构造。



**参见：** `Token`


**参见：** `TokenValue`

## 公开成员

### literal_

```cpp
int literal_
```

字面整型值

### token_

```cpp
Token token_
```

引用的 Token，_Count 表示未引用

### fallback_

```cpp
int fallback_
```

`Token` 未设置时的回退值

## 公开方法

### TokenInt

```cpp
constexpr TokenInt(int lit)
```

从字面值隐式构造

| 参数 | 说明 |
|---|---|
| `lit` | 整型字面值 |

### isRef

```cpp
bool isRef() const
```

是否为 `Token` 引用，非字面值

### isNone

```cpp
bool isNone() const
```

是否未设置，既无引用也无字面值

### resolve

```cpp
int resolve(const struct Theme &theme) const
```

解析最终整型值

如果是 `Token` 引用，从 `Theme` 中查找；否则返回字面值。



**返回值：** 解析后的整型值

## 静态方法

### var

```cpp
static TokenInt var(Token t, int fb=HIYUI_NONE_INT)
```

从 `Token` 构造引用

| 参数 | 说明 |
|---|---|
| `fb` | fallback 值，当 `Theme` 中该 `Token` 为 HIYUI_NONE_INT 时使用 |
