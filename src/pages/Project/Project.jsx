import React from 'react'
import OurProject from '../../components/OurProject/OurProject';
import { project } from '../../data/data';

function Project() {
  const data ={
    heading:"Featured project",
    subHeading: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam nam, velit possimus sunt delectus nobis ipsa commodi excepturi? Officiis enim sapiente necessitatibus aliquam laborum dolore nesciunt? Harum similique doloremque laborum?",
    project:project
  }
  return (
    <div>
      <OurProject data={data}/>
    </div>
  )
}

export default Project;