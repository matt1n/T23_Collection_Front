import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../assets/styles/reset.css"
import HomePage from "../pages/HomePage/HomePage";
import ClockPage from "../pages/ClockPage/ClockPage";
import Day5Page from "../pages/Day5Page/Day5Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClockPage/>}/>
        <Route path="/day5" element={<Day5Page/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
