import { Link } from "gatsby"

import React,{useEffect, useState} from "react"
import { handelscrole} from "../../utiles/utiles"
import "./header.scss"
import LogoIcon from "./logo"
const Header = () => {
  //is open state to manage menu on smal screens
  const [isopen, setIsopen] = useState(false);
  useEffect(()=>{
   handelscrole();
  })
  
  return(
  
  <header>
     <div className="logo">
    <Link to="/" >
   
<LogoIcon/>
      </Link>
   </div>
    <nav  className={`${isopen&&'open'}`} >
     
          <a  onClick={()=>isopen?setIsopen(!isopen):null}  aria-label="nav link to"    className="nav_link" data-name="home" href="#home">Home</a>
       
          
      
          <a onClick={()=>isopen?setIsopen(!isopen):null}  aria-label="nav link to"    className="nav_link" data-name="work" href="#work">Work</a>
          <a  onClick={()=>isopen?setIsopen(!isopen):null}  aria-label="nav link to "   className="nav_link" data-name="about" href="#about">About</a>
      
          <a  onClick={()=>isopen?setIsopen(!isopen):null}  aria-label="nav link to"   className="nav_link" data-name="contact" href="#contact">Contact</a>
         
    </nav>
    

     
    <button onClick={()=>{setIsopen(!isopen)}} aria-label="menu"className={`nav_btn ${isopen&&'open'}`}>
  
      
      <span></span>
      <span></span>
    
  </button>
  </header>
)

}

export default Header