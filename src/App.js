import './App.css';
import logo from "./img/logo.png";

import SideDiv from "./components/SideDiv";
import Footer from "./components/Footer";

import {events} from "./scripts/events.js";

import {
  FaFeatherAlt,
  FaNewspaper,
  FaCrow,
} from "react-icons/fa";

function App() {
   
  return (
      <>
      <SideDiv/>
      <div className="body_wrapper">
          <div className="body_wrapper_item">
              <img className="logo" src={logo} alt="logo"></img>
              <FaFeatherAlt color="#F3B32B" size="2em" className="click_to_write" onClick={(event) => {events.open_div("write")}}/>
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
    </>
  );
}

export default App;