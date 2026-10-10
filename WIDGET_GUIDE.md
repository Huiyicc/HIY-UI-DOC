# 组件开发

新组件由 Props、组件类和实现文件组成。叶子组件继承 `Chainable<T>`，可挂载子组件的容器继承 `Container<T>`，自绘组件通过 `CustomDraw` 和 `Painter` 实现。

## Props

```cpp
struct BadgeProps {
  const char *text = nullptr;
  int width = HIYUI_AUTO;
  int height = HIYUI_AUTO;
  uint32_t bg = HIYUI_DEFAULT;
};
```

Props 保持聚合类型，所有字段提供默认值。尺寸未设置时使用 `HIYUI_AUTO`；颜色使用 `HIYUI_DEFAULT` 表示跟随主题，`HIYUI_NONE` 表示不绘制。构造时立即复制传入的文本和路径。

## 声明

```cpp
class Badge : public Chainable<Badge> {
public:
  explicit Badge(BadgeProps props = {});
  explicit Badge(lv_obj_t *raw);

  Badge &init(lv_obj_t *parent) &;
  Badge &&init(lv_obj_t *parent) &&;
  Badge &init(Widget &parent) & { return init(parent.raw()); }
  Badge &&init(Widget &parent) && {
    init(parent);
    return static_cast<Badge &&>(*this);
  }

private:
  BadgeProps props_;
};
```

继承 `Chainable<T>` 后，通用链式方法返回派生类型引用。容器改为继承 `Container<T>`，获得 `operator()` 子组件挂载。包装已有 `lv_obj_t` 的构造函数供 `Ref<T>` 使用，不取得对象所有权。

## 初始化

`init()` 的固定顺序。

1. 创建底层对象并设置 `widgetType_`。
2. 应用主题默认值。
3. 应用 Props。
4. 创建子对象和事件回调。
5. 注册主题与 DPI 回调。
6. 自绘组件启用绘制管线。

回调捕获底层对象或值副本，不捕获临时组件包装器。

## 自绘

绘制逻辑写入 `Painter` 子类，实例通过 `std::unique_ptr` 移交给 `CustomDraw`，生命周期与底层对象绑定。`paint()` 只提交绘制，不修改组件树、主题或尺寸。

## 注册

- 在 `include/hiyui/hiyui.h` 导出公开组件。
- 在 `CMakeLists.txt` 添加实现文件。
- XML 组件在 `xml_registry.cpp` 注册。
- 组件图库在 `test/demo/component_gallery` 添加页面。

## 文档

公开声明按 [Doxygen 注释规范](./doxygen-style-guide.md) 编写。页面文档只保留组件用途、最小示例和关键约束。
