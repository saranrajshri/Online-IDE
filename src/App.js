import React from "react";
import "./App.scss";

// Components
import MenuBar from "./components/MenuBar/MenuBar";
import SideBar from "./components/Sidebar/SideBar";
import { FileDrawer } from "./components/Tabs";
import Editor from "./components/Editor/Editor";

const App = () => {
  return (
    <div>
      <MenuBar />
      <SideBar />
      <FileDrawer />
      <Editor />
    </div>
  );
};
export default App;
