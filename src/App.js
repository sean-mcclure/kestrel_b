import './App.css';
import './css/tooltip.css';
import logo from "./img/logo.png";

import Messages from "./Messages";
import TopPosts from "./TopPosts";
import Headlines from "./Headlines";
import SideDiv from "./SideDiv";
import Footer from "./Footer";

import {style} from "./style.js";
import {utility} from "./utility.js";


import {
  FaFeatherAlt,
  FaNewspaper,
  FaCrow,
} from "react-icons/fa";

function App() {
   
  return (
      <div className="body_wrapper">
          <div className="body_wrapper_item"></div>
          <div className="body_wrapper_item"></div>
          <div className="body_wrapper_item"></div>
          <div className="body_wrapper_item"></div>
          <div className="body_wrapper_item"></div>
          <div className="body_wrapper_item"></div>
      </div>

  );
}

export default App;