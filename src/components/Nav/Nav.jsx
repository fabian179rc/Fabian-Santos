import s from "./Nav.module.css";
import React from "react";
import { useDispatch } from "react-redux";
import { changeNav } from "../../redux/actions";

export default function Nav() {
  const dispatch = useDispatch();

  function changeNavbar(e, value) {
    e.preventDefault(e);
    dispatch(changeNav(value));
  }

  return (
    <div className={s.list}>
      <label className={s.link} onClick={(e) => changeNavbar(e, "about")}>
        SOBRE MI
      </label>
      <label className={s.link} onClick={(e) => changeNavbar(e, "projects")}>
        PROYECTOS
      </label>
    </div>
  );
}
