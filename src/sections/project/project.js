import React from 'react'
import Project from '../../components/project/project'
import { useStaticQuery, graphql } from "gatsby";
import"./projects.scss"


function Projects() {
    const data=useStaticQuery(graphql`
    {
        allProjectsJson{
          edges {
            node {
              description
              github
              id
              technology
              title
              url
              image {
                    childImageSharp {
                      fluid(  quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
          }
        }
      }
      
    
    `);
    const projects=data.allProjectsJson.edges
    
    return (
        <section id="work">
<h2 className="title">My work</h2>

<div className="projects_container">

{projects.map(({node:project},indx)=>(

<Project
    key={`projectNmber${project.id}`} 
    title={project.title}
    description={project.description}
    url={project.url}
    github={project.github}
    imageData={project.image.childImageSharp.fluid}
    technology={project.technology}
    shiftDistence={500*indx}
 />
)
)}
    
   

</div>
        </section>
    )
}

export default Projects
