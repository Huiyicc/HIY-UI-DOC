---
title: Video 视频播放
---

## Video

`Video` 播放本地文件或网络视频，提供声音、暂停、停止和毫秒进度跳转。启用条件为 `HIYUI_ENABLE_FFMPEG=ON`、原生 SDL 后端以及 FFmpeg 6 或更新版本的 LGPL 动态库 SDK。格式、解码器和网络协议由实际 FFmpeg 构建决定。

### 头文件

组件声明位于以下头文件，启用 FFmpeg 后也可通过 `hiyui/hiyui.h` 引入。

```cpp
#include <hiyui/widget/video.h>
```

### 最小示例

在 UI 线程执行，`parent` 为已挂载的 `Widget`；路径按 UTF-8 传入。

```cpp
using namespace hiyui;
Video video({.src = "example.mp4", .height = 320});
video.init(parent);
video.play();
```

### Props 参数表

| 字段 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `src` | `const char *` | `nullptr` | 文件路径或网络地址，构造时复制；空指针或空串表示空源 |
| `width` | `int` | `HIYUI_AUTO` | 逻辑像素；自动值填充父容器宽度 |
| `height` | `int` | `HIYUI_AUTO` | 逻辑像素；自动值填充父容器高度 |
| `fit` | `ImageFit` | `ImageFit::Contain` | 画面缩放和对齐方式 |
| `autoplay` | `bool` | `false` | 加载后是否播放；关闭时显示首帧并暂停 |
| `loop` | `bool` | `false` | 可寻址媒体结束后从头播放；直播忽略 |
| `muted` | `bool` | `false` | 静音，保留保存的音量 |
| `volume` | `int` | `100` | 音量钳制到 0–100，0 表示无声 |
| `ioTimeoutMs` | `int` | `10000` | 打开与探测、单次跳转或连续等待读包的超时毫秒数；非正值使用 10000 |
| `reconnectAttempts` | `int` | `0` | 每次中断最多重连次数；非正值关闭，恢复出帧后重新计数 |
| `reconnectDelayMs` | `int` | `1000` | 每次重连前等待的毫秒数；非正值使用 1000 |

`HIYUI_AUTO` 与时间哨兵见 [常量与哨兵值](/core/constants)。组件未内置控制条，可组合 `Button`、`Slider` 和 `Switch`；组件画廊（`test/demo/component_gallery`）提供文件选择、地址输入与播放控制示例。

### 运行时方法表

下表的链式方法对左值返回 `Video &`，对右值返回 `Video &&`。所有操作和事件回调均在 UI 线程进行；加载、播放与跳转异步完成。

| 方法 | 返回 | 说明 |
|---|---|---|
| `init(parent)` | `Video &` / `Video &&` | 挂载到父组件并加载初始源 |
| `src(source)` | `Video &` / `Video &&` | 复制并加载源，遵循初始 `autoplay`；同源也重新加载，空指针或空串清空 |
| `play()` | `Video &` / `Video &&` | 开始或恢复；停止、结束或错误后重新打开保存的源；空源无操作 |
| `pause()` | `Video &` / `Video &&` | 暂停声音与时钟，保留画面；重连期间设置恢复后暂停；重复调用无额外效果 |
| `stop()` | `Video &` / `Video &&` | 取消重连，释放会话并清空画面和时间，保留源；再次播放从头开始 |
| `seek(positionMs)` | `Video &` / `Video &&` | 跳转到毫秒位置并保持播放或暂停状态；钳制到媒体范围，未加载或不可寻址时无操作 |
| `fit(value)` | `Video &` / `Video &&` | 改变画面缩放和对齐方式 |
| `loop(value)` | `Video &` / `Video &&` | 开关循环，仅可寻址媒体生效 |
| `muted(value)` | `Video &` / `Video &&` | 开关静音，保存的音量不变 |
| `volume(value)` | `Video &` / `Video &&` | 设置音量并钳制到 0–100 |
| `playbackState()` | `VideoPlaybackState` | 未挂载或组件已失效时为 `Empty` |
| `positionMs()` | `int64_t` | 当前毫秒位置；未加载或失效时为 0 |
| `durationMs()` | `int64_t` | 总时长，单位毫秒；未知、未加载或失效时为 `HIYUI_VIDEO_TIME_UNKNOWN` |
| `seekable()` | `bool` | 已加载且支持跳转时为 `true` |
| `errorMessage()` | `std::string` | 错误文本的独立副本；无错误时为空串 |
| `statistics()` | `VideoStatistics` | 当前会话统计的独立副本；未加载、停止或失效时各计数为零 |
| `onStateChanged(callback, handle)` | `Video &` / `Video &&` | 追加状态订阅，回调接收 `VideoPlaybackState` 或无参数 |
| `onPositionChanged(callback, handle)` | `Video &` / `Video &&` | 追加位置订阅，回调接收 `int64_t` 毫秒位置或无参数；播放期间约每 100 毫秒通知 |
| `onError(callback, handle)` | `Video &` / `Video &&` | 追加错误订阅，回调接收错误字符串或无参数 |

