#!/usr/bin/env node
!function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=2)}([function(e,r){e.exports=require("fs")},function(e,r,n){var t=n(13),o={};for(var a in t)t.hasOwnProperty(a)&&(o[t[a]]=a);var s=e.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var l in s)if(s.hasOwnProperty(l)){if(!("channels"in s[l]))throw new Error("missing channels property: "+l);if(!("labels"in s[l]))throw new Error("missing channel labels property: "+l);if(s[l].labels.length!==s[l].channels)throw new Error("channel and label counts mismatch: "+l);var i=s[l].channels,c=s[l].labels;delete s[l].channels,delete s[l].labels,Object.defineProperty(s[l],"channels",{value:i}),Object.defineProperty(s[l],"labels",{value:c})}s.rgb.hsl=function(e){var r,n,t=e[0]/255,o=e[1]/255,a=e[2]/255,s=Math.min(t,o,a),l=Math.max(t,o,a),i=l-s;return l===s?r=0:t===l?r=(o-a)/i:o===l?r=2+(a-t)/i:a===l&&(r=4+(t-o)/i),(r=Math.min(60*r,360))<0&&(r+=360),n=(s+l)/2,[r,100*(l===s?0:n<=.5?i/(l+s):i/(2-l-s)),100*n]},s.rgb.hsv=function(e){var r,n,t,o,a,s=e[0]/255,l=e[1]/255,i=e[2]/255,c=Math.max(s,l,i),u=c-Math.min(s,l,i),h=function(e){return(c-e)/6/u+.5};return 0===u?o=a=0:(a=u/c,r=h(s),n=h(l),t=h(i),s===c?o=t-n:l===c?o=1/3+r-t:i===c&&(o=2/3+n-r),o<0?o+=1:o>1&&(o-=1)),[360*o,100*a,100*c]},s.rgb.hwb=function(e){var r=e[0],n=e[1],t=e[2];return[s.rgb.hsl(e)[0],100*(1/255*Math.min(r,Math.min(n,t))),100*(t=1-1/255*Math.max(r,Math.max(n,t)))]},s.rgb.cmyk=function(e){var r,n=e[0]/255,t=e[1]/255,o=e[2]/255;return[100*((1-n-(r=Math.min(1-n,1-t,1-o)))/(1-r)||0),100*((1-t-r)/(1-r)||0),100*((1-o-r)/(1-r)||0),100*r]},s.rgb.keyword=function(e){var r=o[e];if(r)return r;var n,a,s,l=1/0;for(var i in t)if(t.hasOwnProperty(i)){var c=t[i],u=(a=e,s=c,Math.pow(a[0]-s[0],2)+Math.pow(a[1]-s[1],2)+Math.pow(a[2]-s[2],2));u<l&&(l=u,n=i)}return n},s.keyword.rgb=function(e){return t[e]},s.rgb.xyz=function(e){var r=e[0]/255,n=e[1]/255,t=e[2]/255;return[100*(.4124*(r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92)+.3576*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)+.1805*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)),100*(.2126*r+.7152*n+.0722*t),100*(.0193*r+.1192*n+.9505*t)]},s.rgb.lab=function(e){var r=s.rgb.xyz(e),n=r[0],t=r[1],o=r[2];return t/=100,o/=108.883,n=(n/=95.047)>.008856?Math.pow(n,1/3):7.787*n+16/116,[116*(t=t>.008856?Math.pow(t,1/3):7.787*t+16/116)-16,500*(n-t),200*(t-(o=o>.008856?Math.pow(o,1/3):7.787*o+16/116))]},s.hsl.rgb=function(e){var r,n,t,o,a,s=e[0]/360,l=e[1]/100,i=e[2]/100;if(0===l)return[a=255*i,a,a];r=2*i-(n=i<.5?i*(1+l):i+l-i*l),o=[0,0,0];for(var c=0;c<3;c++)(t=s+1/3*-(c-1))<0&&t++,t>1&&t--,a=6*t<1?r+6*(n-r)*t:2*t<1?n:3*t<2?r+(n-r)*(2/3-t)*6:r,o[c]=255*a;return o},s.hsl.hsv=function(e){var r=e[0],n=e[1]/100,t=e[2]/100,o=n,a=Math.max(t,.01);return n*=(t*=2)<=1?t:2-t,o*=a<=1?a:2-a,[r,100*(0===t?2*o/(a+o):2*n/(t+n)),100*((t+n)/2)]},s.hsv.rgb=function(e){var r=e[0]/60,n=e[1]/100,t=e[2]/100,o=Math.floor(r)%6,a=r-Math.floor(r),s=255*t*(1-n),l=255*t*(1-n*a),i=255*t*(1-n*(1-a));switch(t*=255,o){case 0:return[t,i,s];case 1:return[l,t,s];case 2:return[s,t,i];case 3:return[s,l,t];case 4:return[i,s,t];case 5:return[t,s,l]}},s.hsv.hsl=function(e){var r,n,t,o=e[0],a=e[1]/100,s=e[2]/100,l=Math.max(s,.01);return t=(2-a)*s,n=a*l,[o,100*(n=(n/=(r=(2-a)*l)<=1?r:2-r)||0),100*(t/=2)]},s.hwb.rgb=function(e){var r,n,t,o,a,s,l,i=e[0]/360,c=e[1]/100,u=e[2]/100,h=c+u;switch(h>1&&(c/=h,u/=h),t=6*i-(r=Math.floor(6*i)),0!=(1&r)&&(t=1-t),o=c+t*((n=1-u)-c),r){default:case 6:case 0:a=n,s=o,l=c;break;case 1:a=o,s=n,l=c;break;case 2:a=c,s=n,l=o;break;case 3:a=c,s=o,l=n;break;case 4:a=o,s=c,l=n;break;case 5:a=n,s=c,l=o}return[255*a,255*s,255*l]},s.cmyk.rgb=function(e){var r=e[0]/100,n=e[1]/100,t=e[2]/100,o=e[3]/100;return[255*(1-Math.min(1,r*(1-o)+o)),255*(1-Math.min(1,n*(1-o)+o)),255*(1-Math.min(1,t*(1-o)+o))]},s.xyz.rgb=function(e){var r,n,t,o=e[0]/100,a=e[1]/100,s=e[2]/100;return n=-.9689*o+1.8758*a+.0415*s,t=.0557*o+-.204*a+1.057*s,r=(r=3.2406*o+-1.5372*a+-.4986*s)>.0031308?1.055*Math.pow(r,1/2.4)-.055:12.92*r,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,[255*(r=Math.min(Math.max(0,r),1)),255*(n=Math.min(Math.max(0,n),1)),255*(t=Math.min(Math.max(0,t),1))]},s.xyz.lab=function(e){var r=e[0],n=e[1],t=e[2];return n/=100,t/=108.883,r=(r/=95.047)>.008856?Math.pow(r,1/3):7.787*r+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(r-n),200*(n-(t=t>.008856?Math.pow(t,1/3):7.787*t+16/116))]},s.lab.xyz=function(e){var r,n,t,o=e[0];r=e[1]/500+(n=(o+16)/116),t=n-e[2]/200;var a=Math.pow(n,3),s=Math.pow(r,3),l=Math.pow(t,3);return n=a>.008856?a:(n-16/116)/7.787,r=s>.008856?s:(r-16/116)/7.787,t=l>.008856?l:(t-16/116)/7.787,[r*=95.047,n*=100,t*=108.883]},s.lab.lch=function(e){var r,n=e[0],t=e[1],o=e[2];return(r=360*Math.atan2(o,t)/2/Math.PI)<0&&(r+=360),[n,Math.sqrt(t*t+o*o),r]},s.lch.lab=function(e){var r,n=e[0],t=e[1];return r=e[2]/360*2*Math.PI,[n,t*Math.cos(r),t*Math.sin(r)]},s.rgb.ansi16=function(e){var r=e[0],n=e[1],t=e[2],o=1 in arguments?arguments[1]:s.rgb.hsv(e)[2];if(0===(o=Math.round(o/50)))return 30;var a=30+(Math.round(t/255)<<2|Math.round(n/255)<<1|Math.round(r/255));return 2===o&&(a+=60),a},s.hsv.ansi16=function(e){return s.rgb.ansi16(s.hsv.rgb(e),e[2])},s.rgb.ansi256=function(e){var r=e[0],n=e[1],t=e[2];return r===n&&n===t?r<8?16:r>248?231:Math.round((r-8)/247*24)+232:16+36*Math.round(r/255*5)+6*Math.round(n/255*5)+Math.round(t/255*5)},s.ansi16.rgb=function(e){var r=e%10;if(0===r||7===r)return e>50&&(r+=3.5),[r=r/10.5*255,r,r];var n=.5*(1+~~(e>50));return[(1&r)*n*255,(r>>1&1)*n*255,(r>>2&1)*n*255]},s.ansi256.rgb=function(e){if(e>=232){var r=10*(e-232)+8;return[r,r,r]}var n;return e-=16,[Math.floor(e/36)/5*255,Math.floor((n=e%36)/6)/5*255,n%6/5*255]},s.rgb.hex=function(e){var r=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(r.length)+r},s.hex.rgb=function(e){var r=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!r)return[0,0,0];var n=r[0];3===r[0].length&&(n=n.split("").map((function(e){return e+e})).join(""));var t=parseInt(n,16);return[t>>16&255,t>>8&255,255&t]},s.rgb.hcg=function(e){var r,n=e[0]/255,t=e[1]/255,o=e[2]/255,a=Math.max(Math.max(n,t),o),s=Math.min(Math.min(n,t),o),l=a-s;return r=l<=0?0:a===n?(t-o)/l%6:a===t?2+(o-n)/l:4+(n-t)/l+4,r/=6,[360*(r%=1),100*l,100*(l<1?s/(1-l):0)]},s.hsl.hcg=function(e){var r=e[1]/100,n=e[2]/100,t=1,o=0;return(t=n<.5?2*r*n:2*r*(1-n))<1&&(o=(n-.5*t)/(1-t)),[e[0],100*t,100*o]},s.hsv.hcg=function(e){var r=e[1]/100,n=e[2]/100,t=r*n,o=0;return t<1&&(o=(n-t)/(1-t)),[e[0],100*t,100*o]},s.hcg.rgb=function(e){var r=e[0]/360,n=e[1]/100,t=e[2]/100;if(0===n)return[255*t,255*t,255*t];var o,a=[0,0,0],s=r%1*6,l=s%1,i=1-l;switch(Math.floor(s)){case 0:a[0]=1,a[1]=l,a[2]=0;break;case 1:a[0]=i,a[1]=1,a[2]=0;break;case 2:a[0]=0,a[1]=1,a[2]=l;break;case 3:a[0]=0,a[1]=i,a[2]=1;break;case 4:a[0]=l,a[1]=0,a[2]=1;break;default:a[0]=1,a[1]=0,a[2]=i}return o=(1-n)*t,[255*(n*a[0]+o),255*(n*a[1]+o),255*(n*a[2]+o)]},s.hcg.hsv=function(e){var r=e[1]/100,n=r+e[2]/100*(1-r),t=0;return n>0&&(t=r/n),[e[0],100*t,100*n]},s.hcg.hsl=function(e){var r=e[1]/100,n=e[2]/100*(1-r)+.5*r,t=0;return n>0&&n<.5?t=r/(2*n):n>=.5&&n<1&&(t=r/(2*(1-n))),[e[0],100*t,100*n]},s.hcg.hwb=function(e){var r=e[1]/100,n=r+e[2]/100*(1-r);return[e[0],100*(n-r),100*(1-n)]},s.hwb.hcg=function(e){var r=e[1]/100,n=1-e[2]/100,t=n-r,o=0;return t<1&&(o=(n-t)/(1-t)),[e[0],100*t,100*o]},s.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},s.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},s.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},s.gray.hsl=s.gray.hsv=function(e){return[0,0,e[0]]},s.gray.hwb=function(e){return[0,100,e[0]]},s.gray.cmyk=function(e){return[0,0,0,e[0]]},s.gray.lab=function(e){return[e[0],0,0]},s.gray.hex=function(e){var r=255&Math.round(e[0]/100*255),n=((r<<16)+(r<<8)+r).toString(16).toUpperCase();return"000000".substring(n.length)+n},s.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}},function(e,r,n){var t=n(0),o=n(3),a=n(4),s=n(5),l=s.download,i=s.removeGit,c=s.runShell,u=n(7).uuid,h=n(8),f=n(19),p=n(20),g=n(21),b=n(22),d=new RegExp("^[a-zA-Z]+$");function m(){l().then((function(){i(name),spinner.succeed(),console.log(f.success,h.green("模版创建成功"))})).catch((function(e){if((e+"").indexOf("already exists")){var r="exmd-template-backups-".concat(u());c("mv ./exmd-template ./".concat(r)).then((function(){console.log(o.resolve("./"),"<<<<<<<<"),t.unlink("./exmd-template",(function(){console.warn("你当前目录的<exmd-template>已经重命名成<".concat(r,">, 请注意迁移备份以免误删.")),m()}))})).catch((function(e){console.info("错误码002",e)}))}else console.log("失败1err",e+""),spinner.fail()}))}a.version(b.version,"-v,--version").command("create <name>").action((function(e){d.test(e)?t.existsSync(e)?console.log(f.error,h.red("有相同名称模版")):g.prompt([{type:"list",name:"type",message:"请选择模版类型?",choices:["1.常规配置"]}]).then((function(e){console.log(f.success,h.green("开始创建..........,请稍候")),p("正在下载模板...").start(),m()})):console.log(f.error,h.red("错误!请输入英文名称"))})),a.parse(process.argv)},function(e,r){e.exports=require("path")},function(e,r){e.exports=require("commander")},function(e,r,n){var t=n(6).exec,o=n(0);function a(e){return new Promise((function(r,n){t(e,(function(e,t,o){e?n(e):r({error:e,stdout:t,stderr:o})}))}))}r.download=function(){return a("git clone https://gitee.com/swordfly/exmd-template.git")},r.removeGit=function e(r){o.existsSync("./"+r)?e(r+(new Date).getTime()):(a("rm -rf .git"),a("mv ./exmd-template ./".concat(r)))},r.runShell=a},function(e,r){e.exports=require("child_process")},function(e,r){r.uuid=function(){for(var e=[],r="0123456789abcdef",n=0;n<36;n++)e[n]=r.substr(Math.floor(16*Math.random()),1);return e[14]="4",e[19]=r.substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")}},function(e,r,n){"use strict";const t=n(9),o=n(10),a=n(15).stdout,s=n(18),l="win32"===process.platform&&!(process.env.TERM||"").toLowerCase().startsWith("xterm"),i=["ansi","ansi","ansi256","ansi16m"],c=new Set(["gray"]),u=Object.create(null);function h(e,r){r=r||{};const n=a?a.level:0;e.level=void 0===r.level?n:r.level,e.enabled="enabled"in r?r.enabled:e.level>0}function f(e){if(!this||!(this instanceof f)||this.template){const r={};return h(r,e),r.template=function(){const e=[].slice.call(arguments);return d.apply(null,[r.template].concat(e))},Object.setPrototypeOf(r,f.prototype),Object.setPrototypeOf(r.template,r),r.template.constructor=f,r.template}h(this,e)}l&&(o.blue.open="[94m");for(const e of Object.keys(o))o[e].closeRe=new RegExp(t(o[e].close),"g"),u[e]={get(){const r=o[e];return g.call(this,this._styles?this._styles.concat(r):[r],this._empty,e)}};u.visible={get(){return g.call(this,this._styles||[],!0,"visible")}},o.color.closeRe=new RegExp(t(o.color.close),"g");for(const e of Object.keys(o.color.ansi))c.has(e)||(u[e]={get(){const r=this.level;return function(){const n=o.color[i[r]][e].apply(null,arguments),t={open:n,close:o.color.close,closeRe:o.color.closeRe};return g.call(this,this._styles?this._styles.concat(t):[t],this._empty,e)}}});o.bgColor.closeRe=new RegExp(t(o.bgColor.close),"g");for(const e of Object.keys(o.bgColor.ansi)){if(c.has(e))continue;u["bg"+e[0].toUpperCase()+e.slice(1)]={get(){const r=this.level;return function(){const n=o.bgColor[i[r]][e].apply(null,arguments),t={open:n,close:o.bgColor.close,closeRe:o.bgColor.closeRe};return g.call(this,this._styles?this._styles.concat(t):[t],this._empty,e)}}}}const p=Object.defineProperties(()=>{},u);function g(e,r,n){const t=function(){return b.apply(t,arguments)};t._styles=e,t._empty=r;const o=this;return Object.defineProperty(t,"level",{enumerable:!0,get:()=>o.level,set(e){o.level=e}}),Object.defineProperty(t,"enabled",{enumerable:!0,get:()=>o.enabled,set(e){o.enabled=e}}),t.hasGrey=this.hasGrey||"gray"===n||"grey"===n,t.__proto__=p,t}function b(){const e=arguments,r=e.length;let n=String(arguments[0]);if(0===r)return"";if(r>1)for(let t=1;t<r;t++)n+=" "+e[t];if(!this.enabled||this.level<=0||!n)return this._empty?"":n;const t=o.dim.open;l&&this.hasGrey&&(o.dim.open="");for(const e of this._styles.slice().reverse())n=e.open+n.replace(e.closeRe,e.open)+e.close,n=n.replace(/\r?\n/g,`${e.close}$&${e.open}`);return o.dim.open=t,n}function d(e,r){if(!Array.isArray(r))return[].slice.call(arguments,1).join(" ");const n=[].slice.call(arguments,2),t=[r.raw[0]];for(let e=1;e<r.length;e++)t.push(String(n[e-1]).replace(/[{}\\]/g,"\\$&")),t.push(String(r.raw[e]));return s(e,t.join(""))}Object.defineProperties(f.prototype,u),e.exports=f(),e.exports.supportsColor=a,e.exports.default=e.exports},function(e,r,n){"use strict";var t=/[|\\{}()[\]^$+*?.]/g;e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace(t,"\\$&")}},function(e,r,n){"use strict";(function(e){const r=n(12),t=(e,n)=>function(){const t=e.apply(r,arguments);return`[${t+n}m`},o=(e,n)=>function(){const t=e.apply(r,arguments);return`[${38+n};5;${t}m`},a=(e,n)=>function(){const t=e.apply(r,arguments);return`[${38+n};2;${t[0]};${t[1]};${t[2]}m`};Object.defineProperty(e,"exports",{enumerable:!0,get:function(){const e=new Map,n={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],gray:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};n.color.grey=n.color.gray;for(const r of Object.keys(n)){const t=n[r];for(const r of Object.keys(t)){const o=t[r];n[r]={open:`[${o[0]}m`,close:`[${o[1]}m`},t[r]=n[r],e.set(o[0],o[1])}Object.defineProperty(n,r,{value:t,enumerable:!1}),Object.defineProperty(n,"codes",{value:e,enumerable:!1})}const s=e=>e,l=(e,r,n)=>[e,r,n];n.color.close="[39m",n.bgColor.close="[49m",n.color.ansi={ansi:t(s,0)},n.color.ansi256={ansi256:o(s,0)},n.color.ansi16m={rgb:a(l,0)},n.bgColor.ansi={ansi:t(s,10)},n.bgColor.ansi256={ansi256:o(s,10)},n.bgColor.ansi16m={rgb:a(l,10)};for(let e of Object.keys(r)){if("object"!=typeof r[e])continue;const s=r[e];"ansi16"===e&&(e="ansi"),"ansi16"in s&&(n.color.ansi[e]=t(s.ansi16,0),n.bgColor.ansi[e]=t(s.ansi16,10)),"ansi256"in s&&(n.color.ansi256[e]=o(s.ansi256,0),n.bgColor.ansi256[e]=o(s.ansi256,10)),"rgb"in s&&(n.color.ansi16m[e]=a(s.rgb,0),n.bgColor.ansi16m[e]=a(s.rgb,10))}return n}})}).call(this,n(11)(e))},function(e,r){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,r,n){var t=n(1),o=n(14),a={};Object.keys(t).forEach((function(e){a[e]={},Object.defineProperty(a[e],"channels",{value:t[e].channels}),Object.defineProperty(a[e],"labels",{value:t[e].labels});var r=o(e);Object.keys(r).forEach((function(n){var t=r[n];a[e][n]=function(e){var r=function(r){if(null==r)return r;arguments.length>1&&(r=Array.prototype.slice.call(arguments));var n=e(r);if("object"==typeof n)for(var t=n.length,o=0;o<t;o++)n[o]=Math.round(n[o]);return n};return"conversion"in e&&(r.conversion=e.conversion),r}(t),a[e][n].raw=function(e){var r=function(r){return null==r?r:(arguments.length>1&&(r=Array.prototype.slice.call(arguments)),e(r))};return"conversion"in e&&(r.conversion=e.conversion),r}(t)}))})),e.exports=a},function(e,r,n){"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},function(e,r,n){var t=n(1);function o(e){var r=function(){for(var e={},r=Object.keys(t),n=r.length,o=0;o<n;o++)e[r[o]]={distance:-1,parent:null};return e}(),n=[e];for(r[e].distance=0;n.length;)for(var o=n.pop(),a=Object.keys(t[o]),s=a.length,l=0;l<s;l++){var i=a[l],c=r[i];-1===c.distance&&(c.distance=r[o].distance+1,c.parent=o,n.unshift(i))}return r}function a(e,r){return function(n){return r(e(n))}}function s(e,r){for(var n=[r[e].parent,e],o=t[r[e].parent][e],s=r[e].parent;r[s].parent;)n.unshift(r[s].parent),o=a(t[r[s].parent][s],o),s=r[s].parent;return o.conversion=n,o}e.exports=function(e){for(var r=o(e),n={},t=Object.keys(r),a=t.length,l=0;l<a;l++){var i=t[l];null!==r[i].parent&&(n[i]=s(i,r))}return n}},function(e,r,n){"use strict";const t=n(16),o=n(17),a=process.env;let s;function l(e){return function(e){return 0!==e&&{level:e,hasBasic:!0,has256:e>=2,has16m:e>=3}}(function(e){if(!1===s)return 0;if(o("color=16m")||o("color=full")||o("color=truecolor"))return 3;if(o("color=256"))return 2;if(e&&!e.isTTY&&!0!==s)return 0;const r=s?1:0;if("win32"===process.platform){const e=t.release().split(".");return Number(process.versions.node.split(".")[0])>=8&&Number(e[0])>=10&&Number(e[2])>=10586?Number(e[2])>=14931?3:2:1}if("CI"in a)return["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI"].some(e=>e in a)||"codeship"===a.CI_NAME?1:r;if("TEAMCITY_VERSION"in a)return/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(a.TEAMCITY_VERSION)?1:0;if("truecolor"===a.COLORTERM)return 3;if("TERM_PROGRAM"in a){const e=parseInt((a.TERM_PROGRAM_VERSION||"").split(".")[0],10);switch(a.TERM_PROGRAM){case"iTerm.app":return e>=3?3:2;case"Apple_Terminal":return 2}}return/-256(color)?$/i.test(a.TERM)?2:/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(a.TERM)||"COLORTERM"in a?1:(a.TERM,r)}(e))}o("no-color")||o("no-colors")||o("color=false")?s=!1:(o("color")||o("colors")||o("color=true")||o("color=always"))&&(s=!0),"FORCE_COLOR"in a&&(s=0===a.FORCE_COLOR.length||0!==parseInt(a.FORCE_COLOR,10)),e.exports={supportsColor:l,stdout:l(process.stdout),stderr:l(process.stderr)}},function(e,r){e.exports=require("os")},function(e,r,n){"use strict";e.exports=(e,r)=>{r=r||process.argv;const n=e.startsWith("-")?"":1===e.length?"-":"--",t=r.indexOf(n+e),o=r.indexOf("--");return-1!==t&&(-1===o||t<o)}},function(e,r,n){"use strict";const t=/(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,o=/(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,a=/^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,s=/\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi,l=new Map([["n","\n"],["r","\r"],["t","\t"],["b","\b"],["f","\f"],["v","\v"],["0","\0"],["\\","\\"],["e",""],["a",""]]);function i(e){return"u"===e[0]&&5===e.length||"x"===e[0]&&3===e.length?String.fromCharCode(parseInt(e.slice(1),16)):l.get(e)||e}function c(e,r){const n=[],t=r.trim().split(/\s*,\s*/g);let o;for(const r of t)if(isNaN(r)){if(!(o=r.match(a)))throw new Error(`Invalid Chalk template style argument: ${r} (in style '${e}')`);n.push(o[2].replace(s,(e,r,n)=>r?i(r):n))}else n.push(Number(r));return n}function u(e){o.lastIndex=0;const r=[];let n;for(;null!==(n=o.exec(e));){const e=n[1];if(n[2]){const t=c(e,n[2]);r.push([e].concat(t))}else r.push([e])}return r}function h(e,r){const n={};for(const e of r)for(const r of e.styles)n[r[0]]=e.inverse?null:r.slice(1);let t=e;for(const e of Object.keys(n))if(Array.isArray(n[e])){if(!(e in t))throw new Error("Unknown Chalk style: "+e);t=n[e].length>0?t[e].apply(t,n[e]):t[e]}return t}e.exports=(e,r)=>{const n=[],o=[];let a=[];if(r.replace(t,(r,t,s,l,c,f)=>{if(t)a.push(i(t));else if(l){const r=a.join("");a=[],o.push(0===n.length?r:h(e,n)(r)),n.push({inverse:s,styles:u(l)})}else if(c){if(0===n.length)throw new Error("Found extraneous } in Chalk template literal");o.push(h(e,n)(a.join(""))),a=[],n.pop()}else a.push(f)}),o.push(a.join("")),n.length>0){const e=`Chalk template literal is missing ${n.length} closing bracket${1===n.length?"":"s"} (\`}\`)`;throw new Error(e)}return o.join("")}},function(e,r){e.exports=require("log-symbols")},function(e,r){e.exports=require("ora")},function(e,r){e.exports=require("inquirer")},function(e){e.exports=JSON.parse('{"name":"honeypot","version":"1.0.43","description":"","main":"index.js","scripts":{"build":"sh build.sh","publish":"sh publish.sh"},"author":"","license":"ISC","dependencies":{"commander":"^6.1.0","download-git-repo":"^3.0.2","handlebars":"^4.7.6","inquirer":"^7.1.0","log-symbols":"^4.0.0","ora":"^5.1.0"},"devDependencies":{"@babel/core":"^7.11.6","@babel/plugin-proposal-decorators":"^7.10.5","@babel/preset-env":"^7.11.5","babel-loader":"^8.1.0","babel-preset-es2015":"^6.24.1","babel-preset-stage-0":"^6.24.1","terser-webpack-plugin":"^4.2.2","uglifyjs-webpack-plugin":"^2.2.0","webpack":"^4.44.1","webpack-cli":"^3.3.12"}}')}]);