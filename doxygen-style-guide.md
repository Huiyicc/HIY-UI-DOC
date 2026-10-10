# Doxygen 注释规范

公开头文件使用 Doxygen 注释。实现文件使用普通 `//` 注释。注释服务于代码阅读，不复述代码执行过程。

## 内容

只记录代码签名无法表达的信息。

- 类型或函数的职责
- 参数单位、范围和特殊值
- 返回值的语义
- 对象所有权与生命周期
- 线程安全
- 调用时序和前置条件
- 可观察的副作用

删除实现过程、设计辩解、宣传性评价、重复签名的教程和问题记录。

## 文件

```cpp
/**
 * @file button.h
 * @brief 按钮组件
 * @ingroup widget
 */
```

每个公开头文件只有一个 `@file`。`@brief` 使用一句话，不重复文件名。

## 类型

```cpp
/** @brief 按钮创建属性 */
struct ButtonProps {
  const char *text = nullptr; /**< 按钮文本，UTF-8 编码 */
  int width = HIYUI_AUTO;     /**< 宽度，HIYUI_AUTO = 自适应内容 */
};
```

枚举值、Props 字段和常量使用行尾 `/**< ... */`，单行说明可用 `///`。内部状态字段不写 Doxygen 注释。

## 函数

```cpp
/**
 * @brief 设置值范围
 * @param minVal 最小值
 * @param maxVal 最大值
 * @return 当前组件
 * @pre minVal 小于或等于 maxVal。
 */
Slider &range(int minVal, int maxVal, Notify notify = Notify::No) &;
```

规则。

- 参数名与声明一致。
- 单位直接写在参数说明中。
- 布尔返回值说明 `true` 表示的状态。
- `@return` 不重复声明中的类型。
- 链式方法的返回值统一写“当前组件”。
- 生命周期约束写在参数说明或 `@pre` 中。
- 相关类型使用 `@see`，不复制其文档。

## 双语注释

公开注解可携带英文译文。英文写在 `@en{...}` 中，置于所在条目的末尾：

```cpp
/**
 * @brief 设置值范围 @en{Set the value range}
 * @param minVal 最小值 @en{Minimum value}
 * @return 当前组件 @en{This component}
 */
Slider &range(int minVal, int maxVal) &;

uint32_t iconSize = 0; /**< 图标大小，0 = 默认 18 @en{Icon size, 0 = default 18} */
```

规则。

- `@en{...}` 与所在条目对应（`@brief`、`@param`、`@return`、`/**< */` 行尾注释），写在条目末尾。
- 花括号内不出现 `}`；`<`、`>`、`&` 由生成管线自动转义。
- 不写空的 `@en{}`；没有译文的条目不写标记。
- 多段详细描述逐段标记。
- 未标记的条目在英文页面中显示中文原文。

`@en{...}` 由 `Doxyfile.in` 与 `Doxyfile.c.in` 的 `ALIASES` 展开，仅在 XML 输出中保留，生成脚本按输出语言提取。

## 实现注释

实现注释使用短语。

```cpp
// DPI 缩放
// 对象所有权转移
// 删除事件阶段
```

不使用装饰线、编号步骤、多段解释或问题编号。代码本身能表达的流程不写注释。

## 检查

```bash
cmake --build build --target doc
```

`Doxyfile.in` 扫描 `include/` 公开头文件，`Doxyfile.c.in` 扫描 C 绑定头文件，输出 XML 供 API 页面生成。未写 Doxygen 的内部状态不进入文档，已写的注释必须通过格式检查。
