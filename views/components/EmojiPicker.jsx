import React from "react";

function EmojiPicker(props) {
    return (
        <div>
            <h1>How are you feeling?</h1>
            <div className="emoji-grid">
                <button className="emoji-btn" value="😀" onClick={() => props.next("😀")}><span role="img" aria-label="Grinning Face">😀</span></button>
                <button className="emoji-btn" value="😊" onClick={() => props.next("😊")}><span role="img" aria-label="Smiling Face with Smiling Eyes">😊</span></button>
                <button className="emoji-btn" value="😌" onClick={() => props.next("😌")}><span role="img" aria-label="Relieved Face">😌</span></button>
                <button className="emoji-btn" value="🙂" onClick={() => props.next("🙂")}><span role="img" aria-label="Slightly Smiling Face">🙂</span></button>
                <button className="emoji-btn" value="😐" onClick={() => props.next("😐")}><span role="img" aria-label="Neutral Face">😐</span></button>
                <button className="emoji-btn" value="😕" onClick={() => props.next("😕")}><span role="img" aria-label="Confused Face">😕</span></button>
                <button className="emoji-btn" value="😞" onClick={() => props.next("😞")}><span role="img" aria-label="Disappointed Face">😞</span></button>
                <button className="emoji-btn" value="😔" onClick={() => props.next("😔")}><span role="img" aria-label="Pensive Face">😔</span></button>
                <button className="emoji-btn" value="😢" onClick={() => props.next("😢")}><span role="img" aria-label="Crying Face">😢</span></button>
                <button className="emoji-btn" value="😡" onClick={() => props.next("😡")}><span role="img" aria-label="Pouting Face">😡</span></button>
                <button className="emoji-btn" value="😤" onClick={() => props.next("😤")}><span role="img" aria-label="Face with Steam From Nose">😤</span></button>
                <button className="emoji-btn" value="😭" onClick={() => props.next("😭")}><span role="img" aria-label="Loudly Crying Face">😭</span></button>
            </div>
        </div>
    );
}

export default EmojiPicker;
