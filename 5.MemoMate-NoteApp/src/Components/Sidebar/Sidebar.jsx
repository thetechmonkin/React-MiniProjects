import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  const onMenuClick = (path) => {
    switch (path) {
      case "home":
        navigate("/");
        break;
      case "important":
        navigate("/important");
        break;
      case "archive":
        navigate("/archive");
        break;
      case "bin":
        navigate("/bin");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <div className="sidebar-container">
      <button onClick={() => onMenuClick("home")}>Home</button>
      <button onClick={() => onMenuClick("important")}>Important</button>
      <button onClick={() => onMenuClick("archive")}>Archive</button>
      <button onClick={() => onMenuClick("bin")}>Bin</button>

      {/* ANOTHER WAY  */}
      {/* <Link to='/important'><button>Important</button></Link> */}
    </div>
  );
}

export default Sidebar;
