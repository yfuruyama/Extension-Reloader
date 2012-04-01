var KEY_CODE_r = 82;
window.onkeydown = function(event) {
  if (event.keyCode == KEY_CODE_r && event.ctrlKey) {
    chrome.extension.sendRequest({});
  }
}

// function reloadExtension(extensionId) {
  // var event = document.createEvent("MouseEvents");
  // event.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

  // var links = document.getElementsByClassName("extension-links-trailing");
  // alert(links.length);
  // for (var i = 0, l = links.length; i < l; i++) {
    // if (links[i].id === extensionId) {
      // links[i].dispatchEvent(event);
      // break;
    // }
  // }
// }
// reloadExtension("dimdcggmcokdnapmajgeikecmejcmmfe");
