// ==UserScript==
// @name         Yandex.Mail Cleaner
// @namespace    http://tampermonkey.net/
// @version      0.0.3
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
	setTimeout(() => {
		remove(document.getElementsByClassName("RightColumnRoot")[0]); // Removing column with 'Switch off ads' button
		remove(document.getElementsByClassName("DirectLine")[0]); // Removing empty line above the mail actions' buttons
	}, 2000);
})();
