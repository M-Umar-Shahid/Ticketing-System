import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainRouter from "./MainRouter";
import TestRouter from "./TestRouter";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import SnackBar from "./components/ui/SnackBar";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
        <SnackBar/>
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/*" element={<MainRouter />} />
          <Route path="/test/*" element={<TestRouter />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
