let href = chrome.extension.getURL("scripts/setMode.js")
let script = document.createElement('script')
script.setAttribute("type", "text/javascript");
script.src = href
document.getElementsByTagName("head")[0].appendChild(script);