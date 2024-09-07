import { IComponent } from "../rendering/interfaces";

const text: IComponent = {
    title: "Typography",
    properties: {
        id: "test_1",
        variant: "Body1",
        color: "black",
        content: "test text button"
    }
}

export const button1: IComponent = {
    title: "Button",
    type: "object", 
    properties: { 
        variant: "primary",
        size: "m",
        fill: "solid",
        startIcon: "icon-send",
        content: "",
        className: "btn-primary",
        endBadge: null,
        startBadge: null,
        endIcon: null,
        iconButton: false,
        disabled: false,
        children: [],
    }
}

export const button2: IComponent = {
    properties: {
        variant: "primary",
        size: "m",
        fill: "solid",
        startIcon: "icon-send",
        content: "",
        className: "btn-primary",
        endBadge: null,
        startBadge: null,
        endIcon: null,
        iconButton: false,
        disabled: false,
        children: [],
    },
    title: "Button",
    type: "object"
}

export const box: IComponent = {
    properties: {
        p: "16px",
        background: "black",
        fill: "black",
        borderRadius: "20px",
        children: [],
    },
    title: "Box",
    type: "object"
}