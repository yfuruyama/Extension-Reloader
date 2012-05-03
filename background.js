/*
 * background.js
 */

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  var extensionId = localStorage.getItem("targetExtensionId");
  chrome.management.get(extensionId, function(result) {
    var extensionName = result.name;
    alert("extension reloaded!\n " + extensionName);
  });

  // まずは無効にする
  chrome.management.setEnabled(extensionId, false);
  setTimeout(function() {
    // 念のため500msにセット
    chrome.management.setEnabled(extensionId, true);
  }, 500);
});
