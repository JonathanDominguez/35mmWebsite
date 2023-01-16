import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import '../Styles/NavBar.css'
import Hamburger from 'hamburger-react'

function NavBar() {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className="nav-bar-container">
            <div className="grid-container">
                <div className="grid-item">
                    <p className="name-container">𝐉𝐨𝐧𝐚𝐭𝐡𝐚𝐧 𝐃𝐨𝐦𝐢𝐧𝐠𝐮𝐞𝐳</p>
                </div>
                <div className="grid-item">
                    <div className="nav-item-container" >
                            <div className="flex-child">
                                <button className="nav-button">
                                    <Link style={{textDecoration: 'none'}} to="home">
                                        <p className={"text-this"}>Home</p>
                                    </Link>
                                </button>
                            </div>
                            <div className="flex-child">
                                <button className="nav-button">
                                    <Link style={{textDecoration: 'none'}} to="gallery">
                                        <p className={"text-this"}>Gallery</p>
                                    </Link>
                                </button>
                            </div>
                            <div className="flex-child">
                                <button className="nav-button">
                                    <Link style={{textDecoration: 'none'}} to="projects">
                                        <p className={"text-this"}>Projects</p>
                                    </Link>
                                </button>
                            </div>
                            <div className="flex-child">
                                <button className="nav-button">
                                    <Link style={{textDecoration: 'none'}} to="blog">
                                        <p className={"text-this"}>Blog</p>
                                    </Link>
                                </button>
                            </div>
                            <div className="flex-child">
                                <button className="nav-button">
                                    <Link style={{textDecoration: 'none'}} to="about">
                                        <p className={"text-this"}>About</p>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    <div className="web-nav">
                        <Hamburger toggled={isOpen} toggle={setOpen} direction="right" size={20}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavBar