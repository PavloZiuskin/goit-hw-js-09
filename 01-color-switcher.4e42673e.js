!function(){var t={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),body:document.querySelector("body")},n=null;t.btnStart.addEventListener("click",(function(){t.btnStart.disabled=!0,n=setInterval((function(){return t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.btnStop.addEventListener("click",(function(){t.btnStart.disabled=!1,clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.4e42673e.js.map