Extension Reloader
====================
Chrome Extensionをコマンド一発で自動更新させるChrome Extensionです。  
開発途中のパッケージ化されていない拡張機能が対象です。

Extension Reloader is Chrome Extension for developers to develop the extension faster.  
By hitting the command in your browser, the extension will be reloaded automatically.

使い方 - How to use
-------------------------------
###1. setting.jsファイルの編集###
+ **EXTENSION_ID**をターゲットとなるExtensionのIDに差し替え、ホットキーを設定  
+ 例: ホットキーを **CTRL + Shift + r** にする場合 (デフォルトはctrl+r)

```javascript
    var EXTENSION_ID = "CHROME EXTENSION ID WHICH YOU WANT TO RELOAD";  
    var KEY_CODE = 82; // 82 is key code of 'r'  
    var CTRL_KEY = true;  
    var SHIFT_KEY = true;  
    var ALT_KEY = false;
```

###2. Chrome Extensionに登録###
+ **chrome://settings/extensions**にアクセスし、ExtensionReloaderを登録

###3. Extension Reloaderを実行###
+ Chrome上でホットキーを入力すると、指定したIDのExtensionが自動でリロード！