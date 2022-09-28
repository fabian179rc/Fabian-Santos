import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import s from "../Projects/Projects.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";

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

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0, invervaltrue: 4000 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.hover = this.hover.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  hover() {
    console.log(this.state.invervaltrue);
    if (this.state.invervaltrue !== null) this.state.invervaltrue = null;
    else {
      this.state.invervaltrue = 2000;
      this.next();
    }
  }
  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <div className={s.iframecontainer} alt={item.altText}>
            <iframe
              // className={s.video}
              src={item.src}
              alt={item.altText}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        interval={this.state.invervaltrue}
        onClick={this.hover}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default Projects;
