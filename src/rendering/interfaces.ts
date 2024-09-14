type ComponentList = 
    | 'Accordion'
    | 'Alert'
    | 'AttachFiles'
    | 'Avatar'
    | 'Badge'
    | 'Box'
    | 'Breadcrumbs'
    | 'Button'
    | 'Card'
    | 'Checkbox'
    | 'Chip'
    | 'DatePicker'
    | 'Divider'
    | 'DragAndDrop'
    | 'Drawer'
    | 'Dropdown'
    | 'ErrorPage'
    | 'Grid'
    | 'Header'
    | 'Icon'
    | 'ImagePicture'
    | 'Input'
    | 'InputRange'
    | 'InputSlider'
    | 'Link'
    | 'List'
    | 'Modal'
    | 'ProgressBar'
    | 'PseudoInput'
    | 'Radio'
    | 'Scrollbar'
    | 'SegmentButtonGroup'
    | 'Select'
    | 'Sidebar'
    | 'SimpleSelect'
    | 'SkeletonLoader'
    | 'SlideToggle'
    | 'Snackbar'
    | 'Spinner'
    | 'Stepper'
    | 'Switch'
    | 'Tabs'
    | 'TimePicker'
    | 'ToggleButtonGroup'
    | 'Tooltip'
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