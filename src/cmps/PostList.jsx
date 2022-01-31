import { PostPreview } from "./PostPreview.jsx";

export function PostList({ posts,user,onToggleLike,onAddComment ,className}) {
  return (
    <section className={className}>
      {posts.map((post) => (
        <PostPreview key={post.id} post={post} user={user} onToggleLike={onToggleLike} onAddComment={onAddComment} />
      ))}
    </section>
  );
}
