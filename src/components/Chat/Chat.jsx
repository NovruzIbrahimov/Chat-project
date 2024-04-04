import React from "react";
import "../Chat/chat.css";
import Cam from '../../images/cam.png'
import Add from '../../images/avatar.png'
import More from '../../images/more.png'
import Messages from '../Messages/Messages'
import Input from '../Input/Input'

function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span></span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default Chat;
