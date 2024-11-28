import React from 'react';
import { Link } from 'react-router-dom';

const ReportDB = () => {
  return (
    <div className="w-[390px] h-[844px] flex-col justify-center items-center inline-flex bg-gradient-to-b from-white to-[#e8edf7]">
      {/* Gradient Header Section */}
      <div className="self-stretch py-4 flex-col justify-start items-center gap-2 inline-flex">
        {/* Top Bar */}
        <div className="self-stretch px-[2px] justify-center items-center gap-[5px] inline-flex">
            <img className="w-[26px] h-[26px]" src={require("../icon/lngIcon.png")} alt="Language" />
            <div className="text-center text-[#696b6e] text-[15px] font-normal font-['Montserrat'] leading-relaxed">EN</div>
            <div className="grow shrink basis-0 text-center text-[#183138] text-lg font-normal font-['Montserrat'] leading-relaxed">ProjectDashboard</div>
            <img className="w-[20px] h-[20px]" src={require("../icon/manIcon.png")} alt="Profile" />
            <img className="w-[19px] h-[19px]" src={require("../icon/settingIcon.png")} alt="Settings" />
        </div>

        {/* Search Bar */}
        <div className="w-[350px] h-[37px] pl-4 pr-5 py-1.5 bg-white rounded-[15px] justify-start items-center gap-2.5 inline-flex">
            <img className="w-[15px] h-[15px]" src={require("../icon/searchIcon.png")} />
            <div className="text-[#7e858c] text-sm font-normal font-['Montserrat'] leading-snug">Search projects...</div>
        </div>

        {/* Section Header */}
        <div className="flex items-center gap-2 px-4 mt-4">
          <span className="text-[#7e898c] text-xs font-normal font-['Montserrat']">
            Choose project to report
          </span>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-4 px-4 py-2">
          {[
            {
              title: 'MRT Pink Line',
              step: 'Rail Part Installation',
              owner: 'John Smith',
              image: 'https://via.placeholder.com/87x87',
            },
            {
              title: 'SRT Red Line',
              step: 'Motor Hopper Installation',
              owner: 'Jame Cena',
              image: 'https://via.placeholder.com/87x87',
            },
            {
              title: 'RAMA IV Bridge',
              step: 'Pre-Tension Wire Tied up',
              owner: 'Somrak Kumarai',
              image: 'https://via.placeholder.com/87x87',
            },
            {
              title: 'Nongborn Drainage',
              step: 'Overhead Crane Test',
              owner: 'Tawima Junhorm',
              image: 'https://via.placeholder.com/87x87',
            },
          ].map((project, index) => (
            <Link to="/reportTimeline" key={index}
              className="w-full bg-white rounded-2xl shadow flex items-center p-4">
              <img
                className="w-[87px] h-[87px] rounded-lg"
                src={project.image}
                alt={`${project.title} Thumbnail`}
              />
              <div className="ml-4">
                <h3 className="text-[#182838] text-base font-medium font-['Montserrat']">
                  {project.title}
                </h3>
                <p className="text-[#7e898c] text-sm font-normal font-['Montserrat']">
                  Step: {project.step}
                </p>
                <p className="text-[#7e858c] text-xs font-normal font-['Montserrat']">
                  {project.owner}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="w-[390px] h-16 bg-[#eff4ff]/90 backdrop-blur-md justify-start items-center inline-flex">
        <Link to="/" className="w-[97.50px] px-2 pt-[15.60px] pb-2 flex-col justify-end items-center gap-[11.50px] inline-flex">
            <img className="w-[15px] h-[16.9px]" src={require("../icon/homeIcon.png")} alt="Home" />
            <div className="w-[81.50px] text-center text-[#7e858c] text-[10px] font-medium font-['Montserrat'] leading-3">Home</div>
        </Link>
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
            <img className="w-[64px] h-[32px]" src={require("../icon/ON-report.png")} alt="Report" />
            <div className="w-[81.50px] text-center text-[#6badf0] text-[10px] font-medium font-['Montserrat'] leading-3">Report</div>
        </Link>
      </div>
    </div>
  );
};

export default ReportDB;
