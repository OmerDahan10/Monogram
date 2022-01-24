import React from "react";
import { NavLink, Route } from "react-router-dom";
import { ReactComponent as HomeIcon } from '../img/svg/home.svg';
import { ReactComponent as AddIcon } from '../img/svg/add.svg';



export function Header() {
    return (
        <header className="header">
            <div className="header-container">

                <NavLink className='clean-link' to={'/'}><h1 className="logo">Photogram</h1></NavLink>
                <div className="main-nav">
                    <NavLink className='clean-link' to={'/'}><HomeIcon /></NavLink>
                    <NavLink className='clean-link' to={'/create'}><AddIcon/></NavLink>
                    <NavLink className='clean-link logout' to={'/login'}>Logout</NavLink>
                </div>
            </div>
        </header>
    )
}