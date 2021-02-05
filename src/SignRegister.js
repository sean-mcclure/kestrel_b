import Parse from "parse";

import {
    style
} from "./style.js";

Parse.initialize("2vJNSZlP54FvvotQc5f4RjvJ6o6YiOFATpAgcB4b", "HOBV5HQp2R4lR4icbblBlgeny3hpHPuewsXM9wJR");
Parse.serverURL = "https://parseapi.back4app.com/";

call_once_satisfied({
    condition: "typeof(document.getElementsByClassName('sign_in')[0]) !== 'undefined'",
    function: function() {
        // check if user already signed in
        var sign_in_check = check_if_user_signed_in();
        if (sign_in_check.bool) {
            // user is signed in
            document.getElementsByClassName("sign_in")[0].innerText = "SIGN OUT";
        } else {
            // user has signed out
            document.getElementsByClassName("sign_in")[0].innerText = "SIGN IN/UP";
        }
    }
})

export async function new_user(pass_email, pass_password) {
    var user = new Parse.User();
    user.set("username", pass_email);
    user.set("email", pass_email);
    user.set("password", pass_password);
    try {
        await user.signUp();
        style.visible("sign_in");
        document.getElementsByClassName("sign_in_input")[0].value = "";
        document.getElementsByClassName("sign_in_input")[1].value = "";
        document.getElementsByClassName("sign_in_input")[2].value = "";
        document.getElementById("welcome_modal").style.display = "block";
        setTimeout(function() {
            document.getElementById("welcome_modal").style.display = "none";
            document.getElementsByClassName("options_icons")[3].classList.add("rubberBand_it");
        }, 3000)
        var currentUser = Parse.User.current(); // successful registration...user is now signed in.
        document.getElementsByClassName("sign_in")[0].innerText = "SIGN OUT";
    } catch (error) {
        alert(error.message);
        document.getElementsByClassName("sign_in_input")[0].value = "";
        document.getElementsByClassName("sign_in_input")[1].value = "";
        document.getElementsByClassName("sign_in_input")[0].focus();
    }
}

export async function sign_in_user(pass_email, pass_password) {
    try {
        var user = await Parse.User.logIn(pass_email, pass_password);
        console.log(user)
    } catch (error) {
        alert(error.message);
    }
}

export function log_user_out() {
    Parse.User.logOut().then(() => {
        var currentUser = Parse.User.current(); // this will now be null
        document.getElementsByClassName("sign_in")[0].innerText = "SIGN IN/UP";
    });
}

export function check_if_user_signed_in() {
    var res = {};
    var currentUser = Parse.User.current();
    if (currentUser) {
        res.bool = true;
        res.user = currentUser;
    } else {
        res.bool = false;
    }
    return (res)
}

function call_once_satisfied(props) {
    if (props['condition'] === true) {
        if (typeof(props.function) === 'function') {
            props.function()
        } else {
            props.function()
        }
    } else {
        setTimeout(function() {
            call_once_satisfied(props)
        }, 100)
    }
}