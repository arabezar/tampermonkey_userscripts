// ==UserScript==
// @name         Avito Cleaner
// @namespace    http://tampermonkey.net/
// @version      0.2.4
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
	var elm = document.getElementsByClassName('packages-tab_free')[0];
	if (elm !== null && elm !== undefined) {
		elm.closest('.packages-tab').click();
	}

	uncheck(document.getElementById('service-premium'));
	uncheck(document.getElementById('service-up-x2'));
	uncheck(document.getElementById('service-vip'));
	uncheck(document.getElementById('service-highlight'));

	hideArr(document.getElementsByClassName('profile-item-promo'));
	hideArr(document.getElementsByClassName('profile-item-warning'));

	// Removing top banner
	var elms = document.querySelectorAll('*[class^="index-module-left-block-"]');
	if (elms.length > 0) {
		setTimeout(() => {
			elm = elms[0].nextElementSibling.firstElementChild;
			if (elm !== null && elm !== undefined &&
			    elm.querySelectorAll('*[name="close"], *[class^="personal-discount-"], *[class*="Close-module-mask-"], *[class*="styles-module-closeIcon-"], *[class*="styles-module-icon-"]').length > 0) { hide(elm); }
		}, 2000);
	}

	elm = document.getElementsByClassName('js-packages')[0];
	if (elm.children[1].innerHTML.includes('Примените к объявлению пакет услуг')) {
		hide(elm);
	}
})();
