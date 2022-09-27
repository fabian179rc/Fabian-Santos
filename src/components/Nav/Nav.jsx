import { Link } from "react-router-dom";
import s from "./Nav.module.css";

export default function Nav() {
  return (
    <div className={s.list}>
      <Link to="/proyects" className={s.link}>
        PROYECTOS
      </Link>
      <Link to="/technologies" className={s.link}>
        TECNOLOGIAS
      </Link>
    </div>
  );
}
