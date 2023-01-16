import React from 'react'
import '../Styles/PhotoProjectList.css';
import {useState} from 'react';
import easternBuiVer from '../assets/Dec21-22(2022)/img0009.png'
import color from '../assets/Jan5Color/3.png'
import BandW from '../assets/Dec21-22(2022)/img016.png'

function ProjectsList() {
    const [isShown, setIsShown] = useState(true);
    function handleProject() {     
        setIsShown(true);
        window.scroll({
            top:1000,
            behavior: "smooth"
        })
        console.log('You clicked submit.');
    }
    return (
        <div className='PhotoList-main'>
            <div className="grid-box">
                <div className="grid-showcase-item">
                    <button onClick={handleProject} className="button-project">
                        <img
                            className='images'
                            src={easternBuiVer}
                            alt="" 
                            style={{ height:"100%",objectFit: "cover"}}
                        />
                        <p className='titleOfProject'>All Photos</p>
                    </button>
                </div>
                <div className="grid-showcase-item">
                    <button  onClick={handleProject}className="button-project">
                        <img
                            className='images'
                            src={BandW}
                            alt="" 
                            style={{ height:"100%",objectFit: "cover"}}
                        />
                        <p className='titleOfProject'>B&W</p>
                    </button>
                </div>
                <div className="grid-showcase-item">
                    <button onClick={handleProject} className="button-project">
                        <img
                            className='images'
                            src={color}
                            alt="" 
                            style={{ height:"100%",objectFit: "cover"}}
                        />
                        <p className='titleOfProject'>Color</p>
                    </button>
                </div>  
            </div>
            <div className='go-here'>
                {isShown && (
                <div >
                    {/* {isShown && <ImageGrid />} */}
                </div>
                )}
            </div>
        </div>
    )
}
export default ProjectsList