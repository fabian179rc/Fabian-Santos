import style from "./About.module.css";
import picture from "../../img/foto.png";
export default function About() {
  return (
    <div className={style.container}>
      <div className={style.about}>
        <b className={style.b1}>
          Soy Fabian, un Dev enfocado en el desarrollo de
          Applicaciones end-to-end. Me gusta trabajar por objetivos, aprender nuevas tecnologias y aportar todo de mi al equipo. 
          Soy Team player, pero tambien me desenvuelvo bien como autonomo. Tengo adaptabilidad, compromiso y pasion por lo que hago.
          Dispongo de experiencia trabajando en equipo con metodologias agiles.
        </b>
        <b className={style.b2}>Tecnologias: </b>
        <b className={style.b3}>
          JavaScript - React - Redux - Node - Express - HTML - CSS - SQL - Sequelize - MongoDB - Mongoose
          <br />
          <br />
          Interesado en: GO - VUE - AWS
        </b>
      </div>
      <div className={style.foto}>
        <img src={picture} alt="Picture" />
      </div>
    </div>
  );
}
