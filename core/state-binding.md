---
title: 状态与数据绑定
---

# 状态与数据绑定

`State<T>` 表示可订阅的业务状态。组件通过 `bind*` 与 `model*` 链式方法声明持续绑定；业务事件只修改状态，界面随状态更新。所有 State 读写、订阅和派发在 UI 线程进行。

`State` 支持 `int32_t`、`bool` 和 `std::string` 三种类型，其他类型在编译期拒绝。

## 最小示例

```cpp
struct SettingsModel {
  State<int32_t> volume = State<int32_t>::bounded(70, 0, 100);
  State<bool> wifi{false};
  State<std::string> name = State<std::string>::text(
      "设备", {.multiline = false, .maxLength = 32});
};

void buildSettings(Widget &parent) {
  SettingsModel vm;

  VBox({.padding = 16, .gap = 12}).init(parent)(
      Slider{}.model(vm.volume),
      Label{}.bindText(vm.volume, [](int32_t value) {
        return std::to_string(value) + "%";
      }),
      Switch{}.model(vm.wifi),
      Button({.text = "50%"}).onClick([volume = vm.volume]() mutable {
        volume.trySet(50);
      })
  );
}
```

模型字段可声明在页面控制器或构建函数内。绑定与事件按值捕获 State 句柄，构建函数返回后绑定仍有效。

## 创建与约束

| 创建方式 | 行为 |
| --- | --- |
| `State<T>{}` | 创建值为 `T{}` 的独立状态，无约束 |
| `State<T> s(初始值)` | 创建独立状态；初始值经固定规则规范化 |
| `State<int32_t>::bounded(初始值, min, max)` | 创建带固定闭区间的整数状态；min 大于 max 抛出 `StateError` |
| `State<std::string>::text(初始值, 规则)` | 创建带固定文本规则的状态；初始值非法时抛出 `StateError` |

TextRules 字段：

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `multiline` | bool | false | false 将每个换行转换为空格，true 将换行统一为 LF；CRLF 计为一个换行 |
| `maxLength` | uint32_t | 0 | 最大 Unicode 码点数，0 表示不限制；截断发生在码点边界 |

约束创建后不可变，组件绑定不反向修改约束。文本状态拒绝无效 UTF-8 和内嵌 NUL 的写入，返回 `InvalidValue`。业务校验由业务代码处理，不属于状态层。

## 读取与写入

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `get()` | `T` | 返回值副本；句柄失效时抛出 `StateError` |
| `set(值)` / `operator=(值)` | `State&` | 规范化并同步提交；失败抛出 `StateError` |
| `trySet(值)` | `StateWriteResult` | 与 `set` 相同的提交路径，返回完整结果不抛出 |
| `valid()` | bool | 句柄仍持有状态节点时为 true |
| `watch(回调)` | `StateSubscription<T>` | 订阅后续有效变化，建立时不调用回调 |

`volume = 50` 与 `volume.set(50)` 完全相同。事件回调和 LVGL 入口内使用 `trySet` 并按返回结果处理；`set` 抛出的 `StateError` 只出现在业务主动写入路径。

StateWriteResult 字段：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `status` | `StateStatus` | Changed、Unchanged、InvalidState、InvalidValue、InvalidOperation、Cycle、OutOfMemory、CallbackFailed |
| `normalized` | bool | 候选值经固定规则发生改变 |
| `committed` | bool | 候选值已替换旧值；与失败状态可能同时为真 |

写入的可观察顺序：规范化、同值比较、循环检查、提交、同步组件绑定、调用业务订阅。同值写入返回 `Unchanged` 且不派发。正在派发的状态接收不同值返回 `Cycle`；相同值返回 `Unchanged`。没有合批与延迟队列，连续写入产生多次同步提交。

## 复制与移动

| 操作 | 行为 |
| --- | --- |
| 拷贝构造 | 共享同一状态节点，不产生第二份业务值 |
| 移动构造 | 转移句柄，源句柄 `valid()` 为 false |
| State 之间的赋值 | 不可用，编译期拒绝 |
| `a = b.get()` | 将 b 当前值提交到 a，a 的节点与订阅不变 |

包含 State 的模型可以拷贝构造共享字段，不能整体赋值；恢复默认值逐字段提交。

## 订阅

`watch` 回调签名为 `void(const T &current, const T &previous)`，引用仅在回调期间有效。回调内可以写其他状态；写正在派发的状态遵循上一节的循环规则。

