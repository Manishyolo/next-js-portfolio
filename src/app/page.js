import Image from "next/image";
import TextReveal from "./components/TextReveal";

export default function Home() {
  return (
    <div className="w-full h-[200vh]">
        <TextReveal splitBy="words" className="text-[5rem]">
                Hello Everyone
        </TextReveal>
      
    </div>
  );
}
