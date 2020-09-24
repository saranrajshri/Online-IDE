import React from "react";
import "./Tabs.scss";
import {
  faFolder,
  faFolderPlus,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar = () => {
  return (
    <div className="drawer">
      <div className="drawer__header">
        <div>
          <p>EXPLORER</p>
        </div>
        <div className="drawer__headerIcons">
          <FontAwesomeIcon icon={faFileAlt} />
          <FontAwesomeIcon icon={faFolderPlus} />
        </div>
      </div>
    </div>
  );
};
export default SideBar;
