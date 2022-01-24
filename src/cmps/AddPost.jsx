import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

function _AddPost({ posts, showAdd, user }) {
  return <>
  {showAdd && <div className="add-post">HELLO</div>}
  {!showAdd && <></>}
  </>;
}

const mapStateToProps = (state) => {
  return {
    posts: state.postModule.posts,
    showAdd: state.postModule.showAdd,
    user: state.userModule.connectedUser,
  };
};

const mapDispatchToProps = {};

export const PostDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(_AddPost);
