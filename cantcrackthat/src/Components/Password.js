import React, {useState} from 'react';


function Password() {
    const [password, setPassword] = useState("")

    function onChangePassword(event) {
        setPassword(event.target.value);
    }

    return (
        <div>
            <input type="password" placeholder="Enter Password" onChange={onChangePassword}/>
        </div>
    )
}

export default Password