import { useEffect, useRef } from "react";
import gsap from "../libs/gsap"
import CrouselCard from "./CrouselCard";

const CARD_W = 300;
const CARD_H = 380;
const SCALE = 1.35;
const CARD_GAP = 20;
const DURATION = 25

const TRACK_H = CARD_H * SCALE;





const infiniteCrousel = ({projects}) => {

    const trackRef = useRef(null);
    const tweenRef = useRef(null);


    useEffect(()=>{
      
        const singleWidth = projects.length * (CARD_H + CARD_GAP);

        tweenRef.current = gsap.to(trackRef.current,{
            x:-singleWidth,
            ease:"none",
            duration:DURATION,
            repeat:-1,
        })

        return ()=> tweenRef.current?.kill();


    },[projects])
    
    const doubled = [...projects,...projects];

  return (
    <div style={{padding: `${TRACK_H * 0.2}px 0 24px`}} className="overflow-hidden">
        <div ref={trackRef} style={{gap:`${CARD_GAP}px`, width:'max-content', height:`${TRACK_H}px`}} className="track flex items-center">
            {
                doubled.map((project,i)=>{
                    return <CrouselCard key={i} project={project} onHoverStart={()=>tweenRef.current?.pause()} onHoverEnd={()=>tweenRef.current?.play()}></CrouselCard>
                }
                
                )
            }
        </div>
    </div>
  )
}

export default infiniteCrousel