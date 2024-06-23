"use client"
import React, {useEffect} from "react";
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from "next/image";



const mdxComponents = {
    Image
}

const RenderMdx = ({ blog }) => {
    useEffect(() => {
      console.log(blog);
    }, [blog]);

    const MDXContent = useMDXComponent(blog.body.code);

    if (!blog || !blog.body || !blog.body.code) {
        return <div>Error: Blog content is not available.</div>;
      }
  return (
        <div className='col-span-8 font-in prose-lg w-max-w prose-blockquote:bg-Grey/20 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-LightPurple
        prose-blockquote:not-italic
        prose-blockquote:rounded-r-lg

        '>
            <MDXContent components={mdxComponents}/>
        </div>

    )



}

export default RenderMdx;
