import React, { useRef } from "react";
import TextReveal from "./TextReveal";
import gsap from "../libs/gsap";

const CARD_W = 300;
const CARD_H = 380;
const SCALE = 1.35;

const CrouselCard = ({ project,onHoverStart,onHoverEnd }) => {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const numberRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);

  const onEnter = ()=>{
    onHoverStart?.();

    gsap.to(cardRef.current,{
      width:CARD_W * SCALE,
      height:CARD_H * SCALE,
      duration:0.45,
      ease: "power3.out",

    })
    numberRef.current?.play();
    titleRef.current?.play();
  }

    const onLeave = ()=>{
    onHoverEnd?.();

    gsap.to(cardRef.current,{
      width:CARD_W,
      height:CARD_H,
      duration:0.4,
      ease: "power3.out",

    })
    numberRef.current?.reverse();
    titleRef.current?.reverse();
  }


  return (
    <div 
    onMouseEnter={onEnter}
    onMouseLeave={onLeave}
      ref={cardRef}
      className="relative "
      style={{
        width: CARD_W,
        height: CARD_H,
        flexShrink: 0,
        overflow: "visible",
        cursor: "pointer",
      }}
    >
      <div
        style={{ bottom: "calc(100% + 3rem)" }}
        className="title-panel absolute left-0 pointer-events-none flex flex-col gap-[1rem]"
      >
        <TextReveal trigger="manual" splitBy="chars" ref={numberRef}>
          <h3 className="text-[1rem] text-[#010101]">{project.number}</h3>
        </TextReveal>
        <TextReveal trigger="manual" splitBy="words" ref={titleRef}>
          <h3 className="text-[1rem] text-[#010101]">{project.number}</h3>
        </TextReveal>
      </div>
      <div className="imageDiv h-full w-full overflow-hidden">
        <img
          style={{ transformOrigin: "center center", userSelect: "none" }}
          className="h-full w-full object-cover"
          ref={imageRef}
          src={project.coverImage}
          alt={project.title}
        />
      </div>
    </div>
  );
};

export default CrouselCard;
