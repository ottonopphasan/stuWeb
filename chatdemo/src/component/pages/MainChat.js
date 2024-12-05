import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const ChatDB = () => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/chatroom/chat`, { state: true });
  };

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
    
    <div className="flex flex-col gap-4 px-4 py-2">
          {[
            {
              title: 'Ranong Yala',
              step: 'Project: RAMA IV Bridge',
              owner: 'MRT Red Line',
              image: require("../icon/people1.png"),
            },
            
          ].map((project, index) => (
            <Link to="/chatroom/chat1" key={index}
              className="w-[280px]  bg-white rounded-2xl shadow flex items-center p-4">
              <img
                className="w-[87px] h-[87px] rounded-lg"
                src={project.image}
                alt={`${project.title} Thumbnail`}
              />
              <div className="ml-4">
                <h3 className="text-[#182838] text-base font-medium font-['Montserrat']">
                  {project.title}
                </h3>
                <p className="text-[#7e858c] text-xs font-normal font-['Montserrat']">
                  {project.owner}
                </p>
              </div>
            </Link>
          ))}
      </div> 

      <div className="flex flex-col gap-4 px-4 py-2">
          {[
            
            {
              title: 'Suvee Srigaew',
              step: 'Project: MRT Yellow Line',
              owner: 'Project: MRT Yellow Line',
              image: require("../icon/people2.png"),
            },
            
          ].map((project, index) => (
            <Link to="/chatroom/chat2" key={index}
              className="w-[280px] bg-white rounded-2xl shadow flex items-center p-4">
              <img
                className="w-[87px] h-[87px] rounded-lg"
                src={project.image}
                alt={`${project.title} Thumbnail`}
              />
              <div className="ml-4">
                <h3 className="text-[#182838] text-base font-medium font-['Montserrat']">
                  {project.title}
                </h3>
                <p className="text-[#7e858c] text-xs font-normal font-['Montserrat']">
                  {project.owner}
                </p>
              </div>
            </Link>
          ))}
      </div> 

      <div className="flex flex-col gap-4 px-4 py-2">
          {[
            {
              title: 'Aim Chaiyanan',
              step: 'Project: Drainage Tunnel',
              owner: 'Project: RAMA IV Bridge',
              image: require("../icon/people3.png"),
            },
            
          ].map((project, index) => (
            <Link to="/chatroom/chat3" key={index}
              className="w-[280px] bg-white rounded-2xl shadow flex items-center p-4">
              <img
                className="w-[87px] h-[87px] rounded-lg"
                src={project.image}
                alt={`${project.title} Thumbnail`}
              />
              <div className="ml-4">
                <h3 className="text-[#182838] text-base font-medium font-['Montserrat']">
                  {project.title}
                </h3>
                <p className="text-[#7e858c] text-xs font-normal font-['Montserrat']">
                  {project.owner}
                </p>
              </div>
            </Link>
          ))}
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

export default ChatDB;