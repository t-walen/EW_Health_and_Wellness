import { sortBlogs } from '../../../utils';
import { allBlogs } from 'contentlayer/generated';
import Image from 'next/image';
import React from 'react';


if (typeof data !== 'undefined') {
  } else {
    console.error('Data is undefined.');
  }
const HomeCoverSection = ({ blogs }) => {

    const sortedBlogs = sortBlogs({blogs: allBlogs})
    const blog = sortedBlogs[0];
    return (
        <div className='h-[270px] w-full inline-block mb-12'>
        <article className='flex flex-col items-start justify-end mx-10 relative h-[60vh]'>
            <div className='absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-white rounded-3x z-0'></div>

            <Image src={blog.image.filePath.replace("../public", "")}
            placeholder='blur'
            blurDataURL={blog.image.blurhashDataUrl}
            alt={blog.title}
            size="40vw"
            fill
            className='w-full object-center object-cover rounded-3xl -z-10'
        />
        <div className='absolute bottom-20 left-16 z-20'>
            <div className='w-3/4 p-16 flex flex-col items-start justify-center'>
                <h1 className='text-5xl font-serif font-bold text-Brown leading-tight'>Living, Learning, and Teaching...</h1>
                <h2 className='text-3xl font-serif text-Brown mt-4'>A Low Tox Life, After A Thyroid Cancer Diagnosis</h2>
            </div>
        </div>
        </article>
        </div>
    );
}


module.exports = HomeCoverSection;
