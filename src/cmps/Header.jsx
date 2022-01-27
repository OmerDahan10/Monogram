import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Route, useParams, NavLink } from "react-router-dom";
// import { NavLink, Route } from "react-router-dom";
import { ReactComponent as HomeIcon } from '../img/svg/home.svg';
import { ReactComponent as AddIcon } from '../img/svg/add.svg';
import { storageService } from "../services/async-storage.service.js";
import { ProfileMenu } from "./ProfileMenu.jsx";
import { ProfilePage } from "../pages/ProfilePage";
import { toggleShowAdd } from '../store/post.action.js';
import { AddPost } from '../cmps/AddPost.jsx';
// {showAdd,toggleShowAdd,history}


function _Header({ showAdd, toggleShowAdd, user }) {
 
    console.log(user);
  const onAddPost = () => {
    toggleShowAdd(showAdd);
  }

  return (
    <header className="header">
      <div className="header-container">

        <NavLink className='clean-link' to={'/'}><h1 className="logo">Photogram</h1></NavLink>
        <div className="main-nav">
          <NavLink className='clean-link' to={'/'}><HomeIcon /></NavLink>
          {/* <NavLink className='clean-link' to={'/create'} onClick={onAddPost}><AddIcon/></NavLink> */}
          <button className="clean-button" onClick={onAddPost}><AddIcon /></button>
          <NavLink className='clean-link logout' to={'/login'}>Logout</NavLink>
          <button className="clean-button" onClick={ProfilePage}>
            <NavLink className="clean-link" to={`/profile/${user.username}`}><img src={user.imgUrl} /></NavLink>
          </button>
          {/* <Link className="clean-link" to={`/p/${post._id}`}><CommentIcon /></Link> */}
          {/* <NavLink className='clean-link profile-page' to={`/profile/${user.username}`}><img src={user.imgUrl} /></NavLink> */}
        </div>
      </div>
      <AddPost />
    </header>
  )
}

const mapStateToProps = (state) => {
  return {
    showAdd: state.postModule.showAdd,
    user: state.userModule.connectedUser
  };
};

const mapDispatchToProps = {
  toggleShowAdd
};

export const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Header);






