import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import s from "../Projects/Projects.module.css";

function Proyect() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const items = [
    {
      src: "https://www.youtube.com/embed/JN0hART65Ek?rel=0&fs=0&controls=0&disablekb=1",
      title: "Starcards",
    },
    {
      src: "https://www.youtube.com/embed/LfSbr_aBc08?rel=0&fs=0&controls=0&disablekb=1",
      title: "VideoGames",
    },
    // {
    //   src: proyecto3,
    // },
  ];
  return (
    <ReactSimplyCarousel
      activeSlideIndex={activeSlideIndex}
      onRequestChange={setActiveSlideIndex}
      itemsToShow={1}
      itemsToScroll={1}
      forwardBtnProps={{
        //here you can also pass className, or any other button element attributes
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
        //here you can also pass className, or any other button element attributes
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
        src="https://www.youtube.com/embed/JN0hART65Ek?rel=0&fs=0&controls=0&disablekb=1"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <iframe
        className={s.video}
        src="https://www.youtube.com/embed/LfSbr_aBc08?rel=0&fs=0&controls=0&disablekb=1"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </ReactSimplyCarousel>
  );
}

export default Proyect;
