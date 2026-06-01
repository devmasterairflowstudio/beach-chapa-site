/** @type {import('next').NextConfig} */
const nextConfig = {
  // Necessário para Cloudflare Workers
  images: {
    unoptimized: true,
  },
}
export default nextConfig
