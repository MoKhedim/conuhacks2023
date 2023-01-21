import React from 'react';
import Password from './Password';
import PasswordGeneration from './PasswordGeneration';

function Main() {
    return (
        <div className="container pt-5">
            <div className="content">
                <div className="box">
                    <div className="columns">
                        <PasswordGeneration />
                        <Password />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Main;