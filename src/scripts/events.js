import {utility} from "./utility.js";

var likes = {}
export var events = {
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
    open_div: function(class_name) {
        document.getElementsByClassName("write")[0].style.display = "none";
        document.getElementsByClassName("avatar")[0].style.display = "none";
        document.getElementsByClassName("direct_messages")[0].style.display = "none";
        document.getElementsByClassName("search")[0].style.display = "none";
        document.getElementsByClassName("sign_in")[0].style.display = "none";
        document.getElementsByClassName("repost")[0].style.display = "none";
        document.getElementsByClassName("comment")[0].style.display = "none";
        document.getElementsByClassName("poll_show")[0].style.display = "none";
        document.getElementsByClassName("img_and_video")[0].style.display = "none";
        setTimeout(function() {
            document.getElementsByClassName(class_name)[0].style.display = "block";
        }, 300)
        if (utility.is_mobile()) {
            document.getElementsByClassName("sidediv")[0].style.width = "100%";
        } else {
            document.getElementsByClassName("sidediv")[0].style.width = "300px";
        }
        document.getElementsByClassName("sidediv")[0].style.marginRight = "0px";
        document.getElementsByClassName("sidediv")[0].style.transition = "0.15s ease-in";
        document.getElementsByClassName(class_name)[0].style.width = "100%";
        if (class_name === "write") {
            // document.getElementById("avatar_pic").style.display = "none";
            document.querySelectorAll(".thread_textarea").forEach(e => e.remove());
            document.querySelectorAll(".show_count").forEach(function(elem, i) {
                if (i !== 0) {
                    elem.remove()
                }
            })
        }
        if (class_name === "repost") {
            document.getElementsByClassName("write_textarea")[1].style.height = "80px";
            document.getElementsByClassName("write_textarea")[1].style.width = "85%";
            document.getElementsByClassName("write_textarea")[1].placeholder = "say something...";
            document.getElementsByClassName("post")[1].innerHTML = "REPOST";
        }
        if (class_name === "comment") {
            document.getElementsByClassName("write_textarea")[2].style.height = "80px";
            document.getElementsByClassName("write_textarea")[2].style.width = "85%";
            document.getElementsByClassName("write_textarea")[2].placeholder = "comment...";
            document.getElementsByClassName("comment")[0].style.bottom = 0;
            document.getElementsByClassName("post")[2].innerHTML = "COMMENT";
        }
        if (class_name === "avatar") {
            document.getElementsByClassName("avatar_wrapper")[0].style.marginLeft = "10px";
        }
        document.getElementsByClassName("show_count")[0].innerHTML = 280;
        if (typeof(document.getElementsByClassName("show_count")[1]) !== "undefined") {
            document.getElementsByClassName("show_count")[1].innerHTML = 280;
        }
        var close_elems = document.getElementsByClassName("close");
        for (var j = 0; j < close_elems.length; j++) {
            close_elems[j].style.display = "block";
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