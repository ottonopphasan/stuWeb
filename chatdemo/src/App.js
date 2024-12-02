import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import ProjectDashboard from './component/pages/MainHome';
import QuestionDBA from "./component/pages/MainQuestionA";
import QuestionDBQ from "./component/pages/MainQuestionQ";
import ChatDB from "./component/pages/MainChat";
import ReportDB from "./component/pages/Mainreport";
import ReportDetails from "./component/pages/reportDB";
import ReportIP from "./component/pages/reportInput";
import TimelineRP from "./component/pages/reporttimeline";
import ChatRoom from "./component/pages/ChatRoom"; // Import new component

function App() {
  return (
    <Router>
      <div className="app">
        {/* Routes */}
        <Routes>
          <Route path="/" element={<ProjectDashboard />} />
          <Route path="/QuestionDashboardA" element={<QuestionDBA />} />
          <Route path="/QuestionDashboardQ" element={<QuestionDBQ />} />
          <Route path="/ChatDashboard" element={<ChatDB />} />
          <Route path="/ReportDashboard" element={<ReportDB />} />
          <Route path="/reportTimeline" element={<TimelineRP />} />
          <Route path="/reportInput" element={<ReportIP />} />
          <Route path="/reportOutput" element={<ReportDetails />} />
          <Route path="/chatroom/:contextId/q" element={<ChatRoom roomType="ChatQ" />} />
          <Route path="/chatroom/:contextId/a" element={<ChatRoom roomType="ChatA" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;