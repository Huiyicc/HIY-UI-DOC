---
title: "XmlFactoryContext"
---

# XmlFactoryContext <Badge type="info" text="类" />

**头文件：** `#include <hiyui/xml/xml_registry.h>`

**命名空间：** `hiyui`

工厂和 item collector 向当前加载过程报告错误的接口。

## 公开方法

### error

```cpp
void error(XmlDiagnosticCode code, const char *attribute, const char *message)
```

记录当前元素的错误诊断。

### hasCommand

```cpp
bool hasCommand(std::string_view name) const
```

命令名是否在当前上下文已注册。

### makeCommandAction

```cpp
std::function< void(MenuContext &)> makeCommandAction(std::string_view name) const
```

构造触发指定命令的菜单项 action。

**返回值：** 命令已注册时返回可调用 action，owner 上下文见 MenuContext； 未注册返回空。
