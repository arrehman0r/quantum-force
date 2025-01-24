// BlogPagination.jsx
import Pagination from "@components/Pagination";
import SeoMeta from "@layouts/partials/SeoMeta";
import Posts from "@partials/Posts";
import { getAllBolgPosts } from "@lib/api";
import config from "@config/config.json";

const BlogPagination = async ({ params }) => {
  const currentPage = parseInt((params && params.slug) || 1);
  const { pagination } = config.settings;

  // Fetch posts from WordPress
  const posts = await getAllBolgPosts();
  const indexOfLastPost = currentPage * pagination;
  const indexOfFirstPost = indexOfLastPost - pagination;
  const totalPages = Math.ceil(posts.length / pagination);
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  console.log("currentPosts are ", currentPosts)

  return (
    <>
      <SeoMeta title="Quantum Force | Blog Posts" />
      <section className="section">
        <div className="container">
          <Posts className="mb-16" posts={currentPosts} />
          <Pagination totalPages={totalPages} currentPage={currentPage} />
        </div>
      </section>
    </>
  );
};

export default BlogPagination;

// get blog pagination slug
export async function generateStaticParams() {
  const posts = await getAllPosts();
  const { pagination } = config.settings;
  const totalPages = Math.ceil(posts.length / pagination);
  let paths = [];

  for (let i = 1; i < totalPages; i++) {
    paths.push({
      slug: (i + 1).toString(),
    });
  }

  return paths;
}