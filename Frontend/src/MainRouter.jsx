import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventPage from "./pages/EventDetailPages";
import CreateEventpage from "./pages/CreateEventpage";
import EventsPage from "./pages/EventsPage";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SeachPage";
import Dashboard from "./pages/DashBoardPage";
function MainRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/event/:id" element={<EventPage />}></Route>
        <Route path="/event" element={<EventsPage />}></Route>
        <Route path="/create-event" element={<CreateEventpage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default MainRouter;
