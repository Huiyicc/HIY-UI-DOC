---
title: "diagnostics.h"
---

# diagnostics.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/diagnostics.h>`

## 快照读取

### hiyui_diagnostics_snapshot_get_info

```c
HIYUI_API int HIYUI_CALL hiyui_diagnostics_snapshot_get_info(const hiyui_diagnostics_snapshot_t *snapshot, hiyui_diagnostics_snapshot_info_t *out)
```

### hiyui_diagnostics_snapshot_get_span

```c
HIYUI_API int HIYUI_CALL hiyui_diagnostics_snapshot_get_span(const hiyui_diagnostics_snapshot_t *snapshot, size_t index, hiyui_diagnostics_span_t *out)
```

### hiyui_diagnostics_snapshot_get_frame

```c
HIYUI_API int HIYUI_CALL hiyui_diagnostics_snapshot_get_frame(const hiyui_diagnostics_snapshot_t *snapshot, size_t index, hiyui_diagnostics_frame_t *out)
```

### hiyui_diagnostics_snapshot_get_sample

```c
HIYUI_API int HIYUI_CALL hiyui_diagnostics_snapshot_get_sample(const hiyui_diagnostics_snapshot_t *snapshot, size_t index, hiyui_diagnostics_sample_t *out)
```

### hiyui_diagnostics_snapshot_get_display

```c
HIYUI_API int HIYUI_CALL hiyui_diagnostics_snapshot_get_display(const hiyui_diagnostics_snapshot_t *snapshot, size_t index, hiyui_diagnostics_display_t *out)
```

### hiyui_diagnostics_snapshot_get_resource

```c
HIYUI_API int HIYUI_CALL hiyui_diagnostics_snapshot_get_resource(const hiyui_diagnostics_snapshot_t *snapshot, size_t index, hiyui_diagnostics_resource_t *out)
```

## 枚举

### hiyui_diagnostics_mode_t

| 值 | 说明 |
|---|---|
| `HIYUI_DIAGNOSTICS_SUMMARY` = 0 |  |
| `HIYUI_DIAGNOSTICS_DETAILED` = 1 |  |

### hiyui_diagnostics_status_t

| 值 | 说明 |
|---|---|
| `HIYUI_DIAGNOSTICS_OK` = 0 |  |
| `HIYUI_DIAGNOSTICS_UNAVAILABLE` = 1 |  |
| `HIYUI_DIAGNOSTICS_NOT_RUNNING` = 2 |  |
| `HIYUI_DIAGNOSTICS_INVALID_CONFIG` = 3 |  |
| `HIYUI_DIAGNOSTICS_BUSY` = 4 |  |
| `HIYUI_DIAGNOSTICS_OUT_OF_MEMORY` = 5 |  |
| `HIYUI_DIAGNOSTICS_IO_ERROR` = 6 |  |

### hiyui_diagnostics_phase_t

| 值 | 说明 |
|---|---|
| `HIYUI_DIAGNOSTICS_PHASE_APPLICATION` = 0 |  |
| `HIYUI_DIAGNOSTICS_PHASE_INPUT` = 1 |  |
| `HIYUI_DIAGNOSTICS_PHASE_EVENT` = 2 |  |
| `HIYUI_DIAGNOSTICS_PHASE_QUEUE_WAIT` = 3 |  |
| `HIYUI_DIAGNOSTICS_PHASE_QUEUE_TASK` = 4 |  |
| `HIYUI_DIAGNOSTICS_PHASE_LAYOUT` = 5 |  |
| `HIYUI_DIAGNOSTICS_PHASE_RENDER` = 6 |  |
| `HIYUI_DIAGNOSTICS_PHASE_FLUSH` = 7 |  |
| `HIYUI_DIAGNOSTICS_PHASE_FLUSH_WAIT` = 8 |  |
| `HIYUI_DIAGNOSTICS_PHASE_PRESENT` = 9 |  |
| `HIYUI_DIAGNOSTICS_PHASE_IDLE_WAIT` = 10 |  |
| `HIYUI_DIAGNOSTICS_PHASE_ACCESSIBILITY` = 11 |  |
| `HIYUI_DIAGNOSTICS_PHASE_RESOURCE` = 12 |  |
| `HIYUI_DIAGNOSTICS_PHASE_DIAGNOSTIC` = 13 |  |
| `HIYUI_DIAGNOSTICS_PHASE_USER` = 14 |  |
| `HIYUI_DIAGNOSTICS_PHASE_LVGL` = 15 |  |

### hiyui_diagnostics_resource_kind_t

