!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},n=e.parcelRequired7c6;null==n&&((n=function(t){if(t in o)return o[t].exports;if(t in r){var e=r[t];delete r[t];var n={id:t,exports:{}};return o[t]=n,e.call(n.exports,n,n.exports),n.exports}var d=new Error("Cannot find module '"+t+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(t,e){r[t]=e},e.parcelRequired7c6=n);var d=n("6JpON");var a={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]"),body:document.querySelector("body")};a.start.addEventListener("click",(function(){a.start.setAttribute("disabled","true"),a.stop.removeAttribute("disabled"),i=setInterval((function(){var e="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));a.body.style.backgroundColor=e,t(d).Notify.success(e,{timeout:500})}),1e3)})),a.stop.addEventListener("click",(function(){clearInterval(i),a.stop.setAttribute("disabled","true"),a.start.removeAttribute("disabled")}));var i=null;a.stop.setAttribute("disabled","true"),console.log("object")}();
//# sourceMappingURL=01-color-switcher.354febb5.js.map
