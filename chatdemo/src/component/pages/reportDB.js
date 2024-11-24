import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReportDetails = () => {
  const navigate = useNavigate();

  // Get the stored reports from localStorage
  const reports = JSON.parse(localStorage.getItem('reports')) || [];

  // Handle deleting a report
  const deleteReport = (index) => {
    const updatedReports = [...reports];
    updatedReports.splice(index, 1); // Remove the report at the given index
    localStorage.setItem('reports', JSON.stringify(updatedReports)); // Save the updated list back to localStorage
    window.location.reload(); // Refresh the page (can be replaced with state management)
  };

  const getTextColor = (topic) => {
    switch (topic) {
      case 'update':
        return 'text-green-500'; // Green for "update"
      case 'deformation':
        return 'text-red-500'; // Red for "deformation"
      case 'other':
        return 'text-yellow-500'; // Yellow for "other"
      default:
        return 'text-gray-500'; // Default gray color
    }
  };

  return (
    <div className="w-[390px] h-[844px] flex-col justify-center items-center inline-flex">
      <div className="self-stretch grow shrink basis-0 pt-[50px] bg-gradient-to-b from-white to-[#e5ecfc] flex-col justify-start items-center gap-1 inline-flex">
        {/* Header Section with "X" Button */}
        <div className="self-stretch px-[2px] justify-center items-center gap-[5px] inline-flex">
          <div className="w-[262px] text-center text-[#183138] text-lg font-normal font-['Montserrat'] leading-relaxed">
            Report Details
          </div>
          <button
            onClick={() => navigate('/ReportDashboard')}
            className="w-[24px] h-[24px] text-[#183138] text-xl font-bold"
          >
            X
          </button>
        </div>

        {/* Display All Reports */}
        {reports.length === 0 ? (
          <div className="text-[#183138] text-base font-normal font-['Montserrat'] leading-normal">
            No reports submitted.
          </div>
        ) : (
          reports.map((report, index) => (
            <div key={index} className="w-[358px] h-[82px] relative flex-col justify-start items-start inline-flex mt-4">
              {/* Card Background */}
              <div className="w-[358px] h-[82px] bg-white rounded-2xl shadow"></div>

              {/* Report Content */}
              <div className="pr-[11px] justify-start items-center gap-4 inline-flex">
                {/* Report Image Placeholder with Rounded Corners */}
                <div className="w-[72px] h-[72px] relative rounded-[10px] flex-col justify-start items-start flex">
                  <div className="w-[72px] h-[72px] left-0 top-0 absolute bg-[#cacaca]"></div>
                  <div className="w-[43px] h-[43px] left-[14px] top-[15px] absolute">
                    <div className="w-[34.04px] h-[32.25px] left-[5.38px] top-[7.17px] absolute">
                      <img
                        src={require('../icon/addphotoIcon.png')} // Replace with actual image path
                        alt="Report Image"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Report Content Text */}
                <div className="w-[238px] self-stretch flex-col justify-center items-start inline-flex">
                  <div className="self-stretch h-6 justify-center items-center gap-[52px] inline-flex">
                    <div
                      className={`w-[116px] text-[#182838] text-base font-medium font-['Montserrat'] leading-normal ${getTextColor(report.topic)}`}
                    >
                      {report.topic ? report.topic.charAt(0).toUpperCase() + report.topic.slice(1) : 'N/A'}
                    </div>
                    <div className="w-[70px] h-5 text-right text-[#7e898c] text-[8px] font-normal font-['Montserrat'] leading-tight">
                      Now
                    </div>
                  </div>
                  <div className="w-[238px] h-[18px] text-[#7e898c] text-[13px] font-normal font-['Montserrat'] leading-tight">
                    Description: {report.description || 'No description provided'} <br />
                  </div>
                </div>
              </div>

              {/* Delete Button */}
              <button
                onClick={() => deleteReport(index)}
                className="absolute top-2 right-2 text-red-500 text-xl font-bold"
              >
                X
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReportDetails;
