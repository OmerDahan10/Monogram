import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { PostPreview } from "../cmps/PostPreview";
import { loadPosts, updatePost, deletePost } from "../store/post.action.js";
import { ReactComponent as CloseIcon } from "../img/svg/close.svg";
import { storageService } from "../services/async-storage.service.js";

export function _PostDetails({
  posts,
  user,
  loadPosts,
  updatePost,
  deletePost,
}) {
  const params = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const postId = params.postId;
    const post = posts.find((post) => post._id === postId);
    setPost(post);
  });

  const onToggleLike = (postId, isLiked) => {
    console.log(isLiked);
    const connectedUser = storageService.loadFromStorage("loggedinUser");
    const post = posts.find((post) => post._id === postId);
    if (isLiked) {
      post.likedBy = post.likedBy.filter(
        (user) => user._id !== connectedUser._id
      );
    } else {
      post.likedBy.unshift(connectedUser);
    }
    updatePost(post);
  };

  const onAddComment = (postId, text) => {
    const connectedUser = storageService.loadFromStorage("loggedinUser");
    const post = posts.find((post) => post._id === postId);
    const comment = {
      _id: storageService.makeId(),
      by: {
        _id: connectedUser._id,
        username: connectedUser.username,
        fullname: connectedUser.fullname,
        imgUrl: connectedUser.imgUrl,
      },
      txt: text
    };
    post.comments.unshift(comment);
    updatePost(post);
  };

  if (post)
    return (
      <div className="post-details">
        {/* <span className="exit-details">
          <CloseIcon />
        </span> */}
        <PostPreview
          post={post}
          user={user}
          onToggleLike={onToggleLike}
          onAddComment={onAddComment}
          postDetails={true}
        />
      </div>
    );
  else return <React.Fragment></React.Fragment>;
}

const mapStateToProps = (state) => {
  return {
    posts: state.postModule.posts,
    user: state.userModule.connectedUser,
  };
};

const mapDispatchToProps = {
  loadPosts,
  updatePost,
  deletePost,
};

export const PostDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(_PostDetails);
