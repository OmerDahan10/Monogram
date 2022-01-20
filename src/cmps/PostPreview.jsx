import { ReactComponent as LikeIcon } from "../img/svg/like.svg";
import { ReactComponent as CommentIcon } from "../img/svg/comment.svg";
import { ReactComponent as UnlikeIcon } from "../img/svg/unlike.svg";
import { timeSince } from "../services/utils.service.js";

export function PostPreview({ user,post }) {

    // checkIfliked = ()=>{
    //     const likedIds = post.likedBy.map(user => user._id);
    //     likedIds.contains(user._id) ? <UnlikeIcon /> : <LikeIcon/>;
    // }
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
          <button className="like clean-button">
            <LikeIcon/>
          </button>
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
          <span className="all-comments">View all {post.comments.length} comments</span>
        </section>
        <section className="post-time">
          <span>{timeSince(post.createdAt)}</span>
        </section>
      </div>
    </div>
  );
}
