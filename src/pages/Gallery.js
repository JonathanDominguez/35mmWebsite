import React from 'react'
import '../Styles/GalleryPage.css';
import {useEffect} from 'react';
import PhotoProjectsList from '../components/PhotoProjectList';
// Images
import metroOneHor from '../assets/Dec21-22(2022)/img001.png'
import metroTwoHor  from '../assets/Dec21-22(2022)/img002.png'
import towerOneVer from '../assets/Dec21-22(2022)/img003.png'
import towerTwoVer from '../assets/Dec21-22(2022)/img004.png'
import policeCarVer from '../assets/Dec21-22(2022)/img005.png'
import buildinGoneVer from '../assets/Dec21-22(2022)/img006.png'
import cityHallVer from '../assets/Dec21-22(2022)/img007.png'
import underPassHor from '../assets/Dec21-22(2022)/img008.png'
import easternBuiVer  from '../assets/Dec21-22(2022)/img0009.png'
import randomBuiVer from '../assets/Dec21-22(2022)/img010.png'
import deloitteBuiVer from '../assets/Dec21-22(2022)/img011.png'
import oldTimesBuiHor from '../assets/Dec21-22(2022)/img012.png'
import bridgeGrafVer from '../assets/Dec21-22(2022)/img013.png'
import bridgeVer from '../assets/Dec21-22(2022)/img014.png'
import cityErrorVer from '../assets/Dec21-22(2022)/img015.png'
import fourthStBridgeVer from '../assets/Dec21-22(2022)/img016.png'
// 
import streetOne from '../assets/Jan5B&W/1.png'
import lastBookOne from '../assets/Jan5B&W/2.png'
import manFromWindow from '../assets/Jan5B&W/3.png'
import alewayOne from '../assets/Jan5B&W/4.png'
import pianoInStreet from '../assets/Jan5B&W/5.png'
// 
import colorOne from '../assets/Jan5Color/1.png'
import colorTwo from '../assets/Jan5Color/2.png'
import colorThree from '../assets/Jan5Color/3.png'
import colorFour from '../assets/Jan5Color/4.png'
import colorFive from '../assets/Jan5Color/5.png'
import colorSix from '../assets/Jan5Color/6.png'
import colorSeven from '../assets/Jan5Color/7.png'
import colorEight from '../assets/Jan5Color/8.png'
import colorNine from '../assets/Jan5Color/9.png'
import colorTen from '../assets/Jan5Color/10.png'
import colorEleven from '../assets/Jan5Color/11.png'
import color12 from '../assets/Jan5Color/12.png'
import color13 from '../assets/Jan5Color/13.png'
import color14 from '../assets/Jan5Color/14.png'
import color15 from '../assets/Jan5Color/15.png'
import color16 from '../assets/Jan5Color/16.png'
import color17 from '../assets/Jan5Color/17.png'
import color18 from '../assets/Jan5Color/18.png'
import color19 from '../assets/Jan5Color/19.png'
import color20 from '../assets/Jan5Color/20.png'

function GalleryPage() {
    useEffect(() => {
        const allWithClass = Array.from(
            document.getElementsByClassName('example')
        );
        console.log(allWithClass);
    }, []);

    return (
        <div className='main'>
            <PhotoProjectsList/>

            <div className="row"> 
                <div className="column">
                    <img src={metroOneHor} style={{width:"100%"}} alt="random"/>
                    <img src={metroTwoHor} style={{width:"100%"}} alt="random"/>
                    <img src={towerOneVer} style={{width:"100%"}} alt="random"/>
                    <img src={towerTwoVer} style={{width:"100%"}} alt="random"/>
                    <img src={lastBookOne} style={{width:"100%"}} alt="random"/>
                    <img src={manFromWindow} style={{width:"100%"}} alt="random"/>
                    <img src={policeCarVer} style={{width:"100%"}} alt="random"/>
                    <img src={colorOne} style={{width:"100%"}} alt="random"/>
                    <img src={colorTwo} style={{width:"100%"}} alt="random"/>
                    <img src={colorThree} style={{width:"100%"}} alt="random"/>
                    <img src={colorTen} style={{width:"100%"}} alt="random"/>
                    <img src={colorEleven} style={{width:"100%"}} alt="random"/>
                    <img src={color12} style={{width:"100%"}} alt="random"/>
                    <img src={color19} style={{width:"100%"}} alt="random"/>
                    <img src={color18} style={{width:"100%"}} alt="random"/>
                    <img src={color20} style={{width:"100%"}} alt="random"/>
                    <img src={colorEight} style={{width:"100%"}} alt="random"/>
                    <img src={colorNine} style={{width:"100%"}} alt="random"/>
                    <img src={color16} style={{width:"100%"}} alt="random"/>
                    <img src={color17} style={{width:"100%"}} alt="random"/>
                    <img src={colorSeven} style={{width:"100%"}} alt="random"/>
                </div>
                <div className="column">
                    <img src={underPassHor} style={{width:"100%"}} alt="random"/>
                    <img src={easternBuiVer} style={{width:"100%"}} alt="random"/>
                    <img src={randomBuiVer} style={{width:"100%"}} alt="random"/>
                    <img src={deloitteBuiVer} style={{width:"100%"}} alt="random"/>
                    <img src={oldTimesBuiHor} style={{width:"100%"}} alt="random"/>
                    <img src={alewayOne} style={{width:"100%"}} alt="random"/>
                    <img src={pianoInStreet} style={{width:"100%"}} alt="random"/>
                    <img src={colorFour} style={{width:"100%"}} alt="random"/>
                    <img src={colorFive} style={{width:"100%"}} alt="random"/>
                    <img src={colorSix} style={{width:"100%"}} alt="random"/>
                    <img src={color13} style={{width:"100%"}} alt="random"/>
                    <img src={color14} style={{width:"100%"}} alt="random"/>
                    <img src={color15} style={{width:"100%"}} alt="random"/>
                    <img src={cityErrorVer} style={{width:"100%"}} alt="random"/>
                    <img src={fourthStBridgeVer} style={{width:"100%"}} alt="random"/>
                    <img src={cityHallVer} style={{width:"100%"}} alt="random"/>
                    <img src={bridgeGrafVer} style={{width:"100%"}} alt="random"/>
                    <img src={buildinGoneVer} style={{width:"100%"}} alt="random"/>
                    <img src={bridgeVer} style={{width:"100%"}} alt="random"/>
                    <img src={streetOne} style={{width:"100%"}} alt="random"/>
                </div>
            </div>
    </div>
    )
}

export default GalleryPage