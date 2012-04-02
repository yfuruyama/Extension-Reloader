/*
 * contentscript.js
 */

var KEY_CODE_r = 82;
var EXTENSION_ID = "dimdcggmcokdnapmajgeikecmejcmmfe";

document.onkeydown = function(event) {
  if (event.keyCode == KEY_CODE_r && event.ctrlKey) {
    chrome.extension.sendRequest({id: EXTENSION_ID});
  }
}
