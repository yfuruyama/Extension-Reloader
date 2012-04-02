/*
 * contentscript.js
 */

var KEY_CODE_r = 82;
var EXTENSION_ID = "CHROME EXTENSION ID WHICH YOU WANT TO RELOAD";

document.onkeydown = function(event) {
  if (event.keyCode == KEY_CODE_r && event.ctrlKey) {
    chrome.extension.sendRequest({id: EXTENSION_ID});
  }
}
