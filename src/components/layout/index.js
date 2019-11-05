import React from "react"
import "./style.scss"
import Footer from "./footer"
import Header from "./header"
import Layer from "../UI/layers/index"

import Background from "../UI/background/striped/index"

const Layout = ({ children,Intro }) => {
  let element =  React.useRef()
  let sectionHeight = element.current ? element.current.offsetHeight : 0
console.log(sectionHeight)
  return (
 <Layer layers = {[
   <Background variation = "primary2"/>,
   
   <>
       <Header height={sectionHeight}/>

   <main id = "main-content">
    <div id = "intro" ref={element} className = "full-screen">

      <Intro height={sectionHeight}/>
    </div>
      {children}
    </main>
    <Footer/>
    </>
 ]}/>
    
  )
}

export default Layout
