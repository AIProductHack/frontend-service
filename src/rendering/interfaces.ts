import React from "react";

type ComponentList = 
    | 'Alert'
    | 'Button'
    | 'Box'
    | 'Card'
    | 'Checkbox'
    | 'List'
    | 'Scrollbar'
    | 'Sidebar'
    | 'Typography'


export interface IComponent {
    title: ComponentList;
    type?: string;
    properties: {
        id?: string;
        children?: Array<IComponent>;
        content?: string;
        style?: { [key: string]: string };
        className?: string;
        [key: string]: unknown;
    }
}