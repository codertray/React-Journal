import React from "react";
import PromptBlock from "./PromptBlock";
import { setCurrentEntry } from "../../db";

function Preview(props) {
    const journal = props.entry;

    const handleClick = () => {
        setCurrentEntry(journal.date);
    };

    return (
        <div className="preview">
            <div className="heading">
                <a className="date" onClick={handleClick} href={`/entry/${journal.date}`}>{journal.date}</a>
                <p className="emoji">{journal.mood}</p>
            </div>
            <PromptBlock content={journal.gratitude} />
            <PromptBlock content={journal.health} />
            <PromptBlock content={journal.theme} />
            <PromptBlock content={journal.other} />
        </div>
    );
}

export default Preview;
