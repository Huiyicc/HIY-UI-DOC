---
title: Application
---

# Application

`Application` 初始化平台后端和 LVGL，管理窗口，并运行事件循环（持续分发输入和重绘界面的主循环）。使用方式：派生一个子类，在 `setup()` 中创建窗口和组件，然后在 `main()` 中调用 `run()`。

```cpp
class App final : public hiyui::Application {
  void setup() override {
    auto &window = createWindow({
        .title = "Settings",
        .width = 800,
        .height = 600,
    });

    hiyui::Label status({.text = "Ready"});
    status.init(window.screenActive());
    window.root(std::move(status));
  }
};

int main() { return App{}.run(); }
```

## 生命周期

`run()` 先调用 `setup()`，再进入事件循环。`setup()` 在主循环开始前执行一次。

`quit()` 请求退出主循环。调用 `quit()` 或全部窗口关闭后，`run()` 返回；正常退出返回 `0`，FBDEV 后端启动或事件处理异常时返回 `1`。

一个进程只创建一个 `Application`。

## 窗口

`createWindow()` 创建窗口并返回 `Window&`，窗口由 `Application` 持有和销毁。可以使用标题与尺寸重载，也可以传入 `WindowProps`。

`navigate(target)` 打开目标窗口并记录导航历史，`goBack()` 返回上一窗口。过渡动画类型由 `Transition` 指定。

## 屏幕缩放

派生类可重写 `resolveContentScale(const ScreenInfo&)`，返回屏幕适配因子。返回值限制在 `[1.0, 2.0]`，在字体加载前和每次 DPI 或跨屏变化时参与尺寸计算；典型实现按窗口应占屏幕宽度的比例折算。

完整签名见 [Application API](/api-reference/core/application)。
