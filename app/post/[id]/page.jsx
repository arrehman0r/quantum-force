// Use the client directive to ensure the component runs on the client side
"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.scss";

const PostDetail = () => {
  const params = useParams();
  const id = params.id;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(`http://localhost:4000/post/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setPost(data);
          setLoading(false);
        })
        .catch((error) => {
          setError("Error fetching data");
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!post) return <p>Post not found.</p>;

  return (
    <div className={styles.container}>
      <div className={styles.mainDiv}>
        <div className={styles.postCard}>
          <img
            src={`http://localhost:4000/${post.cover}`}
            alt={post.title}
            className={styles.coverImage}
          />
          <div className={styles.details}>
            <div className={styles.meta}>
              <p className={styles.author}>
                <strong>Author:</strong> {post.author.username}
              </p>
              <p className={styles.date}>
                <strong>Created At:</strong>{" "}
                {new Date(post.createdAt).toLocaleDateString()}{" "}
                {new Date(post.createdAt).toLocaleTimeString()}
              </p>
            </div>
            <h2 className={styles.title}>{post.title}</h2>
            <p className={styles.summary}>{post.summary}</p>
            <p
              className={styles.content}
              dangerouslySetInnerHTML={{
                __html: post.content,
              }}
            ></p>
            <Link href="/blog" className={styles.backLink}>
              Back to Posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
