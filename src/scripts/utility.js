import smoothscroll from 'smoothscroll-polyfill';
import "../css/loader.css";
import { events } from './events';

smoothscroll.polyfill();

export var utility = {
    call_once_satisfied: function(props) {
        if (props['condition'] === true) {
            if (typeof(props.function) === 'function') {
                props.function()
            } else {
                props.function()
            }
        } else {
            setTimeout(function() {
                utility.call_once_satisfied(props)
            }, 100)
        }
    },
    is_mobile: function() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return true
        } else {
            return false
        }
    },
    scroll_to_top: function(target_class) {
        document.getElementsByClassName(target_class)[0].scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    },
    scroll_to_bottom: function(target_class, total_height) {
        document.getElementsByClassName(target_class)[0].scrollTo({
            top: total_height,
            behavior: 'smooth'
        });
    },
    spinner: function() {
        document.getElementsByClassName("loader")[0].style.display = "block";
        setTimeout(function() {
            document.getElementsByClassName("loader")[0].style.display = "none";
        }, 2000)
    },
    validate_file_size: function(file, max_allowable_in_mb) {
        var FileSize = file.files[0].size / 1024 / 1024;
        if (FileSize > max_allowable_in_mb) {
            return ("not allowed")
        } else {
            return ("allowed")
        }
    },
    character_counter: function(event) {
        console.log(event.target.id)
        const elem = document.getElementById(event.target.id);
        var cnt = 280 - elem.value.length;
        console.log(elem.value)
        elem.previousElementSibling.innerText = cnt;
        const div_holding_number = elem.previousElementSibling.parentElement.children[0];
        div_holding_number.style.width = (345 - elem.value.length).toString() + "px";
        if (cnt > 50 && cnt <= 280) {
            elem.previousSibling.style.color = "#141414";
        } else if (cnt > 0 && cnt <= 50) {
            elem.previousSibling.style.color = "yellow";
            elem.previousElementSibling.classList.remove("shake_it");
        } else {
            elem.previousSibling.style.color = "rgb(255 0 0)";
            elem.previousElementSibling.classList.add("shake_it");
        }
    },
    get_class_instance: function get_class_instance(classname, id) {
        const elems = document.getElementsByClassName(classname);
        for (var i = 0; i < elems.length; i++) {
            if (elems[i].id === id) {
                var instance = i
            }
        }
        return (instance)
    },
    get_image_data_url: function(file_obj) {
        var reader = new FileReader();
        reader.readAsDataURL(file_obj);
        return (reader.result)
    },
    pop_image : function(event) {       
        const id = event.target.id;
        window.popped_img = document.getElementById(id).src;
        events.open_div("img_and_video")
    },
    spin_element : function(id) {
        document.getElementById(id).classList.remove("spin");
        setTimeout(function() {
            document.getElementById(id).classList.add("spin");
        }, 100)
    },
    get_last_instance : function(classname) {
        return(document.getElementsByClassName(classname).length);
    }
}