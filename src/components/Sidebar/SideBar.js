import React from "react";
import "./SideBar.scss";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faSearch,
  faCodeBranch,
  faBug,
  faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBar__icons">
        <FontAwesomeIcon icon={faFile} className="sideBar__icon" />
        <FontAwesomeIcon icon={faSearch} className="sideBar__icon" />
        <FontAwesomeIcon icon={faCodeBranch} className="sideBar__icon" />
        <FontAwesomeIcon icon={faBug} className="sideBar__icon" />
        <FontAwesomeIcon icon={faBoxOpen} className="sideBar__icon" />
      </div>
    </div>
  );
};
export default SideBar;
