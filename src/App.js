import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import { IssueList, IssueDetail } from "./pages";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<IssueList />} />
          <Route exact path="/detail/" element={<IssueDetail />} />
          <Route exact path="/detail/:id" element={<IssueDetail />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
