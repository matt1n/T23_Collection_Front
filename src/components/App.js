import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../assets/styles/reset.css"
import HomePage from "../pages/HomePage/HomePage";
import ClockPage from "../pages/ClockPage/ClockPage";
import Day5Page from "../pages/Day5Page/Day5Page";
import Day3Page from "../pages/Day3Page/Day3Page";
import Day6Page from "../pages/Day6Page/Day6Page";
import Day7Page from "../pages/Day7Page/Day7Page";
import Day4Page from "../pages/Day4Page/Day4Page";
import Day1Page from "../pages/Day1Page/Day1Page";
import Day2Page from "../pages/Day2Page/Day2Page";
import Day8Page from "../pages/Day8Page/Day8Page";
import Day9Page from "../pages/Day9Page/Day9Page";
import Day10Page from "../pages/Day10Page/Day10Page";
import PlayerPage from "../pages/PlayerPage/PlayerPage";
import NewHomePage from "../pages/NewHomePage/NewHomePage";
import ProtocolsPage from "../pages/ProtocolsPage/ProtocolsPage";
import PresentationsPage from "../pages/PresentationsPage/PresentationsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/day1" element={<Day1Page/>}/>
        <Route path="/day2" element={<Day2Page/>}/>
        <Route path="/day3" element={<Day3Page/>}/>
        <Route path="/day4" element={<Day4Page/>}/>
        <Route path="/day5" element={<Day5Page/>}/>
        <Route path="/day6" element={<Day6Page/>}/>
        <Route path="/day7" element={<Day7Page/>}/>
        <Route path="/day8" element={<Day8Page/>}/>
        <Route path="/day9" element={<Day9Page/>}/>
        <Route path="/day10" element={<Day10Page/>}/>
        <Route path="/player" element={<NewHomePage/>}/>
        <Route path="/protocols" element={<ClockPage/>}/>
        <Route path="/presentations" element={<PresentationsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
