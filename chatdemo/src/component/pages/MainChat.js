import React from 'react';
import { Link } from 'react-router-dom';

const ChatDB = () => {
  return (
    <div className="w-[390px] h-[844px] bg-white flex-col justify-center items-center inline-flex">
    <div className="self-stretch grow shrink basis-0 px-2.5 py-[50px] bg-gradient-to-b from-white to-[#eff4ff] flex-col justify-start items-center gap-[5px] inline-flex">
        <div className="self-stretch px-[2px] justify-center items-center gap-[5px] inline-flex">
            <img className="w-[26px] h-[26px]" src={require("../icon/lngIcon.png")} alt="Language" />
            <div className="text-center text-[#696b6e] text-[15px] font-normal font-['Montserrat'] leading-relaxed">EN</div>
            <div className="grow shrink basis-0 text-center text-[#183138] text-lg font-normal font-['Montserrat'] leading-relaxed">ProjectDashboard</div>
            <img className="w-[20px] h-[20px]" src={require("../icon/manIcon.png")} alt="Profile" />
            <img className="w-[19px] h-[19px]" src={require("../icon/settingIcon.png")} alt="Settings" />
        </div>

    {/* Search bar */}
    <div className="w-[350px] h-[37px] pl-4 pr-5 py-1.5 bg-white rounded-[15px] justify-start items-center gap-2.5 inline-flex">
        <img className="w-[15px] h-[15px]" src={require("../icon/searchIcon.png")} />
        <div className="text-[#7e858c] text-sm font-normal font-['Montserrat'] leading-snug">Search chat...</div>
    </div>

    <div class="h-[603px] px-[30px] pt-3.5 bg-white/0 flex-col justify-start items-start gap-2.5 inline-flex">
        {/* <!-- Profile Card 1 --> */}
        <div class="h-[72px] p-px justify-between items-center inline-flex">
            <img
            class="w-16 h-16 rounded-lg object-cover"
            src="https://via.placeholder.com/70x70"
            alt="Ranong Yala"
            />
            <div class="w-5 h-[70px] relative"></div>
            <div class="w-[238px] h-[52px] flex-col justify-start items-start gap-2.5 inline-flex">
                <p class="text-gray-800 text-lg font-semibold">Ranong Yala</p>
                <p class="text-gray-500 text-sm">Project: RAMA IV Bridge</p>
            </div>
        </div>

        {/* <!-- Profile Card 2 --> */}
        <div class="h-[72px] p-px justify-between items-center inline-flex">
            <img
            class="w-16 h-16 rounded-lg object-cover"
            src="https://via.placeholder.com/70x70"
            alt="Suvee Srigaew"
            />
            <div class="w-5 h-[70px] relative"></div>
            <div class="w-[238px] h-[52px] flex-col justify-start items-start gap-2.5 inline-flex">
            <p class="text-gray-800 text-lg font-semibold">Suvee Srigaew</p>
            <p class="text-gray-500 text-sm">Project: MRT Yellow Line</p>
            </div>
        </div>

        {/* <!-- Profile Card 3 --> */}
        <div class="h-[72px] p-px justify-between items-center inline-flex">
            <img
            class="w-16 h-16 rounded-lg object-cover"
            src="https://via.placeholder.com/70x70"
            alt="Aim Chaiyanan"
            />
            <div class="w-5 h-[70px] relative"></div>
            <div class="w-[238px] h-[52px] flex-col justify-start items-start gap-2.5 inline-flex">
            <p class="text-gray-800 text-lg font-semibold">Aim Chaiyanan</p>
            <p class="text-gray-500 text-sm">Project: Drainage Tunnel</p>
            </div>
        </div>
        </div>


      
    {/* Bottom Navigation */}
    <div className="w-[390px] h-16 bg-[#eff4ff]/90 backdrop-blur-md justify-start items-center inline-flex">
        <Link to="/" className="w-[97.50px] px-2 pt-[15.60px] pb-2 flex-col justify-end items-center gap-[11.50px] inline-flex">
            <img className="w-[15px] h-[16.9px]" src={require("../icon/homeIcon.png")} alt="Home" />
            <div className="w-[81.50px] text-center text-[#7e858c] text-[10px] font-medium font-['Montserrat'] leading-3">Home</div>
        </Link>
        <Link to="/ChatDashboard" className="w-[97.50px] px-2 pt-[14.50px] pb-2 flex-col justify-end items-center gap-[10.96px] inline-flex">
            <img className="w-[64px] h-[32px]" src={require("../icon/ON-Chat.png")} alt="Chat" />
            <div className="w-[81.50px] text-center text-[#6badf0] text-[10px] font-medium font-['Montserrat'] leading-3">Chat</div>
        </Link>

        {/* Link added for Question button */}
        <Link to="/QuestionDashboard" className="w-[97.50px] px-2 pt-[14.50px] pb-2 flex-col justify-end items-center gap-[10.96px] inline-flex">
            <img className="w-[25px] h-[21px]" src={require("../icon/questionChat.png")} alt="Question" />
            <div className="w-[81.50px] text-center text-[#7e858c] text-[10px] font-medium font-['Montserrat'] leading-3">Question</div>
        </Link>

        <Link to="/ReportDashboard" className="w-[97.50px] px-2 pt-[15px] pb-2 flex-col justify-end items-center gap-[11px] inline-flex">
            <img className="w-[16px] h-[18px]" src={require("../icon/reportIcon.png")} alt="Report" />
            <div className="w-[81.50px] text-center text-[#7e858c] text-[10px] font-medium font-['Montserrat'] leading-3">Report</div>
        </Link>
    </div>
    </div>
    </div>

  );
};

export default ChatDB;