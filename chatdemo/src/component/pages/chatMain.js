// ChatPage.js
import React, { useState } from 'react';
import 'C:/Users/gamen/manage-tool/stuWeb/chatdemo/src/App.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  // Mock response generator (replace this with an API call later)
  const generateResponse = (userMessage) => {
    return `You said: ${userMessage}`;
  };

  const handleSendMessage = () => {
    if (currentMessage.trim() === "") return;

    const userMessage = { type: "user", content: currentMessage };
    const botMessage = { type: "bot", content: generateResponse(currentMessage) };

    setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
    setCurrentMessage(""); // Clear input
  };

  return (
    <div className="w-[390px] h-[844px] flex-col justify-center items-center inline-flex bg-gradient-to-b from-white to-[#c6d6f8]">
      {/* Header */}
      <div className="self-stretch py-4 flex-col justify-start items-center gap-2 inline-flex">
        <div className="self-stretch px-2.5 flex justify-between items-center">
          <img className="w-[11px] h-[20px]" src={require("../icon/backIcon.png")} alt="Back" />
          <div className="text-center text-[#183138] text-lg font-normal font-['Montserrat']">Directed Question</div>
          <img className="w-[19px] h-[19px]" src={require("../icon/settingIcon.png")} alt="Settings" />
        </div>
        <div className="self-stretch text-center text-[#3e3e3e] text-sm font-normal font-['Montserrat']">
          Type your question below and it will be directed
        </div>
      </div>

      {/* Chat Room */}
      <div className="flex-1 w-full px-4 py-2 overflow-y-auto flex flex-col gap-4 bg-[#f5ebeb7c]">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.type === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-lg ${
                message.type === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="w-full px-[19px] py-2 bg-white flex items-center gap-3 border-t">
        <img
          className="w-[28px] h-[27px]"
          src={require("../icon/listIcon.png")}
          alt="List"
        />
        <textarea
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          className="flex-1 h-10 px-4 py-2 bg-[#eedede] rounded-lg text-[#1e1f20] text-base font-['Montserrat'] leading-normal"
          placeholder="Type a Question..."
        ></textarea>
        <img
          className="w-[15px] h-[20px] cursor-pointer"
          src={require("../icon/micIcon.png")}
          alt="Mic"
        />
        <img
          onClick={handleSendMessage}
          className="w-[17.90px] h-[18px] cursor-pointer"
          src={require("../icon/sentIcon.png")}
          alt="Send"
        />
      </div>
    </div>
  );
};

export default Chat;
