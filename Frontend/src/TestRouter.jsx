import { Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import HomeCarousel from "./components/ui/HomeCarousel";  
import EventCard from "./components/ui/EventCard";
import Footer from "./components/ui/Footer";
import CountdownTimer from "./components/ui/CountdownTimer";
import FileUploader from "./components/ui/FileUploader";
import TicketPreview from "./components/ui/TicketPreview";
import AgentsEvent from "./components/ui/AgentsEvent";
import CreateEvent from "./components/ui/CreateEvent";
import SnackBar from "./components/ui/SnackBar";
import Calendar from "./components/ui/Calendar";
import Map from "./components/ui/Map";

function TestRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navbar/>}></Route>
      <Route path="/home" element={<HomeCarousel/>}></Route>
      <Route path="/card" element={<EventCard/>}></Route>
      <Route path="/Footer" element={<Footer/>}></Route>
      <Route path="/Count" element={<CountdownTimer/>}></Route>
      <Route path="/File" element={<FileUploader/>}></Route>
      <Route path="/Ticket" element={<TicketPreview/>}></Route>
      <Route path="/Event" element={<AgentsEvent/>}></Route>
      <Route path="/CreateEvent" element={<CreateEvent/>}></Route>
      <Route path="/Snackbar" element={<SnackBar/>}></Route>
      <Route path="/Calendar" element={<Calendar/>}></Route>
      <Route path="/Map" element={<Map/>}></Route>

      

    </Routes>
  );
}

export default TestRouter;
