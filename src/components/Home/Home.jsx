import s from "./Home.module.css";
import logo from "../../img/logo.png";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Contactme from "../Contactme/Contactme";
import Proyects from "../Proyects/Proyects";
import Technologies from "../Technologies/Technologies";

export default function Home() {
  const [render, setRender] = useState();

  function changeRender(e) {
    const value = e.target.value;
    if (value === render) return setRender();
    setRender(value);
  }

  return (
    <>
      {" "}
      <img src={logo} alt="Logo" className={s.logo} />
      <div className={s.svgwrapper}>
        <svg className={s.svg}>
          <rect className={s.shape} />
        </svg>

        <div className={s.navbar}>
          <Navbar />
        </div>

        <div className={s.render}>
          {render === "contactme" ? (
            <Contactme />
          ) : render === "proyects" ? (
            <Proyects />
          ) : render === "technologies" ? (
            <Technologies />
          ) : (
            <About />
          )}
        </div>
      </div>
    </>
  );
}
