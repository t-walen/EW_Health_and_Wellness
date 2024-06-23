import * as path from 'path';
import { makeSource, defineDocumentType } from '@contentlayer/source-files';
import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import GithubSlugger from 'github-slugger';

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: '**/*.{md,mdx}',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    publishAt: {
      type: 'date',
      required: true,
    },
    updatedAt: {
      type: 'date',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'image',
      required: true,
    },
    isPublished: {
      type: 'boolean',
      default: false,
    },
    author: {
      type: 'string',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
  },
  computedFields: {
    url_path: {
      type: 'string',
      resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`,
    },
    readingTime: {
      type: 'json',
      resolve: (doc) => {
        const bodyContent = doc.body.raw || '';
        return readingTime(bodyContent);
      },
    },
    toc: {
      type: 'json',
      resolve: async (doc) => {
        const regularExp = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
        const slugger = new GithubSlugger();
        const headings = Array.from(doc.body.raw.matchAll(regularExp)).map(({ groups }) => {
          const flag = groups?.flag;
          const content = groups?.content;

          return {
            level: flag?.length === 1 ? 'one' : flag?.length === 2 ? 'two' : 'three',
            text: content,
            slug: content ? slugger.slug(content) : undefined,
          };
        });

        return headings;
      },
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'append' }],
    ],
  },
});
