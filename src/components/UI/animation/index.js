import React from "react"
import "./style.scss"
import Waves from "./sineWave"
import Icons from "./icons"

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { time: 0 }
    this.element = React.createRef()
    this.animate = this.animate.bind(this)
  }
  componentDidMount() {
    // Set the CSS value of the --vh custom property to the root of the document
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)
    this.animationFrameReference = requestAnimationFrame(this.animate)
  }
  componentWillUnmount() {
    cancelAnimationFrame(this.animationFrameReference)
  }
  animate(time) {
    this.setState({ time: time / 10 })
    this.animationFrameReference = requestAnimationFrame(this.animate)
  }
  render() {
    const { props,element:{current} } = this
    let width = current ? current.offsetWidth : 0
    let height = current ? current.offsetHeight : 0
    let settings = {
      ...props.settings,
      iconSize: 50,
      width,
      height,
    }
    return (
      <div className="animation">
        <div ref={this.element} style={{ position: "relative", height: "100%" }}>
          <div
            style={{
              position: "absolute",
              bottom: height * (35 / 100) + settings.iconSize / 2 + 50 + "px",
            }}
          >
            <Icons settings={settings} time={this.state.time} />
          </div>
        </div>
        <Waves settings={settings} time={this.state.time} />
      </div>
    )
  }
}
