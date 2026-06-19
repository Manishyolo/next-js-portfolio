"use client"

import InfiniteCrousel from "./components/InfiniteCrousel";
import { projects } from "@/data/Data";

export default function Home() {

  
 
  return (
    <div className="w-full h-[100vh] bg-white">
      
     <InfiniteCrousel projects={projects}></InfiniteCrousel>
       
    </div>
  );
}

