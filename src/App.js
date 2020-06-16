import React from "react";
import "./style.css";
import Navheading from "./component/navHeader";
import Topheader from "./component/topHeader";
import Sidebar from "./component/sideBar";
import Herosec from "./component/heroSec";
export default function App() {
  return (
    <>
      <div>
        <Topheader />
      </div>
      <div>
        <Navheading />
      </div>
      <div className="grid padding">
        <div>
          <Herosec />
        </div>
        <div>
          <Sidebar />
        </div>
      </div>
    </>
  );
}
