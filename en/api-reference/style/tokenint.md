---
title: "TokenInt"
---

# TokenInt <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/style/token.h>`

**Namespace:** `hiyui`

Integer token wrapper, int

Similar to TokenValue but for integer fields such as spacing, corner radius and font size. Supports implicit construction from int.



**See also:** `Token`


**See also:** `TokenValue`

## Public Members

### literal_

```cpp
int literal_
```

Literal integer value

### token_

```cpp
Token token_
```

Referenced token, _Count means no reference

### fallback_

```cpp
int fallback_
```

Fallback value when the token is unset

## Public Methods

### TokenInt

```cpp
constexpr TokenInt(int lit)
```

Implicitly constructs from a literal value

Integer literal value

### isRef

```cpp
bool isRef() const
```

Whether this is a token reference, not a literal value

### isNone

```cpp
bool isNone() const
```

Whether unset, neither reference nor literal value

### resolve

```cpp
int resolve(const struct Theme &theme) const
```

Resolves the final integer value

Token references are looked up in the Theme, otherwise the literal value is returned.


Resolved integer value

## Static Methods

### var

```cpp
static TokenInt var(Token t, int fb=HIYUI_NONE_INT)
```

Constructs a reference from a Token

Fallback value, used when the token in Theme is HIYUI_NONE_INT
