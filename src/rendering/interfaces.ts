type ComponentList = 
    | 'Accordion'
    | 'Alert'
    | 'Button'
    | 'Typography'

export interface IComponent {
    type: ComponentList;
    data: {
        id: string;
        children?: Array<IComponent>;
        content?: string;
        [key: string]: unknown;
    }
}