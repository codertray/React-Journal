import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Import useHistory hook
import { addEntry } from "../../db.js";
import PromptForm from "./PromptForm";
import EmojiPicker from "./EmojiPicker.jsx";
import Header from "./header.jsx"
import Footer from "./footer.jsx"
import prompts from "../../public/prompts.jsx";
import { motion, AnimatePresence } from "framer-motion";
import CheckIcon from '@mui/icons-material/Check';

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
        <div className="container form-container">
            <Header home={false} />
            <AnimatePresence>
                {stage === 1 && (
                    <motion.div key={stage} initial={{opacity: 0.5, x: -100}} animate={{opacity: 1, x: 0}} exit={{opacity: 0.5, x: 100}}>
                        <EmojiPicker next={logEmoji} />
                    </motion.div>
                )}
                {stage >= 2 && stage <= 4 && (
                    <motion.div key={stage} initial={{opacity: 0.5, x: -100}} animate={{opacity: 1, x: 0}} exit={{opacity: 0.5, x: 100}}>
                        <PromptForm
                            prompt={prompts[Object.keys(prompts)[stage - 2]][Math.floor(Math.random() * prompts[Object.keys(prompts)[stage - 2]].length)]}
                            next={logPrompt}
                        />
                    </motion.div>
                )}
                {stage === 5 && (
                    <motion.div key={stage} initial={{opacity: 0.5, x: -100}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: 0}}>
                        <h1 className="prompt">Other Thoughts"?</h1>
                        <textarea onChange={e => setInput(e.target.value)} rows={5} value={input} />
                        <button className="next-btn" onClick={finish}><CheckIcon /></button> {/* Replace anchor tag with button */}
                    </motion.div>
                )}
            </AnimatePresence>
            <Footer />
        </div>
    );
}

export default Write;
