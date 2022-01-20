import { ReactComponent as LikeIcon } from "../img/svg/like.svg";
import { ReactComponent as CommentIcon } from "../img/svg/comment.svg";
import { timeSince } from "../services/utils.service.js";

export function PostPreview({ post }) {
  return (
    <div className="post">
      <div className="post-header">
        <section className="post-user">
          <img src={post.by.imgUrl} />
          <h2>{post.by.username}</h2>
        </section>
      </div>
      <div className="post-img">
        <img src={post.imgUrl} />
      </div>
      <div className="post-utils">
        <section className="post-actions">
          <button className="like">
            <LikeIcon />
          </button>
          <button className="comments">
            <CommentIcon />
          </button>
        </section>
        <section className="post-likes">
          <span>{post.likedBy.length} likes</span>
        </section>
        <section className="post-comments">
          <div>
            <h3>{post.by.username}</h3>
            <span>{post.txt}</span>
          </div>
          <span>View all {post.comments.length} comments</span>
        </section>
        <section className="post-time">
          <span>{timeSince(post.createdAt)}</span>
        </section>
      </div>
    </div>
  );
}
