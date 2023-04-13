import Node from '../pictures/node.logo.png'
import Docker from '../pictures/docker.logo.png'
import Python from '../pictures/python.logo.png'
import github from '../pictures/github.logo.png'
import RubyOnRails from '../pictures/ror.logo.png'
import React from '../pictures/react-logo.png'
import Redux from '../pictures/redux-logo.png'
import Next from '../pictures/next-logo.png'
import AWS from '../pictures/AWS.logo.png' 

import '../scss/cloud.scss'

const techImages  = [{img: Node, alt: "Node.js"}, {img: Docker, alt: "Docker"}, 
                     {img: Python, alt: "python"}, {img: github, alt: "github"}, {img: RubyOnRails, alt: "Ruby on Rails"}, 
                     {img: React, alt: "React"}, {img: Redux, alt: "Redux"}, {img: Next, alt: "Next.js"}, 
                    {img: AWS, alt: "AWS"}]
const Tech = () =>{
        const makeComponents = ({start, finish}) => {

        const part = (techImages.slice(start, finish).map( (tI, i) =>(<span className="d-flex flex-column"><div className="mx-auto" key={i}><img src={tI.img} alt={tI.alt} height="100px" width="100px" /></div></span>)))
                return part
            }

            

    return(<>
            <div className="d-flex flex-columm justify-content-center">
            <div className="d-flex flex-column"> 
                {makeComponents({start: 0, finish: 3})}
            </div>
            <div className="d-flex flex-column"> 
                {makeComponents({start: 3, finish: 6})}
            </div>
            <div className="d-flex flex-column"> 
                {makeComponents({start: 6, finish: 9})}
            </div>
            </div>
           </>)
}

export default Tech