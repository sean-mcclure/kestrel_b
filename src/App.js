import './App.css';
import './css/tooltip.css';
import logo from "./img/logo.png";

import Messages from "./components/Messages";
import TopPosts from "./components/TopPosts";
import Headlines from "./components/Headlines";
import SideDiv from "./components/SideDiv";
import Footer from "./components/Footer";

import {style} from "./scripts/style.js";
import {utility} from "./scripts/utility.js";

import {
  FaFeatherAlt,
  FaNewspaper,
  FaCrow,
} from "react-icons/fa";

function App() {
   
  return (
      <div className="body_wrapper">
          <div className="body_wrapper_item">
              <img className="logo" src={logo} alt="logo"></img>
          </div>
          <div className="body_wrapper_item"></div>
          <div className="body_wrapper_item"></div>
          <div className="body_wrapper_item"></div>
          <div className="body_wrapper_item"></div>
          <div className="body_wrapper_item"></div>
      </div>

  );
}

export default App;