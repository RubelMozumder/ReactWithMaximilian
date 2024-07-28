import Essentials from "./react_essentials/essentials_page";
import DeepDivePage from "./tic_tac_toe/tic_tac_toe_page";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
function App() {
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
