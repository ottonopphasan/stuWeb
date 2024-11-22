// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import "./index.css";
import MainPage from "./component/pages/questionMain"; // Import the MainPage (QuestionPage)
import ChatPage from "./component/pages/chatMain"; // Import the ChatPage component
import Page3 from "./component/pages/Page3"; // Import Page3 for displaying data
import DirectedQuestion from "./component/pages/directQuestion"; // Import Page3 for displaying data

function App() {
  return (
    <Router>
      <div className="app">
        {/* Navigation Buttons */}
        <div className="button-container">
          <Link to="/main" className="button">Main</Link>
          <Link to="/chat" className="button">Chat</Link>
          <Link to="/page3" className="button">Page 3</Link>
          <Link to="/directedQuestion" className="button">directedQuestion</Link>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/main" element={<MainPage />} /> {/* Add MainPage route */}
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/page3" element={<Page3 />} /> {/* Add Page3 route */}
          <Route path="directedQuestion" element={<DirectedQuestion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
