import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Import useHistory hook
import { addEntry } from "../../db.js";
import PromptForm from "./PromptForm";
import EmojiPicker from "./EmojiPicker";
import prompts from "../../public/prompts.jsx";

function Write() {
    const [stage, setStage] = useState(1);
    const [setMood, setGratitudeReply, setHealthReply, setThemeReply, setOtherReply] = useState("");
    const [input, setInput] = useState("");

    const history = useHistory(); // Initialize useHistory hook

    const setDate = () => new Date().getDate();

    function nextStage() {
        setStage(prevStage => prevStage + 1);
    }

    function logEmoji(selection) {
        setMood(selection);
        nextStage();
    }

    function logPrompt(input) {
        switch (stage) {
            case 2:
                setGratitudeReply(input);
                break;
            case 3:
                setHealthReply(input);
                break;
            case 4:
                setThemeReply(input);
                break;
            default:
                break;
        }
        nextStage();
    }

    async function finish(event) {
        event.preventDefault();
        setOtherReply(input);
        try {
            await addEntry(setDate(), setMood, setGratitudeReply, setHealthReply, setThemeReply, setOtherReply);
            history.push("/submit"); // Navigate to "/submit" page after successful action
        } catch (err) {
            console.log("Something went wrong:", err.stack);
        }
    }

    return (
        <div>
            {stage === 1 && (
                <EmojiPicker next={logEmoji} />
            )}
            {stage >= 2 && stage <= 4 && (
                <PromptForm
                    prompt={prompts[Object.keys(prompts)[stage - 2]][Math.floor(Math.random() * prompts[Object.keys(prompts)[stage - 2]].length)]}
                    next={logPrompt}
                />
            )}
            {stage === 5 && (
                <div>
                    <textarea onChange={e => setInput(e.target.value)} rows={4} />
                    <button onClick={finish}>Finish</button> {/* Replace anchor tag with button */}
                </div>
            )}
        </div>
    );
}

export default Write;
