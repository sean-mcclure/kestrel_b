import {log_user_out} from "./SignRegister";

import {utility} from "./scripts/utility.js";

import {
  FaRedo,
  FaSearch,
  FaEnvelope,
  FaCogs
} from "react-icons/fa";

function Footer() {
    return(
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
    )
        }

export default Footer;