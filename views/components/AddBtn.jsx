import React from "react";
import { useHistory } from "react-router-dom"
import CreateIcon from '@mui/icons-material/Create';

function AddBtn() {
    const history = useHistory()
    return <button  className="add-btn" onClick={() => {history.push("/write")}}><span><CreateIcon /></span></button>
}

export default AddBtn;