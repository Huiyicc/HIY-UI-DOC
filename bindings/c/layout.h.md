---
title: "layout.h"
---

# layout.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/layout.h>`

布局组件与响应式窗口框架

## 枚举

### @065373171357043174252047124347310170166225165370

| 值 | 说明 |
|---|---|
| `HIYUI_LAYOUT_FIELD_NONE` = 0 |  |
| `HIYUI_LAYOUT_FIELD_FLOW` = 1u << 0 |  |
| `HIYUI_LAYOUT_FIELD_GAP` = 1u << 1 |  |
| `HIYUI_LAYOUT_FIELD_PADDING_X` = 1u << 2 |  |
| `HIYUI_LAYOUT_FIELD_PADDING_Y` = 1u << 3 |  |
| `HIYUI_LAYOUT_FIELD_WIDTH` = 1u << 4 |  |
| `HIYUI_LAYOUT_FIELD_HEIGHT` = 1u << 5 |  |
| `HIYUI_LAYOUT_FIELD_MIN_WIDTH` = 1u << 6 |  |
| `HIYUI_LAYOUT_FIELD_MIN_HEIGHT` = 1u << 7 |  |
| `HIYUI_LAYOUT_FIELD_MAX_WIDTH` = 1u << 8 |  |
| `HIYUI_LAYOUT_FIELD_MAX_HEIGHT` = 1u << 9 |  |
| `HIYUI_LAYOUT_FIELD_FLEX` = 1u << 10 |  |
| `HIYUI_LAYOUT_FIELD_HIDDEN` = 1u << 11 |  |

### hiyui_layout_length_kind_t

| 值 | 说明 |
|---|---|
| `HIYUI_LAYOUT_LENGTH_CONTENT` = 0 |  |
| `HIYUI_LAYOUT_LENGTH_LOGICAL` |  |
| `HIYUI_LAYOUT_LENGTH_PERCENT` |  |

### hiyui_list_detail_pane_t

| 值 | 说明 |
|---|---|
| `HIYUI_LIST_DETAIL_PANE_LIST` = 0 |  |
| `HIYUI_LIST_DETAIL_PANE_DETAIL` |  |

### hiyui_list_detail_presentation_t

| 值 | 说明 |
|---|---|
| `HIYUI_LIST_DETAIL_SINGLE` = 0 |  |
| `HIYUI_LIST_DETAIL_SPLIT` |  |

### hiyui_frame_navigation_presentation_t

窗口框架导航区域的呈现方式。

| 值 | 说明 |
|---|---|
| `HIYUI_FRAME_NAVIGATION_DEFAULT` = 0 |  |
| `HIYUI_FRAME_NAVIGATION_DOCKED` |  |
| `HIYUI_FRAME_NAVIGATION_DRAWER` |  |
| `HIYUI_FRAME_NAVIGATION_HIDDEN` |  |

### hiyui_frame_navigation_edge_t

窗口框架导航区域依附的边缘。

| 值 | 说明 |
|---|---|
| `HIYUI_FRAME_NAVIGATION_EDGE_DEFAULT` = 0 |  |
| `HIYUI_FRAME_NAVIGATION_EDGE_LEFT` |  |
| `HIYUI_FRAME_NAVIGATION_EDGE_RIGHT` |  |

## 类型别名

### hiyui_layout_fields_t

```c
typedef uint32_t hiyui_layout_fields_t
```

规则管理字段的位集合，未标记字段的值被忽略。

## 函数

### hiyui_layout_values_init

```c
HIYUI_API void HIYUI_CALL hiyui_layout_values_init(hiyui_layout_values_t *out)
```

写入 C++ 默认值，其中最大尺寸为 HIYUI_AUTO、hidden 为 FALSE；NULL 无操作。

### hiyui_layout_rule_init

```c
HIYUI_API void HIYUI_CALL hiyui_layout_rule_init(hiyui_layout_rule_t *out)
```

写入默认无限区间和默认 values；NULL 无操作，不分配资源。

### hiyui_layout_rules_init

```c
HIYUI_API void HIYUI_CALL hiyui_layout_rules_init(hiyui_layout_rules_t *out)
```

写入默认 base、NULL 数组和零计数；NULL 无操作，不分配资源。

### hiyui_wdg_layout_rules

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_layout_rules(hiyui_widget_t *w, hiyui_widget_t *host, const hiyui_layout_rules_t *rules)
```

复制并安装唯一一组布局规则，更新保留子树和业务状态，不派发 ValueChanged。 成功替换先恢复旧组仍受控字段的 base；未知字段位、已标记字段的非法枚举或数值无效。 显式布局 setter 及样式内边距赋值解除所写字段；主题和 DPI 更新保留控制。 最小尺寸大于有限上限时以最小尺寸为准，溢出由应用设置的滚动容器处理。 隐藏子树退出命中和焦点遍历，恢复显示不移动已有有效焦点；在 UI 线程调用。

| 参数 | 说明 |
|---|---|
| `host` | NULL 使用直接父级并跟随重挂，否则必须是有效祖先，不接受自身或后代。 参与断点的宿主轴必须由父布局或显式尺寸分配，不能按受控后代内容定尺寸。 显式宿主失效、离开祖先链或宿主断点轴失去约束时恢复仍受控 base 并清除规则。 |
| `rules` | NULL 或默认空配置等价清除；结构和数组在返回前复制。 |


**返回值：** 1 表示接受安装或清除，0 表示目标或配置无效，原规则保持。

### hiyui_wdg_clear_layout_rules

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_clear_layout_rules(hiyui_widget_t *w)
```

