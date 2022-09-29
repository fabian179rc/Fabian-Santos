import s from "./Nav.module.css";
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
    <div className={s.list}>
      <label
        className={render === "about" ? s.selected : s.link}
        onClick={(e) => changeNavbar(e, "about")}
      >
        SOBRE MI
      </label>
      <label
        className={render === "projects" ? s.selected : s.link}
        onClick={(e) => changeNavbar(e, "projects")}
      >
        PROYECTOS
      </label>
    </div>
  );
}
