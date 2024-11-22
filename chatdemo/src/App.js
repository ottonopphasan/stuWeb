// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import "./index.css";
import QuestionPage from "./component/pages/D-questionDB";
import Bchat from "./component/pages/D-chatBOT";
import DirectedQuestion from "./component/pages/directQuestion";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define the routes */}
        <Route path="/QuestionDB" element={<QuestionPage />} />
        <Route path="/Bchat" element={<Bchat />} />
        <Route path="/ANSdb" element={<DirectedQuestion />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
};

export default App;