事件的 `handle` 为可选 `EventHandle *`，默认为 `nullptr`；调用 `off()` 解绑。`EventHandle` 析构不会自动解绑，组件删除时会清理订阅。

### 播放状态

| 值 | 说明 |
|---|---|
| `VideoPlaybackState::Empty` | 未设置源 |
| `VideoPlaybackState::Loading` | 正在打开媒体或准备首帧 |
| `VideoPlaybackState::Paused` | 已暂停，保留当前位置画面 |
| `VideoPlaybackState::Playing` | 正在播放 |
| `VideoPlaybackState::Stopped` | 已停止并释放会话，保存的源可重新打开 |
| `VideoPlaybackState::Ended` | 媒体播放结束 |
| `VideoPlaybackState::Error` | 加载或播放失败，可通过 `errorMessage()` 读取原因 |
| `VideoPlaybackState::Reconnecting` | 等待或执行自动重连，保留最后画面与播放意图 |

播放状态与 `Widget::enabled()` 等组件交互状态相互独立。隐藏或禁用组件不等同于暂停，应用需要停止声音时应调用 `pause()` 或 `stop()`。

### 网络超时与重连

`ioTimeoutMs` 限制打开与探测、单次跳转和连续等待读包的时间；暂停等候不计入读包超时。自动重连默认关闭，设置正数 `reconnectAttempts` 后启用；初次连接不计入重连次数。

自动重连用于 HTTP(S)、RTSP(S)、RTMP(S)、TCP、UDP、RTP、SRT 和 RIST 地址。可重试的连接或读取故障使组件进入 `Reconnecting`；恢复出帧后，组件继续播放或保持暂停，并重新计算该次中断的重试次数。重试耗尽或发生永久性错误时进入 `Error`，通过 `onError()` 通知错误。

可寻址源恢复中断位置或最新的 `seek()` 请求；不可寻址源重新接入并重置时间线。启用重连后，不可寻址且未知时长的网络流结束视为断流；已知时长媒体的正常结束仍为 `Ended`。

`pause()` 可在重连期间设置恢复后的暂停状态。`stop()`、替换或清空源、销毁组件都会取消重连。

为网络视频设置 10 秒 I/O 超时，每次中断最多重连 3 次，每次间隔 1 秒；地址替换为实际服务。

```cpp
Video stream({.src = "https://example.com/live.ts",
              .autoplay = true,
              .ioTimeoutMs = 10000,
              .reconnectAttempts = 3,
              .reconnectDelayMs = 1000});
stream.init(parent);
```

### 画面适配

| 值 | 说明 |
|---|---|
| `ImageFit::Default` | 原始显示尺寸，左上角对齐 |
| `ImageFit::Center` | 原始显示尺寸，居中对齐 |
| `ImageFit::Stretch` | 拉伸到组件内容区域 |
| `ImageFit::Contain` | 保持显示比例，完整显示并居中；剩余区域显示组件背景 |
| `ImageFit::Cover` | 保持显示比例，覆盖内容区域并居中裁剪 |
| `ImageFit::Tile` | 在内容区域平铺画面 |

默认背景为黑色，可通过组件样式设置。组件尺寸随布局和 DPI 更新；父容器尺寸变化后，画面按当前 `fit` 重新适配。

### 硬件解码与呈现

