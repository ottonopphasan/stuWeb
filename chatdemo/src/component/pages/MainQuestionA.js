import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InfoCard from "../container/Questionbox"; // Assuming you have InfoCard component

const QuestionDBA = () => {
  const [contextBoxes, setContextBoxes] = useState([]);
  const navigate = useNavigate();

  // Load context boxes from localStorage on initial load
  useEffect(() => {
    const savedBoxes = JSON.parse(localStorage.getItem("contextBoxes")) || [];
    setContextBoxes(savedBoxes);
  }, []);

  // Function to add a new context box
  const addNewContextBox = () => {
    const newId = Date.now();
    const canAnswer = Math.random() > 0.5;
    const newBox = {
      id: newId,
      topic: `Topic ${contextBoxes.length + 1}`, // Improved topic name
      fromWho: "User",
      primaryColor: canAnswer ? "#0c0c0c" : "#d9381f",
      secondaryColor: "#182838",
      canAnswer,
      answered: false, // New property to track if the question is answered
    };

    setContextBoxes((prev) => {
      const updatedBoxes = [...prev, newBox];
      localStorage.setItem("contextBoxes", JSON.stringify(updatedBoxes));
      // Store topic label for later use in QuestionDBQ
      const storedTopics = JSON.parse(localStorage.getItem("topics")) || [];
      localStorage.setItem("topics", JSON.stringify([...storedTopics, newBox.topic]));
      return updatedBoxes;
    });
  };

  // Function to delete a context box
  const deleteContextBox = (id) => {
    setContextBoxes((prev) => {
      const updatedBoxes = prev.filter((box) => box.id !== id);
      localStorage.setItem("contextBoxes", JSON.stringify(updatedBoxes));
      return updatedBoxes;
    });
  };

  // Function to update a context box as answered
  const markAsAnswered = (id) => {
    setContextBoxes((prev) => {
      const updatedBoxes = prev.map((box) => {
        if (box.id === id) {
          return { ...box, answered: true, primaryColor: "#008000" }; // Change color to green
        }
        return box;
      });
      localStorage.setItem("contextBoxes", JSON.stringify(updatedBoxes));
      return updatedBoxes;
    });
  };

  // Function to handle card click and mark as answered
  const handleCardClick = (id) => {
    markAsAnswered(id);
    navigate(`/chatroom/${id}`); // Navigate to the chat room after marking as answered
  };

  return (
    <div className="w-[390px] h-[844px] relative">
      {/* Background and Main Content */}
      <div className="w-[390px] h-[844px] left-0 top-0 absolute bg-gradient-to-b from-white to-[#eff4ff]"></div>
      <div className="w-[390px] h-[844px] px-2.5 py-[50px] left-0 top-0 absolute flex flex-col justify-start items-center gap-[5px]">
        <div className="self-stretch px-[26px] flex justify-center items-center gap-[5px]">
          <img className="w-[15px] h-[15px]" src={require("../icon/lngIcon.png")} alt="Language" />
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
          <img className="w-[15px] h-[15px]" src={require("../icon/settingIcon.png")} alt="Settings" />
        </div>

        {/* Search Bar */}
        <div className="w-[350px] px-3.5 py-[7px] bg-white rounded-[20px] flex justify-start items-center gap-[5px]">
          <img className="w-[15px] h-[15px]" src={require("../icon/searchIcon.png")} alt="Search" />
          <div className="grow shrink basis-0 text-[#7e858c] text-sm font-normal font-['Montserrat'] leading-snug">
            Search question....
          </div>
        </div>

        {/* Section Title */}
        <div className="w-[358px] h-7 text-[#182838] text-[22px] font-bold font-['Montserrat'] leading-7">Directed Question</div>
        <div className="h-6 justify-start items-center gap-2.5 inline-flex">
          <div className="w-3 h-3 bg-[#d9381f] rounded-[15px]"></div>
          <div className="text-[#ff0000] text-base font-semibold font-['Montserrat'] leading-normal">Not answered</div>
          <div className="w-3 h-3 bg-[#0c0c0c] rounded-[15px]"></div>
          <div className="text-black text-base font-semibold font-['Montserrat'] leading-normal">AI answered</div>
        </div>
        
        {/* Question List */}
        <div className="self-stretch grow p-2.5 bg-white rounded-[10px] flex flex-col justify-start items-start gap-2.5">
          {contextBoxes.map((box) => (
            <div key={box.id} className={`w-full flex ${box.canAnswer ? 'justify-start' : 'justify-end'}`}>
              <div onClick={() => handleCardClick(box.id)} className="w-full cursor-pointer">
                <InfoCard
                  topic={box.topic}
                  fromWho={box.fromWho}
                  primaryColor={box.primaryColor}
                  secondaryColor={box.secondaryColor}
                />
              </div>
              <button
                onClick={() => deleteContextBox(box.id)}
                className="text-red-500 text-sm mt-1"
              >
                Delete
              </button>
            </div>
          ))}
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
          <Link to="/ReportDashboard" className="w-[97.50px] px-2 pt-[15px] pb-2 flex-col justify-end items-center gap-[11px] inline-flex">
            <img className="w-[16px] h-[18px]" src={require("../icon/reportIcon.png")} alt="Report" />
            <div className="w-[81.50px] text-center text-[#7e858c] text-[10px] font-medium font-['Montserrat'] leading-3">Report</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuestionDBA;
