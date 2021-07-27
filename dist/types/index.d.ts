import React from 'react';
import { Timeout } from '@parrotjs/react-transition-group';
export { default } from './Fade';
export interface IFadeProps {
    component?: any;
    prefixCls?: string;
    componentName?: string;
    className?: string;
    visible: boolean;
    children: any;
    style?: React.CSSProperties;
    timeout?: Timeout | number;
    onEnter?: Function;
    onEntering?: Function;
    onEntered?: Function;
    onExit?: Function;
    onExiting?: Function;
    onExited?: Function;
}
