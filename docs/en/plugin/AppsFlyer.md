---
sidebar: auto
---

# AppsFlyer

## Supported platfrom

* Android
* iOS
* Empty implement for OtherPlatform(Windows, Linux, ...)

## Plugin Architecture Implement

[Plugin Architecture](../desc/)

## How to use

* Init SDK

init appsflyer should be after game init and as early as possible.
`setListener` should be called before `init`.

<img :src="$withBase('/assets/img/bp_appsflyer_init.png')" alt="bp_appsflyer_init">

this is a init sample code.
we can know from the sample code:

* it's good `setListener` before `init`
* must call `setAppID` and `setDevKey`
* other `setXXX` api is optional.

following is callback sample code for argument of `setListener`

<img :src="$withBase('/assets/img/bp_appsflyer_listener_cb.png')" alt="bp_appsflyer_listener_cb">

* Start AppsFlyer

you can `start` appsflyer at any time. but i suggest you as early as possible.
`setAppID`, `setDevKey`, `setDebug`, `setCustomerUserID` should be called before `start`.

<img :src="$withBase('/assets/img/bp_appsflyer_start.png')" alt="bp_appsflyer_start">

* LogEvent/Other

you can call appsflyer(e.g. `logEvent`, `validateAndLogInAppPurchase` or other methods) at any time in your game.

<img :src="$withBase('/assets/img/bp_appsflyer_logevent.png')" alt="bp_appsflyer_logevent">

* Stop

generally, you needn't call this. but if you want to stop appsflyer, you use this api.


## API

The api name of our plug-in is translated with appsflyer in blueprint.

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

## Sample Project Repo

* [UnrealAppsFlyerPluginSample](https://github.com/innocenttimes/UnrealSampleAppsFlyer)

this sample provide have three button for test.

* init button

test init appsflyer, and set properties for appsflyer.

In general, developers should call init at the start of the game.

* second button

test start appsflyer, appsflyer is real work (connect to appsflyer's server) after start

developers should call start after appsflyer init.

* third button

test stop appsflyer

developer needn't call stop, in most times.


## AppsFlyer Offical Document

AppsFlyer iOS Document: https://support.appsflyer.com/hc/en-us/articles/207032066-iOS-SDK-V6-X-integration-guide-for-developers#introduction

AppsFlyer Android Document: https://support.appsflyer.com/hc/en-us/articles/207032126-Android-SDK-integration-for-developers

