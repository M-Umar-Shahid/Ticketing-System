import Calendar from "../components/ui/Calendar";
import Sidebar from "../components/ui/Sidebar";
import { Box } from "@mui/material";
import UserDashboard from "../components/ui/UsersDashboard";
import { Routes, Route } from "react-router-dom";

const DashboardPage = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100%" }}>
      <Sidebar />
      <Box sx={{ width: "100%", flex: 1, p: 2 }}>
        <Routes>
          <Route path="/" element={<UserDashboard />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default DashboardPage;
