import React from "react";
import { NavLink } from "react-router-dom";
import {ReactComponent as HomeIcon } from '../img/svg/home.svg'; 



export function Header(){
    return(
        <header className="header">
            <div className="header-container">
               
            <NavLink className='clean-link' to={'/'}><h1 className="logo">Photogram</h1></NavLink>
            <div className="main-nav">
               <NavLink className='clean-link' to={'/'}><HomeIcon/></NavLink>
            </div>
            </div>
        </header>
    )
}