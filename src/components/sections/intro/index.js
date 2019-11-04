import React from "react"
import "./style.scss"

export default () => {
  return (
    <section id="section--intro">
      <Intro />
    </section>
  )
}

let Intro = () => (
  <div id="intro" style={{ flexGrow: 1, flexBasis: "50%" }}>
    <div className="inner-container">
      <h2>Michael Romero</h2>
      <h3>
        Front-end Web developer specializing in modern JavaScript,React and
        responsive design.
      </h3>
    </div>
  </div>
)
