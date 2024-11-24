import React from "react";
import { useNavigate } from "react-router-dom";

const QuestionPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  return (
    <div className="w-[390px] h-[844px] relative">
      {/* Background Gradient */}
      <div className="w-[390px] h-[844px] left-0 top-0 absolute bg-gradient-to-b from-white to-[#eff4ff]"></div>
      {/* Main Content */}
      <div className="w-[390px] h-[844px] px-2.5 py-[50px] left-0 top-0 absolute flex-col justify-start items-center gap-[5px] inline-flex">
        {/* Header */}
        <div className="self-stretch px-[5px] justify-center items-center gap-[5px] inline-flex">
          <img className="w-[26px] h-[26px]" src={require("../icon/lngIcon.png")} />
          <div className="text-center text-[#696b6e] text-[15px] font-normal font-['Montserrat'] leading-relaxed">EN</div>
          <div className="grow shrink basis-0 text-center text-[#183138] text-lg font-normal font-['Montserrat'] leading-relaxed">Question</div>
          <img className="w-[20px] h-[20px]" src={require("../icon/manIcon.png")} />
          <img className="w-[19px] h-[19px]" src={require("../icon/settingIcon.png")} />
        </div>

        {/* Search Bar */}
        <div className="w-[350px] px-3.5 py-[7px] bg-white rounded-[20px] justify-start items-center gap-[5px] inline-flex">
          <img className="w-[15px] h-[15px]" src={require("../icon/searchIcon.png")} />
          <div className="grow shrink basis-0 text-[#7e858c] text-sm font-normal font-['Montserrat'] leading-snug">Search question....</div>
        </div>

        {/* Title */}
        <div className="w-[358px] h-7 text-[#182838] text-[22px] font-bold font-['Montserrat'] leading-7">Directed Question</div>

        {/* Question Content */}
        <div className="self-stretch grow shrink basis-0 p-2.5 bg-white rounded-[10px]"></div>

        {/* Bottom Navigation */}
        <div className="w-[390px] h-16 bg-[#eff4ff]/90 backdrop-blur-md justify-start items-center inline-flex">
          <div className="w-[97.50px] px-2 pt-[15.60px] pb-2 flex-col justify-end items-center gap-[11.50px] inline-flex">
            <img className="w-[15px] h-[16.9px]" src={require("../icon/homeIcon.png")} />
            <div className="w-[81.50px] text-center text-[#7e858c] text-[10px] font-medium font-['Montserrat'] leading-3">Home</div>
          </div>
          <div className="w-[97.50px] px-2 pt-[14.50px] pb-2 flex-col justify-end items-center gap-[10.96px] inline-flex">
            <img className="w-[19px] h-[19px]" src={require("../icon/chatIcon.png")} />
            <div className="w-[81.50px] text-center text-[#7e858c] text-[10px] font-medium font-['Montserrat'] leading-3">Chat</div>
          </div>
          <div className="w-[97.50px] px-2 pt-[15px] pb-2 flex-col justify-end items-center gap-[11px] inline-flex">
            <img className="w-[64px] h-[32px]" src={require("../icon/ON-qChatIcon.png")} />
            <div className="w-[81.50px] text-center text-[#6badf0] text-[10px] font-medium font-['Montserrat'] leading-3">Question</div>
          </div>
          <div className="w-[97.50px] px-2 pt-[15px] pb-2 flex-col justify-end items-center gap-[11px] inline-flex">
            <img className="w-[16px] h-[18px]" src={require("../icon/reportIcon.png")} />
            <div className="w-[81.50px] text-center text-[#7e858c] text-[10px] font-medium font-['Montserrat'] leading-3">Report</div>
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => navigate("/Bchat")}
        className="absolute left-[320px] top-[675px] flex items-center gap-[7px]">
        <img className="w-[11px] h-[19px]" src={require("../icon/backIcon.png")} alt="Back Icon" />
        <img className="w-[40px] h-[40px]" src={require("../Button/chatBot.png")} alt="Chat Bot Icon" />
      </button>
    </div>
  );
};

export default QuestionPage;
