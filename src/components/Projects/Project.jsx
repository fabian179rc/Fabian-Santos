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

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  return (
    <>
      <label className={s.projects}>PROYECTOS</label>
      {/* {loading && <Loading />} */}
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
          src="https://player.vimeo.com/video/757962168?h=2b8de3953d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="StarCards musica.mp4"
        ></iframe>
        <iframe
          className={s.video}
          src="https://player.vimeo.com/video/757963944?h=2313da659a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="VideoGames"
        ></iframe>
      </ReactSimplyCarousel>
    </>
  );
}

export default Proyect;
