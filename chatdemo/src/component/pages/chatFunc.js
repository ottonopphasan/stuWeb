import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Chat = () => {
  const [ topic, topicMessages ] = useState(""); // Retrieve topic from the URL
  const navigate = useNavigate(); // To navigate back to the QuestionPage
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  // Mock response generator
  const generateResponse = (userMessage) => {
    return `You said: ${userMessage}`;
  };

  // Load messages for the current topic when the component mounts
  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem(`chatMessages-${topic}`)) || [];
    console.log(`Restored messages for topic "${topic}":`, storedMessages);
    setMessages(storedMessages);
  }, [topic]);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    console.log(`Saving messages for topic "${topic}":`, messages);
    localStorage.setItem(`chatMessages-${topic}`, JSON.stringify(messages));
  }, [messages, topic]);

  const handleSendMessage = () => {
    if (currentMessage.trim() === "") return;

    const userMessage = { type: "user", content: currentMessage, topic };
    const botMessage = { type: "bot", content: generateResponse(currentMessage), topic };

    setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
    setCurrentMessage(""); // Clear the input field
  };

  return (
    <div className="w-[390px] h-[844px] flex-col justify-center items-center inline-flex bg-gradient-to-b from-white to-[#c6d6f8]">
      {/* Header */}
      <div className="self-stretch py-4 flex-col justify-start items-center gap-2 inline-flex">
        <div className="self-stretch px-2.5 flex justify-between items-center">
          {/* Navigate back */}
          <img
            onClick={() => navigate("/")}
            className="w-[11px] h-[20px] cursor-pointer"
            src={require("../icon/backIcon.png")}
            alt="Back"
          />
          <div className="text-center text-[#183138] text-lg font-normal font-['Montserrat']">
            Directed Question: {topic}
          </div>
          <img className="w-[19px] h-[19px]" src={require("../icon/settingIcon.png")} alt="Settings" />
        </div>
        <div className="self-stretch text-center text-[#3e3e3e] text-sm font-normal font-['Montserrat']">
          Type your question below and it will be directed
        </div>
      </div>

      {/* Topic Display */}
      <div className="w-full px-[19px] py-2 flex flex-col gap-2">
        <label className="text-[#1e1f20] text-base font-['Montserrat']">Topic:</label>
        <input
          value={topic}
          onChange={(e) => topicMessages(e.target.value)}
          className="w-full h-10 px-4 py-2 bg-[#eedede] rounded-lg text-[#1e1f20] text-base font-['Montserrat'] leading-normal"
          placeholder="Enter topic"
        />
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
                message.type === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
              }`}
            >
              <p className="text-xs text-gray-500">{message.topic}</p>
              <p>{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="w-full px-[19px] py-2 bg-white flex items-center gap-3 border-t">
        <textarea
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          className="flex-1 h-10 px-4 py-2 bg-[#eedede] rounded-lg text-[#1e1f20] text-base font-['Montserrat'] leading-normal"
          placeholder="Type a Question..."
        ></textarea>
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

