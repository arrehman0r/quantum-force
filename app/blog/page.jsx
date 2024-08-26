// app/blog/page.jsx
import Link from 'next/link';
import styles from './styles.module.scss'; // Import your Sass styles
import { NEXT_PUBLIC_URL } from '../../env';

export default async function PostList() {
  // Fetch posts data from your API
  const res = await fetch(`${NEXT_PUBLIC_URL}post/`);
  const posts = await res.json();
  console.log("blog res", posts)
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
              src={`${NEXT_PUBLIC_URL}${post.cover}`}
              alt={post.title}
              className={styles.image}
            />
            <div className={styles.divider}><hr /></div>
            <div className={styles.content}>
              <div className={styles.info}>
                <p className={styles.author}>
                  <strong>Author:</strong> {post.author.username}
                </p>
                <p className={styles.date}>
                  <strong>Created At:</strong> {new Date(post.createdAt).toLocaleDateString()} {new Date(post.createdAt).toLocaleTimeString()}
                </p>
              </div>
              <div className={styles.aboutSection__inner__content__info__title}>
                <h1><span>{post.title}</span></h1></div>
              <div className={styles.aboutSection__inner__content__info__desc}>
                <p >{post.summary}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
