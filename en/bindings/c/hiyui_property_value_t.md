---
title: "hiyui_property_value_t"
---

# hiyui_property_value_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/property_grid.h>`

Borrowed value view; input strings and bytes are valid for the duration of the call and are copied before the function returns. text may be NULL meaning an empty string; when custom.size is non-zero, bytes must be non-NULL. tuple stores values in child property declaration order; when count is non-zero, values must be non-NULL and the value tree must be acyclic.

## Public Members

### kind

```c
hiyui_property_value_kind_t kind
```

### boolean

```c
int boolean
```

### integer

```c
int64_t integer
```

### unsigned_integer

```c
uint64_t unsigned_integer
```

### number

```c
double number
```

### text

```c
const char * text
```

### rgb

```c
uint32_t rgb
```

### alpha

```c
uint8_t alpha
```

### color

```c
struct hiyui_property_value_t::@265056340256167250212304010023167213333043024354::@277170154220201013363250227263204234027331236320 color
```

### date

```c
hiyui_date_value_t date
```

### time

```c
hiyui_time_value_t time
```

### type

```c
const char * type
```

### bytes

```c
const uint8_t * bytes
```

### size

```c
size_t size
```

### custom

```c
struct hiyui_property_value_t::@265056340256167250212304010023167213333043024354::@225331114134263073274015307171241030242005041333 custom
```

### values

```c
const struct hiyui_property_value_t * values
```

### count

```c
size_t count
```

### tuple

```c
struct hiyui_property_value_t::@265056340256167250212304010023167213333043024354::@006023375147216274030202363207037040144145227033 tuple
```

### data

```c
union hiyui_property_value_t::@265056340256167250212304010023167213333043024354 data
```
