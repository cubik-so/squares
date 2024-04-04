/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    transpilePackages: ['@squares/ui'],
    cssModules: true,
}

export default nextConfig
