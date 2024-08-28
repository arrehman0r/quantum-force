import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.scss';
import { NEXT_PUBLIC_URL } from '../../env';

export default async function PostList() {
  const res = await fetch(`${NEXT_PUBLIC_URL}items/Blog/`);
  const posts = await res.json();
  console.log("res of blogs", posts)
  if (!posts || posts.length === 0) {
    return <div>No posts available</div>;
  }

  return (
    <div className={styles.container}>
      {posts.data.map((post) => (
        <article key={post._id} className={styles.blogSection}>
          <Link href={`/post/${post.id}`}>
            <Image
              src={`${NEXT_PUBLIC_URL}assets/${post.cover}`}
              alt={post.title}
              width={1000}
              height={420}
              className={styles.coverImage}
            />
          </Link>
          <div className={styles.divider} />
          <div className={styles.titleSection}>
            <Link href={`/post/${post.id}`}>
              <h1>{post.title}</h1>
            </Link>
            <p>{post.summary}</p>
            <div className={styles.meta}>
              <span className={styles.readTime}>{post.read_time} min read</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}