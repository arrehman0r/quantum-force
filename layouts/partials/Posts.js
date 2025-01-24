import { dateFormat } from "@lib/utils/dateFormat";
import Image from "next/image";
import Link from "next/link";

const Posts = ({ posts, className }) => {
  return (
    <div className={`row space-y-16 ${className}`}>
      {posts.map((post, i) => (
        <div
          key={`key-${i}`}
          className={i === 0 ? "col-12" : "col-12 sm:col-6"}
        >
          {post._embedded?.["wp:featuredmedia"] && (
            <div className={`relative ${i === 0 ? 'h-[475px]' : 'h-[230px]'} w-full overflow-hidden rounded-lg`}>
              <Image
                className="object-cover"
                src={post._embedded["wp:featuredmedia"][0].source_url}
                alt={post.title.rendered}
                fill
                sizes={i === 0 ? "925px" : "445px"}
                priority={i === 0}
              />
            </div>
          )}
          <div className="mb-4 mt-4" />
          <h3 className="mb-2">
            <Link
              href={`/post/${post.slug}`}
              className="block hover:text-primary"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
          </h3>
          <div
            className="text-text"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
        </div>
      ))}
    </div>
  );
};

export default Posts;





{/* <ul className="mb-4 mt-4 flex flex-wrap items-center space-x-3 text-text">
            {post._embedded?.["author"] && (
              <li>
                <Link
                  href={`/authors/${post._embedded.author[0].slug}`}
                  className="flex items-center hover:text-primary"
                >
                  {post._embedded.author[0].avatar_urls && (
                    <Image
                      src={post._embedded.author[0].avatar_urls["96"]}
                      alt={post._embedded.author[0].name}
                      height={50}
                      width={50}
                      className="mr-2 h-6 w-6 rounded-full"
                    />
                  )}
                  <span>{post._embedded.author[0].name}</span>
                </Link>
              </li>
            )}
            <li>{dateFormat(post.date)}</li>
            <li>
              {post._embedded?.["wp:term"] && (
                <ul>
                  {post._embedded["wp:term"][0].map((category, i) => (
                    <li className="inline-block" key={`category-${i}`}>
                      <
                        href={`/categories/${category.slug}`}
                        className="mr-3 hover:text-primary"
                      >
                        &#9635; {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul> */}