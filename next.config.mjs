/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable experimental features
    experimental: {
        serverActions: {
            allowedOrigins: ['localhost:3000', 'localhost:8000']
        },
    },

    // Environment variables
    env: {
        NEXT_PUBLIC_USE_DUMMY_DATA: process.env.NEXT_PUBLIC_USE_DUMMY_DATA || 'false',
        NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000',
        NEXT_PUBLIC_PRODUCTION_API_URL: process.env.NEXT_PUBLIC_PRODUCTION_API_URL || 'http://admin.droneverse.in',
        NEXT_PUBLIC_API_TIMEOUT: process.env.NEXT_PUBLIC_API_TIMEOUT || '10000',
        NEXT_PUBLIC_ENABLE_API_CACHING: process.env.NEXT_PUBLIC_ENABLE_API_CACHING || 'true',
    },

    // API rewrites for development
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: `${process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000'}/api/:path*`,
            },
        ];
    },

    // Headers for API requests
    async headers() {
        return [
            {
                source: '/api/:path*',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: '*',
                    },
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'GET, POST, PUT, DELETE, OPTIONS',
                    },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value: 'Content-Type, Authorization',
                    },
                ],
            },
        ];
    },

    // Image optimization
    images: {
        domains: ['localhost', 'admin.droneverse.in'],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8000',
                pathname: '/storage/**',
            },
            {
                protocol: 'http',
                hostname: 'admin.droneverse.in',
                pathname: '/storage/**',
            },
        ],
    },
};

export default nextConfig;
