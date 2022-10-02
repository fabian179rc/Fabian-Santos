import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import "./normalize.css";
import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      {false ? (
        <div class="loading">wqdqwdqwdw</div>
      ) : (
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      )}{" "}
    </>
  );
}

export default App;
