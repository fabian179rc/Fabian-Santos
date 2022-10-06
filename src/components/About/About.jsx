import s from "./About.module.css";
import picture from "../../img/foto.png";
export default function About() {
  return (
    <div className={s.container}>
      <div className={s.about}>
        <b className={s.b1}>
          Soy Fabian, un Desarrollador enfocado por el buen funcionamiento del
          codigo limpio, siempre buscando mejorar mis buenas prácticas. Me
          motiva trabajar en equipos donde la diversidad de opiniones, aportan
          al desarrollo grupal y hacer con esto, un excelente clima laboral.
        </b>
        <b className={s.b2}>Tecnologias: </b>
        <b className={s.b3}>
          React - Redux - Node - Express - Sequelize - JavaScript - HTML - CSS
          <br />
          <br />
          Interesado en: VUE - AWS - MongoDB
        </b>
      </div>
      <div className={s.foto}>
        <img src={picture} alt="Picture" />
      </div>
    </div>
  );
}
