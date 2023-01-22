import React, { useState } from "react";
const alphabet = require('alphabet');

export default function PasswordGeneration(props) {
    const numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const specialCharacters = [
        "!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
        "_", "-", "+", "=", "{", "}", "[", "]", "|", "\\",
        ":", ";", "\"", "'", "<", ">", ",", ".", "?", "/"
    ]

    const [password, setPassword] = useState("")
    const [length, setLength] = useState(6)
    const [numbers, setNumbers] = useState(true)
    const [upperCases, setUpperCases] = useState(true)
    const [lowerCases, setLowerCases] = useState(true)
    const [hasSpecialCharacters, setHasSpecialCharacters] = useState(true)
    const [selectedCharacters, setSelectedCharacters] = useState([])

    function handleChangeNumbers(e) { e.target.value === "true" ? setNumbers(true) : setNumbers(false) }
    function handleChangeUpperCases(e) { e.target.value === "true" ? setUpperCases(true) : setUpperCases(false) }
    function handleChangeLowerCases(e) { e.target.value === "true" ? setLowerCases(true) : setLowerCases(false) }
    function handleChangeHasSpecialCharacters(e) { e.target.value === "true" ? setHasSpecialCharacters(true) : setHasSpecialCharacters(false) }
    
    // Confirm button to switch to Password component
    function confirm() {
        props.setPassOrGen(false);
        props.setGeneratedPass(password);
        console.log("hello" + props.generatedPass)
        console.log("hello" + props.generatedPass)


    }
    

    function generatePassword() {
        if (!numbers && !upperCases && !lowerCases && selectedCharacters.length < 1) return 

        const paramCount = numbers + upperCases + lowerCases + hasSpecialCharacters
        let newPassword = ""
        let randomArray = []
        let paramIndex = []
        let params = []

        const num = numberArray[Math.floor(Math.random() * numberArray.length)];
        const upperLetter = alphabet.upper[Math.floor(Math.random() * alphabet.upper.length)]
        const lowerLetter = alphabet.lower[Math.floor(Math.random() * alphabet.lower.length)]        
        const specialChar = selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];

        if (numbers) {
            randomArray = randomArray.concat(numberArray)
            params.push(num)
        }

        if (upperCases) {
            randomArray = randomArray.concat(alphabet.upper)
            params.push(upperLetter)
        }

        if (lowerCases) {
            randomArray = randomArray.concat(alphabet.lower)
            params.push(lowerLetter)
        }

        if (hasSpecialCharacters) {
            randomArray = randomArray.concat(selectedCharacters)
            params.push(specialChar)
        }



        for (let i = 0; i < length; i++) {
            newPassword += randomArray[Math.floor(Math.random() * randomArray.length)];
        }

        while(paramIndex.length < paramCount){
            let r = Math.floor(Math.random() * length);
            if(paramIndex.indexOf(r) === -1) paramIndex.push(r);
        }

        paramIndex = paramIndex.sort((a, b) => 0.5 - Math.random());
        let newPasswordSplit = newPassword.split("")

        for (const [index, element] of params.entries()) {
            if (element) newPasswordSplit.splice(paramIndex[index], 1, element)
        }
        console.log(newPassword)
        newPassword = newPasswordSplit.join("")
        console.log(newPassword)
        setPassword(newPassword)
    }

    return (
        <div className="column is-half block">
            <button className="button is-primary" onClick={generatePassword}>Generate Password</button>
            <p>{password}</p>
            <button onClick={confirm}>Confirm</button>
            <button onClick={confirm}>Return</button>


            {/* Length */}
            <div className="field">
                <label className="label">Password Length</label>
                <p className="control">
                    <input className="input" value={length} type="number" min="6" max="20" onChange={e => setLength(e.target.value)} />
                </p>
            </div>


            {/* Numbers */}
            <div className="field">
                <label className="label">Numbers</label>

                <div className="control">
                    <label className="radio">
                        <input type="radio" className="mr-1" value="true" onChange={handleChangeNumbers} name="numbers" checked={numbers === true} />
                        Yes
                    </label>
                    <label className="radio">
                        <input type="radio" className="mr-1" value="false" onChange={handleChangeNumbers} name="numbers" checked={numbers === false} />
                        No
                    </label>
                </div>
            </div>

            {/* Upper Cases */}
            <div className="field">
                <label className="label">Upper Case Letters</label>

                <div className="control">
                    <label className="radio">
                        <input type="radio" className="mr-1" value="true" onChange={handleChangeUpperCases} name="upperCases" checked={upperCases === true} />
                        Yes
                    </label>
                    <label className="radio">
                        <input type="radio" className="mr-1" value="false" onChange={handleChangeUpperCases} name="upperCases" checked={upperCases === false} />
                        No
                    </label>
                </div>

            </div>

            {/* Lower Cases */}
            <div className="field">
                <label className="label">Lower Case Letters</label>
                <div className="control">
                    <label className="radio">
                        <input type="radio" className="mr-1" value="true" onChange={handleChangeLowerCases} name="lowerCases" checked={lowerCases === true} />
                        Yes
                    </label>
                    <label className="radio">
                        <input type="radio" className="mr-1" value="false" onChange={handleChangeLowerCases} name="lowerCases" checked={lowerCases === false} />
                        No
                    </label>

                </div>
            </div>

            {/* Special Characters */}
            <div className="field">
                <label className="label">Special Characters</label>
                <div className="control">
                    <label className="radio">
                        <input type="radio" className="mr-1" value="true" onChange={handleChangeHasSpecialCharacters} name="specialChars" checked={hasSpecialCharacters === true} />
                        Yes
                    </label>
                    <label className="radio">
                        <input type="radio" className="mr-1" value="false" onChange={handleChangeHasSpecialCharacters} name="specialChars" checked={hasSpecialCharacters === false} />
                        No
                    </label>
                </div>
            </div>


            {
                hasSpecialCharacters &&
                <div className="box">
                    <div className="columns is-multiline" >
                        {
                            specialCharacters.map((char, i) => {

                                return (
                                    <div key={i} className="column is-2">
                                        <div className="field-body">
                                            <div className="field">
                                                <div className="control">
                                                    <label className="checkbox">
                                                        <input type="checkbox" className="mr-2"
                                                            checked={selectedCharacters.includes(char)}
                                                            onChange={e => {
                                                                if (e.target.checked) {
                                                                    setSelectedCharacters([...selectedCharacters, char])
                                                                } else {
                                                                    const newChars = selectedCharacters.filter(c => c !== char)
                                                                    setSelectedCharacters(newChars)
                                                                }
                                                            }} />
                                                        {char}
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }

        </div>
    )
}
