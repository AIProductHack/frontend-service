import { FC, InputHTMLAttributes } from "react";

interface PromptInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const PromptInput: FC<PromptInputProps> = ({ name, label, ...rest }) => {
    return (
        <div className="prompt-input">
            <label htmlFor={name}>{label}</label>
            <input id={name} {...rest}></input>
        </div>
    )
}

export default PromptInput;