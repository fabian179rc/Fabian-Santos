import { Link } from "react-router-dom";
import s from "./Nav.module.css";

export default function Nav() {
  return (
    <div className={s.list}>
      <Link to="/contactme" className={s.link}>
        Proyectos
      </Link>
      <Link to="/contactme" className={s.link}>
        Tecnologias
      </Link>
      <Link to="/contactme" className={s.link}>
        Contacto
      </Link>
    </div>
  );
}
