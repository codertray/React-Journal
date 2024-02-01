import React, { useState } from "react";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function PromptForm(props) {
    const [input, setInput] = useState("");

    function handleClick() {
        const entry = { prompt: props.prompt, reply: input };
        const result = JSON.stringify(entry);
        props.next(result);
    }

    return (
        <div>
            <h1 className="prompt">{props.prompt}</h1>
            <textarea onChange={e => setInput(e.target.value)} rows={5} value={input} />
            <button className="next-btn" onClick={handleClick}><ChevronRightIcon /></button>
        </div>
    );
}

export default PromptForm;