| 值 | 说明 |
|---|---|
| `HIYUI_DIAGNOSTICS_RESOURCE_KIND_OBJECT` = 0 |  |
| `HIYUI_DIAGNOSTICS_RESOURCE_KIND_EVENT_BINDING` = 1 |  |
| `HIYUI_DIAGNOSTICS_RESOURCE_KIND_TIMER` = 2 |  |
| `HIYUI_DIAGNOSTICS_RESOURCE_KIND_ANIMATION` = 3 |  |
| `HIYUI_DIAGNOSTICS_RESOURCE_KIND_C_REFERENCE` = 4 |  |

## 类型别名

### hiyui_diagnostics_snapshot_t

```c
typedef struct hiyui_diagnostics_snapshot_s hiyui_diagnostics_snapshot_t
```

## 函数

### hiyui_diagnostics_config_init

```c
HIYUI_API void HIYUI_CALL hiyui_diagnostics_config_init(hiyui_diagnostics_config_t *config)
```

NULL 无操作；填入与 C++ Config 相同的默认值。

### hiyui_diagnostics_available

```c
HIYUI_API int HIYUI_CALL hiyui_diagnostics_available(void)
```

### hiyui_diagnostics_recording

```c
HIYUI_API int HIYUI_CALL hiyui_diagnostics_recording(void)
```

### hiyui_diagnostics_start

```c
HIYUI_API hiyui_diagnostics_status_t HIYUI_CALL hiyui_diagnostics_start(const hiyui_diagnostics_config_t *config)
```

UI 线程启动新采集；NULL 使用默认配置，正在采集返回 BUSY，失败保留旧记录。

### hiyui_diagnostics_stop

```c
HIYUI_API void HIYUI_CALL hiyui_diagnostics_stop(void)
```

UI 线程停止区间、帧和系统采样并保留结果；资源快照仍反映当前状态，重复调用无操作。

### hiyui_diagnostics_clear

```c
HIYUI_API void HIYUI_CALL hiyui_diagnostics_clear(void)
```

UI 线程停止并清除记录，不销毁观察对象。

### hiyui_diagnostics_show_panel

```c
HIYUI_API hiyui_diagnostics_status_t HIYUI_CALL hiyui_diagnostics_show_panel(hiyui_widget_t *owner)
```

UI 线程打开单例面板；owner 不可为 NULL，关闭面板不停止采集。

### hiyui_diagnostics_hide_panel

```c
HIYUI_API void HIYUI_CALL hiyui_diagnostics_hide_panel(void)
```

UI 线程关闭面板；重复调用无操作，不停止采集。

### hiyui_diagnostics_snapshot_create

```c
HIYUI_API hiyui_diagnostics_status_t HIYUI_CALL hiyui_diagnostics_snapshot_create(int include_objects, hiyui_diagnostics_snapshot_t **out)
```

UI 线程创建自包含快照，include_objects 非 0 读取调用时的资源；失败将 *out 设为 NULL。 成功后由调用方持有，必须用 snapshot_destroy 释放；不得与同一快照的销毁或 JSON 读取并发。

### hiyui_diagnostics_snapshot_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_diagnostics_snapshot_destroy(hiyui_diagnostics_snapshot_t *snapshot)
```

释放快照及其借用文本，NULL 无操作。

### hiyui_diagnostics_snapshot_json

```c
HIYUI_API hiyui_diagnostics_status_t HIYUI_CALL hiyui_diagnostics_snapshot_json(hiyui_diagnostics_snapshot_t *snapshot, const char **text, size_t *size)
```

返回快照拥有的 UTF-8 JSON；size 不含终止符，文本有效至快照销毁；失败清空输出。

### hiyui_diagnostics_snapshot_export

```c
HIYUI_API hiyui_diagnostics_status_t HIYUI_CALL hiyui_diagnostics_snapshot_export(const hiyui_diagnostics_snapshot_t *snapshot, const char *path)
```

写入 UTF-8 路径并覆盖已有文件；NULL 参数或写入失败返回 IO_ERROR。

### hiyui_diagnostics_scope_begin

```c
HIYUI_API hiyui_diagnostics_status_t HIYUI_CALL hiyui_diagnostics_scope_begin(hiyui_diagnostics_scope_t *scope, const char *name, hiyui_diagnostics_phase_t phase, uint64_t display_id, uint64_t object_id)
```

开始区间并复制 UTF-8 名称，最多 63 字节；scope 不可为 NULL 或仍活跃，名称可为 NULL。 未采集时仍须与 end 配对；编译禁用时返回 UNAVAILABLE。

### hiyui_diagnostics_scope_end

```c
HIYUI_API void HIYUI_CALL hiyui_diagnostics_scope_end(hiyui_diagnostics_scope_t *scope)
```

结束区间；NULL、零初始化的 scope 或重复结束无操作。
