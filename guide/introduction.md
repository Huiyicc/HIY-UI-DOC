---
title: 概览
---

# 概览

Hiy-UI 在 LVGL 对象模型之上提供 C++20 接口。控件对象仍由 LVGL 管理和渲染，库负责属性聚合、组件组合、事件桥接、主题刷新和平台差异。

## 适用范围

| 后端 | 目标平台 |
| --- | --- |
| `SDL` | Windows、Linux、macOS、Android 的窗口应用 |
| `FBDEV` | Linux framebuffer 设备 |
| `EMSCRIPTEN` | 浏览器应用 |
| `CUSTOM` | 由集成方提供平台实现的目标 |

面向 MCU/RTOS 的 `EMBEDDED` 后端尚未提供。各后端的依赖与配置见 [编译参数](/build/options)。

## 主要目录

| 路径 | 内容 |
| --- | --- |
| `include/hiyui` | 公开 C++ 头文件 |
| `src` | 库实现 |
| `binding/c` | C 接口 |
| `test/demo/component_gallery` | 组件图库 |
| `docs` | 手写文档站 |
| `docs/api-reference` | Doxygen 生成内容 |

## 基本对象

- `Application`：应用入口，管理运行循环和窗口生命周期。
- `Window`：窗口，提供根容器挂载点。
- `Widget`：组件基类，包装 LVGL 控件对象 `lv_obj_t`。
- `Props`：组件的创建属性结构体。纯 POD，字段均有默认值，支持聚合初始化。
- `Container`：容器基类，通过 `operator()` 声明父子关系。
- `Ref<T>`：对已挂载组件的引用，不持有组件所有权。

下一步阅读 [快速开始](/guide/quick-start)。
