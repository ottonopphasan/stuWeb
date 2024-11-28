import React from "react";

// Blue ANS for Q
// <InfoCard
//     topic="Wire Tied up"
//     author="Bruce Banner"
//     primaryColor="#9cd2ff"
//     secondaryColor="#182838"
// />

// Green NotANS for Q
// <InfoCard
//     topic="Wire Tied up"
//     author="Bruce Banner"
//     primaryColor="#9cffab"
//     secondaryColor="#182838"
// />

// RED NotAns for A
// <InfoCard
//     topic="Wire Tied up"
//     author="Bruce Banner"
//     primaryColor="#d9381f"
//     secondaryColor="#d9381f"
// />

// Black AIAns for A
// <InfoCard
//     topic="Wire Tied up"
//     author="Bruce Banner"
//     primaryColor="#182838"
//     secondaryColor="#182838"
// />

const InfoCard = ({ topic, fromWho, primaryColor, secondaryColor }) => {
  return (
    <div className="h-14 justify-start items-center gap-2.5 inline-flex">
      <div
        className="w-3 h-14 rounded-[15px]"
        style={{ backgroundColor: primaryColor }}
      ></div>
      <div className="w-[238px] flex-col justify-start items-start inline-flex">
        <div
          className="self-stretch text-base font-medium font-['Montserrat'] leading-normal"
          style={{ color: primaryColor }}
        >
          Topic: {topic}
        </div>
        <div
          className="self-stretch h-[18px] text-[13px] font-normal font-['Montserrat'] leading-tight"
          style={{ color: secondaryColor }}
        >
          By {fromWho}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;