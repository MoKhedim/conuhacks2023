import React, { useState } from "react";
import Password from "./Password";
import PasswordGeneration from "./PasswordGeneration";

function Main() {
  const [passOrGen, setPassOrGen] = useState(false);
  const [crackedTime, setCrackedTime] = useState("");
  return (
    <div className="container pt-5">
      <div className="main-container">
        <div className="our-title">
            <h1 className="title"> CAN'T CRACK THAT </h1>
        </div>
        <div className="parent-container">
          <div className="children-container child-left">
            {!passOrGen ? (
              <Password setPassOrGen={setPassOrGen} passOrGen={passOrGen} crackedTime={crackedTime} setCrackedTime={setCrackedTime}/>
            ) : (
              <PasswordGeneration />
            )}
          </div>

          <div className="children-container"></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
