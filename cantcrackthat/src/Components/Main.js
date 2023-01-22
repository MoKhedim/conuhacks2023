import React from 'react';
import Password from './Password';
import PasswordGeneration from './PasswordGeneration';

function Main() {
    return (
        <div className="container pt-5">
            <div className="content">
                <div className="main-container">
                    <div className="children-container child-left">
                        <Password />
                    </div>
                    
                    <div className="children-container">
                        <PasswordGeneration />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Main;