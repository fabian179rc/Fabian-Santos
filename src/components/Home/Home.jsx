import React from "react";
import Nav from "../Nav/Nav";
import Resumen from "../Resumen/Resumen";
import Social from "../Social/Social";
import Project from "../Projects/Project";
import About from "../About/About";
import s from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeNav } from "../../redux/actions";

export default function Home() {
  const render = useSelector((state) => state.render);
  const dispatch = useDispatch();

  function changeNavbar(e, value) {
    e.preventDefault(e);
    // console.log(value);
    dispatch(changeNav(value));
  }
  return (
    <div>
      <Resumen />
      <Nav />
      <Social />
      <label className={s.span}> » FullStack Developer « </label>
      <div className={s.render}>
        {render === "about" ? <About /> : <Project />}
      </div>
      {/* <button className={s.button} onClick={(e) => changeNavbar(e)}> */}
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
