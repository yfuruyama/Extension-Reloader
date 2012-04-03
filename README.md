Extension Reloader
====================
Chrome Extensionをコマンド一発で自動更新させるChrome Extensionです。  
開発途中のパッケージ化されていない拡張機能が対象です。

Extension Reloader is Chrome Extension for developers to develop the extension faster.  
By hitting the command in your browser, the extension will be reloaded automatically.

How to use
-------------------------------
###1. Edit setting.js###
+ Replace EXTENSION_ID variable by your target extension id.
+ Set HotKey.  
    + ex) when you want to set Hotkey as **CTRL + Shift + r**(default is ctrl+r)

```javascript
    var EXTENSION_ID = "CHROME EXTENSION ID WHICH YOU WANT TO RELOAD";  
    var KEY_CODE = 82; // 82 is key code of 'r'  
    var CTRL_KEY = true;  
    var SHIFT_KEY = true;  
    var ALT_KEY = false;
```

###2. Register as Chrome Extension###
+ Access to [chrome://settings/extensions](chrome://settings.extensions) and register ExtensionReloader.

###3. Fire your HotKey###
+ Hit your HotKey and the extension weill be reloaded!

License
-------------------------------
This Chrome Extension is distributed as MIT license.