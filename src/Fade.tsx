import React, { useRef } from 'react';
import { Transition, StatusType } from '@parrotjs/react-transition-group';
import { useForkRef } from '@parrotjs/react-hooks';
import { reflow } from '@parrotjs/dom-utils';
import { IFadeProps } from '.';

const styles: { [key: string]: any } = {
    entering: {
        opacity: 1,
    },
    entered: {
        opacity: 1,
    },
};

const Fade = React.forwardRef((props: IFadeProps, ref) => {

    const {
        visible: visibleProp,
        children,
        style,
        timeout={
            enter: 550,
            exit: 500
        },
        onEnter,
        onEntering,
        onEntered,
        onExit,
        onExiting,
        onExited,
        ...other
    } = props;

    const nodeRef = useRef(null);

    const handleRef = useForkRef(nodeRef, ref, children.ref);

    const normalizedTransitionCallback = (callback?:Function) => () => {
        if (callback) {
            const node = nodeRef.current; 
            callback(node);
        }
    };

    const handleEnter=normalizedTransitionCallback((node:any)=>{ 
        reflow(node);

        node.style.webkitTransition = `opacity ${timeout && (timeout as any).enter?(timeout as any).enter:timeout}ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`;
        node.style.transition =`opacity ${timeout && (timeout as any).enter?(timeout as any).enter:timeout}ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`;

        onEnter?.(node);
    })

    const handleEntering=normalizedTransitionCallback(onEntering);

    const handleEntered=normalizedTransitionCallback(onEntered);

    const handleExit = normalizedTransitionCallback((node:any)=>{ 
 
        node.style.webkitTransition = `opacity ${timeout && (timeout as any).exit?(timeout as any).exit:timeout}ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`;
        node.style.transition =  `opacity ${timeout && (timeout as any).exit?(timeout as any).exit:timeout}ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`;

        onExit?.(node);

    }); 

    const handleExiting=normalizedTransitionCallback(onExiting);

    const handleExited=normalizedTransitionCallback(onExited);

    return (
        <Transition
            appear
            visible={visibleProp}
            onEnter={handleEnter}
            onEntering={handleEntering}
            onEntered={handleEntered}
            onExit={handleExit}
            onExiting={handleExiting}
            onExited={handleExited}
            timeout={timeout}
            ref={handleRef}
            {...other}
        >
            {(state: StatusType, childProps: any) => {  
                return React.cloneElement(children, {
                    style: {
                        opacity: 0,
                        visibility: state === 'exited' && !visibleProp ? 'hidden' : undefined,
                        ...styles[state],
                        ...style,
                        ...children.props.style,
                    }, 
                    ...childProps,
                });
            }}
        </Transition>
    )
})

export default Fade;