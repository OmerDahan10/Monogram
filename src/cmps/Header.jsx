import React from "react";
import { connect } from "react-redux";
import { Route, useParams, NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from '../img/svg/home.svg';
import { ReactComponent as AddIcon } from '../img/svg/add.svg';
<<<<<<< HEAD
=======
import { ReactComponent as AddActiveIcon } from '../img/svg/add-active.svg';
import { storageService } from "../services/async-storage.service.js";
>>>>>>> e306bd4e8af24ed503752c349ac652d571f0b2f1
import { UserMenu } from "./UserMenu.jsx";
import { toggleShowAdd } from '../store/post.action.js';
import { toggleUserMenu } from '../store/user.action.js'
import { AddPost } from '../cmps/AddPost.jsx';


function _Header({ showAdd, toggleShowAdd, user, showUserMenu, toggleUserMenu }) {

  const onAddPost = () => {
    toggleShowAdd(showAdd);
  }
  const onUserMenu = () => {
    toggleUserMenu(showUserMenu)
  }

  return (
    <header className="header">
      <div className="header-container">

        <NavLink className='clean-link' to={'/'}><h1 className="logo">Photogram</h1></NavLink>
        <div className="main-nav">
<<<<<<< HEAD
          <NavLink className='clean-link' to={'/'}><HomeIcon /></NavLink>
          <button className="clean-button" onClick={onAddPost}><AddIcon /></button>
=======
          <NavLink exact className='home clean-link' activeClassName={showAdd ?'home clean-link' : 'home clean-link active' } to={'/'}><HomeIcon /></NavLink>
          {/* <NavLink className='clean-link' to={'/create'} onClick={onAddPost}><AddIcon/></NavLink> */}
          <button className='add clean-button' onClick={onAddPost}>{showAdd ? <AddActiveIcon/> :<AddIcon />}</button>
          {/* <NavLink className='clean-link logout' to={'/login'}>Logout</NavLink> */}
>>>>>>> e306bd4e8af24ed503752c349ac652d571f0b2f1
          <button className="clean-button" onClick={onUserMenu}>
            <img src={user.imgUrl} />
          </button>
            <UserMenu/>
        </div>
      </div>
      {showUserMenu && <div className="close-menu" onClick={onUserMenu}></div>}
      <AddPost />
    </header>
  )
}

const mapStateToProps = (state) => {
  return {
    showAdd: state.postModule.showAdd,
    showUserMenu: state.userModule.showUserMenu,
    user: state.userModule.connectedUser
  };
};

const mapDispatchToProps = {
  toggleShowAdd,
  toggleUserMenu,
};

export const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Header);






