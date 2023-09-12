import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../assets/styles/reset.css"
import HomePage from "../pages/HomePage/HomePage";
import ClockPage from "../pages/ClockPage/ClockPage";
import Day5Page from "../pages/Day5Page/Day5Page";
import Day3Page from "../pages/Day3Page/Day3Page";
import Day6Page from "../pages/Day6Page/Day6Page";
import Day7Page from "../pages/Day7Page/Day7Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClockPage/>}/>
        <Route path="/day3" element={<Day3Page/>}/>
        <Route path="/day5" element={<Day5Page/>}/>
        <Route path="/day6" element={<Day6Page/>}/>
        <Route path="/day7" element={<Day7Page/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
