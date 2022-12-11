import React,{useEffect,useRef} from 'react'
import "./project.scss";
import Image from "gatsby-image"
import LinkToWebsite from "../icons/linktowebsite";
import Github from "../icons/github";

function Project({title,description, url,github, imageData,technology,shiftDistence}) {
    const title1=useRef(null);
    const title2=useRef(null);
    
    useEffect(() => {
        
      
       
            if(window.innerWidth>1040){

                window.addEventListener("scroll", () => {
                title1.current.style.left  = `${(800 + shiftDistence) - 0.8 * window.scrollY}px`;
                title2.current.style.left  = `${(800 + shiftDistence) - 0.8 * window.scrollY}px`;
            });

            }else if(window.innerWidth>=800){
                title1.current.style.left  = `-25px`;
                title2.current.style.left  = `-25px`;
            }else{
                title1.current.style.left  = `-5px`;
                title2.current.style.left  = `-5px`;
            }
      
           
          }
    , [shiftDistence]);
    return (
        <div className="project_container scrol_anime">
            <div className="project_heading">
            <div className="project_image" >
                <h2 ref={title1} className="project_title project_title_stroked ">{title}</h2>
                <Image className="image" imgStyle={{ objectFit: "fill" }} fluid={ imageData} alt={title}/>
                
            </div>
            <h2  ref={title2} className="project_title">{title}</h2>
            </div>
            <div className="project_description">
                <p className="scrol_anime">
               { description}
                </p>
                <div className="skills_container">
                    {technology.map((tech,ind)=><span key={ind} className="skill ">{tech}</span>
                                )}
               
                </div>
                <div className="icon_container scrol_anime">
                    <div className="icon">
                        <a  aria-label={`link to the ${title} website`} href={ url}>
                    <LinkToWebsite/>
                    </a>
                    </div>
                    <div className="icon">
                <a aria-label={`link to the ${title} github repo`}  href={github}>
            <Github/>
            </a>
            
            </div>
            </div>     
               

            </div>
            
        </div>
    )
}

export default Project
