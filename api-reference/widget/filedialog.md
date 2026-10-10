---
title: "FileDialog"
---

# FileDialog <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/file_dialog.h>`

**命名空间：** `hiyui`

跨平台文件对话框，纯静态接口

调用平台原生文件选择器，通过回调返回结果。 在 `Application` 主循环所在的 UI 线程调用，主循环停止后调用无操作。 调用立即复制所有文本和筛选器；回调按值持有，支持只可移动闭包。 选择器不阻塞 HIY-UI 主循环，结果在后续 UI 主循环中至多交付一次， 包括取消及平台不支持时的 Error；open() 返回前不调用结果回调。 应用退出时释放未交付的回调；不保证关闭已弹出的原生选择器。

## 静态方法

### open

```cpp
static void open(FileDialogProps props, F &&callback)
```

打开文件对话框

| 名称 | 说明 |
|---|---|
| `F` | 回调类型，签名 void(const FileDialogResult&amp;) |

### open

```cpp
static void open(const Ref< T > &owner, FileDialogProps props, F &&callback)
```

打开文件对话框，并将回调有效期绑定到目标组件。 目标未挂载或已失效时无操作；等待期间目标失效会释放回调并丢弃结果。 owner 仅控制回调有效期，不设置原生父窗口。

### openFile

```cpp
static void openFile(F &&cb, const FileFilter *filters=nullptr, int filterCount=0, const char *defaultPath=nullptr)
```

打开单个文件，便捷方法

### saveFile

```cpp
static void saveFile(F &&cb, const char *defaultFilename=nullptr, const FileFilter *filters=nullptr, int filterCount=0, const char *defaultPath=nullptr)
```

保存文件，便捷方法

### selectFolder

```cpp
static void selectFolder(F &&cb, const char *defaultPath=nullptr)
```

选择目录，便捷方法
