import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import "./normalize.css";
import "./App.css";
import { useEffect, useState } from "react";
function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);
  return (
    <>
      {
        // loading ? (
        //   <div className="container">
        //     <div className="img"></div>
        //   </div>
        // ) :
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      }{" "}
    </>
  );
}

export default App;
