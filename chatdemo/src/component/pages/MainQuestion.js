import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const QuestionDB = () => {
  const [contextBoxes, setContextBoxes] = useState([
    { id: 1, title: "Context Box 1", content: "This is the content of the first context box." },
  ]);

  // Function to add a new context box
  const addNewContextBox = () => {
    const newId = contextBoxes.length + 1;
    setContextBoxes([
      ...contextBoxes,
      {
        id: newId,
        title: `Context Box ${newId}`, // Corrected string interpolation
        content: `This is the content of the added context box ${newId}.`, // Corrected string interpolation
      },
    ]);
  };

  const deleteContextBox = (id) => {
    // Remove the box from the state
    setContextBoxes(contextBoxes.filter((box) => box.id !== id));

    // Optionally remove related chat history from localStorage
    localStorage.removeItem(`chatMessages-${id}`);
  };

  const [messages, setMessages] = useState([]);

  // Function to retrieve and set messages from localStorage
  const fetchMessages = () => {
    const storedMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    setMessages(storedMessages); // Update state with the latest messages
  };

  const addMessage = (message) => {
    const updatedMessages = [...messages, message];
    setMessages(updatedMessages);
    localStorage.setItem("chatMessages", JSON.stringify(updatedMessages)); // Store the new message in localStorage
  };

  useEffect(() => {
    // Initial fetch of messages
    fetchMessages();

    // Set an interval to check for new messages every 2 seconds
    const intervalId = setInterval(() => {
      fetchMessages();
    }, 2000); // 2 seconds interval

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const deleteContextBoxp3 = (id) => {
    // Remove the box from the state
    setContextBoxes(contextBoxes.filter((box) => box.id !== id));

    // Optionally remove related chat history from localStorage
    localStorage.removeItem(`chatMessages-${id}`);
  };

  return (
    <div className="w-[390px] h-[844px] bg-white flex-col justify-center items-center inline-flex">
    <div className="self-stretch grow shrink basis-0 px-2.5 py-[50px] bg-gradient-to-b from-white to-[#eff4ff] flex-col justify-start items-center gap-[5px] inline-flex">

      {/* Main Content */}
      <div className="w-[390px] h-[844px] px-2.5 py-[50px] left-0 top-0 absolute flex-col justify-start items-center gap-[5px] inline-flex">
        {/* Header */}
        <div className="self-stretch px-[2px] justify-center items-center gap-[5px] inline-flex">
          <img className="w-[26px] h-[26px]" src={require("../icon/lngIcon.png")} alt="Language" />
          <div className="text-center text-[#696b6e] text-[15px] font-normal font-['Montserrat'] leading-relaxed">EN</div>
          <div className="grow shrink basis-0 text-center text-[#183138] text-lg font-normal font-['Montserrat'] leading-relaxed">Question</div>
          <img className="w-[20px] h-[20px]" src={require("../icon/manIcon.png")} alt="Profile" />
          <img className="w-[19px] h-[19px]" src={require("../icon/settingIcon.png")} alt="Settings" />
        </div>

        {/* Title */}
        <div className="w-[358px] h-7 text-[#182838] text-[22px] font-bold font-['Montserrat'] leading-7">
          Directed Question
        </div>

        {/* Question Content */}
        <div className="self-stretch grow shrink basis-0 p-2.5 bg-white rounded-[10px] max-h-[710px] overflow-y-auto">
          {contextBoxes.map((box) => (
            <div key={box.id} className="border border-gray-300 rounded-md p-4 mb-4 bg-gray-50">
              <button
                onClick={() => deleteContextBox(box.id)}
                className="relative bottom-[50%] left-[85%] bg-red-400 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                X
              </button>

              <h2 className="text-lg font-bold mb-2">{box.title}</h2>
              <p className="text-sm text-gray-700">{box.content}</p>
              <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">
                <Link to={`/chat/${box.title}`} className="button">
                  Open Chat {box.id}
                </Link>
              </button>
            </div>
          ))}

          {messages.length === 0 ? (
            <p></p>
          ) : (
            messages.map((message, index) => (
              <div key={index} className="border border-gray-300 rounded-md p-4 mb-4 bg-gray-50">
                <button
                  onClick={() => deleteContextBoxp3(index)}
                  className="relative bottom-[50%] left-[85%] bg-red-400 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  X
                </button>

                <h2 className="text-lg font-bold mb-2"><strong>Topic: </strong>{message.topic || "No topic assigned"}</h2>
                <p className="text-sm text-gray-700">{message.content}</p>
                <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">
                  <Link to={`/chat`} className="button">
                    Open Chat
                  </Link>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Bottom Navigation */}
        <div className="w-[390px] h-16 bg-[#eff4ff]/90 backdrop-blur-md justify-start items-center inline-flex">
          <Link to="/" className="w-[97.50px] px-2 pt-[15.60px] pb-2 flex-col justify-end items-center gap-[11.50px] inline-flex">
            <img className="w-[15px] h-[16.9px]" src={require("../icon/homeIcon.png")} alt="Home" />
            <div className="w-[81.50px] text-center text-[#7e858c] text-[10px] font-medium font-['Montserrat'] leading-3">Home</div>
          </Link>
          <Link to="/ChatDashboard" className="w-[97.50px] px-2 pt-[14.50px] pb-2 flex-col justify-end items-center gap-[10.96px] inline-flex">
            <img className="w-[19px] h-[19px]" src={require("../icon/chatIcon.png")} alt="Chat" />
            <div className="w-[81.50px] text-center text-[#7e858c] text-[10px] font-medium font-['Montserrat'] leading-3">Chat</div>
          </Link>
          <div className="w-[97.50px] px-2 pt-[15px] pb-2 flex-col justify-end items-center gap-[11px] inline-flex">
            <img className="w-[64px] h-[32px]" src={require("../icon/ON-qChatIcon.png")} alt="Question" />
            <div className="w-[81.50px] text-center text-[#6badf0] text-[10px] font-medium font-['Montserrat'] leading-3">Question</div>
          </div>
          <div className="w-[97.50px] px-2 pt-[15px] pb-2 flex-col justify-end items-center gap-[11px] inline-flex">
            <img className="w-[16px] h-[18px]" src={require("../icon/reportIcon.png")} alt="Report" />
            <div className="w-[81.50px] text-center text-[#7e858c] text-[10px] font-medium font-['Montserrat'] leading-3">Report</div>
          </div>
        </div>

        {/* Floating Button */}
        <div
          className="left-[320px] top-[675px] absolute justify-start items-center gap-[7px] inline-flex cursor-pointer"
          onClick={addNewContextBox}
        >
          <img className="w-[11px] h-[19px]" src={require("../icon/backIcon.png")} alt="Back" />
          <img className="w-[40px] h-[40px]" src={require("../Button/chatBot.png")} alt="Add Box" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default QuestionDB;
