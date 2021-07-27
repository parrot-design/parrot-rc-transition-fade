!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react"),require("@parrotjs/react-transition-group"),require("@parrotjs/react-hooks"),require("@parrotjs/dom-utils")):"function"==typeof define&&define.amd?define(["react","@parrotjs/react-transition-group","@parrotjs/react-hooks","@parrotjs/dom-utils"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).ParrotRcTransitionFade=t(e.React,e.ParrotRcTransitionGroup,e.ParrotRcHooks,e.ParrotDomUtils)}(this,(function(e,t,n,i){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=r(e);
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */const s={entering:{opacity:1},entered:{opacity:1}};return o.default.forwardRef(((r,a)=>{const{visible:c,children:l,style:u,timeout:p={enter:550,exit:500},onEnter:f,onEntering:d,onEntered:b,onExit:y,onExiting:m,onExited:E}=r,g=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}(r,["visible","children","style","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"]),x=e.useRef(null),j=n.useForkRef(x,a,l.ref),O=e=>()=>{if(e){const t=x.current;e(t)}},h=O((e=>{i.reflow(e),e.style.webkitTransition=`opacity ${p&&p.enter?p.enter:p}ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,e.style.transition=`opacity ${p&&p.enter?p.enter:p}ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,null==f||f(e)})),v=O(d),w=O(b),P=O((e=>{e.style.webkitTransition=`opacity ${p&&p.exit?p.exit:p}ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,e.style.transition=`opacity ${p&&p.exit?p.exit:p}ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,null==y||y(e)})),R=O(m),T=O(E);return o.default.createElement(t.Transition,Object.assign({appear:!0,visible:c,onEnter:h,onEntering:v,onEntered:w,onExit:P,onExiting:R,onExited:T,timeout:p,ref:j},g),((e,t)=>o.default.cloneElement(l,Object.assign({style:Object.assign(Object.assign(Object.assign({opacity:0,visibility:"exited"!==e||c?void 0:"hidden"},s[e]),u),l.props.style)},t))))}))}));