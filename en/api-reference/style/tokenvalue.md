---
title: "TokenValue"
---

# TokenValue <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/style/token.h>`

**Namespace:** `hiyui`

Color token wrapper, uint32_t

Style fields can store a literal color value or reference a token resolved from the Theme at run time. Supports implicit construction from uint32_t.



**See also:** `Token`


**See also:** `TokenInt`

## Public Members

### literal_

```cpp
uint32_t literal_
```

Literal color value

### token_

```cpp
Token token_
```

Referenced token, _Count means no reference

### fallback_

```cpp
uint32_t fallback_
```

Fallback when the token is unset

## Public Methods

### TokenValue

```cpp
constexpr TokenValue(uint32_t lit)
```

Implicit construction from a literal value

Color value in 0xRRGGBB format

### isRef

```cpp
bool isRef() const
```

Whether this is a token reference rather than a literal value

### isNone

```cpp
bool isNone() const
```

Whether unset, neither a reference nor a literal value

### resolve

```cpp
uint32_t resolve(const struct Theme &theme) const
```

Resolves the final color value

Looks up the Theme for token references, otherwise returns the literal value.


The resolved 0xRRGGBB color value

## Static Methods

### var

```cpp
static TokenValue var(Token t, uint32_t fb=HIYUI_NONE)
```

Constructs a token reference

Fallback value used when the token is HIYUI_NONE in the Theme
