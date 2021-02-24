import "../css/sign_in.css";

import logo from "../img/logo.png";

import {new_user, sign_in_user} from "./SignRegister";

import Close from "./Close";

import { events } from "../scripts/events.js";

export function Avatar() {
    return (
         <>
         <div className="signin_close"><Close/></div>           
        <div><img src={logo} alt="logo" className="logo"></img></div>

        <div className="sign_in_up_wrapper">

            <button id="sign_in" className="submit_options" onClick={(event) => {
                events.sign_in_toggle(event)
            }}>SIGN IN</button>
            <button id="sign_up" className="submit_options" onClick={(event) => {
                events.sign_in_toggle(event)
            }}>SIGN UP</button>
        </div>

            <div id="hold_inputs">
                <div><input className="sign_in_input input_1" placeholder="email..." spellCheck="false" maxLength="100"></input></div>
                <div><input className="sign_in_input" placeholder="password..." type="password" spellCheck="false" maxLength="100"></input></div>
                <div><h4 className="forgot_pass">forgot password?</h4></div>
            </div>
            
            <div>
                <button id="submit" className="submit" onClick={(event) => {
                    var email = document.getElementsByClassName("sign_in_input")[0].value;
                    var password = document.getElementsByClassName("sign_in_input")[1].value;
                    events.validate({
                        input_class : "sign_in_input",
                        fail_message_1 : "Not an email",
                        fail_message_2 : "Fill in all fields.",
                        fail_message_3 : "",
                        new_user_function: function() {
                            new_user(email, password)
                        },
                        existing_user_function : function() {
                            sign_in_user(email, password)
                        }
                    })
                }}>SUBMIT</button>
            </div>
        <div className="loader"></div>
         </>
  );
}
export default Avatar;