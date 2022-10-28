import { useState, useEffect } from "react";
import style from "../ProjectsAll/ProjectsAll.module.css";
// import Loading from "../Loading/Loading";
import CardProject from "../CardProject/CardProject";
import items from "./items";

function ProyectsAll() {
  function images(e) {
    //apertura modal imagenes carrusel
  }

  function cards() {
    return (
      <div className={style.container}>
        {items.map((item, index) => {
          return (
            <CardProject
              key={index}
              img={item.img}
              title={item.title}
              description={item.description}
              url={item.url}
              github={item.github}
              deploy={item.deploy}
              // images={item.images}
            />
          );
        })}
      </div>
    );
  }

  return <div>{cards()}</div>;
}

export default ProyectsAll;
