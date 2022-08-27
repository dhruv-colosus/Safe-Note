import React from "react";
import "./Switch.css";

function Switch({ isToggled, onToggle }) {
  return (
    <>
      <label class="switche">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span class="slidere rounde"></span>
      </label>
    </>
  );
}

export default Switch;