`HIYUI_VIDEO_HARDWARE` 默认为 `ON`。启用 FFmpeg、使用 Windows 原生 SDL 后端且 `HIYUI_RENDER_BACKEND` 为 `AUTO` 或 `SW` 时，可使用 D3D11VA 硬件解码。运行时还需要 D3D11 渲染器、可共享的设备以及显卡和 FFmpeg 对当前编码格式的支持；条件不满足时使用软件解码。其他平台、其他渲染后端或设置为 `OFF` 时使用软件解码。

NV12/P010 硬件帧可在 GPU 上合成。需要 CPU 处理的图像效果、部分帧格式及逐像素透明窗口会产生回读；硬件解码不代表回读次数为零。GPU 呈现路径包含显存内复制，不提供端到端零拷贝保证。

### 播放统计

`statistics()` 返回 `VideoStatistics`。计数在当前会话内累计，跳转和自动重连不清零，停止或显式重新打开源时重置。解码方式由实际输出的帧决定。

| 值 | 说明 |
|---|---|
| `VideoDecoder::None` | 尚未解码出视频帧 |
| `VideoDecoder::Software` | 软件解码 |
| `VideoDecoder::D3D11` | D3D11VA 硬件解码 |

| 字段 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `decoder` | `VideoDecoder` | `VideoDecoder::None` | 最近解码帧使用的解码方式 |
| `width` | `int` | `0` | 最近解码帧的像素宽度 |
| `height` | `int` | `0` | 最近解码帧的像素高度 |
| `decodedFrames` | `uint64_t` | `0` | 已解码的视频帧数 |
| `droppedFrames` | `uint64_t` | `0` | 落后于播放时钟而跳过的帧数，不含跳转预读 |
| `gpuFrames` | `uint64_t` | `0` | 直接提交到 GPU 合成的硬件帧数，不含重复绘制 |
| `readbackCount` | `uint64_t` | `0` | 硬件帧或合成图层回读到 CPU 的次数 |
| `decodeTimeUs` | `uint64_t` | `0` | 解码调用累计微秒，含调用内等待 |
| `conversionTimeUs` | `uint64_t` | `0` | 视频帧准备和 CPU 像素转换累计微秒 |

`gpuFrames` 不表示实际显示帧率，两个耗时字段不表示 GPU 执行耗时。`readbackCount` 按回读操作计数，不能按视频帧数换算。

### 进阶用法

为已挂载的 `video` 增加播放按钮，回调按值保存 `Ref`，目标删除后不再执行播放。

```cpp
Ref<Video> player(video);
Button({.text = "播放"}).init(parent).onClick([player] {
    if (player)
        player->play();
});
```

在媒体加载后跳转到第 10 秒；暂停状态下跳转会更新画面，保持暂停。

```cpp
if (video.seekable())
    video.seek(10'000);
```

连续跳转请求以尚未执行的最后一次为准。进度条仅在 `seekable()` 为 `true` 且 `durationMs()` 大于 0 时启用比例拖动；直播或未知时长不能据时长计算百分比。

为已挂载的 `video` 显示错误文本，标签引用随页面删除而失效。

```cpp
Ref<Label> errorText;
Label().init(parent).ref(errorText).textColor(ThemeRole::Danger);
video.onError([errorText](const std::string &message) {
    if (errorText)
        errorText->text(message);
});
```

### 生命周期与范围

父组件删除时停止播放并释放会话。`clean()` 清空内部画面并停止；再次 `play()` 重新加载保存的源。包装器离开作用域不删除已挂载组件，长期回调使用 `Ref<Video>` 并在访问前判断其有效性。

挂载前可配置源、属性及播放、暂停、停止命令；`seek()` 需要媒体已经加载。已失效的包装器操作无效果，查询返回空状态。

当前版本不提供摄像头枚举、运行时指定解码器或独立播放器插件加载 API。网络播放能力取决于链接库的协议支持和服务器行为。

### C 接口

头文件为 `hiyui/c/video.h`，也由 `hiyui/c/hiyui.h` 引入。`hiyui_video_available()` 表示构建是否启用了 FFmpeg。未启用时返回 0，创建返回 `NULL`，命令无操作；启用后打开媒体时需要提供版本匹配的动态库。

