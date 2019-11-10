import React from "react"
import "./style.scss"
// this component layers a given array of subcomponents on top of each other.
export default ({layers,class:secondClass})=>
<div className = {"layer-container "+(secondClass ||'')}> {/*allows multiple BEM classes (overlaps BEM modules to reduce divs)*/}
    {layers.map((component,index)=>
        <div className = {`layer-container__layer layer-${index}`}
        style = {{zIndex:index}}>
            {component}
        </div>)}
    </div>