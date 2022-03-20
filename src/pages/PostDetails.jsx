import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { PostPreview } from "../cmps/PostPreview";
import { loadPosts, updatePost, deletePost } from "../store/post.action.js";
import { ReactComponent as CloseIcon } from "../img/svg/close.svg";
import { storageService } from "../services/async-storage.service.js";
import { ReactComponent as MiniLikeIcon } from "../img/svg/mini-like.svg";
import { ReactComponent as MiniUnLikeIcon } from "../img/svg/mini-unlike.svg";


export function _PostDetails({
  posts,
  user,
  loadPosts,
  updatePost,
  deletePost,
  userPosts
}) {
  const params = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const postId = params.postId;
    let post = userPosts.find((post) => post._id === postId);
    if(!post){
       post = posts.find((post) => post._id === postId);
    }
    setPost(post);
  },[]);

  const onToggleLike = (postId, isLiked) => {
    console.log(isLiked);
    // const connectedUser = storageService.loadFromStorage("loggedinUser");
    const connectedUser = user;
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

  const onToggleCommentLike = (postId,commentIdx,isLiked) =>{
    const connectedUser = user;
    // const post = posts.find((post) => post._id === postId);
    if(isLiked && post.comments[commentIdx].likedBy){
        post.comments[commentIdx].likedBy = post.comments[commentIdx].likedBy.filter(user => user._id !== connectedUser._id )
        
    }else if(post.comments[commentIdx].likedBy){
        post.comments[commentIdx].likedBy.unshift(connectedUser);
    }else{
        post.comments[commentIdx].likedBy = [connectedUser];
    }
    updatePost(post);
  }

  const checkIfCommentLiked = (postId,commentIdx) =>{
    const connectedUser = user;
    if(post.comments[commentIdx].likedBy){
        const commentLikesIds = post.comments[commentIdx].likedBy.map(user => user._id);
        if(commentLikesIds.includes(connectedUser._id)){
            return <button className="clean-button unlike" onClick={()=>onToggleCommentLike(post._id,commentIdx,true)}><MiniUnLikeIcon/></button>
        }else{
            return <button className="clean-button like" onClick={()=>onToggleCommentLike(post._id,commentIdx,false)}><MiniLikeIcon/></button>
        }
    }else {
        return <button className="clean-button like" onClick={()=>onToggleCommentLike(post._id,commentIdx,false)}><MiniLikeIcon/></button>
    }
  }

  const onAddComment = (postId, text) => {
      console.log(postId,text);
    // const connectedUser = storageService.loadFromStorage("loggedinUser");
    const connectedUser = user;
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
          onToggleCommentLike={onToggleCommentLike}
          checkIfCommentLiked={checkIfCommentLiked}
        />
      </div>
    );
  else return <React.Fragment></React.Fragment>;
}

const mapStateToProps = (state) => {
  return {
    posts: state.postModule.posts,
    user: state.userModule.connectedUser,
    userPosts: state.postModule.connectedUserPosts
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
