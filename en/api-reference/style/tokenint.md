---
title: "TokenInt"
---

# TokenInt <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/style/token.h>`

**Namespace:** `hiyui`

Integer token wrapper, int

Similar to TokenValue but for integer fields such as spacing, radius and font size. Supports implicit construction from int.



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

Fallback when the token is unset

## Public Methods

### TokenInt

```cpp
constexpr TokenInt(int lit)
```

Implicit construction from a literal value

Integer literal value

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
int resolve(const struct Theme &theme) const
```

Resolves the final integer value

Looks up the Theme for token references, otherwise returns the literal value.


The resolved integer value

## Static Methods

### var

```cpp
static TokenInt var(Token t, int fb=HIYUI_NONE_INT)
```

Constructs a token reference

Fallback value used when the token is HIYUI_NONE_INT in the Theme
