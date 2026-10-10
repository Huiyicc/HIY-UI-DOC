---
title: "FontIcon"
---

# FontIcon <Badge type="info" text="类" />

**头文件：** `#include <hiyui/icon/font_icon.h>`

**命名空间：** `hiyui`

Material Symbols 图标字体渲染器，全局单例

使用 FreeType API 直接加载 Variable Font，按码点渲染为 lv_image_dsc_t。 内部维护渲染缓存，相同参数不会重复渲染。

## 静态方法

### instance

```cpp
static FontIcon & instance()
```

获取全局单例

## 公开方法

### init

```cpp
bool init(const unsigned char *data, unsigned int size)
```

从 embed 内存数据初始化字体

data 不被拷贝，须保持有效直至下次 init 或进程结束。 重复传入相同的 data 与 size 为空操作；传入不同数据时释放当前字体 与全部渲染缓存，此前 `render()` 返回的指针全部失效。



| 参数 | 说明 |
|---|---|
| `data` | embed 生成的字体字节数组 |
| `size` | 数据大小 |


**返回值：** 失败时 `FontIcon` 保持未初始化状态，ready() 为 false

### ready

```cpp
bool ready() const
```

是否已初始化

### render

```cpp
const lv_image_dsc_t * render(uint32_t codepoint, uint32_t sizePx, const FontIconStyle &style={})
```

按码点渲染图标

返回的 lv_image_dsc_t 指针由 `FontIcon` 内部缓存管理， 生命周期与 `FontIcon` 实例相同，直到 clearCache 或析构。



| 参数 | 说明 |
|---|---|
| `codepoint` | Unicode 码点，如 HIYUI_ICON_HOME |
| `sizePx` | 渲染像素大小 |
| `style` | Variable Font 轴参数 |


**返回值：** 指针，失败返回 nullptr

### clearCache

```cpp
void clearCache()
```

清理所有渲染缓存
