// ==UserScript==
// @name         Yandex.Mail Cleaner
// @namespace    http://tampermonkey.net/
// @version      0.0.5
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
		// Removing empty line above the mail actions' buttons
		remove(document.getElementsByClassName("DirectLine")[0]);
		remove(document.getElementsByClassName("rbyNFtCpuUzjHYA-portal")[0]);
		        
		// Removing column with 'Switch off ads' button
		remove(document.getElementsByClassName("RightColumnRoot")[0]);
        var elm = document.getElementsByClassName("Button2-Text");
        if (elm !== null && elm !== undefined) {
            remove(elm[0].parentNode.parentNode.parentNode);
        }
	}, 5000);
})();
