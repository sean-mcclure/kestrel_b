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
    scroll_to_top : function(targe_class) {
        document.getElementsByClassName(targe_class)[0].scrollTo({top: 0, left: 0, behavior: 'smooth' });
    },
    validate_file_size: function(file, max_allowable_in_mb) {
        var FileSize = file.files[0].size / 1024 / 1024;
        if (FileSize > max_allowable_in_mb) {
            return ("not allowed")
        } else {
            return ("allowed")
        }
    },
    character_counter: function() {
        var cnt = 280 - document.getElementById("write_textarea").value.length;
        console.log(cnt)
        document.getElementById("show_count").innerText = cnt;
        if (cnt > 50 && cnt <= 280) {
            document.getElementById("show_count").style.color = "whitesmoke";
        } else if (cnt > 0 && cnt <= 50) {
            document.getElementById("show_count").style.color = "yellow";
        } else {
            document.getElementById("show_count").style.color = "red";
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
    }
}