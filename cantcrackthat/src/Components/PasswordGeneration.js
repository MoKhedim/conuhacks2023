import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
const alphabet = require("alphabet");

export default function PasswordGeneration(props) {
  const numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const specialCharacters = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "}",
    "[",
    "]",
    "|",
    "\\",
    ":",
    ";",
    '"',
    "'",
    "<",
    ">",
    ",",
    ".",
    "?",
    "/",
  ];

  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(true);
  const [upperCases, setUpperCases] = useState(true);
  const [lowerCases, setLowerCases] = useState(true);
  const [hasSpecialCharacters, setHasSpecialCharacters] = useState(true);
  const [selectedCharacters, setSelectedCharacters] = useState([]);

  function handleChangeNumbers(e) {
    e.target.value === "true" ? setNumbers(true) : setNumbers(false);
  }
  function handleChangeUpperCases(e) {
    e.target.value === "true" ? setUpperCases(true) : setUpperCases(false);
  }
  function handleChangeLowerCases(e) {
    e.target.value === "true" ? setLowerCases(true) : setLowerCases(false);
  }
  function handleChangeHasSpecialCharacters(e) {
    e.target.value === "true"
      ? setHasSpecialCharacters(true)
      : setHasSpecialCharacters(false);
  }

  // Confirm button to switch and send generated password to Password component
  function confirm() {
    props.setPassOrGen(false);
    props.setGeneratedPass(password);
  }

  // Return button to switch to Password component
  function comeback() {
    props.setPassOrGen(false);
  }

  function generatePassword() {
    if (!numbers && !upperCases && !lowerCases && selectedCharacters.length < 1)
      return;

    const paramCount = numbers + upperCases + lowerCases + hasSpecialCharacters;
    let newPassword = "";
    let randomArray = [];
    let paramIndex = [];
    let params = [];

    const num = numberArray[Math.floor(Math.random() * numberArray.length)];
    const upperLetter =
      alphabet.upper[Math.floor(Math.random() * alphabet.upper.length)];
    const lowerLetter =
      alphabet.lower[Math.floor(Math.random() * alphabet.lower.length)];
    const specialChar =
      selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];

    if (numbers) {
      randomArray = randomArray.concat(numberArray);
      params.push(num);
    }

    if (upperCases) {
      randomArray = randomArray.concat(alphabet.upper);
      params.push(upperLetter);
    }

    if (lowerCases) {
      randomArray = randomArray.concat(alphabet.lower);
      params.push(lowerLetter);
    }

    if (hasSpecialCharacters) {
      randomArray = randomArray.concat(selectedCharacters);
      params.push(specialChar);
    }

    for (let i = 0; i < length; i++) {
      newPassword +=
        randomArray[Math.floor(Math.random() * randomArray.length)];
    }

    while (paramIndex.length < paramCount) {
      let r = Math.floor(Math.random() * length);
      if (paramIndex.indexOf(r) === -1) paramIndex.push(r);
    }

    paramIndex = paramIndex.sort((a, b) => 0.5 - Math.random());
    let newPasswordSplit = newPassword.split("");

    for (const [index, element] of params.entries()) {
      if (element) newPasswordSplit.splice(paramIndex[index], 1, element);
    }
    console.log(newPassword);
    newPassword = newPasswordSplit.join("");
    console.log(newPassword);
    setPassword(newPassword);
  }

  function selectAll() {
    setSelectedCharacters(specialCharacters)
  }

  return (
    <div className="block">
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <button className="button is-danger" onClick={comeback}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button
          style={{ marginLeft: "10px" }}
          className="button is-info"
          onClick={generatePassword}
        >
          Generate Password
        </button>
        <button
          style={{ marginLeft: "10px" }}
          className="button is-info"
          onClick={confirm}
          disabled={password === ""}
        >
          Confirm
        </button>
      </div>
      <p style={{ margin: "20px" }}>{password}</p>
      <div className="fields-container" style={{ display: "flex" }}>
        <div className="fields-section">
          {/* Your fields */}
          {/* Length */}
          <div className="field">
            <label className="small-text label">Password Length</label>
            <p className="small-text control">
              <input
                className="input"
                value={length}
                type="number"
                min="8"
                max="20"
                onChange={(e) => setLength(e.target.value)}
              />
            </p>
          </div>

          {/* Numbers */}
          <div className="field">
            <label className="small-text label">Numbers</label>

            <div className="small-text control">
              <label className="radio">
                <input
                  type="radio"
                  className="mr-1"
                  value="true"
                  onChange={handleChangeNumbers}
                  name="numbers"
                  checked={numbers === true}
                />
                Yes
              </label>
              <label className="radio">
                <input
                  type="radio"
                  className="mr-1"
                  value="false"
                  onChange={handleChangeNumbers}
                  name="numbers"
                  checked={numbers === false}
                />
                No
              </label>
            </div>
          </div>

          {/* Upper Cases */}
          <div className="field">
            <label className="small-text label">Upper Case Letters</label>

            <div className="small-text control">
              <label className="radio">
                <input
                  type="radio"
                  className="mr-1"
                  value="true"
                  onChange={handleChangeUpperCases}
                  name="upperCases"
                  checked={upperCases === true}
                />
                Yes
              </label>
              <label className="radio">
                <input
                  type="radio"
                  className="mr-1"
                  value="false"
                  onChange={handleChangeUpperCases}
                  name="upperCases"
                  checked={upperCases === false}
                />
                No
              </label>
            </div>
          </div>

          {/* Lower Cases */}
          <div className="field">
            <label className="small-text label">Lower Case Letters</label>
            <div className="small-text control">
              <label className="radio">
                <input
                  type="radio"
                  className="mr-1"
                  value="true"
                  onChange={handleChangeLowerCases}
                  name="lowerCases"
                  checked={lowerCases === true}
                />
                Yes
              </label>
              <label className="radio">
                <input
                  type="radio"
                  className="mr-1"
                  value="false"
                  onChange={handleChangeLowerCases}
                  name="lowerCases"
                  checked={lowerCases === false}
                />
                No
              </label>
            </div>
          </div>
        </div>
        <div
          className="special-characters-container"
          style={{ marginLeft: "20px" }}
        >
          {/* Special Characters */}
          <div className="field">
            <label className="small-text label">Special Characters</label>
            <div className="small-text control">
              <label className="radio">
                <input
                  type="radio"
                  className="mr-1"
                  value="true"
                  onChange={handleChangeHasSpecialCharacters}
                  name="specialChars"
                  checked={hasSpecialCharacters === true}
                />
                Yes
              </label>
              <label className="radio">
                <input
                  type="radio"
                  className="mr-1"
                  value="false"
                  onChange={handleChangeHasSpecialCharacters}
                  name="specialChars"
                  checked={hasSpecialCharacters === false}
                />
                No
              </label>
            </div>
          </div>

          {hasSpecialCharacters && (
            <div className="box">
              <div className="buttons">
                <div className="button is-success small-text mb-5" onClick={selectAll}>Select all</div>
                <div className="button is-danger small-text mb-5" onClick={e => setSelectedCharacters([])}>Select None</div>
              </div>

              <div className="columns is-multiline">
                {specialCharacters.map((char, i) => {
                  return (
                    <div key={i} className="column is-2">
                      <div className="field-body">
                        <div className="field">
                          <div className="small-text control">
                            <label className="checkbox">
                              <input
                                type="checkbox"
                                className="mr-2"
                                checked={selectedCharacters.includes(char)}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setSelectedCharacters([
                                      ...selectedCharacters,
                                      char,
                                    ]);
                                  } else {
                                    const newChars = selectedCharacters.filter(
                                      (c) => c !== char
                                    );
                                    setSelectedCharacters(newChars);
                                  }
                                }}
                              />
                              {char}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
