// app/post/[slug]/page.jsx
import { getPostBySlug } from "@lib/api"; 
import Image from "next/image";

export default async function PostPage({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <section className="section">
      <div className="container">
        <article>
          <h1 
            className="mb-4 text-3xl font-bold"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }} 
          />
          
          {/* {post._embedded?.["wp:featuredmedia"] && (
            <Image
              className="rounded-lg mb-6"
              src={post._embedded["wp:featuredmedia"][0].source_url}
              alt={post.title.rendered}
              width={925}
              height={475}
              priority
            />
          )} */}

          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }} 
          />
        </article>
      </div>
    </section>
  );
}