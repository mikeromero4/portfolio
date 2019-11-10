import React from "react"
import Intro from "../components/organisms/intro/index"
import About from "../components/organisms/about/index"
import Projects from "../components/organisms/projects/index"

import Layout from "../components/templates/index"
import SEO from "../components/utilities/seo"
import "../style/main.scss" // Global styles could be included in gatsby-browser.js instead of here if there were multiple pages


 
export default () => <>
  <SEO title="Portfolio" />
  <Layout Intro={Intro}>
    <article id = "portfolio-page">
      <section id = "about-section"><About/> </section>
      <section id = "projects-section"><Projects/> </section>

    </article>

  </Layout>
</>