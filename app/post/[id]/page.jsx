import Image from 'next/image';
import { NEXT_PUBLIC_URL } from '../../../env';
import styles from './styles.module.scss';
import Markdown from 'markdown-to-jsx'
// This function generates the static params for all posts
export async function generateStaticParams() {
  try {
    const res = await fetch(`${NEXT_PUBLIC_URL}items/projects`);
    if (!res.ok) throw new Error('Failed to fetch posts');
    const posts = await res.json();
    console.log("posts are ", posts)
    // Ensure id is a string
    return posts.data.map((post) => ({ id: String(post.id) }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// This function fetches data for a specific post
async function getPost(id) {
  try {
    const res = await fetch(`${NEXT_PUBLIC_URL}items/projects/${id}`);
    console.log("res from id ", res)
    if (!res.ok) throw new Error('Failed to fetch post');
    return res.json();
  } catch (error) {
    console.error('Error fetching post:', error);
    return { data: null }; // Return an empty data object in case of error
  }
}

export default async function PostDetail({ params }) {
  const { id } = params;
  const { data } = await getPost(id);
console.log("Data is 0", data)
  if (!data) {
    return <p style={{margin: '100px'}}>Post not found.</p>;
  }

  const post = data;
  
  
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h1>{post.title}</h1>
        <div className={styles.meta}>
          {/* <span className={styles.author}>{post.author.username}</span> */}
          <span className={styles.date}>
            {new Date(post.date_created).toLocaleDateString()}
          </span>
        </div>
      </header>
      <Image
         src={`${NEXT_PUBLIC_URL}assets/${post.cover}`}
        alt={post.title}
        width={1000}
        height={420}
        className={styles.coverImage}
      />
       {/* <Markdown>{post.body}</Markdown> */}
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.body }} />
    </article>
  );
}
