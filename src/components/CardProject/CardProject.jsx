import React from "react";
import style from "./CardProject.module.css";

export default function cardProject({
  img,
  title,
  description,
  url,
  github,
  images,
}) {
  function images(e) {
    e.preventDefault();
    //dispatch openmodalcarrousel
  }

  return (
    <div className={style.container}>
      <img src={img} className={style.img} />
      <div className={style.info}>
        <h5>{title}</h5>
        <span className={style.description}>{description}</span>
        <section className={style.section}>
          <a href={url} target="_blank">
            Video
          </a>
          {/* <span onClick={(e) => images(e)}>Imagenes</span> */}
          <a href={github} target="_blank">
            Link al Repo
          </a>
        </section>
      </div>
    </div>
  );
}
