---
title: "TokenValue"
---

# TokenValue <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/style/token.h>`

**命名空间：** `hiyui`

颜色型 `Token` 包装器，uint32_t

样式字段可以存储字面颜色值，也可以引用 Token，在运行时从 `Theme` 中解析。 支持隐式从 uint32_t 构造。



**参见：** `Token`


**参见：** `TokenInt`

## 公开成员

### literal_

```cpp
uint32_t literal_
```

字面颜色值

### token_

```cpp
Token token_
```

引用的 Token，_Count 表示未引用

### fallback_

```cpp
uint32_t fallback_
```

`Token` 未设置时的回退值

## 公开方法

### TokenValue

```cpp
constexpr TokenValue(uint32_t lit)
```

从字面值隐式构造

| 参数 | 说明 |
|---|---|
| `lit` | 0xRRGGBB 格式颜色值 |

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
uint32_t resolve(const struct Theme &theme) const
```

解析最终颜色值

如果是 `Token` 引用，从 `Theme` 中查找；否则返回字面值。



**返回值：** 解析后的 0xRRGGBB 颜色值

## 静态方法

### var

```cpp
static TokenValue var(Token t, uint32_t fb=HIYUI_NONE)
```

从 `Token` 构造引用

| 参数 | 说明 |
|---|---|
| `fb` | fallback 值，当 `Theme` 中该 `Token` 为 HIYUI_NONE 时使用 |
