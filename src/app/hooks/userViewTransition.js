"use client"

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import gsap from "../libs/gsap";




const STRIP_COUNT = 10;

const createStrips = ()=>{
    const overlay = document.createElement("div");
    overlay.id = "page-transition-overlay";
    overlay.style.cssText = `
     position:fixed;
     inset:0;
     z-index:9999;
     pointer-events:none;
     display:flex;
     flex-direction:column
    `
    for(let i = 0; i < STRIP_COUNT; i++){
        const strip = document.createElement('div');
        strip.style.cssText = `
          flex:1;
          height:100%;
          background-color:#010101;
          transform:scaleX(0);
          transform-origin:left;
        `
     overlay.appendChild(strip)

    }

    document.body.appendChild(overlay);

    return overlay
}

const removerOverlay = ()=>{
    const el = document.getElementById('page-transition-overlay');
    if(el) el.remove()
}


const userViewTransition = () => {
     
    removerOverlay()

    const router = useRouter();

    const navigateTo = useCallback((href)=>{
        const overlay = createStrips();
    const strips = Array.from(overlay.children);
    
    gsap.to(strips,{
        scaleX:1,
        duration:0.58,
        ease:"power3.inOut",
        stagger:0.06,
        onComplete:()=>{
            router.push(href)

            gsap.to(strips,{
              scaleX:0,
              duration:0.7,
              ease:'power3.inOut',
              delay:0.12,
              stagger:0.05,
              transformOrigin:'right',
              onComplete:removerOverlay
            })
        }
    })

    },[router])
 
  return {navigateTo}
  
}

export default userViewTransition