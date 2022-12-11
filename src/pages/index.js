import React from "react"


import Layout from "../components/layout"

import SEO from "../components/seo"
import About from "../sections/about/about"
import Contact from "../sections/contact/contact"
import Hero from "../sections/hero/hero"
import Projects from "../sections/project/project"


const IndexPage = () => {  
 
return (
<Layout>
    <SEO title="Meryem Barroug" />
 
    <Hero />
    <Projects/>
    <About/>
    <Contact />
    
  </Layout>)

  }
export default IndexPage
