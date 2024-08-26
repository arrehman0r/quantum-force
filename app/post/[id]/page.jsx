// app/post/[id]/page.jsx
import Link from "next/link";
import styles from "./page.module.scss";
import { NEXT_PUBLIC_URL } from "@/env";

// Fetch post data at build time
async function getPostData(id) {
  const res = await fetch(`${NEXT_PUBLIC_URL}post/${id}`);
  if (!res.ok) {
    return null;
  }
  const post = await res.json();
  return post;
}

export async function generateStaticParams() {
  const res = await fetch(`${NEXT_PUBLIC_URL}post/`);
  const posts = await res.json();

  return posts.map((post) => ({
    id: post._id.toString(),
  }));
}

export default async function PostDetail({ params }) {
  const post = await getPostData(params.id);

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainDiv}>
        <div className={styles.postCard}>
          <img
            src={`${NEXT_PUBLIC_URL}${post.cover}`}
            alt={post.title}
            className={styles.coverImage}
          />
          <div className={styles.details}>
            <div className={styles.aboutSection__inner__content__info__title}>
              <h1><span>{post.title}</span></h1>
            </div>
            <div className={styles.aboutSection__inner__content__info__desc}>
              <p>{post.summary}</p>
            </div>
            <p
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <Link href="/" className={styles.backLink}>
              Back to Posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
