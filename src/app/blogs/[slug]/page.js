import { allBlogs } from 'contentlayer/generated';
import Tag from '../../components/Elements/Tag';
import Image from 'next/image';
import BlogDetails from '../../components/Blog/BlogDetails';
import RenderMdx from '../../components/Blog/RenderMdx';

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({
    slug: blog._raw.flattenedPath,
  }));
}

export default function BlogPage({ params }) {
  console.log('Params:', params);
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  console.log('Blog:', blog);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <article>
      <div className="mb-8 text-center relative w-full h-[70vh] bg-black">
        <div className="w-full z-20 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Tag name={blog.tags[1]} link={`/categories/${blog.tags[1]}`} className="px-6 text-sm py-2" />
          <h1 className="inline-block mt-6 font-semibold capitalize text-grey text-5xl leading-normal relative w-5/6">
            {blog.title}
          </h1>
        </div>
        <div className="absolute inset-0 bg-black/70 z-10" />
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          fill
          className="aspect-square w-full h-full object-cover object-center"
        />
      </div>
      <BlogDetails blog={blog} slug={params.slug} />
      <div className="grid grid-cols-12 gap-16 mt-8 px-10">
        <div className="col-span-4">
          <details className="border-1 border-solid border-dark rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto" open>
            <summary className="text-lg font-semibold capitalize cursor-pointer">Table Of Contents</summary>
            <ul className="mt-4 font-in text-base">

              {blog.toc?.map((heading, index) => {
                return <li key={`#${heading.slug}`} className="py-1">
                  <a href={`#${heading.slug}`}
                    data-level={heading.level}
                    className="data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-dark/40
                    data-[level=three]:pl-6
                    flex items-cneter justify-start

                    "
                  >
                    {
                      heading.level === "three" ? <span className="flex w-1 h-1 rounded-full bg-dark mr-2">&nbsp;</span> : null
                    }

                    <span className="hover:underline">{heading.text}</span>
                  </a>
                </li>
})}
            </ul>
          </details>
        </div>
        <div className="col-span-8">
          <RenderMdx blog={blog} />
        </div>
      </div>
    </article>
  );
}
