import React from 'react'
import goto from '../../../img/goto_icon.png';
import '../../../index.css'
import './icon.css';

const Icon = () => {
    // ADD RELOAD HANDLER
    return (
        <div className="">
        <div id="icon_container" className="flex_container flex_center">
            <div id="dot1"></div>
            <div id="dot2"></div>
            <div id="dot3"></div>
            <img id="goto_img" src={goto} alt="BUS ICON"></img>
        </div>
        </div>
    )
}

export default Icon