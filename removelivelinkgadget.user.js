// ==UserScript==
// @name       Remove Livelink Gadget
// @author       Dan Misener
// @namespace  http://misener.org
// @version    0.1
// @description  Remove the default Livelink Gadget from Gmail web interface
// @include     https://mail.google.com/*
// @match       https://mail.google.com/*
// @updateURL	https://github.com/misener/Remove-Livelink-Gadget/raw/master/removelivelinkgadget.user.js
// ==/UserScript==
 
document.getElementsByClassName('hi')[0].remove();