import Navigation from "../molecules/navbar/index"
import Headroom from "react-headroom"
import React from "react"
let navigationList = ["about", "projects", "contact"]
export default ({height}) => {
  let navLinks = navigationList.map(e => <Navigation link={e} />)
  return (
    <header >
      <Headroom offset={200} tolerance='0' pinStart={height}>
        <nav className="nav">{navLinks}</nav>
      </Headroom>
    </header>
  )
}
