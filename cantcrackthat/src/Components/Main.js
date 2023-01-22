import React, { useState } from "react";
import Password from "./Password";
import PasswordGeneration from "./PasswordGeneration";
import UserStats from "./UserStats";

function Main() {
  const [passOrGen, setPassOrGen] = useState(false);
  const [crackedTime, setCrackedTime] = useState("");
  const [crackedInt, setCrackedInt] = useState(0);
  return (
    <div className="container pt-5">
      <div className="content">
        <div className="main-container">
          <div className="children-container child-left">
            {!passOrGen ? (
              <Password setPassOrGen={setPassOrGen} passOrGen={passOrGen} crackedTime={crackedTime} setCrackedTime={setCrackedTime} crackedInt={crackedInt} setCrackedInt={setCrackedInt} />
            ) : (
              <PasswordGeneration />
            )}
          </div>
          <div className="children-container child-right">
              <UserStats crackedTime={crackedInt}/>
          </div>
          <div className="children-container"></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
