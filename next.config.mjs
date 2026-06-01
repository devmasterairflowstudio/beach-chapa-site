/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: '/contato', destination: '/faq', permanent: true },
    ]
  },
}
export default nextConfig
