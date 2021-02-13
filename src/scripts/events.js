import {utility} from "./utility.js";
import {data} from "../data/data.js";
import "../css/animations.css"
import "../css/write.css";

import Parse from "parse";

import Messages from "../components/Messages";

import {setMessages} from "../components/Messages";

var likes = {}
export var events = {
    get_current_user : function() {
        return(Parse.User.current())
    },
    open_div: function(id) {
        document.getElementById("sidediv").classList.remove("sidediv_close");
        document.getElementById("sidediv").classList.add("sidediv_open");
         document.getElementById(id).style.display = "block";
    }, 
    close_div : function() {
        document.getElementById("sidediv").classList.remove("sidediv_open");
        document.getElementById("sidediv").classList.add("sidediv_close");
    },
    validate_input : {
        write_textarea : function(options) {
            var val = document.getElementById("write_textarea").value;
            if(val === "") {
                document.getElementById("write_textarea").classList.add("shake_it");
                document.getElementById("write_textarea").classList.add("outline_validate");
                setTimeout(function() {
                    document.getElementById("write_textarea").classList.remove("shake_it");
                    document.getElementById("write_textarea").classList.remove("outline_validate");
                }, 1000);
            } else {
                options.success_function()
                document.getElementById("write_textarea").value = "";
                events.close_div();
            }
        }
    },
    prepare_new_post : function() {
        var new_post = {
            user : events.get_current_user(),
            message : document.getElementById("write_textarea").value,
            likes : 0,
            reposts : 0
        }
        return(new_post)
    },
    post : function() {
        var new_post = events.prepare_new_post()
        data.messages.unshift(new_post)
    },
    like: function(event) {
        const id = event.currentTarget.id
        const class_instance = utility.get_class_instance("like_icons", id)
        var current_value = Number(document.getElementsByClassName("like_count")[class_instance].innerText)
        likes[id] = current_value
        if ((current_value % 2) === 0 || typeof(current_value % 2) === 'undefined') {
            likes[id] = current_value + 1;
            document.getElementsByClassName("like_count")[class_instance].innerHTML = likes[id];
            document.getElementById(id).style.color = "#F3B32B";
        } else {
            likes[id] = current_value - 1;
            document.getElementsByClassName("like_count")[class_instance].innerHTML = likes[id];
            document.getElementById(id).style.color = "#3D3D3D";
        }
    },
    clone_and_append: function(id, to_class_name, to_instance) {
        var elem = document.getElementById(id);
        var clone = elem.cloneNode(true);
        clone.id = id + "_clone";
        clone.classList.add("clone");
        document.getElementsByClassName(to_class_name)[to_instance].append(clone);
    },
    uploadFile: function(file) {
        const cloudName = 'dllmrcc0h';
        const unsignedUploadPreset = 'qxq7k2nz';
        var url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
        var xhr = new XMLHttpRequest();
        var fd = new FormData();
        xhr.open('POST', url, true);
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.onreadystatechange = function(e) {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                var url = response.secure_url;
                var tokens = url.split('/');
                var img = new Image();
                img.src = tokens.join('/');
                img.alt = response.public_id;
            }
        };
        fd.append('upload_preset', unsignedUploadPreset);
        fd.append('file', file);
        xhr.send(fd);
    },
    validate: function(options) {
        utility.spinner();
        if (document.getElementsByClassName(options.input_class)[0].value !== "" && document.getElementsByClassName(options.input_class)[1].value !== "") {
            if (document.getElementsByClassName(options.input_class)[0].value.indexOf("@") === -1) {
                alert(options.fail_message_1)
            } else {
                if (document.getElementById("sign_up").style.background === "gold") { // new user (registering)
                    options.new_user_function();
                } else { // existing user (signing in)
                    options.existing_user_function();
                }
            }
        } else {
            alert(options.fail_message_2)
        }
        if (document.getElementById("sign_up").style.background === "gold") {
            document.getElementsByClassName("loader")[0].style.marginTop = "60px";
        } else {
            document.getElementsByClassName("loader")[0].style.marginTop = "80px";
        }
    },
    click_back_poll: function(e) {
        if (typeof(poll_wrapper) !== "undefined") {
            document.getElementsByClassName("write_options_item")[0].style.display = "block";
            document.getElementsByClassName("poll_wrapper")[0].style.display = "none";
            document.getElementsByClassName("write_options_item")[0].style.display = "block";
            document.getElementsByClassName("write_options_item")[1].style.display = "block";
            document.getElementsByClassName("write_options_item")[2].style.display = "block";
            document.getElementsByClassName("write_options_item")[3].style.display = "block";
        }
    }
}