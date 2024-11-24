import React from 'react';
import { Link } from 'react-router-dom';

const TimelineRP = () => {
  return (
    <div className="w-[390px] h-[844px] flex-col justify-center items-center inline-flex bg-gradient-to-b from-white to-[#e8edf7]">
      {/* Gradient Header Section */}
      <div className="self-stretch py-4 flex-col justify-start items-center gap-2 inline-flex">
        <div className="justify-start items-center gap-8 inline-flex">
          <Link to="/ReportDashboard">
            <img className="w-[11px] h-[20px]" src={require("../icon/backIcon.png")} alt="Back" />
          </Link>
          <div className="w-[262px] text-center text-[#183138] text-lg font-normal font-['Montserrat'] leading-relaxed">
            Project Report
          </div>
          <img className="w-[19px] h-[19px]" src={require("../icon/settingIcon.png")} alt="Settings" />
        </div>
        <div className="w-[390px] h-[42px] relative">
          <div className="w-[390px] h-[42px] left-0 top-0 absolute"></div>
          <div className="w-[358px] left-[16px] top-[6px] absolute text-[#183138] text-[22px] font-normal font-['Montserrat'] leading-7">
            Report
          </div>
        </div>
        <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
          <div className="w-2 h-[23px] relative"></div>
          <div className="grow shrink basis-0 text-[#7e898c] text-xs font-normal font-['Inter'] leading-tight">
            Choose your current process
          </div>
        </div>

        <div className="self-stretch grow shrink basis-0 px-5 flex-col justify-start items-start flex">
          <div className="w-[353px] h-[75px] px-2.5 bg-white justify-start items-center gap-5 inline-flex">
          <img className="w-[15px] h-[8px]" src={require("../icon/grayIcon.png")} alt="Back" /> 
            <Link to="/reportInput" className="grow shrink basis-0 self-stretch py-3 flex-col justify-center items-start inline-flex">
              <div className="self-stretch text-[#183138] text-base font-normal font-['Montserrat'] leading-normal">
                Office building
              </div>
              <div className="self-stretch text-[#7e898c] text-xs font-normal font-['Inter'] leading-tight">
                Reception area, Elevators etc.
              </div>
            </Link>
          </div>

          <div className="w-[353px] h-[75px] px-2.5 bg-white justify-start items-center gap-5 inline-flex">
            <img className="w-[15px] h-[8px]" src={require("../icon/grayIcon.png")} alt="Back" />
            <Link to="/reportInput" className="grow shrink basis-0 self-stretch py-3 flex-col justify-center items-start inline-flex">
                <div className="w-[281px] text-[#183138] text-base font-normal font-['Montserrat'] leading-normal">
                    Drainage system
                </div>
                <div className="w-[281px] text-[#7e898c] text-xs font-normal font-['Inter'] leading-tight">
                    Pipes, Storm drains etc.
                </div>
            </Link>
          </div>

          <div className="w-[353px] h-[75px] px-2.5 bg-white justify-start items-center gap-5 inline-flex">
          <img className="w-[15px] h-[8px]" src={require("../icon/grayIcon.png")} alt="Back" />
            <Link to="/reportInput" className="grow shrink basis-0 self-stretch py-3 flex-col justify-center items-start inline-flex">
              <div className="w-[281px] text-[#183138] text-base font-normal font-['Montserrat'] leading-normal">
                Foundation work
              </div>
              <div className="w-[281px] text-[#7e898c] text-xs font-normal font-['Inter'] leading-tight">
                Steel structure and Test equipment installation
              </div>
            </Link>
          </div>

          <div className="w-[353px] h-[75px] px-2.5 bg-white justify-start items-center gap-5 inline-flex">
          <img className="w-[15px] h-[8px]" src={require("../icon/redIcon.png")} alt="Back" />
            <Link to="/reportInput" className="grow shrink basis-0 self-stretch py-3 flex-col justify-center items-start inline-flex">
              <div className="w-[281px] text-[#183138] text-base font-normal font-['Montserrat'] leading-normal">
                Electrical system
              </div>
              <div className="w-[281px] text-[#7e898c] text-xs font-normal font-['Inter'] leading-tight">
                Heating, and Air Conditioning
              </div>
            </Link>
          </div>

          <div className="w-[353px] h-[75px] px-2.5 bg-white justify-start items-center gap-5 inline-flex">
          <img className="w-[15px] h-[8px]" src={require("../icon/redIcon.png")} alt="Back" />
            <Link to="/reportInput" className="grow shrink basis-0 self-stretch py-3 flex-col justify-center items-start inline-flex">
              <div className="w-[281px] text-[#183138] text-base font-normal font-['Montserrat'] leading-normal">
                Concrete pouring Hopper <br/>(4 Sets)
              </div>
              <div className="w-[281px] text-[#7e898c] text-xs font-normal font-['Inter'] leading-tight">
                Beam and Hoist installation and test load.
              </div>
            </Link>
          </div>

          <div className="w-[353px] h-[75px] px-2.5 bg-white justify-start items-center gap-5 inline-flex">
          <img className="w-[15px] h-[8px]" src={require("../icon/blueIcon.png")} alt="Back" />
            <Link to="/reportInput" className="grow shrink basis-0 self-stretch py-3 flex-col justify-center items-start inline-flex">
              <div className="w-[281px] text-[#183138] text-base font-normal font-['Montserrat'] leading-normal">
                Concrete pouring Hopper
              </div>
              <div className="w-[281px] text-[#7e898c] text-xs font-normal font-['Inter'] leading-tight">
                Install hopper rails, hopper framework and hopper motor.
              </div>
            </Link>
          </div>

          <div className="w-[353px] h-[75px] px-2.5 bg-white justify-start items-center gap-5 inline-flex">
          <img className="w-[15px] h-[8px]" src={require("../icon/blueIcon.png")} alt="Back" />
            <Link to="/reportInput" className="grow shrink basis-0 self-stretch py-3 flex-col justify-center items-start inline-flex">
              <div className="w-[249px] h-6 text-[#183138] text-base font-normal font-['Montserrat'] leading-normal">
                Concrete pouring Hopper
              </div>
              <div className="self-stretch text-[#7e898c] text-xs font-normal font-['Inter'] leading-tight">
                Install hopper rails, hopper framework and hopper motor.
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[390px] h-[50px] relative bg-[#f0f5ff]"></div>
      {/* Add button to navigate to /reportOutput */}
      <div className="w-[390px] h-[50px] relative bg-[#f0f5ff]">
        <Link to="/reportOutput">
          <div className="w-[358px] h-12 left-[16px] top-[8px] absolute bg-[#16c6ed] rounded-lg flex justify-center items-center cursor-pointer">
            <div className="text-white text-base font-medium font-['Montserrat'] leading-normal">
              Go to Report Output
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TimelineRP;
