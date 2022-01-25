import React from "react";
import { NavLink, Route } from "react-router-dom";
import { ReactComponent as HomeIcon } from '../img/svg/home.svg';
import { ReactComponent as AddIcon } from '../img/svg/add.svg';
import { storageService } from "../services/async-storage.service.js";
import { ProfileMenu } from "./ProfileMenu.jsx";
import { ProfilePage } from "../pages/ProfilePage";



export function Header() {
    const user = storageService.loadFromStorage('loggedinUser')
    let display = 'none'

    return (
        <header className="header">
            <div className="header-container">

                <NavLink className='clean-link' to={'/'}><h1 className="logo">Photogram</h1></NavLink>
                <div className="main-nav">
                    <NavLink className='clean-link' to={'/'}><HomeIcon /></NavLink>
                    <NavLink className='clean-link' to={'/create'}><AddIcon /></NavLink>
                    <NavLink className='clean-link logout' to={'/login'}>Logout</NavLink>
                    <button className="clean-button" onClick={ProfilePage}>
                        <NavLink className="clean-link" to={`/profile/${user.username}`}><img src={user.imgUrl} /></NavLink>
                    </button>
                    {/* <Link className="clean-link" to={`/p/${post._id}`}><CommentIcon /></Link> */}
                    {/* <NavLink className='clean-link profile-page' to={`/profile/${user.username}`}><img src={user.imgUrl} /></NavLink> */}
                </div>
            </div>
        </header>
    )
}