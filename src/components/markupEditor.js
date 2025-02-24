import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import React from "react";
import "./markupEditor.css";

const markupEditor = () => {
    return (
        <div>
            <Editor
                initialValue="hello react editor world!"
                previewStyle="vertical"
                height="600px"
                initialEditType="markdown"
                useCommandShortcut={true}
            />
        </div>
    );
};

export default markupEditor;
