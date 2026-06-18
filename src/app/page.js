"use client"
import TextReveal from "./components/TextReveal";
import { useRef } from "react";

export default function Home() {
  const triggerRef = useRef(null);
 
  const handletriggerEnter = ()=>{
     triggerRef.current.play()
  }
const handletriggerLeave = ()=>{
     triggerRef.current.reverse()
  }
  return (
    <div className="w-full h-[200vh]">
      <div onPointerEnter={handletriggerEnter} onPointerLeave={handletriggerLeave} className="bg-[red] w-[100px] h-[100px]"></div>
        <TextReveal ref={triggerRef} splitBy="words" trigger="manual" className="text-[5rem]">
                Hello Everyone
        </TextReveal>
      
    </div>
  );
}
