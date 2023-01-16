import React from 'react'
import '../Styles/Carousel.css';
import underPassHor from '../assets/Dec21-22(2022)/img008.png'
import randomBuiVer from '../assets/Dec21-22(2022)/img010.png'
import manFromWindow from '../assets/Jan5B&W/3.png'
import colorThree from '../assets/Jan5Color/3.png'
import color12 from '../assets/Jan5Color/12.png'
import streetOne from '../assets/Jan5B&W/1.png'


function CarouselGallery() {
    function handleProject() {        
        window.scroll({
            top:950,
            behavior: "smooth"
        })
        console.log('You clicked submit.');
    }
    return (
        <div>
            <div className="parent-images">
                <div className="scrollBar">
                    <div className="child first-child">
                        <img
                            src={streetOne}
                            alt="" 
                            style={{ height:"100%",objectFit: "cover"}}
                        />
                    </div>
                    <div className="child">
                        <img 
                            src={manFromWindow} 
                            alt="" 
                            style={{ height:"100%",objectFit: "cover"}}
                        />
                    </div>
                    <div className="child">
                        <img 
                            src={color12} 
                            alt="" 
                            style={{ height:"100%",objectFit: "cover"}}
                        />
                    </div>
                    <div className="child">
                        <img 
                            src={colorThree} 
                            alt="" 
                            style={{ height:"100%",objectFit: "cover"}}
                        />
                    </div>
                    <div className="child first-child">
                        <img
                            src={randomBuiVer}
                            alt="" 
                            style={{ height:"100%",objectFit: "cover"}}
                        />
                    </div>
                    <div className="child">
                        <img 
                            src={underPassHor} 
                            alt="" 
                            style={{ height:"100%",objectFit: "cover"}}
                        />
                    </div>
                </div>
                {/* <div className='arrow-box'>
                    <button className='button-down' onClick={handleProject}>
                        <i className="arrow down"></i>
                    </button>
                </div> */}
            </div>
        </div>
    )
}

export default CarouselGallery