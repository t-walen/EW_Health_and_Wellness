import React from "react";
import { sortBlogs } from "../../../utils";
import { allBlogs } from "contentlayer/generated";
import BlogLayoutOne from "../../Blog/BlogLayoutOne";
import Tag from "../../Elements/Tag";
import BlogLayoutTwo from "../../Blog/BlogLayoutTwo";

const FeaturedPosts = ({blogs}) => {
    const sortedBlogs = sortBlogs({ blogs: allBlogs });

    return (
        <section className="w-full mt-40 px-32 flex flex-col items-center justify-center">
            <h2 className="w-full font-bold capitalize text-4xl mt-12 text-Brown">Featured</h2>
            <div className="grid grid-cols-2 gap-4 mt-10" style={{ height: "50vh" }}>
                <article className="col-span-1 row-span-1">
                    <BlogLayoutOne blog={sortedBlogs[1]}/>
                </article>
                <div className="col-span-1 row-span-1 flex flex-col gap-1">
                    <article className="flex-1">
                        <BlogLayoutTwo blog={sortedBlogs[2]}/>
                    </article>
                    <article className="flex-1">
                        <BlogLayoutTwo blog={sortedBlogs[3]}/>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default FeaturedPosts;
