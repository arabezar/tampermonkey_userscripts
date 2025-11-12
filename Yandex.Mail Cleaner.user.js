// ==UserScript==
// @name         Yandex.Mail Cleaner
// @namespace    http://tampermonkey.net/
// @version      0.0.2
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
    var elm = document.getElementById('js-mail-layout-content-header');
	if (elm !== null && elm !== undefined) {
		setTimeout(() => {
			remove(elm.getElementsByClassName("DirectLine")[0]); // Removing empty line above the mail actions' buttons
			remove(document.getElementsByClassName("RightColumnRoot")[0]); // Removing column with 'Switch off ads' button
		}, 2000);
	}
})();
