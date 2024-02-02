import React from "react";
import { useHistory } from "react-router-dom";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

function Header(props) {
    const history = useHistory(); // Move the history declaration inside the component function
    return (
        <div className="header">
            {props.home === false && <button className="back-btn" onClick={() => history.push("/")}><ChevronLeftIcon /></button>}
            {props.home === true ? <h1>Your Journal</h1> : <p>your journal</p>}
        </div>
    );
}

export default Header;