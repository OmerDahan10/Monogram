import React from "react";
import { NavLink, Route } from "react-router-dom";
import { ReactComponent as HomeIcon } from '../img/svg/home.svg';
import { storageService } from "../services/async-storage.service.js";
import { ProfileMenu } from "./ProfileMenu.jsx";



export function Header() {
    const user = storageService.loadFromStorage('loggedinUser')
    const display = 'none'

    const toggleMenu = (display)=>{
        return (display==='none'? '':'none');
    }

    return (
        <header className="header">
            <div className="header-container">

                <NavLink className='clean-link' to={'/'}><h1 className="logo">Photogram</h1></NavLink>
                <div className="main-nav">
                    <NavLink className='clean-link' to={'/'}><HomeIcon /></NavLink>
                    <button className="clean-button" onClick={<ProfileMenu toggleMenu={toggleMenu}/>}><img src={user.imgUrl} /></button>
                        {/* <Link className="clean-link" to={`/p/${post._id}`}><CommentIcon /></Link> */}
                    {/* <NavLink className='clean-link profile-page' to={`/profile/${user.username}`}><img src={user.imgUrl} /></NavLink> */}
                </div>
            </div>
        </header>
    )
}