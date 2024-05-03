/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    transpilePackages: ['@squaress/ui'],
    cssModules: true,
}

export default nextConfig
