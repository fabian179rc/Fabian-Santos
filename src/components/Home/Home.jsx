import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import Resumen from "../Resumen/Resumen";
import Social from "../Social/Social";
import Project from "../Projects/Project";
// import Loading from "../Loading/Loading";
import About from "../About/About";
import s from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeNav } from "../../redux/actions";

export default function Home() {
  const navbarStatus = useSelector((state) => state.render);
  const [render, setRender] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setRender(navbarStatus);
  }, [navbarStatus]);

  function changeNavbar(e, value) {
    e.preventDefault(e);
    dispatch(changeNav(value));
  }
  return false ? (
    "asd"()
  ) : (
    <div>
      <Resumen />
      <Nav />
      <Social />
      <label className={s.span}>» FullStack Developer «</label>
      <div className={s.render}>
        {render === "about" ? <About /> : <Project />}
      </div>
      <div className={s.button}>
        {render === "about" ? (
          <button
            className={s.styleButton}
            onClick={(e) => changeNavbar(e, "projects")}
          >
            PROYECTOS »
          </button>
        ) : (
          <button
            className={s.styleButton}
            onClick={(e) => changeNavbar(e, "about")}
          >
            SOBRE MI »
          </button>
        )}
      </div>
    </div>
  );
}
