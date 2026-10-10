---
title: "Video"
---

# Video <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/video.h>`

**命名空间：** `hiyui`

播放文件或网络视频，所有公开操作限于 UI 线程。 加载、播放与跳转异步完成；事件在 UI 线程交付。 格式和协议由链接的 FFmpeg 提供。父组件删除时停止并释放播放会话。 `clean()` 清空画面并停止；再次 `play()` 重新加载保存的源。 未挂载时可配置属性与播放命令；组件失效后操作无效果。 自动重连用于 HTTP(S)、RTSP(S)、RTMP(S)、TCP、UDP、RTP、SRT 和 RIST。 可寻址源恢复中断位置；其余源重新接入并重置时间线。 重连保留暂停状态和最新跳转请求，重试耗尽或永久错误进入 Error。 开启重连时，不可寻址且未知时长的流结束视为断流。 重连期间 `pause()` 设置恢复后的暂停状态；stop()、换源和销毁取消重连。

**继承自：** `hiyui::Chainable< Video >`

## 公开方法

### src

```cpp
Video & src(const char *source) &
```

替换播放源，复制路径并按初始 autoplay 配置加载。 同源也重新加载；nullptr 或空串清空。支持挂载前配置。

### play

```cpp
Video & play() &
```

开始或恢复播放；停止、结束或错误后重新打开保存的源，空源无操作。

### pause

```cpp
Video & pause() &
```

暂停声音与播放时钟，保留画面；重复调用无额外效果。

### stop

```cpp
Video & stop() &
```

释放播放会话并清空画面和时间，保留源；再次 play 从头开始。

### seek

```cpp
Video & seek(int64_t positionMs) &
```

跳转到指定毫秒位置，并保持播放或暂停状态。 位置钳制到媒体范围；尚未加载或不可寻址时无操作。 连续请求以尚未执行的最后一次为准；完成后清除旧帧和旧音频。

### volume

```cpp
Video & volume(int value) &
```

设置音量，钳制到 0–100；静音期间仍保存设置。

### playbackState

```cpp
VideoPlaybackState playbackState() const
```

**返回值：** 未挂载或已失效时为 Empty。

### positionMs

```cpp
int64_t positionMs() const
```

**返回值：** 当前毫秒位置；未加载或已失效时为 0。

### durationMs

```cpp
int64_t durationMs() const
```

**返回值：** 总时长，单位毫秒；未知、未加载或已失效时为 HIYUI_VIDEO_TIME_UNKNOWN。

### seekable

```cpp
bool seekable() const
```

**返回值：** 已加载且允许跳转时为 true。

### errorMessage

```cpp
std::string errorMessage() const
```

**返回值：** 未发生错误时为空串，返回独立副本。

### statistics

```cpp
VideoStatistics statistics() const
```

**返回值：** 当前会话的统计副本；未加载、停止或已失效时各计数为零。

### onStateChanged

```cpp
Video & onStateChanged(F &&f, EventHandle *handle=nullptr) &
```

追加播放状态订阅，参数为 VideoPlaybackState 或无参数。

### onPositionChanged

```cpp
Video & onPositionChanged(F &&f, EventHandle *handle=nullptr) &
```

追加位置订阅，参数为毫秒位置或无参数；播放期间约每 100 毫秒通知。

### onError

```cpp
Video & onError(F &&f, EventHandle *handle=nullptr) &
```

追加错误订阅，参数为错误文本或无参数；绑定可通过 `EventHandle` 解绑。
