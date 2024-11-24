import React from "react";

const DirectedQuestion = ({ topic, sender }) => {
  return (
  <div class="w-[390px] h-[844px] bg-white flex-col justify-center items-center inline-flex">
  <div class="self-stretch grow shrink basis-0 py-[50px] bg-gradient-to-b from-white to-[#eff4ff] flex-col justify-start items-center gap-0.5 inline-flex">
      <div class="justify-start items-center gap-8 inline-flex">
          <img className="w-[11px] h-[20px]" src={require("../icon/backIcon.png")} />
          <div class="w-[262px] text-center text-[#183138] text-lg font-normal font-['Montserrat'] leading-relaxed">Directed Question</div>
          <img className="w-[19px] h-[19px]" src={require("../icon/settingIcon.png")} />
      </div>
      <div class="self-stretch grow shrink basis-0 flex-col justify-start items-center flex">
          <div class="self-stretch text-center text-[#182838] text-lg font-medium font-['Montserrat'] leading-normal">Topic : Nongborn Drainage </div>
      </div>
      <div class="w-[343px] text-[#182838]/60 text-[15px] font-light font-['Montserrat'] leading-normal">From Peter Parker </div>
      <div class="w-[390px] h-14 px-4 py-2 bg-white justify-start items-center gap-3 inline-flex">
          <div class="grow shrink basis-0 h-10 px-[7px] py-2 bg-[#e6dcdc] rounded-lg justify-center items-center gap-2.5 flex">
              <div class="grow shrink basis-0 text-[#7e858c] text-base font-normal font-['Montserrat'] leading-normal">Type a message...</div>
          </div>
          <img className="w-[18px] h-[18px]" src={require("../icon/sentIcon2.png")} />
          <img className="w-[15px] h-[20px]" src={require("../icon/micIcon.png")} />
      </div>
    </div>
  </div>
  );
};

export default DirectedQuestion;
