import {
    utility
} from "./utility.js";
import {
    data
} from "../data/data.js";
import {
    thread
} from "../data/data.js";
import "../css/animations.css"
import "../css/write.css";
import Parse from "parse";
import Messages, {
    setMessages
} from "../components/Messages";
var eye_cnt = 0;
var likes = {}
var clone_cnt = 0;
var follow_block_cnt = 0;
export var events = {
    get_current_user: function() {
        return (Parse.User.current())
    },
    open_div: function(id) {
        const sidediv = document.getElementById("sidediv");
        if (utility.is_mobile()) {
            sidediv.classList.remove("sidediv_close");
            sidediv.classList.add("sidediv_open_mobile");
            document.getElementsByClassName("write_icons_wrapper")[0].style.visibility = "visible";
        } else {
            sidediv.classList.remove("sidediv_close");
            sidediv.classList.add("sidediv_open");
        }
        events.clear_other_side_divs(id);
        events.clear_close();
        events.set_side_div_title(id);
        document.getElementById(id).style.display = "block";
        events.clear_close();
        events.clear_close();
        events.set_side_div_background(id);
    },
    close_div: function() {
        const sidediv = document.getElementById("sidediv");
        sidediv.classList.remove("sidediv_open");
        sidediv.classList.add("sidediv_close");
        if (utility.is_mobile()) {
            document.getElementsByClassName("write_icons_wrapper")[0].style.visibility = "hidden";
        }
    },
    clear_other_side_divs: function(pass_id) {
        var ids = ["write", "avatar", "direct_messages", "search", "sign_in", "repost", "comment", "poll_show", "img_and_video"]
        ids.forEach(function(id) {
            if (id !== pass_id) {
                document.getElementById(id).style.display = "none";
            }
        })
    },
    set_side_div_title: function(id) {
        var titles = {
            write: "WHAT'S HAPPENING?",
            avatar: "PROFILE",
            direct_messages: "DIRECT MESSAGES",
            search: "SEARCH",
            sign_in: "SIGN IN",
            repost: "REPOST",
            comment: "COMMENT",
            poll_show: "POLL",
            img_and_video: "IMAGES/VIDEOS",
            thread: "THREAD"
        }
        document.getElementsByClassName("write_title")[0].innerHTML = titles[id];
    },
    set_side_div_background: function(id) {
        var colors = {
            write: "#d1ccc0",
            avatar: "#d1ccc0",
            direct_messages: "#d1ccc0",
            search: "#d1ccc0",
            sign_in: "#3d3d3d",
            repost: "#d1ccc0",
            comment: "#d1ccc0",
            poll_show: "#d1ccc0",
            img_and_video: "#d1ccc0",
            thread: "#d1ccc0"
        }
        document.getElementById("sidediv").style.background = colors[id];;
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
    prepare_thread_for_post: function() {
        var res = [];
        var hold_imgs = []
        var texts = document.getElementsByClassName("write_textarea");
        for (var i = 0; i < texts.length; i++) {
            if (texts[i].value !== "") {
                res.push(texts[i].value)
            }
        }
        var imgs = document.getElementsByClassName("upload_img_wrapper");
        for (var i = 0; i < imgs.length; i++) {
            if (imgs[i].value !== "") {
                hold_imgs.push(imgs[i].children[1].src)
            }
        }
        if (res.length > 1) {
            // thread
            var fin = res[0] + "<span class='thread_click' style='color:gold'><br>THREAD</span>";
            thread.messages = events.prepare_new_thread(res, hold_imgs);
            setTimeout(function() {
                const elem = document.getElementsByClassName("thread_click")[utility.get_last_instance("thread_click") - 1];
                elem.addEventListener("click", function(event) {
                    events.open_div("thread");
                    const elem = document.getElementById("thread");
                    elem.style.overflowY = "scroll";
                    elem.style.height = "100vh";
                })
            }, 1000)
        } else {
            // single post
            var fin = res
        }
        return (fin)
    },
    prepare_new_post: function() {
        var new_post = {
            user: events.get_current_user(),
            message: events.prepare_thread_for_post(),
            likes: 0,
            reposts: 0,
            img: document.getElementsByClassName("uploaded_img_writing")[0].src,
            poll: null
        }
        return (new_post)
    },
    post: function() {
        var new_post = events.prepare_new_post();
        data.messages.unshift(new_post);
        events.clear_threads()
    },
    prepare_new_thread: function(all_posts, all_imgs) {
        var res = [];
        all_posts.forEach(function(msg, i) {
            var msg = {
                user: events.get_current_user(),
                message: msg,
                likes: 0,
                reposts: 0,
                img: all_imgs[i], // get images from thread posts here
                poll: null
            }
            res.push(msg)
        })
        return (res)
    },
    save_to_parse: function() {
        //JSON.stringify(data)
    },
    make_thread: function() {
        clone_cnt++;
        var elem = document.getElementsByClassName("write_item")[1].children[0];
        var clone = elem.cloneNode(true);
        clone.classList.add("clone");
        clone.style.marginTop = "-10px";
        clone.children[0].innerText = "280";
        clone.children[0].style.width = "95.5%";
        clone.children[1].style.boxShadow = "none";
        clone.children[1].style.webkitBoxShadow = "none";
        clone.children[1].style.border = "none";
        clone.children[1].value = "";
        clone.children[0].style.color = "#141414";
        clone.children[3].style.display = "none"; // change back display for Poll clone
        var clone_id = "write_textarea_" + clone_cnt;
        clone.children[1].id = clone_id;
        clone.children[1].addEventListener("click", (event) => {
            events.add_border_on_click(event);
            events.enable_delete();
            events.enable_camera();
        });
        clone.children[1].addEventListener("input", (event) => {
            utility.character_counter(event)
        });
        clone.children[2].children[0].addEventListener("change", function(event) {
            var reader = new FileReader();
            reader.onload = function() {
                const img = document.getElementsByClassName("uploaded_img_writing")[events.get_clicked_textarea_instance()];
                img.style.visibility = "visible";
                img.style.height = "auto";
                img.style.margin = "20px";
                img.style.marginBottom = "30px";
                img.src = reader.result;
            }
            reader.readAsDataURL(event.target.files[0])
        })
        document.getElementsByClassName("threading")[0].append(clone);
        events.renumber_placeholders();
        var total_height = document.getElementsByClassName("write_textarea").length * 200;
        utility.scroll_to_bottom("write_wrapper", total_height);
    },
    renumber_placeholders: function() {
        var elems = document.getElementsByClassName("clone");
        for (var i = 0; i < elems.length; i++) {
            elems[i].children[1].placeholder = (i + 2).toString() + "/" + (elems.length + 1).toString();
            document.getElementById("write_textarea").placeholder = "1/" + (elems.length + 1).toString();
            if (i === elems.length - 1) {
                elems[i].children[1].style.marginBottom = "100px";
            } else {
                elems[i].children[1].style.marginBottom = "0px";
            }
        }
    },
    enable_delete: function() {
        const remove = document.getElementsByClassName("remove_clone")[0];
        remove.style.pointerEvents = "auto";
        remove.style.opacity = "1";
    },
    disable_delete: function() {
        const remove = document.getElementsByClassName("remove_clone")[0];
        remove.style.pointerEvents = "none";
        remove.style.opacity = "0.5";
    },
    add_border_on_click: function(event) {
        var areas = document.getElementsByClassName("write_textarea");
        for (var i = 0; i < areas.length; i++) {
            areas[i].style.boxShadow = "none";
            areas[i].style.webkitBoxShadow = "none";
            areas[i].style.border = "none";
        }
        const this_area = document.getElementById(event.target.id);
        this_area.style.boxShadow = "0px 10px 10px #3D3D3D";
        this_area.style.webkitBoxShadow = "0px 10px 10px #3D3D3D";
        this_area.style.border = "3px solid gold";
    },
    get_clicked_textarea_instance: function() {
        var res;
        const all_texts = document.getElementsByClassName("write_textarea");
        for (var i = 0; i < all_texts.length; i++) {
            if (all_texts[i].style.boxShadow !== "none") {
                res = i;
            }
        }
        return (res)
    },
    clear_close: function() {
        var elems = document.getElementsByClassName("hold_close");
        for (var i = 0; i < elems.length; i++) {
            if (i !== 0) {
                elems[i].remove();
            }
        }
    },
    clear_threads: function() {
        setTimeout(function() {
            window.location.reload();
        }, 1000000000) // throttle this to 1 or 2 seconds
    },
    sign_in_toggle: function(event) {
        const id = event.target.id;
        const sign_in = document.getElementById("sign_in_button");
        const sign_up = document.getElementById("sign_up_button");
        const sign_in_pass = document.getElementsByClassName("sign_in_pass")[0];
        const forogt_pass = document.getElementsByClassName("forgot_pass")[0];
        const clone = document.getElementById("hold_inputs_clone");
        if (id === "sign_in_button") {
            sign_in.style.background = "gold";
            sign_in.style.color = "#141414";
            sign_up.style.color = "whitesmoke";
            sign_up.style.background = "grey";
            sign_in.style.pointerEvents = "none";
            sign_up.style.pointerEvents = "auto";
            if (typeof(clone) !== "undefined") {
                clone.remove();
            }
            document.getElementsByClassName("forgot_pass")[0].style.display = "block";
            sign_in_pass.placeholder = "password...";
        } else {
            sign_in.style.background = "grey";
            sign_up.style.background = "gold";
            sign_in.style.color = "whitesmoke";
            sign_up.style.color = "#141414";
            sign_in.style.pointerEvents = "auto";
            sign_up.style.pointerEvents = "none";
            forogt_pass.style.display = "none";
            const clone = sign_in_pass.cloneNode(true);
            clone.id = "hold_inputs_clone";
            clone.placeholder = "retype password...";
            clone.value = "";
            document.getElementById("hold_inputs").append(clone);
            sign_in_pass.placeholder = "choose password...";
        }
    },
    follow_block: function(event) {
        follow_block_cnt++;
        const id = event.target.id;
        const butt = document.getElementById(event.target.id);
        const current_color = document.getElementById(event.target.id).style.background;
        if (current_color !== "rgb(243, 179, 43)") {
            butt.style.background = "#F3B32B";
            butt.style.color = "#141414";
        } else {
            butt.style.background = "grey";
            butt.style.color = "#141414";
        }
    },
    repost: function() {
        const elem = document.getElementsByClassName("messages_wrapper")[0];
        const clone = elem.cloneNode(true);
        clone.classList.add("repost_clone");
        events.clear_reposts()
        events.clear_comments()
        if (typeof(clone.children[3]) !== "undefined") {
            clone.children[3].remove();
        }
        clone.children[2].children[0].style.width = "100%";
        document.getElementsByClassName("hold_repost")[0].append(clone);
        const all_cnts = document.getElementsByClassName("show_count");
        for (var i = 0; i < all_cnts.length; i++) {
            all_cnts[i].style.marginTop = "0px"
        }
    },
    comment: function() {
        const elem = document.getElementsByClassName("messages_wrapper")[0];
        const clone = elem.cloneNode(true);
        clone.classList.add("comment_clone");
        events.clear_comments()
        events.clear_reposts()
        if (typeof(clone.children[3]) !== "undefined") {
            clone.children[3].remove();
        }
        clone.children[2].children[0].style.width = "100%";
        document.getElementsByClassName("hold_comment")[0].append(clone);
        const all_cnts = document.getElementsByClassName("show_count");
        for (var i = 0; i < all_cnts.length; i++) {
            all_cnts[i].style.marginTop = "-140px"
        }
    },
    clear_reposts: function() {
        const elems = document.getElementsByClassName("repost_clone");
        for (var i = 0; i < elems.length; i++) {
            elems[i].remove()
        }
    },
    clear_comments: function() {
        const elems = document.getElementsByClassName("comment_clone");
        for (var i = 0; i < elems.length; i++) {
            elems[i].remove()
        }
    },
    like: function(event) {
        const id = event.currentTarget.id
        const class_instance = utility.get_class_instance("like_icon", id)
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
            if (document.getElementsByClassName(options.input_class)[0].value.indexOf("@") === -1) {} else {
                if (window.sign_in_up_choice === "sign_up") { // new user (registering)
                    options.new_user_function();
                } else { // existing user (signing in)
                    options.existing_user_function();
                }
            }
        } else {
            document.getElementById("hold_inputs").classList.remove("rubberBand");
            setTimeout(function() {
                document.getElementById("hold_inputs").classList.add("rubberBand");
            }, 200)
            alert(options.fail_message_2)
        }
        if (window.sign_in_up_choice === "sign_up") {
            document.getElementsByClassName("loader")[0].style.marginTop = "60px";
        } else {
            document.getElementsByClassName("loader")[0].style.marginTop = "80px";
        }
    },
    toggle_password_eye: function() {
        eye_cnt++;
        if (eye_cnt % 2 === 0) {
            document.getElementsByClassName("sign_in_pass")[0].type = "password";
        } else {
            document.getElementsByClassName("sign_in_pass")[0].type = "text";
        }
    },
    delete_thread: function() {
        const instance = events.get_clicked_textarea_instance();
        const elem = document.getElementsByClassName("clone")[instance - 1];
        elem.classList.add("slide_right");
        setTimeout(function() {
            elem.remove();
            elem.classList.remove("slide_right");
            events.renumber_placeholders();
            events.disable_delete();
            document.getElementById("write_textarea").click();
            utility.scroll_to_top("write_wrapper");
        }, 200)
    },
    click_back_poll: function(e) {
        events.open_div("write");
    },
    add_poll: function() {
        const inst = events.get_clicked_textarea_instance();
        document.getElementsByClassName("poll_wrapper")[inst].style.display = "block";
    },
    enable_camera: function() {
        const elem = document.getElementById("camera_icon");
        elem.style.pointerEvents = "auto";
        elem.style.opacity = "1";
    }
}