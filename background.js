chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  chrome.tabs.query({},function(results) {  
    for (var i = 0, l = results.length; i < l; i++) {
      if (results[i].url == "chrome://settings/extensions#") {
        var tabId = results[i].id;
        chrome.tabs.update(tabId, {active: true});
      }
    }
  });
});
/*
chrome.browserAction.onClicked.addListener(function(tab) {
  // queryに"chrome://settings/extensions#"をurlとして入れてもextensionのページが取得できないので、
  //  全てのタブを取得してからextensionのタブを探す
  //
  chrome.tabs.query({},function(results) {  
    for (var i = 0, l = results.length; i < l; i++) {
      if (results[i].url == "chrome://settings/extensions#") {
        var tabId = results[i].id;
        chrome.tabs.update(tabId, {active: true}, function(tab) {
          reloadExtension("dimdcggmcokdnapmajgeikecmejcmmfe");
        });
      }
    }
  });
});
*/
