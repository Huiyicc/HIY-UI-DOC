---
title: "Slider"
---

# Slider <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/slider.h>`

**命名空间：** `hiyui`

滑块组件

**参见：** `SliderProps`

**继承自：** `hiyui::Chainable< Slider >`

## 公开方法

### Slider

```cpp
Slider(lv_obj_t *raw)
```

包装已有 LVGL 对象

### Slider

```cpp
Slider(SliderProps props={})
```

通过属性聚合构造

### init

```cpp
Slider & init(lv_obj_t *parent) &
```

在父对象上创建 LVGL slider 对象

### init

```cpp
Slider & init(Widget &parent) &
```

在父对象上创建 LVGL slider 对象

### value

```cpp
Slider & value(int v, Notify notify=Notify::No) &
```

运行时设置值

| 参数 | 说明 |
|---|---|
| `v` | 新值，越界时钳制到范围端点 |

主题动画开启时手柄过渡到新值，关闭时立即到达；value() 始终立即返回最终值。

### onChange

```cpp
Slider & onChange(F &&f, EventHandle *handle=nullptr) &
```

追加值变化订阅；回调可接收 int、Event&amp; 或无参数。

### value

```cpp
int value() const
```

获取当前值

### range

```cpp
Slider & range(int minVal, int maxVal, Notify notify=Notify::No) &
```

设置值范围

### bindValue

```cpp
Slider & bindValue(State< int32_t > state, BindingHandle *handle=nullptr) &
```

单向绑定数值，State 变化更新滑块

应用时按组件当前范围钳制；用户操作不写回状态。绑定期间程序 value 调用解除本绑定， 有效 range 变更不解绑。

### model

```cpp
Slider & model(State< int32_t > state, BindingHandle *handle=nullptr) &
```

双向绑定数值并安装模型范围

要求带固定区间的状态；挂载完成时一次安装范围与当前值，不产生中间公开事件。 用户拖动、键盘步进和程序 value 写入都经模型规范化并同步全部连接； 有效 range 变更解除本绑定。



| 名称 | 说明 |
|---|---|
| `` | 状态句柄无效或未携带范围约束 |

### clearValueBinding

```cpp
Slider & clearValueBinding() &
```

解除数值绑定（单向或双向），保留当前值与范围；重复调用无操作。

### activeColor

```cpp
Slider & activeColor(ThemeRole role) &
```

绑定已填充区域颜色到主题语义角色，主题切换时自动更新

### trackColor

```cpp
Slider & trackColor(ThemeRole role) &
```

绑定轨道背景色到主题语义角色，主题切换时自动更新

### knobColor

```cpp
Slider & knobColor(ThemeRole role) &
```

绑定滑块手柄颜色到主题语义角色，主题切换时自动更新
