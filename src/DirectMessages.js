import "./css/direct_messages.css";

import Close from "./Close";

var direct_messages = [{
                        message : "Hey how is it going?",
                        from_user : "Luise Miguell" 
                       },
                       {
                        message : "Hey how is it going?",
                        from_user : "Luise Miguell" 
                       },
                       {
                        message : "Hey how is it going?",
                        from_user : "Luise Miguell" 
                       },
                       {
                        message : "Hey how is it going?",
                        from_user : "Luise Miguell" 
                       },
                       {
                        message : "Hey how is it going?",
                        from_user : "Luise Miguell" 
                       }
                    ]

export var dir_msgs = direct_messages.map((obj, i) => 
    <div key={i.toString()}>
        <p className="dir_msg_text">{obj.message}</p>
    </div>
);

function DirectMessages() {
    return (
      <>
      <div className="dm_close"><Close/></div>
      <div className="dm">
        <h4>MESSAGES</h4>
        {dir_msgs}
      </div>
      </>
    );
}

export default DirectMessages;