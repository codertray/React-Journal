import React from "react";

function PromptBlock(props) {
    const data = props.content;
    const content = JSON.parse(data);
    return (
        <>
            <h3 className="prompt">{content.prompt}</h3>
            {
                content.reply.length > 200 ?
                (<p>{content.reply.substring(0, 200)}...</p>) :
                (<p>{content.reply}</p>) // Removed semicolon
            }
        </>
    );
}

export default PromptBlock;
