import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import QuestionDB from "./component/pages/MainQuestion";
import ChatDB from "./component/pages/MainChat";
import ChatPage from "./component/pages/chatMain";
import DirectedQuestion from "./component/pages/directQuestion";
import ProjectDashboard from './component/pages/MainHome';
import ReportDB from "./component/pages/Mainreport";
import ReportDetails from "./component/pages/reportDB";
import ReportIP from "./component/pages/reportInput";
import TimelineRP from "./component/pages/reporttimeline";
import ChatFunc from "./component/pages/chatFunc";

function App() {
  return (
    <Router>
      <div className="app">
        {/* Routes */}
        <Routes>
          <Route path="/" element={<ProjectDashboard />} />
          <Route path="/QuestionDashboard" element={<QuestionDB />} />
          <Route path="/ChatDashboard" element={<ChatDB />} />
          <Route path="/ReportDashboard" element={<ReportDB />} />
          <Route path="/reportTimeline" element={<TimelineRP />} />
          <Route path="/reportInput" element={<ReportIP />} />
          <Route path="/reportOutput" element={<ReportDetails />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/directedQuestion" element={<DirectedQuestion />} />
          <Route path="/chat/:id" element={<ChatFunc />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;