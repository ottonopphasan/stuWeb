// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import "./index.css";
import MainPage from "./component/pages/questionMain"; // Import the MainPage (QuestionPage)
import ChatPage from "./component/pages/chatMain"; // Import the ChatPage component
import Page3 from "./component/pages/Page3"; // Import Page3 for displaying data
import DirectedQuestion from "./component/pages/directQuestion"; // Import Page3 for displaying data

import ChatFunc from "./component/pages/chatFunc";

function App() {
  return (
    <Router>
      <div className="app">
        {/* Navigation Buttons */}
        <div className="header">
          <h5>Chatbot Demo</h5> {/* Add a header */}
        </div>
           
        <div className="button-container">
          <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">
          <Link to="/main" className="button">|Main|</Link>
          </button>---------

          {/* <Link to="/main" className="button">|Main| </Link> */}
          <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">
          <Link to="/chat" className="button">|Chat|</Link>
          </button>---------

          <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">
          <Link to="/page3" className="button">|Page 3| </Link>
          </button>---------

          <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">
          <Link to="/directedQuestion" className="button">|directedQuestion|</Link>
          </button>---------

        </div>

        {/* Routes */}
        <Routes>
          <Route path="/main" element={<MainPage />} /> {/* Add MainPage route */}
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/page3" element={<Page3 />} /> {/* Add Page3 route */}
          <Route path="directedQuestion" element={<DirectedQuestion />} />

          <Route path="/" element={<MainPage />} />
          <Route path="/chat/:id" element={<ChatFunc />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
