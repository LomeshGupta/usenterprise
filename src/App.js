// App.js
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Pages/Home";
import OverView from "./Pages/OverviewPage";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          {/* <Navbar /> */}
          {/* <ScrollToTop /> */}
        </Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<OverView />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
