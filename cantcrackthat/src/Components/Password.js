import React from 'react';
import ReactDOM from 'react-dom/client';


function Password() {
    const [password, setPassword] = useState("")
    function onChangePassword(event) {
        setPassword(event.target.value);
    }

    return (
        <div>
            <input type="password" placeholder="Enter Password" onChange={onChangePassword}/>
            LOL
        </div>
    )
}

export default Password