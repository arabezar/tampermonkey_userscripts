// ==UserScript==
// @name         Avito Item Archive Cleaner
// @namespace    http://tampermonkey.net/
// @version      2025-09-27
// @description  Removes garbage from the page
// @author       arabezar
// @match        https://www.avito.ru/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=avito.ru
// @grant        none
// @run-at       context-menu
// ==/UserScript==

function hide (elm) {
    if (elm !== null && elm !== undefined) {
        elm.setAttribute('style', 'display: none !important;');
    }
}

function hideArr (arr) {
    if (arr !== null && arr !== undefined) {
        for (var i = 0; i < arr.length; ++i) {
            hide(arr[i]);
        }
    }
}

function remove (elm) {
    if (elm !== null && elm !== undefined) {
    	elm.remove();
    }
}

function removeArr(arr) {
    if (arr !== null && arr !== undefined) {
        for (var i = 0; i < arr.length; ++i) {
            remove(arr[i]);
        }
    }
}

(function() {
    var garbage = document.getElementById('app').firstChild.children;
	for (var i = 0; i < garbage.length; ++i) {
        if (garbage[i].className.includes('VifOf')) {
            continue;
        } else {
            hide(garbage[i]);
        }
    }

    remove(document.querySelector('div[class^="styles-similars-"]'));
    remove(document.querySelector('div[class*="styles-module-root-"]'));
})();