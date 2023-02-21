# fluent-ffmpeg

## 背景

Electron开发IM需要查看图片，同样是MP4格式的视频有些播放不了，经排查Chrome只支持H.264的视频编码，因为其它编码需要专利费。

## 命令
1. "-acodec aac" 解码方式 使用 acc
2. "-threads 2" 开启连个进程
3. "-c:v h264" 采用h264解码
