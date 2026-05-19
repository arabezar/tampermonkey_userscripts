// ==UserScript==
// @name         Yandex.Mail Cleaner
// @namespace    http://tampermonkey.net/
// @version      0.0.6
// @description  Removes commercial services and some intrusive ads
// @author       arabezar
// @include      https://mail.yandex.ru/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

function remove (elm, levelsUp = 0) {
	while (elm !== null && elm !== undefined && levelsUp > 0) {
		elm = elm.parentNode;
		levelsUp --;
	}
	if (levelsUp == 0 && elm !== null && elm !== undefined) {
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
        //remove(document.getElementsByClassName("Button2-Text")[0], 3);
		remove(document.getElementById("rQTkavChzcXzbcWw"), 2);
	}, 10000);
})();
