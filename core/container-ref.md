---
title: Container 与 Ref
---

# Container 与 Ref

## 一句话定义

容器的 `operator()` 声明父子关系并挂载子组件。`Ref<T>` 是不持有所有权的组件引用：包装器被移动或离开作用域后，`Ref` 仍指向已挂载的同一组件。

## 对照表

| 操作 | 挂载与生命周期 |
|---|---|
| `container(children...)` | 支持挂载前组装；未挂载的容器持有子组件配置，挂载后子树由父组件管理 |
| `container(std::move(child))` | 具名子组件必须显式移动；原包装器移空，已关联的 Ref 保持关联 |
| 向已挂载容器添加已挂载子组件 | 子组件改挂到该容器；相同父级下保持原有位置和顺序 |
| `widget.ref()`、`widget.ref(out)` | 可在挂载前建立关联；挂载前引用的有效性判断为 `false` |
| 复制 Ref | 副本引用同一目标，不延长组件生命周期 |
| 目标或其祖先请求销毁 | 引用立即失效，不会因内存地址复用而指向新组件 |

Ref 的查询与操作均在 UI 线程执行。引用尚未挂载、已移出或目标失效时，不能通过 `operator->` 访问；先判断 `operator bool` 或使用 `with()`。

### Ref 方法

| 方法 | 返回 | 说明 |
|---|---|---|
| `Ref<T>(widget)` | 新引用 | 关联组件，支持挂载前创建 |
| `bind(widget)` | `void` | 替换当前关联，不改变此前复制出的引用 |
| `reset()` | `void` | 清除当前引用，不删除组件，也不清除其他副本 |
| `operator bool()` | `bool` | 已挂载且目标及其祖先未请求销毁时为 true |
| `operator->()` | 临时访问代理 | 调用组件方法；取得的包装器引用只在当前完整表达式内有效 |
| `with(callback)` | `bool` | 有效时同步调用 `void(T &)` 并返回 true；失效时不调用，返回 false |
| `destroy()` | `void` | 请求删除目标及其子树，立即使引用失效，实际释放在 UI 主循环中完成；空引用及重复调用无操作 |
| `raw()` | `lv_obj_t *` | 失效时返回 nullptr；底层互操作使用 |
| `bind(raw)` | `void` | 绑定已有底层对象，nullptr 清除当前引用；底层互操作使用 |

`with()` 的参数包装器只借用到回调结束，不得保存其指针或引用供后续调用。

## 代码示例

先组装子树，再挂载到已初始化的 `parent`，无需逐个初始化子组件。

```cpp
auto form = VBox{.padding = 16, .gap = 8}(
    Label{.text = "名称"},
    Input{.placeholder = "显示名称"},
    Button{.text = "保存"}
);
form.init(parent);
```

回调按值捕获已关联的 Ref。局部变量离开作用域后，回调仍能访问存活的目标。

```cpp
Label status({.text = "待机"});
const auto statusRef = status.ref();
auto form = VBox{.gap = 8}(
    std::move(status),
    Button{.text = "运行"}.onClick([statusRef] {
        statusRef.with([](Label &label) { label.text("运行中"); });
    })
);
form.init(parent);
```

捕获必须在 Ref 关联目标之后完成。捕获空 Ref 后再给原变量赋值，不会更新回调中的副本。业务状态由应用或页面控制器持有，Ref 只负责组件访问。

## 相关页面

- [语法设计](/core/syntax-design)
- [事件](/core/event-system)
- [跨端任务与布局](/guide/cross-platform)
- [列表详情](/widgets/list-detail)
