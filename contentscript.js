/*
 * contentscript.js
 */

document.onkeydown = function(event) {

  chrome.extension.sendMessage({type: 'getHotKey'}, function(response) {
    
    // convert String to Integer
    var keyCode = parseInt(response.keyCode);

    // convert String to Boolean
    var ctrlKey = ('true' === response.ctrlKey);
    var shiftKey = ('true' === response.shiftKey);
    var altKey = ('true' === response.altKey);

    if ((keyCode === event.keyCode)
    && (ctrlKey === event.ctrlKey)
    && (shiftKey === event.shiftKey)
    && (altKey === event.altKey)) {

      chrome.extension.sendMessage({type: 'fireReload'});
    }
  });
}
