
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Career from "./pages/career";
import Navbar from "./components/navbar";

function App() {
  return (
    < >
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/learn" element={<Career/>}/>
    </Routes>
     
    </>
  );
}

export default App;
