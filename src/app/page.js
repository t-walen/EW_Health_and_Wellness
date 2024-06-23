
import {allBlogs} from 'contentlayer/generated';
import Image from 'next/image';
import HomeCoverSection from './components/Header/Home/HomeCoverSection';
import FeaturedPosts from './components/Header/Home/FeaturedPosts';
import BlogLayoutOne from './components/Blog/BlogLayoutOne';


export default function Home() {
  console.log(allBlogs);

  return (
    <main className="flex flex-col items-center justify-center">
      < HomeCoverSection blogs={allBlogs} />
      <div className="mt-10">< FeaturedPosts blogs={allBlogs} /></div>
    </main>
  );
}
