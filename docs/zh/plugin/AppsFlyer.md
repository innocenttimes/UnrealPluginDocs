---
sidebar: auto
---

# AppsFlyer

## 支持的平台

* Android
* iOS
* 其它平台是空的实现(Windows, Linux, ...)

## 插件的架框实现

[Plugin Architecture](../desc/)

## 使用

* 初始化 SDK

在游戏启动后, 尽可能早的初始化 SDK .
`setListener` 应该在 `init` 之前调用.

<img :src="$withBase('/assets/img/bp_appsflyer_init.png')" alt="bp_appsflyer_init">

这是一个初始化的样例代码. 从这儿我们可能知道以下信息:

* 调用 `setListener` 最好在 `init` 之前
* `setAppID`, `setDevKey` 这两个必须是要调用的.
* 其它的 `setXXX` 设置接口是可选的.

这里是 `setListener` 函数参数的样例

<img :src="$withBase('/assets/img/bp_appsflyer_listener_cb.png')" alt="bp_appsflyer_listener_cb">

* 启动 AppsFlyer

你可以在游戏中的任何时候启动 Appsflyer. 如果可以, 应该越早越好.
`setAppID`, `setDevKey`, `setDebug`, `setCustomerUserID` 这些设置应该在 `start` 之前调用.

<img :src="$withBase('/assets/img/bp_appsflyer_start.png')" alt="bp_appsflyer_start">

* LogEvent 或其它

`logEvent`, `validateAndLogInAppPurchase` 或其它方法可以在程序中按需调用.

<img :src="$withBase('/assets/img/bp_appsflyer_logevent.png')" alt="bp_appsflyer_logevent">

* 停止 AppsFlyer

一般来讲, 你不需要调用这个接口. 但是确实需要, 你可以调用它.


## API

这里的 API 命名是依据 Appsflyer 的 API 接口而定的.

```cpp
// init unreal plugin
static void init();
```

```cpp
// AppsFlyer listener
static void setListener(const FAppsFlyerCallback& callback);
```

```cpp
// appID can get from appsflyer.com
static void setAppID(const FString& appID);
```

```cpp
// devkey can get from appsflyer.com
static void setDevKey(const FString& devKey);
```

```cpp
// if enable debug
static void setDebug(bool b);
```

```cpp
static void setAdditionalData(const FString& json);
```

```cpp
static void getAppsFlyerUID(const FAppsFlyerCallbackGetUID& cb);
```

```cpp
static void setCustomerUserID(const FString& userID);
```

```cpp
static void anonymizeUser(bool b);
```

```cpp
static void collectASA(bool b);
```

```cpp
static void waitForATTUserAuthorizationWithTimeoutInterval(int seconds);
```

```cpp
static void stop();
```

```cpp
static void start();
```

```cpp
static void logEvent(const FString& evt, const FString& json);
```

```cpp
static void useReceiptValidationSandbox(bool b);
```

```cpp
/*
* validateAndLogInAppPurchase param need a json string, like follow sample.
*
* Android Params Sample:
* {
    "publicKey": "xxx",
    "signature": "xxx",
    "purchaseData": "xxx",
    "price": "xxx",
    "currency": "xxx",
    "parameters": {
        "k1": "v1",
        "k2": "v2"
    }
}
*
* iOS Params Sample:
* {
    "productIdentifier": "xxx",
    "transactionId": "xxx",
    "price": "xxx",
    "currency": "xxx",
    "parameters": {
        "k1": "v1",
        "k2": "v2"
    }
* }
*
*/
static void validateAndLogInAppPurchase(const FString& purchaseJson);
```

```cpp
static void setMinTimeBetweenSessions(int seconds);
```

```cpp
static void setResolveDeepLinkURLs(const TArray<FString>& urls);
```

```cpp
static void setImeiData(const FString& data);
```

```cpp
static void setAndroidIdData(const FString& data);
```

```cpp
static void setCollectIMEI(bool b);
```

```cpp
static void setCollectAndroidID(bool b);
```

```cpp
static void setCollectOaid(bool b);
```

## 样例工程

* [UnrealAppsFlyerPluginSample](https://github.com/innocenttimes/UnrealSampleAppsFlyer)

这个工程的界面上有三个按钮.

* 初始化按钮

测试 Appsflyer 初始化, 设置参数.

一般来说, 开发者应该在游戏启动后就初始化 Appsflyer .

* 开始按钮

测试启动 Appsflyer , 启动后 appsfler 才真正开始工作(联接服务器, 发送获取数据).
启动 Appsflyer 应该在 init 操作之后.

* 停止按钮

测试停止 Appsflyer

大多数时侯, appsflyer 都不用调用停止.

## AppsFlyer 官方档

本插件的功能都是 Appsflyer 官方提供的. 开发者在使用时候, 应该以官方的文档为准.

* [AppsFlyer iOS 文档](https://support.appsflyer.com/hc/en-us/articles/207032066-iOS-SDK-V6-X-integration-guide-for-developers#introduction)

* [AppsFlyer Android 文档](https://support.appsflyer.com/hc/en-us/articles/207032126-Android-SDK-integration-for-developers)

