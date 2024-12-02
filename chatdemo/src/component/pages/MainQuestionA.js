import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; // Ensure Link is imported
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
    const aiAnswered = Math.random() > 0.5; // Randomly set AI answered status
    const newBox = {
      id: newId,
      topic: `Topic ${contextBoxes.length + 1}`,
      fromWho: "User",
      aiAnswered: aiAnswered,
      userAnswered: false,
      primaryColor: aiAnswered ? "#0c0c0c" : "#d9381f", // Set initial color based on aiAnswered
      secondaryColor: "#182838",
    };

    setContextBoxes((prev) => {
      const updatedBoxes = [...prev, newBox];
      localStorage.setItem("contextBoxes", JSON.stringify(updatedBoxes));
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

  // Function to handle navigation to chat room
  const handleCardClick = (id) => {
    const selectedBox = contextBoxes.find((box) => box.id === id);
    if (selectedBox) {
      navigate(`/chatroom/${id}/a`); // Navigate to chatroom page with the selected box ID
    }
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

        {/* Section Title */}
        <div className="w-[358px] h-7 text-[#182838] text-[22px] font-bold font-['Montserrat'] leading-7">Directed Question</div>
        <div className="h-6 justify-start items-center gap-2.5 inline-flex">
          <div className="w-3 h-3 bg-[#000000] rounded-[15px]"></div>
          <div className="text-black-500 text-base font-semibold font-['Montserrat'] leading-normal">AI answered</div>
          <div className="w-3 h-3 bg-[#ff2424] rounded-[15px]"></div>
          <div className="text-red-500 text-base font-semibold font-['Montserrat'] leading-normal">NOT answered</div>
        </div>

        {/* Question List */}
        <div className="self-stretch grow p-2.5 bg-white rounded-[10px] flex flex-col justify-start items-start gap-2.5">
          {contextBoxes.map((box) => (
            <div key={box.id} className={`w-full flex ${box.canAnswer ? "justify-start" : "justify-end"}`}>
              <div onClick={() => handleCardClick(box.id)} className="w-full cursor-pointer">
                <InfoCard
                  topic={box.topic}
                  fromWho={box.fromWho}
                  primaryColor={box.aiAnswered ? "#0c0c0c" : "#d9381f"} // Dynamic color update
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
