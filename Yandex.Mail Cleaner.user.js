// ==UserScript==
// @name         Yandex.Mail Cleaner
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Removes commercial services and some intrusive ads
// @author       arabezar
// @include      https://mail.yandex.ru/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

function remove (elm) {
	if (elm !== null && elm !== undefined) {
    	elm.remove();
	}
}

(function() {
    // Removing column with 'Switch off ads' button
    var elms = document.querySelectorAll('*[class^="RightColumnRoot"]');
    remove(elms[0]);

    // Removing empty line above the mail actions' buttons
    var elm = document.getElementById('js-mail-layout-content-header');
	if (elm !== null && elm !== undefined) {
		setTimeout(() => {
            remove(elm.querySelectorAll('*[class^="DirectLine"]')[0]);
		}, 1000);
	}
})();
