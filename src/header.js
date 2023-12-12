import React, { Component } from 'react';
import stl from './header.module.css'
import bnr from './banner-right-image.png'
import Btn from './btn';
import { Link } from 'react-router-dom';


class Header extends (Component){
    render(){
        return <>
            <div className={stl.header}>
                <div className={stl.navbar}>
                    <div className={stl.logo}>
                        <h4>Projection</h4>
                    </div>
                    <ul>
                        <li><Link to="/">Home</Link>  </li>
                        <li><Link to="/about">About</Link>  </li>
                        <li><Link to="/contact">Contact</Link>  </li>
                        
                    </ul>
                </div>
                <div className={stl.hero}>
                    <div className={stl.txt}>
                        <h1>This is React PROJECT</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet enim ab molestias aspernatur quisquam tempora, magni dolores ut sit. Aliquid deserunt dolorum ab consequuntur unde accusamus quasi autem eligendi ratione iusto praesentium vero corrupti nam laboriosam ex asperiores voluptas omnis debitis, optio sunt! Soluta dignissimos quisquam repellendus sint sapiente doloremque.</p>
                        <Btn btn="Join Us" />
                    </div>
                    <div className="img">
                        <img src={bnr} alt="" />
                    </div>
                </div>
            </div>
        </>
    }
}

export default Header;