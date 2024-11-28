import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import InfoCard from "../container/Questionbox";

const QuestionDBA = () => {
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
        title: `Context Box ${newId}`,
        content: `This is the content of the added context box ${newId}.`,
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
  const navigate = useNavigate();
  return (
    <div className="w-[390px] h-[844px] relative">
      <div className="w-[390px] h-[844px] left-0 top-0 absolute bg-gradient-to-b from-white to-[#eff4ff]"></div>
      <div className="w-[390px] h-[844px] px-2.5 py-[50px] left-0 top-0 absolute flex flex-col justify-start items-center gap-[5px]">
        {/* Top Bar */}
        <div className="self-stretch px-[26px] flex justify-center items-center gap-[5px]">
          <img className="w-[15px] h-[15px]" src={require("../icon/lngIcon.png")} />
          <div className="text-center text-[#696b6e] text-[15px] font-normal font-['Montserrat'] leading-relaxed">EN</div>
          <div className="grow shrink basis-0 text-center text-[#183138] text-lg font-normal font-['Montserrat'] leading-relaxed">
            Question
          </div>
          <button
            onClick={() => navigate("/QuestionDashboardQ")}
            className="h-[26px] px-[5px] bg-[#ff916f]/60 rounded-[5px] shadow-inner flex justify-center items-center gap-2.5"
          >
            <div className="text-center text-[#696b6e] text-[15px] font-normal font-['Montserrat'] leading-relaxed">A</div>
          </button>
          <img className="w-[15px] h-[15px]" src={require("../icon/settingIcon.png")} />
        </div>
        {/* Search Bar */}
        <div className="w-[350px] px-3.5 py-[7px] bg-white rounded-[20px] flex justify-start items-center gap-[5px]">
          <img className="w-[15px] h-[15px]" src={require("../icon/searchIcon.png")} />
          <div className="grow shrink basis-0 text-[#7e858c] text-sm font-normal font-['Montserrat'] leading-snug">
            Search question....
          </div>
        </div>

        {/* Arthiz fill here */}
                {/* // Blue ANS for Q
        // <InfoCard
        //     topic="Wire Tied up"
        //     author="Bruce Banner"
        //     primaryColor="#9cd2ff"
        //     secondaryColor="#182838"
        // />

        // Green NotANS for Q
        // <InfoCard
        //     topic="Wire Tied up"
        //     author="Bruce Banner"
        //     primaryColor="#9cffab"
        //     secondaryColor="#182838"
        // />

        // RED NotAns for A
        // <InfoCard
        //     topic="Wire Tied up"
        //     author="Bruce Banner"
        //     primaryColor="#d9381f"
        //     secondaryColor="#d9381f"
        // />

        // Black AIAns for A
        // <InfoCard
        //     topic="Wire Tied up"
        //     author="Bruce Banner"
        //     primaryColor="#182838"
        //     secondaryColor="#182838"
        // /> */}
        {/* Section Title */}
        <div className="w-[358px] h-7 text-[#182838] text-[22px] font-bold font-['Montserrat'] leading-7">Directed Question</div>
        {/* Question List */}
        <div className="self-stretch grow p-2.5 bg-white rounded-[10px] flex flex-col justify-start items-start gap-2.5">
          <div class="w-[281px] text-[#ff0000] text-base font-semibold font-['Montserrat'] leading-normal">Not answered</div>
          <div class="w-[281px] text-black text-base font-normal font-['Montserrat'] leading-normal">AI answered</div>
          <div class="w-[281px] text-[#161616] text-base font-normal font-['Montserrat'] leading-normal">History</div>
        </div>


        {/* Bottom Navigation */}
        <div className="w-[390px] h-16 bg-[#eff4ff]/90 backdrop-blur-md justify-start items-center inline-flex">
          <Link to="/" className="w-[97.50px] px-2 pt-[15.60px] pb-2 flex-col justify-end items-center gap-[11.50px] inline-flex">
            <img className="w-[15px] h-[16.9px]" src={require("../icon/homeIcon.png")} alt="Home" />
            <div className="w-[81.50px] text-center text-[#7e858c] text-[10px] font-medium font-['Montserrat'] leading-3">Home</div>
          </Link>
          <Link to="/ChatDashboardQ" className="w-[97.50px] px-2 pt-[14.50px] pb-2 flex-col justify-end items-center gap-[10.96px] inline-flex">
            <img className="w-[19px] h-[19px]" src={require("../icon/chatIcon.png")} alt="Chat" />
            <div className="w-[81.50px] text-center text-[#7e858c] text-[10px] font-medium font-['Montserrat'] leading-3">Chat</div>
          </Link>
          <div className="w-[97.50px] px-2 pt-[15px] pb-2 flex-col justify-end items-center gap-[11px] inline-flex">
            <img className="w-[64px] h-[32px]" src={require("../icon/ON-qChatIcon.png")} alt="Question" />
            <div className="w-[81.50px] text-center text-[#6badf0] text-[10px] font-medium font-['Montserrat'] leading-3">Question</div>
          </div>
          <Link to="/ReportDashboard" className="w-[97.50px] px-2 pt-[15px] pb-2 flex-col justify-end items-center gap-[11px] inline-flex">
            <img className="w-[16px] h-[18px]" src={require("../icon/reportIcon.png")} alt="Report" />
            <div className="w-[81.50px] text-center text-[#7e858c] text-[10px] font-medium font-['Montserrat'] leading-3">Report</div>
          </Link>
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
  );
};

export default QuestionDBA;
