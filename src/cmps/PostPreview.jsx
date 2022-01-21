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



import { ReactComponent as LikeIcon } from "../img/svg/like.svg";
import { ReactComponent as CommentIcon } from "../img/svg/comment.svg";
import { ReactComponent as UnlikeIcon } from "../img/svg/unlike.svg";
import { timeSince } from "../services/utils.service.js";

export function PostPreview({ post, user, onToggleLike }) {
  const checkIfliked = () => {
    // console.log(user);
    const likedIds = post.likedBy.map((like) => like._id);
    console.log(likedIds);
    if (likedIds.includes(user._id)) {
      return (
        <button className="like clean-button" onClick={()=>onToggleLike(post._id,true)}>
          <UnlikeIcon />
        </button>
      );
    } else{
      return (
        <button className="like clean-button" onClick={()=>onToggleLike(post._id,false)}>
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
      </div>
      <div className="post-img">
        <img src={post.imgUrl} />
      </div>
      <div className="post-utils">
        <section className="post-actions">
          {checkIfliked()}
          <button className="comments clean-button">
            <CommentIcon />
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
          <span className="all-comments">
            View all {post.comments.length} comments
          </span>
        </section>
        <section className="post-time">
          <span>{timeSince(post.createdAt)}</span>
        </section>
      </div>
    </div>
  );
}
