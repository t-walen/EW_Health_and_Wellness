import {format, parseISO } from 'date-fns'
import React from "react";
import Link from 'next/link';


const BlogDetails = ({ blog }) => {
    if (!blog || !blog.publishAt) {
      return <div>Invalid blog data</div>;
    }

    let formattedDate = 'Invalid date';
    try {
      formattedDate = format(parseISO(blog.publishAt), 'LLLL d, yyyy');
    } catch (error) {
      console.error('Error parsing date:', error);
    }

    return (
      <div className= 'px-10 bg-Lightbrown text-Grey py-2 flex items-center justify-around flex-wrap text-xl font-medium mx-10 rounded-lg'>
        <time className='m-3'>{formattedDate}</time>
        <span className='m-3'>10 Views</span>
        <div className='m-3'>
        {blog.readingTime.text}
        </div>
        <Link href={`/categories/${blog.tags}`} className='m-3'>
        #{blog.tags[0]}
        </Link>
      </div>
    );
  };


export default BlogDetails;
