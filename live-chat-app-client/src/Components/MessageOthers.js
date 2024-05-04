import React from "react";

function MessageOthers() {
  var props = { name: "Random User", message: "This is sampel me" };

  return (
    <div className="other-message-container">
      <div className="conversation-container"></div>
      <p className="con-icon">{props.name[0]}</p>
      <div className="other-text-content">
        <p className="con-title">{props.name}</p>
        <p className="con-lastMessage">{props.message}</p>
        <p className="self-timestamp">12:00 Am</p>
      </div>
    </div>
  );
}

export default MessageOthers;
