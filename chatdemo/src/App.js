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
import ChatChat from "./component/pages/ChatRoom_Chat";
import ChatChat1 from "./component/pages/ChatRoom_Chat1";
import ChatChat2 from "./component/pages/ChatRoom_Chat2";

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
          <Route path="/chatroom/chat1" element={<ChatChat roomType="ChatChat" />} />
          <Route path="/chatroom/chat2" element={<ChatChat1 roomType="ChatChat1" />} />
          <Route path="/chatroom/chat3" element={<ChatChat2 roomType="ChatChat2" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;