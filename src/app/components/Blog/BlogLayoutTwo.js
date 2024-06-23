import React from "react";
import Image from "next/image";
import { sortBlogs } from "../../utils";
import { allBlogs } from "contentlayer/generated";
import Tag from "../Elements/Tag";
import Link from "next/link";
import { format } from 'date-fns';

const BlogLayoutTwo = ({ blog }) => {
    return (
        <div className="group relative grid grid-cols-12 w-full h-full rounded-xl mt-15">

            <Link href={blog.url_path} className='relative block h-full col-span-6'>
                <Image
                    src={blog.image.filePath.replace("../public", "")}
                    placeholder='blur'
                    blurDataURL={blog.image.blurhashDataUrl}
                    alt={blog.title}
                    layout='fill'
                    className='object-center object-cover rounded-xl group-hover:scale-105 transition-all ease duration-300'
                />
            </Link>
            <div className='col-span-6 w-full ml-2'>
       <span> <Tag link={`./categories/${blog.tags}`} className='uppercase text-Grey font-semibold text-sm'>{blog.tags}
            </Tag>
            </span>
            <h2 className="text-3xl font-serif text-Brown mt-4">
        <Link href={blog.url_path} className='my-2 inline-block'>

            <span className='bg-gradient-to-r from-Brown/50 to-Brown/50 bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>{blog.title}</span>

        </Link>
        </h2>

        <span className="capitalize text-Grey font-semibold text-base">
            {format(new Date(blog.publishAt), "MMM dd, yyyy")}
        </span>
    </div>
        </div>
    );
};

export default BlogLayoutTwo;
