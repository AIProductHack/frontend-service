import React from "react";
import { ComponentReceiver } from "../utils/ComponentReceiver";
import PromptInput from "./PromptInput";



class TestPage extends React.Component {
    render() {
        return (
            <div>
                <PromptInput name="json-input" label="input json" />
            </div>
        )
    };
}

export default TestPage;