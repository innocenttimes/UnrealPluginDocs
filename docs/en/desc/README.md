# Info

## Description

InnocentTimes provide a set of Unreal plugins run on mobile platform.

## Implement

software architecture diagram of Unreal Plugin should be like following:

<img :src="$withBase('/assets/img/UnrealPluginStruct.svg')" alt="UnrealPluginStruct">

unreal plugin provide a blueprint api. the api uniform android/ios api of appsflyer.

We have added an empty implementation to the other platform (like win, linux ...), so that developers don't have to make platform judgment when calling, but please remember that it only works on android/ios at present.
