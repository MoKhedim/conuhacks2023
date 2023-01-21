import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import "../Password.css"

function Password() {
    const [password, setPassword] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);
    var zxcvbn = require('zxcvbn');
    const [crackedTime, setCrackedTime] = useState("");
    const [score, setScore] = useState("");

    function onChangePassword(event) {
        setPassword(event.target.value);
        //console.log((zxcvbn(event.target.value).score));
        setCrackedTime("Cracked in " + (zxcvbn(event.target.value).crack_times_display).offline_slow_hashing_1e4_per_second);
        setScore(zxcvbn(event.target.value).score);

        console.log(score)
    }

    function viewPassword() {
        setPasswordShown(!passwordShown);
    }

    return (
        <div className="column" id="passwordContainer">
            <div id="pass-view">
                <input className="input is-primary" type={passwordShown ? "text" : "password"} placeholder="Enter Password" onChange={onChangePassword}/>
                <button onClick={viewPassword} id="view">VIEW</button>
            </div>

            <div>
                <p>{password.length == 0 ? crackedTime == "" : crackedTime}</p>
            </div>

            <div>
                <progress className="progress is-danger" value={score*25} max="100">15%</progress>
            </div>
        </div>
    )
}

export default Password