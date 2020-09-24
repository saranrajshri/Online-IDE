import React from "react";
import "./MenuBar.scss";

const MenuBar = () => {
  return (
    <div className="menuBar">
      <div className="menuBar__menu">
        <ul>
          <li>File</li>
          <li>Edit</li>
          <li>Selection</li>
          <li>Go</li>
          <li>Debug</li>
          <li>Terminal</li>
          <li>Help</li>
        </ul>
      </div>
    </div>
  );
};
export default MenuBar;
