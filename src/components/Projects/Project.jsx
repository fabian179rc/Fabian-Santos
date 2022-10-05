import { useState, useEffect } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import s from "../Projects/Projects.module.css";
import Loading from "../Loading/Loading";

function Proyect() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const items = [
    {
      src: "https://www.youtube.com/embed/LfSbr_aBc08",
      title: "VideoGames",
    },
    {
      src: "https://www.youtube.com/embed/JN0hART65Ek",
      title: "Starcards",
    },
  ];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <>
      <label className={s.projects}>PROYECTOS</label>
      <Loading />
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        <iframe
          className={s.video}
          src="https://www.youtube.com/embed/LfSbr_aBc08"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          className={s.video}
          src="https://www.youtube.com/embed/JN0hART65Ek"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </ReactSimplyCarousel>
    </>
  );
}

export default Proyect;
