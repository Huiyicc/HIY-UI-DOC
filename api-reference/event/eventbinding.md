---
title: "EventBinding"
---

# EventBinding <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/event/callback.h>`

**命名空间：** `hiyui`

## 公开成员

### obj

```cpp
lv_obj_t * obj
```

挂载回调的对象

### dsc

```cpp
lv_event_dsc_t * dsc
```

invoke 注册描述符

### deleteDsc

```cpp
lv_event_dsc_t * deleteDsc
```

DELETE 清理钩子描述符

### code

```cpp
lv_event_code_t code
```

绑定的事件码

### dispatchDepth

```cpp
uint32_t dispatchDepth
```

invoke 嵌套深度，大于 0 为派发中

### pendingDelete

```cpp
bool pendingDelete
```

派发中被放弃，待最外层 invoke 返回后删除

## 静态方法

### hasBinding

```cpp
static bool hasBinding(lv_obj_t *obj, lv_event_code_t code)
```

查询对象上是否存在指定事件码的绑定

已解绑但尚在派发遍历中的描述符不计入。