恢复仍受控字段的 base 并移除规则及订阅；NULL、失效对象和重复调用无操作。

### hiyui_list_detail_props_init

```c
HIYUI_API void HIYUI_CALL hiyui_list_detail_props_init(hiyui_list_detail_props_t *out)
```

写入 720、240、12 和 TRUE；NULL 无操作，重复调用覆盖原值。

### hiyui_list_detail_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_list_detail_create(hiyui_widget_t *parent, const hiyui_list_detail_props_t *props)
```

创建按自身内容宽度切换单栏与双栏的列表详情容器，须由父级分配尺寸。 重排保留区域子树、输入和合法滚动偏移，不改变业务数据或应用历史。 进入区域恢复有效焦点；只有一个区域时填满，Detail 删除后恢复 List。

| 参数 | 说明 |
|---|---|
| `props` | NULL 使用 C++ 默认值；配置在调用时复制。 |


**返回值：** 父级或配置无效时为 NULL；成功后由父级管理组件生命周期。

### hiyui_list_detail_list_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_list_detail_list_create(hiyui_widget_t *parent)
```

创建列表区域，父级不是 ListDetail、失效或区域已存在时返回 NULL。

### hiyui_list_detail_content_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_list_detail_content_create(hiyui_widget_t *parent)
```

创建详情区域，父级不是 ListDetail、失效或区域已存在时返回 NULL。

### hiyui_list_detail_active_pane

```c
HIYUI_API hiyui_list_detail_pane_t HIYUI_CALL hiyui_list_detail_active_pane(hiyui_widget_t *w)
```

查询活动区域，NULL 或失效对象返回 HIYUI_LIST_DETAIL_PANE_LIST。

### hiyui_list_detail_presentation

```c
HIYUI_API hiyui_list_detail_presentation_t HIYUI_CALL hiyui_list_detail_presentation(hiyui_widget_t *w)
```

查询当前呈现，NULL 或失效对象返回 HIYUI_LIST_DETAIL_SINGLE。

### hiyui_list_detail_set_active_pane

```c
HIYUI_API void HIYUI_CALL hiyui_list_detail_set_active_pane(hiyui_widget_t *w, hiyui_list_detail_pane_t value, hiyui_notify_t notify)
```

设置活动区域，无 Detail 时请求 Detail、非法枚举、NULL 或失效对象无操作。 notify 为 YES 且值改变时发送一次 ValueChanged，可用 hiyui_wdg_on_change 订阅并查询新值。 尺寸与结构变化不通知；已释放的句柄不可再次传入。

### hiyui_list_detail_back

```c
HIYUI_API int HIYUI_CALL hiyui_list_detail_back(hiyui_widget_t *w)
```

单栏 Detail 且存在 List 时切回 List、通知并返回 1，其余返回 0；不调用应用历史。

### hiyui_vbox_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_vbox_create(hiyui_widget_t *parent, const hiyui_vbox_props_t *props)
```

### hiyui_hbox_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_hbox_create(hiyui_widget_t *parent, const hiyui_hbox_props_t *props)
```

### hiyui_spacer_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_spacer_create(hiyui_widget_t *parent)
```

### hiyui_flowbox_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_flowbox_create(hiyui_widget_t *parent, const hiyui_flowbox_props_t *props)
```

### hiyui_window_frame_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_window_frame_create(hiyui_widget_t *parent, const hiyui_window_frame_props_t *props)
```

创建响应式窗口框架。

### hiyui_frame_header_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_frame_header_create(hiyui_widget_t *parent)
```

创建 WindowFrame 顶部区域，区域已存在时返回 NULL。

### hiyui_frame_navigation_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_frame_navigation_create(hiyui_widget_t *parent)
```

创建 WindowFrame 导航区域，区域已存在时返回 NULL。

### hiyui_frame_content_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_frame_content_create(hiyui_widget_t *parent)
```

创建 WindowFrame 内容区域，区域已存在时返回 NULL。

### hiyui_frame_navigation_toggle_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_frame_navigation_toggle_create(hiyui_widget_t *parent, const hiyui_frame_navigation_toggle_props_t *props)
```

在 WindowFrame 子树中创建导航切换按钮。

### hiyui_window_frame_width_class

```c
HIYUI_API hiyui_layout_width_class_t HIYUI_CALL hiyui_window_frame_width_class(hiyui_widget_t *frame)
```

获取当前宽度级别，无效对象返回 HIYUI_LAYOUT_WIDTH_NARROW。

### hiyui_window_frame_open_navigation

```c
HIYUI_API void HIYUI_CALL hiyui_window_frame_open_navigation(hiyui_widget_t *frame)
```

打开当前 Drawer 导航，其他呈现方式下不改变状态。

### hiyui_window_frame_close_navigation

```c
HIYUI_API void HIYUI_CALL hiyui_window_frame_close_navigation(hiyui_widget_t *frame)
```

关闭当前 Drawer 导航，其他呈现方式下不改变状态。

### hiyui_window_frame_toggle_navigation

```c
HIYUI_API void HIYUI_CALL hiyui_window_frame_toggle_navigation(hiyui_widget_t *frame)
```

切换当前 Drawer 导航，其他呈现方式下不改变状态。

### hiyui_window_frame_navigation_is_open

```c
HIYUI_API int HIYUI_CALL hiyui_window_frame_navigation_is_open(hiyui_widget_t *frame)
```

查询 Drawer 导航是否打开或正在打开。
