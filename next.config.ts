/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const repositoryName = 'gonzalez-web-agency';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: isProduction ? `/gonzalez-web-agency/` : '',
  assetPrefix: isProduction ? `/gonzalez-web-agency/` : '',
}

module.exports = nextConfig