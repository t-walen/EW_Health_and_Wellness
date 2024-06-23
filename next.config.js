/** @type {import('next').NextConfig} */

const { withContentlayer } = require('next-contentlayer');


const nextConfig = {
    distDir: 'out',
  };



module.exports =  withContentlayer({ ...nextConfig});
