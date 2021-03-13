# 信息

## 介绍

InnocentTimes 提供了一系列移动平台的 Unreal 插件.

## 实现

以下是插件的框架实现图:

<img :src="$withBase('/assets/img/UnrealPluginStruct.svg')" alt="UnrealPluginStruct">

在 Unreal 上提供统一的 API 接口, 支持 Android/iOS 平台. 在其它平台, 我们提供了一个空的实现. 这样开发者调用时, 就不用作平台判断了. 但是开发者应该要记住, 只在 Andoird/iOS 才有实现.
