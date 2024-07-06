import Essentials from "./react_essentials/essentials";
import DeepDivePage from "./react_deep_drive/deepDrivePage";
import Navbar from "./navbar";
import "./navbar.css";
import { Routes, Route } from "react-router-dom";
function App() {
  console.log(window.location);
  return (
    <>
      <Navbar id="nav" />
      <Routes>
        <Route path="/" element={<Essentials />} />
        <Route path="/essentials" element={<Essentials />} />
        <Route path="/tic-tac-toe" element={<DeepDivePage />} />
      </Routes>
      {/* <Essentials />; */}
    </>
  );
}

export default App;
