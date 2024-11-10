/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
      config.watchOptions = {
        poll: 1000, // Check for changes every second when running in devcontainer that is blocking regular hot module reload
        aggregateTimeout: 300, // Delay before rebuilding
        ignored: ['**/node_modules']
      }
      return config
    }
  }
  
  module.exports = nextConfig