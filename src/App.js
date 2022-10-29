import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { IssueList, IssueDetails } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<IssueList />} />
        <Route exact path="/details" element={<IssueDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
