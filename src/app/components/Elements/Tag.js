import Link from "next/link";
import React from "react";
import { allBlogs } from "contentlayer/generated";
import { cx } from "../../utils";

const Tag = ({ link= "#", className, children, ...props }) => {
    return (
<Link href={link} className={cx("inline-block", className)} {...props}>

    {children}
    </Link>
);
};

export default Tag;
