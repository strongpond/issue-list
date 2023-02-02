import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import { IssueList, IssueDetails } from "./pages";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<IssueList />} />
          <Route exact path="/details/:id" element={<IssueDetails />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
