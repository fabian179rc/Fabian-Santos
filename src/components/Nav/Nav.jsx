import { Link } from "react-router-dom";
import s from "./Nav.module.css";

export default function Nav() {
  return (
    <div className={s.list}>
      <Link to="/contactme" className={s.link}>
        PROYECTOS
      </Link>
      <Link to="/contactme" className={s.link}>
        TECNOLOGIAS
      </Link>
    </div>
  );
}
