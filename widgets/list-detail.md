---
title: 列表详情
---

## ListDetail

`ListDetail` 按自身内容逻辑宽度显示单栏或双栏，切换时不重建区域子树。区域呈现、焦点和切换动画由组件管理；业务选择和草稿由应用管理。

### 头文件

组件声明位于 `<hiyui/widget/list_detail.h>`。下方示例使用总头文件。

```cpp
#include <hiyui/hiyui.h>
using namespace hiyui;
```

### 最小示例

`parent` 为已挂载且具有确定尺寸的父组件；内容逻辑宽度达到 720 时同时显示两栏。

```cpp
Ref<ListDetail> panes;
auto page = ListDetail{}(
    ListDetailList{}(Label{.text = "设备列表"}),
    ListDetailContent{}(Label{.text = "设备详情"})
).ref(panes);
page.init(parent);
```

### Props 参数表

| 字段 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `splitMinWidth` | `int` | `720` | 进入双栏的最小内容逻辑宽度，必须大于 `listWidth + gap` |
| `listWidth` | `int` | `240` | 双栏列表宽度，正逻辑像素 |
| `gap` | `int` | `12` | 双栏间距，非负逻辑像素 |
| `animated` | `bool` | `true` | 单栏区域切换使用主题动画；主题禁用动画时立即切换 |

非法 Props 不创建组件。组件默认填满父级分配的尺寸，断点使用自身去除内边距和边框后的宽度。

### 运行时方法表

链式方法对左值返回 `ListDetail &`，对临时对象返回 `ListDetail &&`。

| 方法 | 返回 | 说明 |
|---|---|---|
| `init(parent)`、`init(parent, props)` | 自身引用 | 挂载到父组件或 Window 根内容区；显式 Props 覆盖构造值 |
| `activePane()` | `ListDetailPane` | 最近请求的区域；初始、未挂载或已请求销毁时为 `List` |
| `presentation()` | `ListDetailPresentation` | 当前单栏或双栏呈现；失效时为 `Single` |
| `activePane(value, notify = Notify::No)` | 自身引用 | 设置活动区域；支持挂载前调用；未提供详情时设置 `Detail` 无操作 |
| `back()` | `bool` | 单栏显示详情且有列表时切回列表并通知，返回 `true`；其余返回 `false` |
| `onChange(handler, handle = nullptr)` | 自身引用 | 接受 `void(ListDetailPane)`、`void(Event &)` 或 `void()`，支持只可移动闭包及可选解绑句柄 |

`Notify::Yes` 仅在区域值改变时通知。尺寸、结构或单栏／双栏呈现变化不触发 `onChange`。`back()` 不调用应用页面历史，也不取消或保存业务草稿。

`ListDetailPane` 的值如下。

| 值 | 说明 |
|---|---|
| `List` | 列表区域 |
| `Detail` | 详情区域 |

`ListDetailPresentation` 的值如下。

| 值 | 说明 |
|---|---|
| `Single` | 内容宽度小于断点，显示活动区域 |
| `Split` | 内容宽度达到断点，列表使用 `listWidth`，详情填满剩余宽度 |

### 进阶用法

每个区域用一个带滚动的 VBox 承载内容；打开详情和返回列表只切换活动区域。

```cpp
ListDetail page({.splitMinWidth = 560, .listWidth = 224, .gap = 16});
const auto panes = page.ref();
page(
    ListDetailList{}(
        VBox{.gap = 8, .scroll = ScrollMode::Vertical}(
            Button{.text = "查看设备"}.onClick([panes] {
                if (panes) panes->activePane(ListDetailPane::Detail);
            })
        ).fill()
    ),
    ListDetailContent{}(
        VBox{.gap = 8, .scroll = ScrollMode::Vertical}(
            Label{.text = "设备详情"},
            Button{.text = "返回列表"}.onClick([panes] {
                if (panes) panes->back();
            })
        ).fill()
    )
);
page.init(parent);
```

回调按值保存已关联的 Ref，不要求局部变量 `panes` 存活到组件销毁。区域子树由父组件持有；进入区域时恢复其中最后一个有效可聚焦后代，无候选时选择首个可聚焦后代。重排后仍可见的焦点保持，滚动偏移在新的合法范围内保留。

