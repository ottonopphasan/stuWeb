import React from "react";
import { useNavigate } from "react-router-dom";

const DQcard = ({ topic, person }) => {
    const navigate = useNavigate(); // Initialize useNavigate
    return (
        <button onClick={() => navigate("/ANSdb")} className="h-[72px] justify-start items-center gap-2.5 inline-flex">
            <div className="w-[72px] h-[72px] relative rounded-[10px]">
                <div className="w-[72px] h-[72px] left-0 top-0 absolute bg-[#cacaca]"></div>
                <div className="w-[25px] h-[35px] left-[23px] top-[24px] absolute text-[#182838]/60 text-5xl font-medium font-['Poppins'] leading-normal">?</div>
            </div>
            <div className="w-[238px] flex-col justify-start items-start inline-flex">
                <div className="self-stretch text-[#182838] text-base font-medium font-['Poppins'] leading-normal">Topic : {topic}</div>
                <div className="self-stretch h-[18px] text-[#7e898c] text-[13px] font-normal font-['Inter'] leading-tight">By {person}</div>
            </div>
        </button>
    );
};

export default DQcard;
