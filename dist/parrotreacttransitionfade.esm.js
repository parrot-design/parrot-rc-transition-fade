import React, { useRef } from 'react';
import { Transition } from '@parrotjs/react-transition-group';
import { useForkRef } from '@parrotjs/react-hooks';
import { reflow } from '@parrotjs/dom-utils';

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
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const styles = {
    entering: {
        opacity: 1,
    },
    entered: {
        opacity: 1,
    },
};
const Fade = React.forwardRef((props, ref) => {
    const { visible: visibleProp, children, style, timeout = {
        enter: 550,
        exit: 500
    }, onEnter, onEntering, onEntered, onExit, onExiting, onExited } = props, other = __rest(props, ["visible", "children", "style", "timeout", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"]);
    const nodeRef = useRef(null);
    const handleRef = useForkRef(nodeRef, ref, children.ref);
    const normalizedTransitionCallback = (callback) => () => {
        if (callback) {
            const node = nodeRef.current;
            callback(node);
        }
    };
    const handleEnter = normalizedTransitionCallback((node) => {
        reflow(node);
        node.style.webkitTransition = `opacity ${timeout && timeout.enter ? timeout.enter : timeout}ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`;
        node.style.transition = `opacity ${timeout && timeout.enter ? timeout.enter : timeout}ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`;
        onEnter === null || onEnter === void 0 ? void 0 : onEnter(node);
    });
    const handleEntering = normalizedTransitionCallback(onEntering);
    const handleEntered = normalizedTransitionCallback(onEntered);
    const handleExit = normalizedTransitionCallback((node) => {
        node.style.webkitTransition = `opacity ${timeout && timeout.exit ? timeout.exit : timeout}ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`;
        node.style.transition = `opacity ${timeout && timeout.exit ? timeout.exit : timeout}ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`;
        onExit === null || onExit === void 0 ? void 0 : onExit(node);
    });
    const handleExiting = normalizedTransitionCallback(onExiting);
    const handleExited = normalizedTransitionCallback(onExited);
    return (React.createElement(Transition, Object.assign({ appear: true, visible: visibleProp, onEnter: handleEnter, onEntering: handleEntering, onEntered: handleEntered, onExit: handleExit, onExiting: handleExiting, onExited: handleExited, timeout: timeout, ref: handleRef }, other), (state, childProps) => {
        return React.cloneElement(children, Object.assign({ style: Object.assign(Object.assign(Object.assign({ opacity: 0, visibility: state === 'exited' && !visibleProp ? 'hidden' : undefined }, styles[state]), style), children.props.style) }, childProps));
    }));
});

export default Fade;
