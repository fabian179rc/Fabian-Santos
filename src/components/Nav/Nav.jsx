import style from "./Nav.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeNav } from "../../redux/actions";

export default function Nav() {
  const dispatch = useDispatch();
  const render = useSelector((state) => state.render);

  function changeNavbar(e, value) {
    e.preventDefault(e);
    dispatch(changeNav(value));
  }

  return (
    <div className={style.list}>
      <label
        className={render === "about" ? style.selected : style.link}
        onClick={(e) => changeNavbar(e, "about")}
      >
        SOBRE MI
      </label>
      <label
        className={render === "projects" ? style.selected : style.link}
        onClick={(e) => changeNavbar(e, "projects")}
      >
        PROYECTOS
      </label>
    </div>
  );
}
