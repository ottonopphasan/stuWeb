import React from 'react';
import { Link } from 'react-router-dom';

const ProjectDashboard = () => {
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
            <div className="text-[#7e858c] text-sm font-normal font-['Montserrat'] leading-snug">Search projects...</div>
        </div>

        {/* Section: Past Due Projects */}
        <div className="w-[358px] text-[#182838] text-[22px] font-bold font-['Montserrat'] leading-7">Past Due Projects</div>
        <div className="flex-col justify-start items-start gap-2.5 flex">
          <div className="self-stretch h-[108px] px-4 py-2 bg-white rounded-[20px] justify-start items-center gap-2.5 inline-flex">
            <img className="w-[87px] h-[87px] rounded-[11px]" src={require("../icon/train1.png")} alt="project" />
            <div className="flex-col justify-center items-start gap-0.5 inline-flex">
              <div className="w-28 text-[#182838] text-base font-medium font-['Montserrat'] leading-normal">MRT Pink Line</div>
              <div className="w-[161px] h-[18px] text-[#7e898c] text-[13px] font-normal font-['Inter'] leading-tight">
                Step: Rail Part Installation
              </div>
              <div className="w-[161px] text-[#7e858c] text-xs font-normal font-['Montserrat'] leading-tight">John Smith</div>
            </div>
            <div className="w-[70px] h-[84px] relative">
              <div className="w-[70px] h-5 left-0 top-0 absolute text-center text-[#7e898c] text-[8px] font-normal font-['Inter'] leading-tight">
                Due: 2023-12-01
              </div>
              <img className="w-[61px] h-[61px] left-[5px] top-[23px] absolute" src="https://via.placeholder.com/61x61" alt="placeholder" />
              <div className="w-9 h-[25px] left-[17px] top-[41px] absolute text-center text-[#183138] text-base font-normal font-['Montserrat'] leading-normal">
                45%
              </div>
            </div>
          </div>
        </div>

        {/* Section: Current Projects */}
        <div className="self-stretch text-[#182838] text-[22px] font-bold font-['Montserrat'] leading-7">Current Projects</div>
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 flex">
          <div className="self-stretch h-[108px] px-4 py-2 bg-white rounded-[20px] justify-start items-center gap-2.5 inline-flex">
            <img className="w-[87px] h-[87px] rounded-[11px]" src={require("../icon/train2.png")} alt="project" />
            <div className="flex-col justify-center items-start gap-0.5 inline-flex">
              <div className="w-28 text-[#182838] text-base font-medium font-['Montserrat'] leading-normal">MRT Red Line</div>
              <div className="w-[161px] h-[18px] text-[#7e898c] text-[13px] font-normal font-['Inter'] leading-tight">
                Step: Rail Part Installation
              </div>
              <div className="w-[161px] text-[#7e858c] text-xs font-normal font-['Montserrat'] leading-tight">Hugh Andrews</div>
            </div>
            <div className="w-[70px] h-[84px] relative">
              <div className="w-[70px] h-5 left-0 top-0 absolute text-center text-[#7e898c] text-[8px] font-normal font-['Inter'] leading-tight">
                Due: 2023-12-01
              </div>
              <img className="w-[61px] h-[61px] left-[5px] top-[23px] absolute" src="https://via.placeholder.com/61x61" alt="placeholder" />
              <div className="w-9 h-[25px] left-[17px] top-[41px] absolute text-center text-[#183138] text-base font-normal font-['Montserrat'] leading-normal">
                45%
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="w-[390px] h-16 bg-[#eff4ff]/90 backdrop-blur-md justify-start items-center inline-flex">
          <div className="w-[97.50px] px-2 pt-[15px] pb-2 flex-col justify-end items-center gap-[11px] inline-flex">
            <img className="w-[64px] h-[32px]" src={require("../icon/ON-Main.png")} alt="Home" />
            <div className="w-[81.50px] text-center text-[#6badf0] text-[10px] font-medium font-['Montserrat'] leading-3">Home</div>
          </div>
          <Link to="/ChatDashboard" className="w-[97.50px] px-2 pt-[14.50px] pb-2 flex-col justify-end items-center gap-[10.96px] inline-flex">
            <img className="w-[19px] h-[19px]" src={require("../icon/chatIcon.png")} alt="Chat" />
            <div className="w-[81.50px] text-center text-[#7e858c] text-[10px] font-medium font-['Montserrat'] leading-3">Chat</div>
          </Link>

          {/* Link added for Question button */}
          <Link to="/QuestionDashboardQ" className="w-[97.50px] px-2 pt-[14.50px] pb-2 flex-col justify-end items-center gap-[10.96px] inline-flex">
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

export default ProjectDashboard;