`StateSubscription` 为只能移动的作用域所有者：析构、移动赋值覆盖、显式 `off()` 均取消订阅，`off()` 可重复调用。`connected()` 查询连接状态，`error()` 返回 `InvalidState`（句柄无效）或 `CallbackFailed`（回调抛出异常后订阅停用）。订阅句柄应保存为页面控制器或业务对象成员。

回调内新增的订阅不参加当次派发；回调内取消的订阅被跳过。回调抛出异常时该订阅停用并标记 `CallbackFailed`，同次写入的其他订阅继续执行，写入结果报告 `CallbackFailed`。

## 组件绑定

`bind*` 一律单向：State 变化更新属性，用户操作和程序写入不写回状态。`model*` 一律双向：组件输入经模型规范化后同步所有连接，并安装模型约束。

| 组件 | 方法 | 方向 | 约束要求 |
| --- | --- | --- | --- |
| Label | `bindText(State<std::string>)` | State → 文本 | 无 |
| Label | `bindText(State<T>, 转换器)` | State → 文本或翻译文案 | 无 |
| Slider | `bindValue(State<int32_t>)` | State → 数值 | 无 |
| Slider | `model(State<int32_t>)` | 双向 | `bounded` 状态 |
| Switch | `bindChecked(State<bool>)` | State → 选中状态 | 无 |
| Switch | `model(State<bool>)` | 双向 | 无 |
| Input | `model(State<std::string>)` | 双向，绑定已提交文本 | `text` 规则状态 |

各方法接受可选 `BindingHandle *` 出参。`clearValueBinding()`、`clearCheckedBinding()`、`clearTextBinding()` 解除绑定并保留当前显示值，重复调用无操作。

转换器返回 `std::string` 或 `LocalizedText`；返回 `LocalizedText` 时语言变化重新翻译且不触发业务订阅。转换器内写入任何 State 返回 `InvalidOperation`。

绑定的行为规则：

- 挂载前调用保存配置，挂载完成时建立连接并应用当前值；挂载后的调用立即应用。
- 同一属性最多一个顶层来源；重新绑定替换旧连接，静态文案、国际化绑定与数据绑定相互替换。
- 双向绑定下程序 setter（`value`、`checked`、`text`）作为模型写入，`Notify` 只决定该次操作是否发送组件公开变化事件。
- 单向绑定下程序 setter 解除单向绑定后按手工值执行；Slider 有效 `range()` 变更解除 `model` 但不解除单向绑定。
- Input 的有效 `multiline()` 变更解除 `model`。
- Input 绑定已提交文本，输入法预编辑不写入状态；模型值与来源控件内容相同时跳过重写，光标、选区与撤销栈不受影响。
- Slider `model` 安装模型范围与当前值，不产生中间公开事件；用户拖动与键盘步进实时写回状态。

单向绑定的控件被用户操作改变后，与状态产生偏离；下一次 Changed 写入会覆盖控件值。写入与状态当前值相同的值返回 `Unchanged`，不刷新控件。需要控件始终等于状态时使用 `model`。

## BindingHandle

`BindingHandle` 为只能移动的解绑句柄，析构不取消绑定。

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `off()` | void | 解除绑定；重复调用、组件销毁后调用无额外效果 |
| `connected()` | bool | 绑定连接中且目标有效 |
| `phase()` | `BindingPhase` | Pending、Connected、Disconnected、TargetGone、Failed |
| `error()` | `BindingFailReason` | None、InvalidState、ConstraintMismatch、ConvertFailed、ApplyFailed |

重新绑定属性后，旧句柄只对应旧连接。组件销毁或请求删除后句柄进入 `TargetGone`；应用或转换失败进入 `Failed` 并停用。

## 注意事项

:::warning
`set` 与赋值在失败时抛出 `StateError`；LVGL 事件回调内使用 `trySet`。约束不满足（Slider `model` 缺少范围、Input `model` 缺少文本规则）时绑定方法抛出 `BindingError`。
:::

:::warning
State 不保存主题色、坐标、字体或动画中间值；主题与 DPI 切换不重建模型。状态写入同步完成属性更新，布局与绘制由主循环处理。
:::

## 相关页面

- [事件](/core/event-system.md)
- [组件语法](/core/syntax-design.md)
- [国际化](/core/i18n.md)
