import { ReactElement, createElement, useState, useEffect } from "react";
import { Platform, View, StatusBar, TextStyle, ViewStyle, SafeAreaView } from "react-native";
import { Style } from "@mendix/pluggable-widgets-tools";
import { StatusBarRNProps } from "../typings/StatusBarRNProps";
import { ValueStatus } from "mendix";

const STYLES = ["default", "dark-content", "light-content"] as const;
const TRANSITIONS = ["fade", "slide", "none"] as const;
const currentPlatform = Platform.OS;

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export function StatusBarRN({
    platformConfig,
    hideStatusBar,
    isAnimated,
    bgColor,
    barStyleEnum,
    transitionEnum
}: StatusBarRNProps<CustomStyle>): ReactElement {
    // Load states to configure the status bar
    const [backgroundColor, setBackgroundColor] = useState<any>("transparent");
    const [barStyle, setBarStyle] = useState<any>(STYLES[0]);
    const [transition, setTransition] = useState<any>(STYLES[2]);
    const loading = bgColor && bgColor.status !== ValueStatus.Available;

    // Apply settings from the app when something changes
    useEffect(() => {
        if (!loading) {
            if (
                bgColor &&
                bgColor.status === ValueStatus.Available &&
                bgColor.value !== "" &&
                bgColor.value !== undefined
            ) {
                setBackgroundColor(bgColor.value);
            }
            if (barStyleEnum) {
                setBarStyle(
                    barStyleEnum === "dark_content"
                        ? STYLES[1]
                        : barStyleEnum === "light_content"
                        ? STYLES[2]
                        : STYLES[0]
                );
            }
            if (transitionEnum) {
                setTransition(
                    transitionEnum === "fade"
                        ? TRANSITIONS[0]
                        : transitionEnum === "slide"
                        ? TRANSITIONS[1]
                        : TRANSITIONS[2]
                );
            }
        }
    }, [barStyleEnum, transitionEnum, loading, bgColor]);

    if (loading || (platformConfig !== "both" && platformConfig !== currentPlatform)) {
        // Return empty if values are still loading
        return <View></View>;
    } else {
        return (
            <SafeAreaView>
                <StatusBar
                    animated={isAnimated}
                    backgroundColor={backgroundColor}
                    barStyle={barStyle}
                    showHideTransition={transition}
                    hidden={hideStatusBar}
                />
            </SafeAreaView>
        );
    }
}
