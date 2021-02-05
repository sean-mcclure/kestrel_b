import './App.css';
import './css/tooltip.css';
import logo from "./img/logo.png";

import Messages from "./Messages";
import TopPosts from "./TopPosts";
import Headlines from "./Headlines";

import SideDiv from "./SideDiv";

import {style} from "./style.js";
import {utility} from "./utility.js";

import {open_div} from "./SideDiv";

import {log_user_out} from "./SignRegister";

import {
  FaFeatherAlt,
  FaNewspaper,
  FaCrow,
  FaSearch,
  FaCogs,
  FaRedo,
  FaEnvelope,
} from "react-icons/fa";

function App() {
   
  return (
         <>
         <SideDiv/>
        <div className="App">
        <div className="flex_grid_banner">
            <div unselectable="on"><img src={logo} className="logo" alt="logo"/></div>
            <div><FaFeatherAlt color="white" size="2em" className="add_message" onClick={(event) => {
               event.preventDefault();
                utility.open_div("write");
                }}/>
            </div>
        </div>
        <div className="feed_titles_wrapper">
            <div id="world" className="feed_titles" onClick={(event) => {style.style_element('feed', event)}}>WORLD FEED</div>
            <div id="followers" className="feed_titles" onClick={(event) => {style.style_element('feed', event)}}>FOLLOWER FEED</div>
        </div>
        <div className="flex-grid">
        <div className="col">
             <Messages/>
        </div>
        <div className="col2">
        <div className="top_and_news_wrapper">
            <div className="top_and_news"><FaCrow color="whitesmoke" size="2em" className="top_posts"></FaCrow></div>
            <div className="top_and_news"><p className="posts_title">TRENDING</p></div>
            <div className="top_and_news"><FaNewspaper color="whitesmoke" size="2em" className="news"></FaNewspaper></div>
            <div className="top_and_news"><p className="news_title">HEADLINES</p></div>
            <div className="top_and_news"></div>
            <div className="top_and_news"><TopPosts/></div>
            <div className="top_and_news"></div>
            <div className="top_and_news"><Headlines/></div>
        </div>
        </div>
        </div>
        <div className="footer">
             <div><p className="sign_in" onClick={(event) => {
                event.preventDefault();
                if(document.getElementsByClassName("sign_in")[0].innerText === "SIGN OUT") {
                    log_user_out()
                } else {
                    utility.open_div("sign_in");
                }
             }}>SIGN IN/UP</p></div>
            <div class="tooltip top" data-tooltip_text="FETCH LATEST"><FaRedo id="refresh_icon" color="white" size="2em" className="options_icons"></FaRedo></div>
            <div class="tooltip top" data-tooltip_text="SEARCH"><FaSearch id="search_icon" color="white" size="2em" className="options_icons" onClick={(event) => {
                utility.open_div("search");
            }}></FaSearch></div>
            <div class="tooltip top" data-tooltip_text="MESSAGES"><FaEnvelope id="dm_icon" color="white" size="2em" className="options_icons" onClick={(event) => {
                utility.open_div("direct_messages");
            }}></FaEnvelope></div>
            <div class="tooltip top" data-tooltip_text="PROFILE"><FaCogs id="profile_icon" color="white" size="2em" className="options_icons" onClick={(event) => {
                event.preventDefault();
                utility.open_div("avatar");
            }}></FaCogs></div>
        </div>
    </div>
    </>
  );
}

export default App;