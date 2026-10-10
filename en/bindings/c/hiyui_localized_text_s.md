---
title: "hiyui_localized_text_s"
---

# hiyui_localized_text_s <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/i18n.h>`

Translation input description. Binding and queries copy the referenced data at call time. All operations run on the UI thread.

## Public Members

### id

```c
const char * id
```

### source

```c
const char * source
```

### source_plural

```c
const char * source_plural
```

### has_count

```c
hiyui_bool_t has_count
```

### count

```c
int64_t count
```

### arguments

```c
const hiyui_text_arg_t * arguments
```

### argument_count

```c
size_t argument_count
```
