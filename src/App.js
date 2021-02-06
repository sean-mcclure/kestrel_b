import './App.css';
import logo from "./img/logo.png";


import Footer from "./components/Footer";

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
              <FaFeatherAlt color="#F3B32B" size="2em" className="write" onClick={(event) => {event.preventDefault(); utility.open_div("write");}}/>
          </div>
          <div className="body_wrapper_item">
              <div className="inside_wrapper">
                  <div className="inside_wrapper_item"></div>
                  <div className="inside_wrapper_item"></div>
                  <div className="inside_wrapper_item"></div>
              </div>
          </div>
          <div className="body_wrapper_item">
              <Footer/>
          </div>
      </div>

  );
}

export default App;