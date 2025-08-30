/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const repositoryName = 'gonzalez-web-agency';

const nextConfig = {
  output: 'export',          // export estático
  trailingSlash: true,       // URLs con slash final
  basePath: isProduction ? `/${repositoryName}` : '',
  assetPrefix: isProduction ? `/${repositoryName}/` : '',
  images: {
    unoptimized: true,       // necesario para export
  },
};

module.exports = nextConfig;