应用级返回按钮调用 `Window::requestBack()`，按弹层、可取消输入、局部导航与页面历史处理；请求到达当前活动的 ListDetail 时执行其 `back()`。直接调用 `ListDetail::back()` 只处理该容器，详见 [返回请求](/window/multi-window#返回请求)。

### C 绑定

包含 `<hiyui/c/layout.h>`。C 与 C++ 使用相同的内容断点、区域切换和通知契约；C 组件创建后由父级管理生命周期，已释放的句柄不能再次传入。

`hiyui_list_detail_props_init()` 写入以下默认值。整数 0 保持实际含义，不能用全零初始化代替默认 Props；例如 `gap = 0` 表示无栏间距。

| 字段 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `split_min_width` | `int` | `720` | 双栏最小内容逻辑宽度，须大于 `list_width + gap` |
| `list_width` | `int` | `240` | 双栏列表宽度，正逻辑像素 |
| `gap` | `int` | `12` | 双栏间距，非负逻辑像素 |
| `animated` | `hiyui_bool_t` | `HIYUI_BOOL_TRUE` | DEFAULT／TRUE 使用主题动画，FALSE 立即切换；主题关闭动画时立即切换 |

函数与空值行为如下。

| 方法 | 返回 | 说明 |
|---|---|---|
| `hiyui_list_detail_props_init(out)` | `void` | NULL 无操作，重复调用覆盖原值 |
| `hiyui_list_detail_create(parent, props)` | `hiyui_widget_t *` | props 为 NULL 使用默认值；配置在调用时复制；父级或配置无效返回 NULL |
| `hiyui_list_detail_list_create(parent)` | `hiyui_widget_t *` | parent 必须为 ListDetail；已有列表区域或父级失效时返回 NULL |
| `hiyui_list_detail_content_create(parent)` | `hiyui_widget_t *` | parent 必须为 ListDetail；已有详情区域或父级失效时返回 NULL |
| `hiyui_list_detail_active_pane(w)` | `hiyui_list_detail_pane_t` | 查询活动区域；NULL 或失效对象返回 `HIYUI_LIST_DETAIL_PANE_LIST` |
| `hiyui_list_detail_presentation(w)` | `hiyui_list_detail_presentation_t` | 查询当前呈现；NULL 或失效对象返回 `HIYUI_LIST_DETAIL_SINGLE` |
| `hiyui_list_detail_set_active_pane(w, value, notify)` | `void` | 无详情时请求详情、非法区域枚举或无效对象无操作；`HIYUI_NOTIFY_YES` 且值改变时通知 |
| `hiyui_list_detail_back(w)` | `int` | 单栏详情切回已有列表并通知时返回 1，其余返回 0 |

区域与呈现枚举值如下。

| 值 | 说明 |
|---|---|
| `HIYUI_LIST_DETAIL_PANE_LIST` | 列表区域 |
| `HIYUI_LIST_DETAIL_PANE_DETAIL` | 详情区域 |
| `HIYUI_LIST_DETAIL_SINGLE` | 单栏呈现 |
| `HIYUI_LIST_DETAIL_SPLIT` | 双栏呈现 |

创建与上方 C++ 示例相同的断点和区域，`parent` 为已挂载且具有确定尺寸的父组件句柄。

```c
hiyui_list_detail_props_t props;
hiyui_list_detail_props_init(&props);
props.split_min_width = 560;
props.list_width = 224;
props.gap = 16;
hiyui_widget_t *panes = hiyui_list_detail_create(parent, &props);
hiyui_widget_t *list = hiyui_list_detail_list_create(panes);
hiyui_widget_t *detail = hiyui_list_detail_content_create(panes);
hiyui_list_detail_set_active_pane(
    panes, HIYUI_LIST_DETAIL_PANE_DETAIL, HIYUI_NOTIFY_NO);
```

向 `list` 和 `detail` 添加各自的内容组件。使用 `hiyui_wdg_on_change()` 订阅区域变化，并在回调中查询 `hiyui_list_detail_active_pane()`；尺寸和结构变化不发送该通知。窗口级返回入口为 `<hiyui/c/app.h>` 中的 `hiyui_win_request_back()`。

## ListDetailList

列表区域必须作为 `ListDetail` 的直接子对象，每个 ListDetail 最多一个。

### 头文件

使用 `<hiyui/widget/list_detail.h>`。

### 最小示例

创建列表详情容器并添加列表区域，`parent` 为已挂载的父组件。

```cpp
ListDetail panes;
panes.init(parent);
ListDetailList list;
list.init(panes);
Label{.text = "设备列表"}.init(list);
```

### Props 参数表

无独立 Props。

### 运行时方法表

| 方法 | 返回 | 说明 |
|---|---|---|
| `init(parent)` | 左值 `ListDetailList &`，右值 `ListDetailList &&` | 父级不是 ListDetail 或已有列表区域时不创建 |

## ListDetailContent

详情区域必须作为 `ListDetail` 的直接子对象，每个 ListDetail 最多一个。

### 头文件

使用 `<hiyui/widget/list_detail.h>`。

### 最小示例

创建列表详情容器并添加详情区域，`parent` 为已挂载的父组件。

```cpp
ListDetail panes;
panes.init(parent);
ListDetailContent detail;
detail.init(panes);
Label{.text = "请选择设备"}.init(detail);
```

### Props 参数表

无独立 Props。

### 运行时方法表

| 方法 | 返回 | 说明 |
|---|---|---|
| `init(parent)` | 左值 `ListDetailContent &`，右值 `ListDetailContent &&` | 父级不是 ListDetail 或已有详情区域时不创建 |

只有一种区域时该区域填满容器。删除详情后活动区域恢复为 `List`；删除列表后保留详情。结构变化不发送区域值通知。

## 相关页面

- [布局](/widgets/layout)
- [响应式布局](/core/responsive)
- [Container 与 Ref](/core/container-ref)
- [事件](/core/event-system)
- [跨端任务与布局](/guide/cross-platform)
