import React from "react"
import img1 from "../../../images/2.png"
import Content from "../../molecules/content"
import Media from "../../molecules/media"

export default ({ name, description, url, technologies,purpose }) => (
    <div className = "project">
    <Content modifier='dark' titleSize = "md" title = {name}>
        <Media image = {{
          link:url,
          width:300,
          source:img1,
          description:""
        }}>
         <Content title = "description">
           <p>{description}</p>
          </Content>
         <Content title = "title">
           <p>{purpose}</p>
          </Content>
         </Media>
    </Content>
    </div>
  )