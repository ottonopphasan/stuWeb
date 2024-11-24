import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ReportIP = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleClick = (button) => {
    setActiveButton(button); // Update the active button state when clicked
  };

  const handleSubmit = () => {
    const data = {
      topic: activeButton,
      description: text,
    };

    // Get existing reports from localStorage or initialize an empty array
    const reports = JSON.parse(localStorage.getItem('reports')) || [];

    // Add the new report to the reports array
    reports.push(data);

    // Store the updated reports array in localStorage
    localStorage.setItem('reports', JSON.stringify(reports));

    // Navigate to the output page
    navigate('/ReportDetails');
  };

  return (
    <div className="w-[390px] h-[844px] flex-col justify-center items-center inline-flex">
      <div className="self-stretch grow shrink basis-0 pt-[50px] bg-gradient-to-b from-white to-[#e5ecfc] flex-col justify-start items-center gap-1 inline-flex">
        <div className="justify-start items-center gap-8 inline-flex">
          <Link to="/ReportDashboard">
            <img className="w-[11px] h-[20px]" src={require("../icon/backIcon.png")} alt="Back" />
          </Link>
          <div className="w-[262px] text-center text-[#183138] text-lg font-normal font-['Montserrat'] leading-relaxed">
            Project
          </div>
          <img className="w-[19px] h-[19px]" src={require("../icon/settingIcon.png")} alt="Settings" />
        </div>
        <div className="w-[358px] text-[#183138] text-[22px] font-normal font-['Montserrat'] leading-7">Report</div>

        <div className="w-[390px] px-3 py-2 justify-center items-center gap-[15px] inline-flex">
          {/* Update Button */}
          <div
            className={`p-[5px] bg-gray-100 rounded-[10px] justify-center items-center gap-2.5 flex ${activeButton === 'update' ? 'bg-green-500' : ''}`}
            onClick={() => handleClick('update')}
          >
            <img className="w-[16.94px] h-[17px]" src={require("../icon/updateIcon.png")} alt="Update" />
            <div className="text-[#183138] text-sm font-normal font-['Montserrat'] leading-snug">Update</div>
          </div>

          {/* Deformation Button */}
          <div
            className={`p-[5px] bg-gray-100 rounded-[10px] justify-center items-center gap-2.5 flex ${activeButton === 'deformation' ? 'bg-red-500' : ''}`}
            onClick={() => handleClick('deformation')}
          >
            <img className="w-[20.27px] h-[17.50px]" src={require("../icon/deformIcon.png")} alt="Deformation" />
            <div className="text-[#183138] text-sm font-normal font-['Montserrat'] leading-snug">Deformation</div>
          </div>

          {/* Other Button */}
          <div
            className={`p-[5px] bg-gray-100 rounded-[10px] justify-center items-center gap-2.5 flex ${activeButton === 'other' ? 'bg-blue-600' : ''}`}
            onClick={() => handleClick('other')}
          >
            <img className="w-[14.54px] h-[3px]" src={require("../icon/otherIcon.png")} alt="Other" />
            <div className="text-[#183138] text-sm font-normal font-['Montserrat'] leading-snug">Other</div>
          </div>
        </div>

        <textarea
          className="w-[285px] h-[100px] text-[#7e898c] text-base font-normal font-['Montserrat'] leading-normal bg-[#ebeded] p-2 rounded-[10px]"
          placeholder="Enter additional information here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Link to={"/reportOutput"} className="w-[390px] h-16 relative">
          <div
            className="w-[358px] h-12 left-[16px] top-[8px] absolute bg-[#16c6ed] rounded-lg flex justify-center items-center cursor-pointer"
            onClick={handleSubmit}
          >
            <div className="text-white text-base font-medium font-['Montserrat'] leading-normal">
              Submit
            </div>
          </div>
        </Link>

        <div className="w-[390px] h-[389px] relative bg-[#f0f5ff]"></div>
      </div>
    </div>
  );
};

export default ReportIP;
