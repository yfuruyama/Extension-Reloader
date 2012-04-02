/*
 * background.js
 */

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  var extensionId = request.id;
  chrome.management.setEnabled(extensionId, false);
  setTimeout(function() {
    // 念のため500msにセット
    chrome.management.setEnabled(extensionId, true);
  }, 500);
});
