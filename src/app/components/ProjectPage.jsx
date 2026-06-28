import React from 'react'
import TextReveal from './TextReveal'

const ProjectPage = ({project}) => {
  return (
   <>
   <main>
     <section className='h-screen w-full flex pt-[7rem] pb-[4rem] px-[3rem]'>
        <div className="firstSegment h-full w-[10%]">
            <TextReveal>
                <h3 className='text-[1.6rem]'>{project.number}</h3>
            </TextReveal>
        </div>
        <div className="secondSegment h-[90%] w-[30%] bg-red-300">
            <div className='imageDiv h-full w-full'>
                 <img className='h-full w-full object-cover' src={project.coverImage} alt="" />
            </div>
        </div>
        <div className="thirdSegment pl-[5rem] h-[90%] w-[60%] flex flex-col justify-end">
               <div className="heading">
                <TextReveal splitBy="chars" >
                    <h1 className='text-[2rem] leading-[1.2]'>{project.title}</h1>
                </TextReveal>
               </div>
                <div className="subheading flex gap-[0.9rem]">
                <TextReveal splitBy="words" >
                    <h1 className='text-[1rem]'>{project.subtitle}</h1>
                </TextReveal>
               </div>
                <div className="heading">
                <TextReveal splitBy="chars" >
                    <h1 className='text-[2rem]'>{project.title}</h1>
                </TextReveal>
               </div>
        </div>
     </section>
     <section></section>
     <section></section>
     <section></section>
     <section></section>
     <footer></footer>


   </main>
   
   
   
   </>
  )
}

export default ProjectPage