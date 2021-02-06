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
    validate_file_size: function(file, max_allowable_in_mb) {
        var FileSize = file.files[0].size / 1024 / 1024;
        if (FileSize > max_allowable_in_mb) {
            return ("not allowed")
        } else {
            return ("allowed")
        }
    },
    character_counter: function(e) {
        var id = e.target.id;
        // var class_name = document.getElementById(id).className;
        var cnt = 280 - Number(e.target.value.length)
        document.getElementById(id).previousElementSibling.innerHTML = cnt;
        if (cnt > 50 && cnt <= 280) {
            document.getElementById(id).previousElementSibling.style.color = "whitesmoke";
        } else if (cnt > 0 && cnt <= 50) {
            document.getElementById(id).previousElementSibling.style.color = "yellow";
        } else {
            document.getElementById(id).previousElementSibling.style.color = "red";
            document.getElementById(id).previousElementSibling.classList.add("rubberBand_it");
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