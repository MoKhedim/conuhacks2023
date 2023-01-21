import ReactDOM from 'react-dom/client';
import React, { useState } from "react";


function Password() {
    const [password, setPassword] = useState("")
    function onChangePassword(event) {
        setPassword(event.target.value);
    }

    return (
        <div>
            <input type="password" placeholder="Enter Password" onChange={onChangePassword}></input>
        </div>
    )
}

export default Password