// ==UserScript==
// @name         Avito Cleaner
// @namespace    http://tampermonkey.net/
// @version      0.2.5
// @description  Unchecks commercial services and hides some intrusive ads
// @author       hant0508
// @include      https://www.avito.ru/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

function uncheck (elm) {
	if (elm !== null && elm !== undefined) {
    	elm.checked = false;
	}
}

function hide (elm) {
	elm.setAttribute('style', 'display: none !important;');
}

function hideArr (arr) {
	for(var i = 0; i < arr.length; ++i) {
		hide(arr[i]);
	}
}

(function() {
	// Removing top banner
	var elm = document.querySelector('h1[class^="styles-module-root-"]');
	if (elm != null && elm != undefined) {
		setTimeout(() => {
			// Removing top banner
			hideArr(document.getElementsByClassName('cERYi'));
			
			// Remove cards under «Мои объявления»
			elm = elm.nextElementSibling;
			if (elm !== null && elm !== undefined && elm.className.includes('Cards-module-wrapper-')) { hide(elm); }
		}, 2000);
	}
})();
