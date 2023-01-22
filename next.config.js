/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            "localhost:3000",
            "6.viki.io",
            "content.rozetka.com.ua",
            "content1.rozetka.com.ua",
            "content2.rozetka.com.ua",
        ],
    },
};

module.exports = nextConfig;
