// app/blog/page.jsx
import Link from 'next/link';
import styles from './styles.module.scss'; // Import your Sass styles

export default async function PostList() {
  // Fetch posts data from your API
  const res = await fetch('http://localhost:4000/post/');
  const posts = await res.json();

  // Handle empty or undefined posts data
  if (!posts || posts.length === 0) {
    return <div>No posts available</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.postList}>
        {posts.map(post => (
          <Link key={post._id} href={`/post/${post._id}`} className={styles.card}>
            <img
              src={`http://localhost:4000/${post.cover}`}
              alt={post.title}
              className={styles.image}
            />
            <div className={styles.content}>
              <div className={styles.info}>
                <p className={styles.author}>
                  <strong>Author:</strong> {post.author.username}
                </p>
                <p className={styles.date}>
                  <strong>Created At:</strong> {new Date(post.createdAt).toLocaleDateString()} {new Date(post.createdAt).toLocaleTimeString()}
                </p>
              </div>
              <h2 className={styles.title}>{post.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
