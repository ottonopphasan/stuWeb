import './App.css';
import './index.css'; // Adjust the path if the CSS file is elsewhere
import { useState } from 'react';
import axios from 'axios';

function App() {

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
      </div>
    </div>
  );
}

export default App;