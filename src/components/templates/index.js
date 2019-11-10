import React from "react"
import "./style.scss"
import Footer from "./footer"
import Header from "./header"
import Layer from "../molecules/layers/index"

import Background from "../molecules/background/striped/index"

const Layout = ({ children,Intro }) => {
  let element =  React.useRef()
  let sectionHeight = element.current ? element.current.offsetHeight : 0
console.log(sectionHeight)
  return (
   <>
       <Header height={sectionHeight}/>
       <div id = "intro" ref={element} className = "full-screen">

<Intro height={sectionHeight}/>
</div>
   <main id = "main-content">
    
      {children}
    </main>
    <Footer/>
    </>
    
  )
}

export default Layout
