import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Route,useParams,NavLink} from "react-router-dom";
// import { NavLink, Route } from "react-router-dom";
import { ReactComponent as HomeIcon } from '../img/svg/home.svg';
import { ReactComponent as AddIcon } from '../img/svg/add.svg';
<<<<<<< HEAD
import { storageService } from "../services/async-storage.service.js";
import { ProfileMenu } from "./ProfileMenu.jsx";
import { ProfilePage } from "../pages/ProfilePage";
=======
import {toggleShowAdd} from '../store/post.action.js';
import {AddPost} from '../cmps/AddPost.jsx';
// {showAdd,toggleShowAdd,history}
>>>>>>> ae62b45f28cea4995a3cdf27b5ed5ed3302907ce


 function _Header({showAdd,toggleShowAdd}) {

    const onAddPost = ()=>{
        toggleShowAdd(showAdd);
    }

<<<<<<< HEAD
export function Header() {
    const user = storageService.loadFromStorage('loggedinUser')
    let display = 'none'

=======
>>>>>>> ae62b45f28cea4995a3cdf27b5ed5ed3302907ce
    return (
        <header className="header">
            <div className="header-container">

                <NavLink className='clean-link' to={'/'}><h1 className="logo">Photogram</h1></NavLink>
                <div className="main-nav">
                    <NavLink className='clean-link' to={'/'}><HomeIcon /></NavLink>
<<<<<<< HEAD
                    <NavLink className='clean-link' to={'/create'}><AddIcon /></NavLink>
=======
                    {/* <NavLink className='clean-link' to={'/create'} onClick={onAddPost}><AddIcon/></NavLink> */}
                     <button className="clean-button" onClick={onAddPost}><AddIcon/></button>
>>>>>>> ae62b45f28cea4995a3cdf27b5ed5ed3302907ce
                    <NavLink className='clean-link logout' to={'/login'}>Logout</NavLink>
                    <button className="clean-button" onClick={ProfilePage}>
                        <NavLink className="clean-link" to={`/profile/${user.username}`}><img src={user.imgUrl} /></NavLink>
                    </button>
                    {/* <Link className="clean-link" to={`/p/${post._id}`}><CommentIcon /></Link> */}
                    {/* <NavLink className='clean-link profile-page' to={`/profile/${user.username}`}><img src={user.imgUrl} /></NavLink> */}
                </div>
            </div>
            <AddPost/>
        </header>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
      showAdd: state.postModule.showAdd
    };
  };
  
  const mapDispatchToProps = {
    toggleShowAdd
  };
  
  export const Header = connect(
    mapStateToProps,
    mapDispatchToProps
  )(_Header);
  