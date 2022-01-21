import { PostPreview } from "./PostPreview.jsx";

export function PostList({ posts,user,onToggleLike }) {
  return (
    <section className="post-container">
      {posts.map((post) => (
        <PostPreview key={post.id} post={post} user={user} onToggleLike={onToggleLike} />
      ))}
    </section>
  );
}
