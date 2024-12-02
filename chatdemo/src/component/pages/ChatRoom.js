import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ChatRoom = () => {
  const { contextId } = useParams();
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [topic, setTopic] = useState("");
  const navigate = useNavigate();

  // Load messages and topic from localStorage when the component mounts
  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem(`chat_${contextId}`)) || [];
    setMessages(storedMessages);

    const storedTopic = localStorage.getItem(`topic_${contextId}`) || "";
    setTopic(storedTopic);
  }, [contextId]);

  // Save messages and topic to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(`chat_${contextId}`, JSON.stringify(messages));
    }
    if (topic) {
      localStorage.setItem(`topic_${contextId}`, topic);
      // Update the topic in the corresponding card in QuestionDBQ
      const contextBoxes = JSON.parse(localStorage.getItem("contextBoxes")) || [];
      const updatedBoxes = contextBoxes.map((box) =>
        box.id === parseInt(contextId) ? { ...box, topic: topic } : box
      );
      localStorage.setItem("contextBoxes", JSON.stringify(updatedBoxes)); // Save updated context boxes
    }
  }, [messages, topic, contextId]);

  // Handle sending a message
  const handleSendMessage = async () => {
    if (currentMessage.trim() === "" || topic.trim() === "") return;

    const userMessage = { type: "user", content: currentMessage, topic };

    // Send the user message to the chatbot API
    const botResponse = await getBotResponse(currentMessage);
    const newTopic = determineNewTopic(botResponse);
    const botMessage = { type: "bot", content: botResponse, topic: newTopic };

    setTopic(newTopic);
    setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);

    setCurrentMessage("");
  };

  // Fetch response from the chatbot API (replace with your real API endpoint)
  const getBotResponse = async (userMessage) => {
    // Replace with an actual API request, for example:
    // const response = await fetch("https://your-chatbot-api.com/ask", {
    //   method: "POST",
    //   body: JSON.stringify({ message: userMessage }),
    //   headers: { "Content-Type": "application/json" }
    // });
    // const data = await response.json();
    // return data.response;

    // For now, using a simulated response
    return `You said: ${userMessage}. The bot is thinking...`;
  };

  // Function to determine if the topic should change based on bot's response
  const determineNewTopic = (botResponse) => {
    // You can add logic here to detect new topics based on the response
    if (botResponse.includes("thinking")) {
      return "Thinking Topic"; // Set a new topic if certain conditions are met
    }
    return topic;
  };

  return (
    <div className="w-[390px] h-[844px] flex-col justify-center items-center inline-flex bg-gradient-to-b from-white to-[#c6d6f8]">
      {/* Header */}
      <div className="self-stretch py-4 flex-col justify-start items-center gap-2 inline-flex">
        <div className="self-stretch px-2.5 flex justify-between items-center">
          <button onClick={() => navigate("/QuestionDashboardQ")} className="w-[11px] h-[20px]">
            <img className="w-[11px] h-[20px]" src={require("../icon/backIcon.png")} alt="Back" />
          </button>
          <div className="text-center text-[#183138] text-lg font-normal font-['Montserrat']">Directed Question</div>
          <img className="w-[19px] h-[19px]" src={require("../icon/settingIcon.png")} alt="Settings" />
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
          <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[70%] p-3 rounded-lg ${message.type === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}
            >
              <p className="text-xs text-gray-500">{message.type === "user" ? "User" : message.topic}</p>
              <p>{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="w-full px-[19px] py-2 bg-white flex items-center gap-3 border-t">
        <img className="w-[28px] h-[27px]" src={require("../icon/listIcon.png")} alt="List" />
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

export default ChatRoom;
