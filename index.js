module.exports=function(r){var t={};function o(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return r[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=r,o.c=t,o.d=function(e,n,r){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)o.d(r,t,function(e){return n[e]}.bind(null,t));return r},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=0)}([function(e,n,r){var t=r(1),o=r(2);t.version(o.version,"-v,--version").command("init <name>").action(function(e){console.log("name ====>>>>>",e)})},function(e,n){e.exports=require("commander")},function(e){e.exports=JSON.parse('{"name":"honeypot","version":"1.0.0","description":"","main":"index.js","scripts":{"build":"webpack --mode=production"},"author":"","license":"ISC","dependencies":{"commander":"^6.1.0"},"devDependencies":{"@babel/core":"^7.11.6","@babel/plugin-proposal-decorators":"^7.10.5","@babel/preset-env":"^7.11.5","babel-loader":"^8.1.0","babel-preset-es2015":"^6.24.1","babel-preset-stage-0":"^6.24.1","uglifyjs-webpack-plugin":"^2.2.0","webpack":"^4.44.1","webpack-cli":"^3.3.12"}}')}]);