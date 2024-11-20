// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import './index.css';
import mainPage from './component/pages/chatMain';  // Import the ChatPage component
import ChatPage from './component/pages/chatMain';  // Import the ChatPage component

function App() {
  return (
    <Router>
      <div className="app">
        {/* Navigation Buttons */}
        <div className="button-container">
          <Link to="/main" className="button">main</Link>
          <Link to="/chat" className="button">Chat</Link>
          <Link to="/page3" className="button">Page 3</Link>
          <Link to="/page4" className="button">Page 4</Link>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/page2" element={<div>Page 2 Content</div>} />
          <Route path="/page3" element={<div>Page 3 Content</div>} />
          <Route path="/page4" element={<div>Page 4 Content</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
