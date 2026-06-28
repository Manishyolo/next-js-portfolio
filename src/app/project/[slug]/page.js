import React from 'react'
import { projects } from '@/data/Data';
import ProjectPage from '@/app/components/ProjectPage';

const Page = async({params}) => {
    
    const {slug} = await params;

    const index = projects.findIndex((p)=>p.slug === slug);
    const project = projects[index];

  return (
    <>
    
     <ProjectPage project={project}></ProjectPage>
    
    </>
  )
}

export default Page