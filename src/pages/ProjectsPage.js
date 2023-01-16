import React from 'react'
import '../Styles/ProjectPage.css';
import manFromWindow from '../assets/Jan5B&W/3.png'
import colorThree from '../assets/Jan5Color/3.png'
import colorEleven from '../assets/Jan5Color/11.png'
import bridgeVer from '../assets/Dec21-22(2022)/img014.png'
import streetOne from '../assets/Jan5B&W/1.png'

function ProjectsPage() {
    return (
        <div>
            <div className="project-container">
                <div className="project-item images-here">
                    <img className="proj-image" src={manFromWindow} style={{width:"100%"}} alt="random"/>
                    <p className="title-of-project">Architecture of Los Angeles</p>
                </div>
                <div className="project-item images-here">
                    <img className="proj-image" src={colorEleven} style={{width:"100%"}} alt="random"/>
                    <p className="title-of-project">Hidden Alleys of Los Angeles</p>
                </div>
                <div className="project-item images-here">
                    <img className="proj-image" src={bridgeVer} style={{width:"100%"}} alt="random"/>
                    <p className="title-of-project">Architecture of Los Angeles</p>
                </div>
                <div className="project-item images-here">
                    <img className="proj-image" src={streetOne} style={{width:"100%"}} alt="random"/>
                    <p className="title-of-project">Hidden Alleys of Los Angeles</p>
                </div>
                <div className="project-item images-here">
                    <img className="proj-image" src={colorThree} style={{width:"100%"}} alt="random"/>
                    <p className="title-of-project">Wes Anderson Inspiration</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage