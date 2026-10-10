---
title: 架构
---

# 架构

## 层次

| 层 | 职责 |
| --- | --- |
| Application | 初始化、运行循环、窗口和导航 |
| PAL | display、input、剪贴板、DPI 和后端事件 |
| Window | LVGL display、screen 与桌面窗口状态 |
| Widget | `lv_obj_t` 生命周期、样式、事件和查询 |
| Components | Props、子对象和组件行为 |
| Style | Style、StyleSet、Theme、Token 和过渡 |

## 生命周期

组件包装器可在栈上创建，也可作为成员对象持有。组件挂载到父容器后，底层对象进入 LVGL 对象树，包装器不再负责删除该对象。需要在挂载后访问组件时使用 `Ref<T>`。

## 刷新路径

- 属性方法直接更新对应的 LVGL 对象。
- `setTheme()` 刷新已注册的主题绑定。
- DPI 变化会重算长度、字体和布局。
- 自绘组件通过 LVGL 绘制事件获得 `DrawCtx`。

## 后端

PAL 对外提供一致的显示与输入接口，由平台后端实现。平台后端为 `SDL`、`FBDEV`、`EMSCRIPTEN` 或 `CUSTOM`，渲染方式由渲染后端（软件、OpenGL ES、SDL 纹理）承担。平台差异通过能力查询暴露，调用平台相关功能前先查询对应能力。见 [平台适配层](/advanced/pal)。
