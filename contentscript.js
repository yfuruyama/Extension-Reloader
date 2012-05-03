/*
 * contentscript.js
 */

document.onkeydown = function(event) {
  if (KEY_CODE == event.keyCode
      && (CTRL_KEY == event.ctrlKey)
      && (SHIFT_KEY == event.shiftKey)
      && (ALT_KEY == event.altKey)) {
    chrome.extension.sendRequest({});
  }
}
