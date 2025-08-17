/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Modern way to allow external domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https', 
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      // Add your own domains here in the future
      // {
      //   protocol: 'https',
      //   hostname: 'yourdomain.com',
      //   port: '',
      //   pathname: '/images/**',
      // },
    ],
    // Optional: Add formats for better performance
    formats: ['image/webp', 'image/avif'],
  },
}

export default nextConfig