在 C 的 UI 回调中创建并播放视频，`parent` 为有效父组件句柄。

```c
hiyui_video_props_t props = {0};
props.src = "example.mp4";
props.height = 320;
hiyui_widget_t *video = hiyui_video_create(parent, &props);
if (video)
    hiyui_video_play(video);
```

| 字段 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `src` | `const char *` | `NULL` | 创建时复制 UTF-8 路径或地址；空串表示空源 |
| `width` | `int` | `0` | 逻辑像素；0 或 `HIYUI_AUTO` 填充父容器宽度 |
| `height` | `int` | `0` | 逻辑像素；0 或 `HIYUI_AUTO` 填充父容器高度 |
| `fit` | `hiyui_image_fit_t` | `HIYUI_IMAGE_FIT_DEFAULT` | 使用 Contain；其余值选择对应适配方式 |
| `autoplay` | `hiyui_bool_t` | `HIYUI_BOOL_DEFAULT` | 按 false 处理 |
| `loop` | `hiyui_bool_t` | `HIYUI_BOOL_DEFAULT` | 按 false 处理 |
| `muted` | `hiyui_bool_t` | `HIYUI_BOOL_DEFAULT` | 按 false 处理 |
| `volume` | `int` | `0` | 使用默认音量 100；其余值钳制到 0–100 |
| `io_timeout_ms` | `int` | `0` | 打开与探测、单次跳转或连续等待读包的超时毫秒数；非正值使用 10000 |
| `reconnect_attempts` | `int` | `0` | 每次中断最多重连次数；非正值关闭，恢复出帧后重新计数 |
| `reconnect_delay_ms` | `int` | `0` | 每次重连前等待的毫秒数；非正值使用 1000 |

C Props 表中的默认值来自零初始化。需要初始静音时设置 `muted = HIYUI_BOOL_TRUE`；运行时 `hiyui_video_set_volume(video, 0)` 将音量设为 0。布尔运行时方法使用 `int`，0 关闭、非零开启。

| 方法 | 返回 | 说明 |
|---|---|---|
| `hiyui_video_available()` | `int` | 启用 FFmpeg 为 1；不表示媒体或音频设备可用 |
| `hiyui_video_create(parent, props)` | `hiyui_widget_t *` | 借用组件；`props` 可为 `NULL`，空父组件、未启用或失败返回 `NULL` |
| `hiyui_video_set_src(video, source)` | `void` | 复制并加载源；遵循初始 autoplay，同源也重新加载，空指针或空串清空 |
| `hiyui_video_play(video)` | `void` | 开始或恢复；停止、结束或错误后重新打开源 |
| `hiyui_video_pause(video)` | `void` | 暂停声音与时钟，保留画面；重连期间设置恢复后暂停 |
| `hiyui_video_stop(video)` | `void` | 取消重连，释放会话，清空画面和时间，保存源 |
| `hiyui_video_seek(video, position_ms)` | `void` | 异步跳转到毫秒位置并保持播放或暂停状态；未加载或不可寻址时无操作 |
| `hiyui_video_set_fit(video, fit)` | `void` | 设置画面适配，DEFAULT 使用 Contain |
| `hiyui_video_set_loop(video, loop)` | `void` | 开关可寻址媒体的循环 |
| `hiyui_video_set_muted(video, muted)` | `void` | 开关静音，保存的音量不变 |
| `hiyui_video_set_volume(video, volume)` | `void` | 音量钳制到 0–100 |
| `hiyui_video_get_state(video)` | `hiyui_video_playback_state_t` | 空组件或未启用时为 `HIYUI_VIDEO_EMPTY` |
| `hiyui_video_get_position_ms(video)` | `int64_t` | 毫秒位置；未加载、空组件或未启用时为 0 |
| `hiyui_video_get_duration_ms(video)` | `int64_t` | 毫秒时长；未知、未加载、空组件或未启用时为 `HIYUI_VIDEO_TIME_UNKNOWN` |
| `hiyui_video_seekable(video)` | `int` | 已加载且可寻址为 1，其余为 0 |
| `hiyui_video_get_error(video, buffer, capacity)` | `size_t` | 复制错误文本；返回完整文本所需字节数，包含结尾的零 |
| `hiyui_video_get_statistics(video, statistics)` | `void` | 写入统计副本；输出指针为 `NULL` 时无操作，空组件、未加载、停止或未启用时输出全零 |
| `hiyui_video_on_state_changed(video, callback, user_data, destroy, out_handle)` | `int` | 追加状态订阅，成功为 1，失败为 0 |
| `hiyui_video_on_position_changed(video, callback, user_data, destroy, out_handle)` | `int` | 追加毫秒位置订阅，成功为 1，失败为 0 |
| `hiyui_video_on_error(video, callback, user_data, destroy, out_handle)` | `int` | 追加错误文本订阅，成功为 1，失败为 0；文本仅在回调内有效 |

