import { ReactElement, createElement, useState, useEffect } from "react";
import { View, StatusBar, TextStyle, ViewStyle } from "react-native";
import { Style } from "@mendix/pluggable-widgets-tools";
import { StatusBarRNProps } from "../typings/StatusBarRNProps";
// import type { StatusBarStyle } from 'react-native';
import { ValueStatus } from 'mendix';

const STYLES = ['default', 'dark-content', 'light-content'] as const;
const TRANSITIONS = ['fade', 'slide', 'none'] as const;

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export function StatusBarRN({ hideAttr, animatedAttr, bgColorAttr, barStyleEnum, transitionEnum }: StatusBarRNProps<CustomStyle>): ReactElement {

    if ((hideAttr && hideAttr.status != ValueStatus.Available) || (animatedAttr && animatedAttr.status != ValueStatus.Available) || (bgColorAttr && bgColorAttr.status != ValueStatus.Available)) {
        //Return empty if values are still loading
        return (<View></View>)
    }

    // Load states to configure the status bar
    const [hideBar, setHideBar] = useState<any>(true);
    const [animated, setAnimated] = useState<any>(true);
    const [backgroundColor, setBackgroundColor] = useState<any>('transparent');
    const [barStyle, setBarStyle] = useState<any>(STYLES[0]);
    const [transition, setTransition] = useState<any>(STYLES[2]);

    //Apply settings from the app when something changes
    useEffect(() => {
        if (hideAttr && hideAttr.status === ValueStatus.Available) { setHideBar(hideAttr.value) }
        if (animatedAttr && animatedAttr.status === ValueStatus.Available) { setAnimated(animatedAttr.value) }
        if (bgColorAttr && bgColorAttr.status === ValueStatus.Available && bgColorAttr.value != '' && bgColorAttr.value != undefined) { setBackgroundColor(bgColorAttr.value) }
        if (barStyleEnum) { setBarStyle(barStyleEnum === 'dark_content' ? STYLES[1] : barStyleEnum === 'light_content' ? STYLES[2] : STYLES[0]) }
        if (transitionEnum) { setTransition(transitionEnum === 'fade' ? TRANSITIONS[0] : transitionEnum === 'slide' ? TRANSITIONS[1] : TRANSITIONS[2]) }
    }, [hideAttr, animatedAttr, bgColorAttr])

    return (
        <StatusBar
            animated={animated}
            backgroundColor={backgroundColor}
            barStyle={barStyle}
            showHideTransition={transition}
            hidden={hideBar}
        />)
}
