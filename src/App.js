import React from "react";
import "./style.css";
import Navheading from "./component/navHeader";
import Topheader from "./component/topHeader";
import Sidebar from "./component/sideBar";
export default function App() {
  return (
    <>
      <Topheader />
      <div className="grid padding">
        <Navheading />
        <Sidebar />
      </div>
    </>
  );
}
