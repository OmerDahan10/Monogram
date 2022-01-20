import { PostPreview } from "./PostPreview.jsx";

export function PostList({ posts }) {
  return (
    <section className="post-container">
      {posts.map((post) => (
        <PostPreview key={post.id} post={post} />
      ))}
    </section>
  );
}
