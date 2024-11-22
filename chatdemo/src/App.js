// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import "./index.css";
import QuestionDB from "./component/pages/MainQuestion";
import ChatDB from "./component/pages/MainChat";
import ChatPage from "./component/pages/chatMain"; // Import the ChatPage component
import Page3 from "./component/pages/Page3"; // Import Page3 for displaying data
import DirectedQuestion from "./component/pages/directQuestion"; // Import Page3 for displaying data
import ProjectDashboard from './component/pages/MainHome';

import ChatFunc from "./component/pages/chatFunc";

function App() {
  return (
    <Router>
      <div className="app">
        {/* Navigation Buttons */}
  
        {/* Routes */}
        <Routes>
          <Route path="/" element={<ProjectDashboard />} />
          <Route path="/QuestionDashboard" element={<QuestionDB />} />
          <Route path="/ChatDashboard" element={<ChatDB />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/page3" element={<Page3 />} /> {/* Add Page3 route */}
          <Route path="directedQuestion" element={<DirectedQuestion />} />
          <Route path="/chat/:id" element={<ChatFunc />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
