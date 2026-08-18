// ==UserScript==
// @name         YouTube Media
// @version      1.0
// @match        https://www.youtube.com/*
// @match        https://m.youtube.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const encoded =
        'aHR0cHM6Ly9tZWRpYS50ZW5vci5jb20vTHc0X1QybFJQR29BQUFBTS9yaWNrcm9sbC1tZW1lLmdpZg==';

    const url = atob(encoded);

    const gif = document.createElement('img');

    Object.assign(gif.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        objectFit: 'contain',
        background: 'black',
        zIndex: '2147483647'
    });

    gif.src = url;
    document.documentElement.appendChild(gif);

    setTimeout(function () {
        gif.remove();
    }, 5000);
})();
