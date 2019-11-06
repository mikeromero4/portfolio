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
    let width, height = 0
    if (current){
      height = current.offsetHeight
      width = current.offsetWidth
    }
    let settings = {
      ...props.settings,
      iconSize: 50,
      width,
      height,
    }
    return (
      <div className="animation">
        <div ref={this.element} style={{ position: "relative", height: "100%" }}>
            <Icons settings={settings} time={this.state.time} />
        </div>
        <Waves settings={settings} time={this.state.time} />
      </div>
    )
  }
}
