import React from "react"
import "./style.scss"
import Layer from "../../layers"
export default ({variation = "default"}) =>
<Layer class={`striped-bg striped-bg--${variation}`} layers={[
  <div className={"striped-bg__layer striped-bg__layer--1"}/>,
  <div className={"striped-bg__layer striped-bg__layer--2"}/>
]} />
