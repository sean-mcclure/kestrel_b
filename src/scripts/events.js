import {utility} from "./utility.js";
import {data} from "../data/data.js";

import "../css/animations.css"
import "../css/write.css";

import Parse from "parse";

import Messages from "../components/Messages";

import {setMessages} from "../components/Messages";

var likes = {}
var clone_cnt = 0;
export var events = {
    get_current_user: function() {
        return (Parse.User.current())
    },
    open_div: function(id) {
        if (utility.is_mobile()) {
            document.getElementById("sidediv").classList.remove("sidediv_close");
            document.getElementById("sidediv").classList.add("sidediv_open_mobile");
            document.getElementsByClassName("write_icons_wrapper")[0].style.visibility = "visible";
        } else {
            document.getElementById("sidediv").classList.remove("sidediv_close");
            document.getElementById("sidediv").classList.add("sidediv_open");
        }
        document.getElementById(id).style.display = "block";
    },
    close_div: function() {
        document.getElementById("sidediv").classList.remove("sidediv_open");
        document.getElementById("sidediv").classList.add("sidediv_close");
        if(utility.is_mobile()) {
            document.getElementsByClassName("write_icons_wrapper")[0].style.visibility = "hidden";
        }
    },
    validate_input: {
        write_textarea: function(options) {
            var val = document.getElementById("write_textarea").value;
            if (val === "") {
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
                utility.scroll_to_top("inside_wrapper_item");
            }
        }
    },
    prepare_new_post: function() {
        var new_post = {
            user: events.get_current_user(),
            message: document.getElementById("write_textarea").value,
            likes: 0,
            reposts: 0
        }
        return (new_post)
    },
    post: function() {
        var new_post = events.prepare_new_post()
        data.messages.unshift(new_post)
    },
    save_to_parse: function() {
        //JSON.stringify(data)
    },
    make_thread: function() {

        clone_cnt++;

        var elem = document.getElementsByClassName("write_item")[1].children[0];
        var clone = elem.cloneNode(true);
        clone.classList.add("clone");

        clone.children[0].innerText = "280";

        var clone_id = "write_textarea_" + clone_cnt;
        clone.children[1].id = clone_id;

        clone.children[1].addEventListener("click", (event) => {
            var cnt = 280 - document.getElementById(event.target.id).value.length;
            document.getElementsByClassName("show_count")[clone_cnt].innerText = cnt;
        });

        clone.children[1].addEventListener("input", (event) => {
            utility.character_counter(event)
        });

        clone.children[1].placeholder = (document.getElementsByClassName("write_textarea").length + 1) + "/n";
        clone.children[1].value = "";

        document.getElementsByClassName("threading")[0].append(clone);
        
        var total_height = document.getElementsByClassName("write_textarea").length * 170;
        utility.scroll_to_bottom("write_wrapper", total_height);

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