/**
 * This file was generated from StatusBarRN.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue } from "mendix";

export type PlatformConfigEnum = "android" | "ios" | "both";

export type BarStyleEnumEnum = "default" | "dark_content" | "light_content";

export type TransitionEnumEnum = "fade" | "slide" | "none";

export interface StatusBarRNProps<Style> {
    name: string;
    style: Style[];
    platformConfig: PlatformConfigEnum;
    hideStatusBar: boolean;
    isAnimated: boolean;
    bgColor?: DynamicValue<string>;
    barStyleEnum: BarStyleEnumEnum;
    transitionEnum: TransitionEnumEnum;
}

export interface StatusBarRNPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    platformConfig: PlatformConfigEnum;
    hideStatusBar: boolean;
    isAnimated: boolean;
    bgColor: string;
    barStyleEnum: BarStyleEnumEnum;
    transitionEnum: TransitionEnumEnum;
}
