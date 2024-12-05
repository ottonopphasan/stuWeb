import React, { useState, useLayoutEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ChatRoom = ({ roomType }) => {
  const { contextId } = useParams(); // Get contextId from the URL params
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [chatAnswered, setChatAnswered] = useState(false);
  const navigate = useNavigate();

  // Use useLayoutEffect to load state before render
  useLayoutEffect(() => {
    // Load individual messages for the specific contextId
    const storedMessages = JSON.parse(localStorage.getItem(`chat_${contextId}`)) || [];
    setMessages(storedMessages);

    const storedchatAnswered = JSON.parse(localStorage.getItem(`chatAnswered_${contextId}`)) || false;
    setChatAnswered(storedchatAnswered);

  }, [contextId]); // Reload when contextId changes

  // Save messages for the current room and shared states (aiAnswered, uAnswered)
  useLayoutEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(`chat_${contextId}`, JSON.stringify(messages)); // Save chat history per room
    }

    // Only save aiAnswered and uAnswered if they are not already true
    if (chatAnswered) {
      localStorage.setItem(`chatAnswered_${contextId}`, JSON.stringify(true));
    }

  }, [messages, chatAnswered, contextId]); // Save on state change

  // Handle sending a message
  const handleSendMessage = async () => {
    if (currentMessage.trim() === "") return;

    const newMessage = {
      type: roomType === "ChatChat" ? "questioner" : "answerer",
      content: currentMessage,
    };

    // Update messages for the specific room
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    if (roomType === "ChatChat") {
      // Simulate AI response
      const botResponse = await simulateAiResponse(currentMessage);

      if (botResponse) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: "bot", content: botResponse },
        ]);
        setAiAnswered(true); // AI answered the question
      }
    } else if (roomType === "ChatA") {
      setUAnswered(true); // User from ChatA answered
    }

    setCurrentMessage("");
  };

  // Simulate AI response (replace with your API call if needed)
  const simulateAiResponse = async (userMessage) => {
    if (userMessage.toLowerCase().includes("unknown")) {
      return null; // Simulate no AI answer
    }
    return `AI says: I can answer "${userMessage}"!`; // Simulate AI answer
  };

  // Determine message alignment based on roomType
  const getMessageAlignment = (message) => {
    if (roomType === "ChatQ") {
      return message.type === "questioner" ? "justify-end" : "justify-start";
    } else {
      return message.type === "answerer" ? "justify-end" : "justify-start";
    }
  };

  return (
    <div className="w-[390px] h-[844px] flex flex-col bg-gradient-to-b from-white to-[#c6d6f8]">
      {/* Header */}
      <div className="py-4 px-2 flex justify-between items-center">
        <button
          onClick={() =>
            navigate(roomType === "ChatChat" ? "/QuestionDashboardQ" : "/QuestionDashboardA")
          }
          className="text-blue-500"
        >
          Back
        </button>
        <h1 className="text-lg font-bold">
          {roomType === "ChatChat" ? "Chat Room Q" : "Chat Room A"}
        </h1>
      </div>

      {/* Chat History */}
      <div className="flex-1 px-4 py-2 overflow-y-auto bg-[#f5f5f5]">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${getMessageAlignment(message)} mb-2`}>
            <div
              className={`px-4 py-2 rounded-lg ${
                message.type === (roomType === "ChatChat" ? "questioner" : "answerer")
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
      <div className="p-4 flex items-center bg-white">
        <textarea
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg"
          placeholder={
            roomType === "ChatChat" ? "Type your question..." : "Type your answer..."
          }
        ></textarea>
        <button
          onClick={handleSendMessage}
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Send
        </button>
      </div>

      {/* Status Display */}
      <div className="p-4 bg-gray-100 text-sm">
        <p>AI Answered: {chatAnswered ? "Yes" : "No"}</p>
      </div>
    </div>
  );
};

export default ChatRoom;
