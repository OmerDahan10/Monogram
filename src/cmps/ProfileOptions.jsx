
import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { toggleShowAdd } from "../store/post.action.js";
import TextareaAutosize from "react-textarea-autosize";
import { ReactComponent as EmojiIcon } from "../img/svg/emoji.svg";
import Picker from "emoji-picker-react";
import { toggleProfileOption } from "../store/user.action.js";
import { Link } from "react-router-dom";


function _ProfileOptions({ showProfileOption, toggleProfileOption }) {

  // cancel =()

  return (
    <>
      {showProfileOption && (
        <div className="profile-option-container" onClick={toggleProfileOption}>
          <div onClick={(ev) => ev.stopPropagation()} className="profile-option-list">
            <ul>
              <li><Link className="clean-link change-password" to={`/acconts/password/change`}>Change Password</Link></li>
              <li><Link className="clean-link change-password" to={`/acconts/password/change`}>Log Out</Link></li>
              {/* <li><button onClick={this.Cancel}>Cancel</button></li> */}
            </ul>
          </div>
        </div>
      )}
    </>
  )

}

const mapStateToProps = (state) => {
  return {
    // posts: state.postModule.posts,
    // showAdd: state.postModule.showAdd,
    // user: state.userModule.connectedUser,
    showProfileOption: state.userModule.showProfileOption,
  };
};

const mapDispatchToProps = {
  toggleProfileOption,
};

export const ProfileOptions = connect(mapStateToProps, mapDispatchToProps)(_ProfileOptions);
