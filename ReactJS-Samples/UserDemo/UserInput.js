import React from "react";
import "./UserDemoStyle.css";

const userInput = (props) => {
  return (
    <div>
      <input
        className="inputStyle"
        type="text"
        onChange={props.changedName}
        value={props.username}
      />
    </div>
  );
};

export default userInput;
