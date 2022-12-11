

import React,{useEffect,useRef,useState} from "react"
import PropTypes from "prop-types"
import "./layout.scss"
import Header from "./header/header"
import Footer from "./footer/footer"
import { scroleAimation, heroSectionAnimation } from "../utiles/utiles"
import Loader from "./loader/loader"


const Layout = ({ children }) => {
  const mainContainer=useRef(null);
  const [isLoding, setisLoding] = useState(true);
useEffect(() => {
 
  setTimeout(() => {
    setisLoding(false);
    mainContainer.current.style.visibility= 'visible';
    heroSectionAnimation();
    scroleAimation();
    
  }, 9000);


}, [])

  return (
   isLoding? <Loader/>:
    <div ref={mainContainer} className="main_container">
      
     <Header />
    <div className="container">
     
     
        <main>{children}</main>
        
      
    </div>
    <Footer/>
    
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