错误缓冲可为 `NULL` 或容量为 0，此时仅查询所需字节数。非空缓冲且容量大于 0 时始终以零结尾；容量不足时截断。无错误、空组件或未启用时文本为空串，所需容量为 1。

订阅接管带 `destroy` 的 `user_data`，失败时也释放；解绑或组件删除时释放，执行中的回调会完成后再释放。`out_handle` 可为 `NULL`；非空时 `*out_handle` 必须先置为 `NULL`，成功后使用 `hiyui_event_handle_destroy()` 单独释放。C 组件句柄在销毁后不得再次传入这些函数。

#### C 播放状态

状态查询和状态订阅使用 `hiyui_video_playback_state_t`。

| 值 | 说明 |
|---|---|
| `HIYUI_VIDEO_EMPTY` | 未设置源 |
| `HIYUI_VIDEO_LOADING` | 正在打开媒体或准备首帧 |
| `HIYUI_VIDEO_PAUSED` | 已暂停，保留当前位置画面 |
| `HIYUI_VIDEO_PLAYING` | 正在播放 |
| `HIYUI_VIDEO_STOPPED` | 已停止并释放会话，保存的源可重新打开 |
| `HIYUI_VIDEO_ENDED` | 媒体播放结束 |
| `HIYUI_VIDEO_ERROR` | 加载或播放失败，可读取错误文本 |
| `HIYUI_VIDEO_RECONNECTING` | 等待或执行自动重连，保留最后画面与播放意图 |

#### C 播放统计

在 UI 线程读取有效视频组件的统计副本。

```c
hiyui_video_statistics_t statistics = {0};
hiyui_video_get_statistics(video, &statistics);
```

`hiyui_video_statistics_t` 的计数在当前会话内累计，跳转和自动重连不清零，停止或显式重新打开源时重置。下表默认值表示零初始化状态。

| 字段 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `decoder` | `hiyui_video_decoder_t` | `HIYUI_VIDEO_DECODER_NONE` | 最近解码帧使用的解码方式 |
| `width` | `int` | `0` | 最近解码帧的像素宽度 |
| `height` | `int` | `0` | 最近解码帧的像素高度 |
| `decoded_frames` | `uint64_t` | `0` | 已解码的视频帧数 |
| `dropped_frames` | `uint64_t` | `0` | 落后于播放时钟而跳过的帧数，不含跳转预读 |
| `gpu_frames` | `uint64_t` | `0` | 直接提交到 GPU 合成的硬件帧数，不含重复绘制 |
| `readback_count` | `uint64_t` | `0` | 硬件帧或合成图层回读到 CPU 的次数 |
| `decode_time_us` | `uint64_t` | `0` | 解码调用累计微秒，含调用内等待 |
| `conversion_time_us` | `uint64_t` | `0` | 视频帧准备和 CPU 像素转换累计微秒 |

解码方式使用以下枚举值。

| 值 | 说明 |
|---|---|
| `HIYUI_VIDEO_DECODER_NONE` | 尚未解码出视频帧 |
| `HIYUI_VIDEO_DECODER_SOFTWARE` | 软件解码 |
| `HIYUI_VIDEO_DECODER_D3D11` | D3D11VA 硬件解码 |

## 相关页面

- [C++ 画廊与 FFmpeg 部署](/build/cpp-gallery)
- [视频自动测试与统计采样](/build/cpp-gallery#视频自动测试)
- [编译参数](/build/options)
- [常量与哨兵值](/core/constants)
- [Container 与 Ref](/core/container-ref)
- [事件](/core/event-system)
