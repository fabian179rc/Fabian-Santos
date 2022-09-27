import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import "./normalize.css";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/tecnologies" element={<Technologies />} /> */}
        {/* <Route exact path="/proyects" element={<Proyects />} /> */}
        {/* <Route exact path="/contactme" element={<Contactme />} /> */}
      </Routes>
    </>
  );
}

export default App;
