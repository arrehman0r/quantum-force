// lib/api.js
const WP_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export async function getAllPosts() {
  console.log('Fetching from:', `${WP_API_URL}posts?categories=3`); // Debug log
  
  try {
    const response = await fetch(
      `${WP_API_URL}posts?_embed&categories=3`,
      {
        next: { revalidate: 10 },
        headers: {
          'Accept': 'application/json',
        }
      }
    );
    
    if (!response.ok) {
      console.error('Response not OK:', response.status, response.statusText);
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Fetched posts count:', data.length); // Debug log
    return data;
    
  } catch (error) {
    console.error('Error fetching posts:', error);
    // Return empty array instead of throwing to prevent page crash
    return [];
  }
}

export async function getPostBySlug(slug) {
  try {
    const response = await fetch(
      `${WP_API_URL}posts?slug=${slug}&_embed`,
      {
        next: { revalidate: 10 },
        headers: {
          'Accept': 'application/json',
        }
      }
    );

    if (!response.ok) {
      console.error('Response not OK:', response.status, response.statusText);
      return null;
    }

    const posts = await response.json();
    return posts[0];
    
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}