import React from "react";
import { Link, useNavigate } from 'react-router-dom';

const DirectedQuestion = () => {
  return (
    <div className="w-[390px] h-[844px] relative">
      <div className="w-[390px] h-[844px] left-0 top-0 absolute bg-gradient-to-b from-white to-[#eff4ff]"></div>
      <div className="w-[390px] h-[844px] px-2.5 py-[50px] left-0 top-0 absolute flex flex-col justify-start items-center gap-[5px]">
        {/* Top Bar */}
        <div className="self-stretch px-[26px] flex justify-center items-center gap-[5px]">
          <div className="text-center text-[#696b6e] text-[15px] font-normal font-['Montserrat'] leading-relaxed">EN</div>
          <div className="grow shrink basis-0 text-center text-[#183138] text-lg font-normal font-['Montserrat'] leading-relaxed">
            Question
          </div>
          <div className="h-[26px] px-[5px] bg-[#00ccff]/60 rounded-[5px] shadow-inner flex justify-center items-center gap-2.5">
            <div className="text-center text-[#696b6e] text-[15px] font-normal font-['Montserrat'] leading-relaxed">Q</div>
          </div>
          <img className="w-[18.80px] h-[19px]" src="https://via.placeholder.com/19x19" alt="Placeholder" />
        </div>
        {/* Search Bar */}
        <div className="w-[350px] px-3.5 py-[7px] bg-white rounded-[20px] flex justify-start items-center gap-[5px]">
          <img className="w-[15px] h-[15px]" src="https://via.placeholder.com/15x15" alt="Search" />
          <div className="grow shrink basis-0 text-[#7e858c] text-sm font-normal font-['Poppins'] leading-snug">
            Search question....
          </div>
        </div>
        {/* Section Title */}
        <div className="w-[358px] h-7 text-[#182838] text-[22px] font-bold font-['Poppins'] leading-7">Directed Question</div>
        {/* Question List */}
        <div className="self-stretch grow p-2.5 bg-white rounded-[10px] flex flex-col justify-start items-start gap-2.5">
          {[1, 2, 3].map((item, index) => (
            <div key={index} className="w-[350px] h-[72px] flex items-center gap-2.5">
              <div className="w-[72px] h-[72px] relative rounded-[10px] bg-[#cacaca] flex justify-center items-center">
                <div className="text-[#182838]/60 text-5xl font-medium font-['Poppins'] leading-normal">?</div>
              </div>
              <div className="w-[238px] flex flex-col justify-start items-start">
                <div className="text-[#182838] text-base font-medium font-['Poppins'] leading-normal">Topic : Wire Tied up</div>
                <div className="text-[#7e898c] text-[13px] font-normal font-['Inter'] leading-tight">By Bruce Banner</div>
              </div>
            </div>
          ))}
          {/* History */}
          <div className="w-[281px] text-[#161616] text-base font-normal font-['Montserrat'] leading-normal">History</div>
          {[1, 2, 3].map((item, index) => (
            <div key={index} className="self-stretch flex justify-start items-center gap-2.5">
              <div className="w-[238px] flex flex-col justify-start items-start">
                <div className="text-[#182838]/30 text-base font-medium font-['Poppins'] leading-normal">Topic : Wire Tied up</div>
              </div>
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

export default DirectedQuestion;