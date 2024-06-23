import { parseISO, compareDesc } from 'date-fns';
import { allBlogs } from '../../../.contentlayer/generated/Blog/_index.mjs';

export const cx = (...classNames) => classNames.filter(Boolean).join(" ")

export const sortBlogs = ({ blogs }) => {
    const specialBlogTitle = "LowToNoThyroid";
    const specialBlog = blogs.find(blog => blog.title === specialBlogTitle);
    const otherBlogs = blogs.filter(blog => blog.title !== specialBlogTitle);

    const sortedBlogs = otherBlogs.slice()
        .sort((a, b) => compareDesc(parseISO(a.publishAt), parseISO(b.publishAt)));

    if (specialBlog) {
        return [specialBlog, ...sortedBlogs];
    }

    return sortedBlogs;
};
