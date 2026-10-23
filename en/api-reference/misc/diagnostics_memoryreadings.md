---
title: "diagnostics::MemoryReadings"
---

# diagnostics::MemoryReadings <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/misc/diagnostics.h>`

**Namespace:** `hiyui`

存活资源的字节读数；CPU 容量、文件映射和 GPU 逻辑存储不能与进程内存相加。

## Public Members

### imageCacheBytes

```cpp
Reading imageCacheBytes
```

缓存有效载荷，与 imagePixelBytes 重叠。

### imagePixelBytes

```cpp
Reading imagePixelBytes
```

以下五类图片像素容量之和，不含借用资源和分配器元数据。

### imageResampledBytes

```cpp
Reading imageResampledBytes
```

存在其他线程登记的可变像素缓冲时不可用。

### imageGifBytes

```cpp
Reading imageGifBytes
```

当前画布的 stride、调色板和像素数据，不含分配对齐空间。

### fontSourceOwnedBytes

```cpp
Reading fontSourceOwnedBytes
```

库持有的字体源容量，共享数据只计一次。

### fontMappedBytes

```cpp
Reading fontMappedBytes
```

存活文件映射长度，不代表驻留页数。

### fontHeapBytes

```cpp
Reading fontHeapBytes
```

FreeType 堆分配申请大小，不含分配器元数据。

### gpuLogicalBytes

```cpp
Reading gpuLogicalBytes
```

纹理、附件和 buffer 逻辑存储之和，不代表驱动实际显存。

### gpuBlurLogicalBytes

```cpp
Reading gpuBlurLogicalBytes
```

gpuLogicalBytes 中的模糊工作区子集。

### gpuDriverBytes

```cpp
Reading gpuDriverBytes
```

通用 OpenGL 后端不可获取。
