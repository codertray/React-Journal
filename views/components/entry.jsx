import React, { useState, useEffect } from "react";
import { currentEntry, getCurrentEntry } from "../../db";
import { useHistory } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import PromptBlock from "./PromptBlock";

function Entry() {
    const [entry, setEntry] = useState({});
    const history = useHistory();

    useEffect(() => {
        async function fetchEntry() {
            try {
                const fetchedEntry = await getCurrentEntry(currentEntry);
                setEntry(fetchedEntry);
            } catch (err) {
                console.log("Something went wrong:", err.stack);
                history.push("/");
            }
        }
        
        fetchEntry();
    }, [history]);

    return (
        <div className="container">
            <Header home={false} />
            <h1>Entry {entry.date}</h1>
            <p>Mood: {entry.mood}</p>
            <PromptBlock preview={false} content={entry.gratitude} />
            <PromptBlock preview={false} content={entry.health} />
            <PromptBlock preview={false} content={entry.theme} />
            <PromptBlock preview={false} content={entry.other} />
            <Footer />
        </div>
    );
}

export default Entry;

