import React, { useState, useEffect } from 'react';
import '../../App.css';
import { useNavigate } from "react-router-dom";

// Image imports
import backIcon from "../icon/backIcon.png";
import settingIcon from "../icon/settingIcon.png";
import listIcon from "../icon/listIcon.png";
import micIcon from "../icon/micIcon.png";
import sentIcon from "../icon/sentIcon.png";

const Bchat = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [topic, setTopic] = useState("");

  // Mock response generator
  const generateResponse = (userMessage) => {
    return `You said: ${userMessage}`;
  };

  // Load messages from localStorage when the component mounts
  useEffect(() => {
    const storedMessages = localStorage.getItem('chatMessages');
    if (storedMessages) {
      try {
        const parsedMessages = JSON.parse(storedMessages);
        if (Array.isArray(parsedMessages)) {
          setMessages(parsedMessages);
        }
      } catch (error) {
        console.error("Error parsing messages from localStorage:", error);
      }
    }
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('chatMessages', JSON.stringify(messages));
    } catch (error) {
      console.error("Error saving messages to localStorage:", error);
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (currentMessage.trim() === "" || topic.trim() === "") return;

    const userMessage = { type: "user", content: currentMessage, topic };
    const botMessage = { type: "bot", content: generateResponse(currentMessage), topic };

    setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
    setCurrentMessage(""); // Clear input
  };

  return (
    <div className="w-[390px] h-[844px] flex-col justify-center items-center inline-flex bg-gradient-to-b from-white to-[#c6d6f8]">
      {/* Header */}
      <div className="self-stretch py-4 flex-col justify-start items-center gap-2 inline-flex">
        <div className="self-stretch px-2.5 flex justify-between items-center">
          <button onClick={() => navigate("/QuestionDB")}><img className="w-[11px] h-[20px]" src={backIcon} alt="Back" /> </button>
          <div className="text-center text-[#183138] text-lg font-normal font-['Montserrat']">Directed Question</div>
          <img className="w-[19px] h-[19px]" src={settingIcon} alt="Settings" />
        </div>
        <div className="self-stretch text-center text-[#3e3e3e] text-sm font-normal font-['Montserrat']">
          Type your question below and it will be directed
        </div>
      </div>

      {/* Topic Input */}
      <div className="w-full px-[19px] py-2 flex flex-col gap-2">
        <label className="text-[#1e1f20] text-base font-['Montserrat']">Topic:</label>
        <input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full h-10 px-4 py-2 bg-[#eedede] rounded-lg text-[#1e1f20] text-base font-['Montserrat'] leading-normal"
          placeholder="Enter topic"
        />
      </div>

      {/* Chat Room */}
      <div className="flex-1 w-full px-4 py-2 overflow-y-auto flex flex-col gap-4 bg-[#f5ebeb7c]">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-lg ${message.type === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}
            >
              <p className="text-xs text-gray-500">{message.topic}</p> {/* Topic Label */}
              <p>{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="w-full px-[19px] py-2 bg-white flex items-center gap-3 border-t">
        <img
          className="w-[28px] h-[27px]"
          src={listIcon}
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
          src={micIcon}
          alt="Mic"
        />
        <img
          onClick={handleSendMessage}
          className="w-[17.90px] h-[18px] cursor-pointer"
          src={sentIcon}
          alt="Send"
        />
      </div>
    </div>
  );
};

export default Bchat;
