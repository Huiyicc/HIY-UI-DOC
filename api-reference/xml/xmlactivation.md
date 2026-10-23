---
title: "XmlActivation"
---

# XmlActivation <Badge type="info" text="类" />

**头文件：** `#include <hiyui/xml/xml_activation.h>`

**命名空间：** `hiyui`

显式展示的移动型所有者；关闭、析构或锚点销毁会释放展示资源，文件选择器仅取消结果回调。

## 公开方法

### close

```cpp
void close()
```

重复关闭无操作，诊断仍可查询。

### operator bool

```cpp
operator bool() const
```

创建成功且所有者尚未关闭；不表示自管理弹窗仍然可见。
