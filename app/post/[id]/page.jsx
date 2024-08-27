// app/blog/[id]/page.jsx

import Image from 'next/image';
import { NEXT_PUBLIC_URL } from '../../../env';
import styles from './styles.module.scss';

// This function generates the static params for all posts
export async function generateStaticParams() {
  const res = await fetch(`${NEXT_PUBLIC_URL}post/`);
  const posts = await res.json();

  return posts.map((post) => ({
    id: post._id,
  }));
}

// This function fetches data for a specific post
async function getPost(id) {
  const res = await fetch(`${NEXT_PUBLIC_URL}post/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }
  return res.json();
}

export default async function PostDetail({ params }) {
  const post = await getPost(params.id);

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h1>{post.title}</h1>
        <div className={styles.meta}>
          <span className={styles.author}>{post.author.username}</span>
          <span className={styles.date}>
            {new Date(post.createdAt).toLocaleDateString()}
          </span>
        </div>
      </header>
      <Image
        src={`${NEXT_PUBLIC_URL}${post.cover}`}
        alt={post.title}
        width={1000}
        height={420}
        className={styles.coverImage}
      />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}