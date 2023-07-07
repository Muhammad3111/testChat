import { DocumentData } from "firebase/firestore";
import React from "react";

type Props = {
  message: DocumentData;
};

function Message({ message }: Props) {
  return (
    <div>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <img src={message.user.avatar} alt="" className="h-8 w-8" />
        <p className="pt-1 text-sm">{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
