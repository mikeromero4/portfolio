import React from "react"
import Animation from '../../molecules/animation/index'
import "./style.scss"
import Layer from "../../molecules/layers/index"

import Background from "../../molecules/background/striped/index"

let animationSettings = {
  speed: 0.4,
  frequency: 120,
  amplitude: 8,
  flowSpeed: 90,
  iconSize: 90,
  spacing: 80,
  lineHeight: 50,
  half: false,
  shrink: true,
}

export default () => {
  return (
    <section id="section--intro">
      
<Layer layers = {[
  <Background variation = "primary"/>,
      <Intro />
]}/>
      <Animation settings={animationSettings}/>

    </section>
  )
}

let Intro = () => (
  <div style={{ flexGrow: 1, flexBasis: "50%" }}>
    <div className="inner-container">
      <h2>Michael Romero</h2>
      <h3>
        Front-end Web developer specializing in modern JavaScript,React and
        responsive design.
      </h3>
    </div>
  </div>
)
