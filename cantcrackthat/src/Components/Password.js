import React, { useState } from 'react';
import "../Password.css"
import PasswordGeneration from './PasswordGeneration';

function Password({passOrGen, setPassOrGen, crackedTime, setCrackedTime, crackedInt, setCrackedInt}) {
    const [password, setPassword] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);
    var zxcvbn = require('zxcvbn');
    const [score, setScore] = useState("");

    function onChangePassword(event) {
        setPassword(event.target.value);
        //console.log((zxcvbn(event.target.value).score));
        setCrackedTime("Cracked in " + (zxcvbn(event.target.value).crack_times_display).offline_slow_hashing_1e4_per_second);
        //set CrackedInt to the time it takes to crack in days
        setCrackedInt(parseInt(((zxcvbn(event.target.value).crack_times_seconds).offline_slow_hashing_1e4_per_second)/3700));
        setScore(zxcvbn(event.target.value).score);

        console.log(score)
    }

    function viewPassword() {
        setPasswordShown(!passwordShown);
    }

    function generate() {
        setPassOrGen(true);
    }

    return (
      <div>
        <div className="column" id="passwordContainer">
            <div id="pass-view">
                <button onClick={generate} id="generate">Generate</button>
                <input className="input is-primary is-size-7" type={passwordShown ? "text" : "password"} placeholder="Enter Password" onChange={onChangePassword}/>
                <button onClick={viewPassword} id="view">VIEW</button>
            </div>

            <div>
                <p>{password.length === 0 ? crackedTime == "" : crackedTime}</p>
            </div>

            <div>
                <progress className="progress is-danger" value={score*25} max="100">15%</progress>
            </div>
        </div>
      <div
        style={{
          marginTop: "20px",
          width: "300px",
          border: "black",
          padding: "0px",
          margin: "5px",
        }}
      >
        <p>Recommendations to make your password stronger:</p>
        <p
          className={`help is-${
            /^.{8,}$/.test(password) ? "success" : "danger"
          }`}
        >
          {/^.{8,}$/.test(password) && <i className="fas fa-check-circle" />}
          {/^.{8,}$/.test(password) || (
            <i className="fas fa-exclamation-circle" />
          )}
          The password is at least 8 characters long
        </p>
        <p
          className={`help is-${
            /[!@#$%&*()[\]]/.test(password) ? "success" : "danger"
          }`}
        >
          {/[!@#$%&*()[\]]/.test(password) && (
            <i className="fas fa-check-circle" />
          )}
          {/[!@#$%&*()[\]]/.test(password) || (
            <i className="fas fa-exclamation-circle" />
          )}
          The password has at least one special character
        </p>
        <p
          className={`help is-${/[A-Z]/.test(password) ? "success" : "danger"}`}
        >
          {/[A-Z]/.test(password) && <i className="fas fa-check-circle" />}
          {/[A-Z]/.test(password) || (
            <i className="fas fa-exclamation-circle" />
          )}
          The password has at least one uppercase letter
        </p>
        <p
          className={`help is-${/[a-z]/g.test(password) ? "success" : "danger"}`}
        >
          {/[a-z]/.test(password) && <i className="fas fa-check-circle" />}
          {/[a-z]/.test(password) || (
            <i className="fas fa-exclamation-circle" />
          )}
          The password has at least one lowercase letter
        </p>
        <p
          className={`help is-${/[0-9]/.test(password) ? "success" : "danger"}`}
        >
          {/[0-9]/.test(password) && <i className="fas fa-check-circle" />}
          {/[0-9]/.test(password) || (
            <i className="fas fa-exclamation-circle" />
          )}
          The password has at least one digit
        </p>
      </div>
    </div>
  );
}

export default Password;