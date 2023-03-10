import React, { useState } from "react";
import "../Password.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Password({
  passOrGen,
  setPassOrGen,
  crackedTime,
  setCrackedTime,
  crackedInt,
  setCrackedInt,
  generatedPass,
  setGeneratedPass,
}) {
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  var zxcvbn = require("zxcvbn");
  const [score, setScore] = useState("");
  const color = () => {
    switch (score) {
      case 0:
        return "is-danger";
      case 1:
        return "is-danger";
      case 2:
        return "is-warning";
      case 3:
        return "is-primary";
      case 4:
        return "is-success";
      default:
        return "is-danger";
    }
  };

  function onChangePassword(event) {
    setGeneratedPass(null);
    setPassword(event.target.value);

    //console.log((zxcvbn(event.target.value).score));
    setCrackedTime(
      "Cracked in " +
        zxcvbn(event.target.value).crack_times_display
          .offline_slow_hashing_1e4_per_second
    );
    //set CrackedInt to the time it takes to crack in days
    setCrackedInt(
      parseInt(
        zxcvbn(event.target.value).crack_times_seconds
          .offline_slow_hashing_1e4_per_second / 3700
      )
    );
    setScore(zxcvbn(event.target.value).score);

    console.log(score);
  }

  function viewPassword() {
    setPasswordShown(!passwordShown);
  }

  function generate() {
    setPassOrGen(true);
  }

  return (
    <div className="block">
      <div className="column" id="passwordContainer">
        <div id="pass-view">
          <button className="button is-info" onClick={generate} id="generate">
            Generate
          </button>
          <input
            style={{ width: "300px" }}
            className="is-size-6"
            type={passwordShown ? "text" : "password"}
            placeholder="Enter Password"
            value={generatedPass}
            onChange={onChangePassword}
          />
          <button  className="button is-info" onClick={viewPassword} id="view">
            <FontAwesomeIcon icon={passwordShown ? faEye : faEyeSlash} />
          </button>
        </div>

        <div>
          <p className="small-text">
            {password.length === 0 ? crackedTime == "" : crackedTime}
          </p>
        </div>

        <div>
          <progress
            style={{ width: "315px" }}
            className={`progress ${color()} black-border`}
            value={score * 25}
            max="100"
          >
            {score * 25}%
          </progress>
        </div>
      </div>
      <div
        style={{
          marginLeft: "15px",
          marginTop: "10px",
          width: "300px",
          border: "black",
          padding: "0px",
        }}
      >
        <p className="has-text-weight-bold">
          Recommendations to make your password stronger:
        </p>
        <p
          className={`small-text help is-${
            /^.{8,}$/.test(password || generatedPass) ? "success" : "danger"
          }`}
        >
          {/^.{8,}$/.test(password || generatedPass) && (
            <i className="fas fa-check-circle" />
          )}
          {/^.{8,}$/.test(password || generatedPass) || (
            <i className="fas fa-exclamation-circle" />
          )}
          The password is at least 8 characters long
        </p>
        <p
          className={`small-text help is-${
            /[!@#\$%\^&\*\(\)\_\-\+\=\{\}\[\]\\\|:\";'<>,\.\?\/]/.test(
              password || generatedPass
            )
              ? "success"
              : "danger"
          }`}
        >
          {/[!@#\$%\^&\*\(\)\_\-\+\=\{\}\[\]\\\|:\";'<>,\.\?\/]/.test(
            password || generatedPass
          ) && <i className="fas fa-check-circle" />}
          {/[!@#\$%\^&\*\(\)\_\-\+\=\{\}\[\]\\\|:\";'<>,\.\?\/]/.test(
            password || generatedPass
          ) || <i className="fas fa-exclamation-circle" />}
          The password has at least one special character
        </p>
        <p
          className={`small-text help is-${
            /[A-Z]/.test(password || generatedPass) ? "success" : "danger"
          }`}
        >
          {/[A-Z]/.test(password || generatedPass) && (
            <i className="fas fa-check-circle" />
          )}
          {/[A-Z]/.test(password || generatedPass) || (
            <i className="fas fa-exclamation-circle" />
          )}
          The password has at least one uppercase letter
        </p>
        <p
          className={`small-text help is-${
            /[a-z]/g.test(password || generatedPass) ? "success" : "danger"
          }`}
        >
          {/[a-z]/.test(password || generatedPass) && (
            <i className="fas fa-check-circle" />
          )}
          {/[a-z]/.test(password || generatedPass) || (
            <i className="fas fa-exclamation-circle" />
          )}
          The password has at least one lowercase letter
        </p>
        <p
          className={`small-text help is-${
            /[0-9]/.test(password || generatedPass) ? "success" : "danger"
          }`}
        >
          {/[0-9]/.test(password || generatedPass) && (
            <i className="fas fa-check-circle" />
          )}
          {/[0-9]/.test(password || generatedPass) || (
            <i className="fas fa-exclamation-circle" />
          )}
          The password has at least one digit
        </p>
      </div>
    </div>
  );
}

export default Password;
