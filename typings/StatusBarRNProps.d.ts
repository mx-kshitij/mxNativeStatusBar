/**
 * This file was generated from StatusBarRN.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export type BarStyleEnumEnum = "default" | "dark_content" | "light_content";

export type TransitionEnumEnum = "fade" | "slide" | "none";

export interface StatusBarRNProps<Style> {
    name: string;
    style: Style[];
    hideAttr?: EditableValue<boolean>;
    animatedAttr?: EditableValue<boolean>;
    bgColorAttr?: EditableValue<string>;
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
    hideAttr: string;
    animatedAttr: string;
    bgColorAttr: string;
    barStyleEnum: BarStyleEnumEnum;
    transitionEnum: TransitionEnumEnum;
}
