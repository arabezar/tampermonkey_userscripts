// ==UserScript==
// @name         Yandex.Mail Cleaner
// @namespace    http://tampermonkey.net/
// @version      0.0.7
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

function getFirstElementByXPath(xpath) {
    const result = document.evaluate(
        xpath,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
    );
    return result.singleNodeValue;
}

(function() {
	setTimeout(() => {
		// Removing empty line above the mail actions' buttons
        const el = document.querySelectorAll('[class$="-portal"]');
        el.forEach(element => element.remove());

        // Removing column with 'Switch off ads' button
        remove(getFirstElementByXPath("//span[contains(text(),'Отключить рекламу')]"), 3);
	}, 10000);
})();
