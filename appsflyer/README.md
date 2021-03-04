# AppsFlyer

## API

```cpp
static void init();
```

```cpp
static void setListener(const FAppsFlyerCallback& callback);
```

```cpp
static void setAppID(const FString& appID);
```

```cpp
static void setDevKey(const FString& devKey);
```

```cpp
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

## Contact Information

feel free to contact me, if you have any issues.

* Mail: hugohuang1111@gmail.com
* Wechat: hugohuang1111
