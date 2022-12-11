import { Link } from "gatsby"
import React from "react"


import SEO from "../components/seo"

const NotFoundPage = () => (
  <div className="wrapper">
    <SEO title="404: Not found" />
    <div className="text_container_404 ">
    <h1>Page Not Found.</h1><br/>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link className="btn" to="/">Go Home</Link>
    </div>
  </div>
)

export default NotFoundPage
