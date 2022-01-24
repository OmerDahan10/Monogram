// import { ReactComponent as LikeIcon } from "../img/svg/like.svg";
// import { ReactComponent as unLikeIcon } from "../img/svg/unlike.svg";
// import { ReactComponent as CommentIcon } from "../img/svg/comment.svg";
// import { timeSince } from "../services/utils.service.js";

// export function PostPreview({ post, user, onToggleLike }) {
//   const checkIfliked = () => {
//     // console.log(user);
//     const likedIds = post.likedBy.map((like) => like._id);
//     console.log(likedIds);
//     if (likedIds.includes(user._id)) {
//       return (
//         <button className="like clean-button" onClick={()=>onToggleLike(post._id,true)}>
//           <unLikeIcon />
//         </button>
//       );
//     } else{
//       return (
//         <button className="like clean-button" onClick={()=>onToggleLike(post._id,false)}>
//           <LikeIcon />
//         </button>
//       );
//     }
//   };
//   return (
//     <div className="post">
//       <div className="post-header">
//         <section className="post-user">
//           <img src={post.by.imgUrl} />
//           <h2>{post.by.username}</h2>
//         </section>
//       </div>
//       <div className="post-img">
//         <img src={post.imgUrl} />
//       </div>
//       <div className="post-utils">
//         <section className="post-actions">
//           {checkIfliked()}
//           <button className="comments clean-button">
//             <CommentIcon />
//           </button>
//         </section>
//         <section className="post-likes">
//           <span>{post.likedBy.length} likes</span>
//         </section>
//         <section className="post-comments">
//           <div>
//             <h3>{post.by.username}</h3>
//             <span>{post.txt}</span>
//           </div>
//           <span className="all-comments">
//             View all {post.comments.length} comments
//           </span>
//         </section>
//         <section className="post-time">
//           <span>{timeSince(post.createdAt)}</span>
//         </section>
//       </div>
//     </div>
//   );
// }

import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LikeIcon } from "../img/svg/like.svg";
import { ReactComponent as CommentIcon } from "../img/svg/comment.svg";
import { ReactComponent as UnlikeIcon } from "../img/svg/unlike.svg";
import { ReactComponent as EmojiIcon } from "../img/svg/emoji.svg";
import { ReactComponent as MiniLikeIcon } from "../img/svg/mini-like.svg";
import { timeSince } from "../services/utils.service.js";
import "animate.css";
import Picker from "emoji-picker-react";
import TextareaAutosize from "react-textarea-autosize";

export function PostPreview({
  post,
  user,
  onToggleLike,
  onAddComment,
  postDetails = false,
}) {
  const [showPicker, setShowPicker] = useState(false);
  const [showPostBtn, setShowPostBtn] = useState(false);
  const [inputStr, setInputStr] = useState("");

  const handleChange = (ev) => {
    ev.target.value.length > 0 ? setShowPostBtn(true) : setShowPostBtn(false);
    setInputStr(ev.target.value);
  };

  const onEmojieClick = (ev, emojiObj) => {
    setInputStr((prevInput) => prevInput + emojiObj.emoji);
    inputStr.length > 0 ? setShowPostBtn(true) : setShowPostBtn(false);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onAddComment(post._id, inputStr);
    setInputStr("");
    setShowPostBtn(false);
  };

  const checkIfliked = () => {
    // console.log(user);
    const likedIds = post.likedBy.map((like) => like._id);
    if (likedIds.includes(user._id)) {
      return (
        <button
          className="unlike clean-button"
          onClick={() => onToggleLike(post._id, true)}
        >
          <UnlikeIcon />
        </button>
      );
    } else {
      return (
        <button
          className="like clean-button"
          onClick={() => onToggleLike(post._id, false)}
        >
          <LikeIcon />
        </button>
      );
    }
  };
  return (
    <div className="post">
      <div className="post-header">
        <section className="post-user">
          <img src={post.by.imgUrl} />
          <span>{post.by.username}</span>
        </section>
        <section className="post-options">
          <button className="clean-button">•••</button>
        </section>
      </div>
      <div className="post-img">
        <img src={post.imgUrl} />
      </div>
      <div className="post-utils">
        <section className="post-actions">
          {checkIfliked()}
          <button className="comments clean-button">
            <Link className="clean-link" to={`/p/${post._id}`}><CommentIcon /></Link> 
          </button>
        </section>
        <section className="post-likes">
          <span>{post.likedBy.length} likes</span>
        </section>
        <section className="post-comments">
          <div>
            <span className="post-username">{post.by.username}</span>
            <span className="post-text">{post.txt}</span>
          </div>
          {!postDetails && <span className="all-comments">
            <Link className="clean-link" to={`/p/${post._id}`}>View all {post.comments.length} comments</Link>
          </span>}
        </section>
        <section className="post-time">
          <span>{timeSince(post.createdAt)}</span>
        </section>
      </div>
      <div className="add-comment">
        <form action="">
          <button
            className="clean-button"
            type="button"
            onClick={() => setShowPicker((val) => !val)}
          >
            <EmojiIcon />
          </button>
          {showPicker && <Picker onEmojiClick={onEmojieClick} />}
          <TextareaAutosize
            value={inputStr}
            onChange={handleChange}
            maxRows="4"
            className="comment-text"
            placeholder="Add a comment..."
          />
          <button
            className={
              showPostBtn ? `clean-button submit active` : "clean-button submit"
            }
            type="submit"
            onClick={handleSubmit}
          >
            Post
          </button>
        </form>
      </div>

      {postDetails && (
        <div className="show-comments">
          {post.comments.map((comment) => {
            return <div className="comment">
              <div className="comment-details">

              <img src={comment.by.imgUrl} />
              <section className="comment-user">
                <div className="comment-user-text">
                  <span className="comment-username">
                    {comment.by.username}
                  </span>
                  <span className="comment-text">{comment.txt}</span>  
                </div>
                <button className="clean-button"><MiniLikeIcon/></button>
              </section>
              </div>
            </div>;
          })}
        </div>
      )}
    </div>
  );
}
