/*
 * background.js
 */

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {

  if (request.type == 'getHotKey') {

    var keyCode = localStorage.getItem("keyCode");
    var ctrlKey = localStorage.getItem("ctrl");
    var shiftKey = localStorage.getItem("shift");
    var altKey = localStorage.getItem("alt");

    // initial settings
    if (keyCode == null) keyCode = 82;
    if (ctrlKey == null) ctrlKey = 'true';

    sendResponse({
      keyCode: keyCode,
      ctrlKey: ctrlKey,
      shiftKey: shiftKey,
      altKey: altKey
    });

  } else if (request.type == 'fireReload') {

    var extensionId = localStorage.getItem("targetExtensionId");
    chrome.management.get(extensionId, function(result) {
      var extensionName = result.name;
      alert("extension reloaded!\n " + extensionName);
    });

    // まずは無効にする
    chrome.management.setEnabled(extensionId, false);
    setTimeout(function() {
      // 500ms後にセット
      chrome.management.setEnabled(extensionId, true);
    }, 500);
  }
});
