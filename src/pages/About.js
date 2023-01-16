import React from 'react'
import '../Styles/About.css';
import MainPic from '../assets/about.png'
import instagram from '../assets/icons/instagram.png'

function AboutMePage() {
    return (
        <div className="AboutMePage-body">
            <div className="grid-container-about">
                <div className="grid-item-about">


                <div className="info-text-box">
                        <img className="imageOfMe"src={MainPic} alt="PicOfMe"/>
                    </div>


                </div>
                <div className="grid-item-about">


                    <div className="imageBox">
                        {/* <hr className="lineOne"/> */}
                        <p className="info-box">
                        Jonathan Dominguez is a American photographer based in Los Angeles. 
                        In late 2022 he began exploring his creative side through the use of photography. 
                        Exploring and deepening his thoughts on art and culture through traveling around Los Angeles with his Yashica FR II.
                        <br/>
                        <br/>
                        By walking the streets he seeks to experience the many traditional cultures and arts offered by the people of Los Angeles.
                        <br/>
                        <br/>
                        DominguezE.Jonathan@gmail.com


                        <a href="https://www.instagram.com/jonathans.film/" target="_blank" rel="noopener noreferrer">
                            <img className='insta-logo' src={instagram} alt="linkedIn" width="25em" height="25em"></img>
                        </a>

                        </p>
                       
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default AboutMePage