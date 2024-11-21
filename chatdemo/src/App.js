import './App.css';
import './index.css'; // Adjust the path if the CSS file is elsewhere
import { useState } from 'react';
import axios from 'axios';

function App() {
<<<<<<< Updated upstream

  const [promt , setPromt] = useState("");
  const [answer , setAnswer ] = useState("EMPTY")

  const handleButtonClick = () =>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then(
      response => {
        setAnswer(response.data[0].toString());
      }
    ).catch(error => {
        console.log(error);
    })
  }

  return (
    <div className="grid grid-cols-5">
      <div className='grid-span-3 col-satrt-2'>
        <span>Enter your question here : </span>
        <textarea onChange={(event) => setPromt(event.target.value)} className='border rounded border-slate-800'></textarea>
        {/* <span>{promt}</span> */}
        <span>{answer}</span>
        <button onClick={handleButtonClick} className='bg-slate-600 text-white border rounded'> get Ans </button>
=======
  return (
    <Router>
      <div class="w-[390px] h-[844px] relative">
        <div class="w-[390px] h-[844px] left-0 top-0 absolute bg-gradient-to-b from-white to-[#e4eaf8]"></div>
        <div class="w-[390px] h-[844px] py-[50px] left-0 top-0 absolute flex-col justify-start items-center gap-[5px] inline-flex">
            <div class="self-stretch px-[26px] justify-center items-center gap-[5px] inline-flex">
              <img class="w-[26px] h-[26px]" src={require("./component/icon/lngIcon.png")} />
              <div class="text-center text-[#696b6e] text-[15px] font-normal font-['Montserrat'] leading-relaxed">EN</div>
              <div class="grow shrink basis-0 text-center text-[#183138] text-lg font-normal font-['Montserrat'] leading-relaxed">Question</div>
              <img class="w-[20px] h-[20px]" src={require("./component/icon/manIcon.png")} />
              <img class="w-[19px] h-[19px]" src={require("./component/icon/settingIcon.png")} />
            </div>
            <div class="w-[350px] px-3.5 py-[7px] bg-white rounded-[20px] justify-start items-center gap-[5px] inline-flex">
                <img class="w-[15px] h-[15px]" src={require("./component/icon/searchIcon.png")} />
                <div class="grow shrink basis-0 text-[#7e858c] text-sm font-normal font-['Montserrat'] leading-snug">Search question....</div>
            </div>
            <div class="w-[358px] h-7 text-[#182838] text-[22px] font-bold font-['Montserrat'] leading-7">Directed Question</div>
            <div class="h-[570px] p-2.5 bg-white rounded-[10px]"></div>
            <div class="w-[390px] h-16 bg-[#eff4ff]/90 backdrop-blur-md justify-start items-center inline-flex">
                <div class="w-[97.50px] px-2 pt-[15.60px] pb-2 flex-col justify-end items-center gap-[11.50px] inline-flex">
                    <div class="w-[81.50px] text-center text-[#7e858c] text-[10px] font-medium font-['Montserrat'] leading-3">Home</div>
                </div>
                <div class="w-[97.50px] px-2 pt-[14.50px] pb-2 flex-col justify-end items-center gap-[10.96px] inline-flex">
                    <img class="w-[19px] h-[18.54px]" src="https://via.placeholder.com/19x19" />
                    <div class="w-[81.50px] text-center text-[#19191a] text-[10px] font-medium font-['Montserrat'] leading-3">Chat</div>
                </div>
                <div class="w-[97.50px] h-16 relative">
                    <div class="w-16 h-8 left-[16.75px] top-[8px] absolute bg-[#dde8ff] rounded-[99px]"></div>
                    <div class="w-[81.50px] left-[8px] top-[44px] absolute text-center text-[#6badf0] text-[10px] font-medium font-['Montserrat'] leading-3">Question</div>
                </div>
                <div class="w-[97.50px] px-2 pt-[15px] pb-2 flex-col justify-end items-center gap-[11px] inline-flex">
                    <div class="w-[81.50px] text-center text-[#7e858c] text-[10px] font-medium font-['Montserrat'] leading-3">Report</div>
                </div>
            </div>
        </div>
        <div class="w-[57px] h-11 left-[330px] top-[675px] absolute">
            <div class="w-10 h-10 left-[18px] top-[5px] absolute bg-[#1f1f1f] rounded-full shadow"></div>
        </div>
>>>>>>> Stashed changes
      </div>
    </div>
  );
}

export default App;