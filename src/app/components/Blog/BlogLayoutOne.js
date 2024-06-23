import React from "react";
import Image from "next/image";
import { sortBlogs } from "../../utils";
import { allBlogs } from "contentlayer/generated";
import Tag from "../Elements/Tag";
import Link from "next/link";


const BlogLayoutOne = ({blogs}) => {

    const sortedBlogs = sortBlogs({ blogs: allBlogs })
    const blog = sortedBlogs[1];
return (
    <div className='group relative inline-block overflow-hidden mt-15 rounded-xl'>
    <div className='absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.5)] to-white rounded-xl z-10'></div>
    <Image
        src={blog.image.filePath.replace("../public", "")}
        placeholder='blur'
        blurDataURL={blog.image.blurhashDataUrl}
        alt={blog.title}
        width={blog.image.width}
        height={blog.image.height}
        className='w-full object-center object-cover rounded-xl group-hover:scale-105 transition-all ease duration-300'
    />
    <div className='w-full absolute bottom-0 p-10 z-20'>
    <Tag link={`./categories/${blog.tags}`} className='uppercase text-Grey font-semibold text-sm'>{blog.tags}
            </Tag>
        <Link href={blog.url_path} className='mt-6'>
            <h2 className='text-2xl font-serif font-bold text-Brown leading-tight'>
                <span className='text-3xl font-serif text-Brown mt-4 bg-gradient-to-r from-Brown to-Brown bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>{blog.title}</span>
            </h2>
        </Link>
    </div>
</div>

);

}
export default BlogLayoutOne;
