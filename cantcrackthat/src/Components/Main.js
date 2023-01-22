import React, { useState } from "react";
import Password from "./Password";
import PasswordGeneration from "./PasswordGeneration";
import UserStats from "./UserStats";

function Main() {
  const [passOrGen, setPassOrGen] = useState(false);
  const [crackedTime, setCrackedTime] = useState("");
  const [crackedInt, setCrackedInt] = useState(0);
  const [generatedPass, setGeneratedPass] = useState("");

  return (
    <div className="container pt-5 personal-font">
      <div className="main-container">
        <div className="our-title">
          <h1 className="title"> CAN'T CRACK THAT </h1>
        </div>
        <div className="parent-container">
          <div
            style={{ marginRight: "100px" }}
            className="children-container child-left"
          >
            {!passOrGen ? (
              <Password
                setPassOrGen={setPassOrGen}
                passOrGen={passOrGen}
                crackedTime={crackedTime}
                setCrackedTime={setCrackedTime}
                crackedInt={crackedInt}
                setCrackedInt={setCrackedInt}
                generatedPass={generatedPass}
                setGeneratedPass={setGeneratedPass}
              />
            ) : (
              <PasswordGeneration
                passOrGen={passOrGen}
                setPassOrGen={setPassOrGen}
                generatedPass={generatedPass}
                setGeneratedPass={setGeneratedPass}
              />
            )}
          </div>
          <div className="middle-line"></div>
          <div
            style={{ marginLeft: "100px" }}
            className="children-container child-right"
          >
            <UserStats crackedTime={crackedInt} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
