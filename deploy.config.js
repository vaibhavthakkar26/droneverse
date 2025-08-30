module.exports = {
    // Server Configuration
    server: {
        host: process.env.FTP_SERVER || 'your-ftp-server.com',
        username: process.env.FTP_USERNAME || 'your-username',
        password: process.env.FTP_PASSWORD || 'your-password',
        port: 21,
        secure: false
    },

    // Deployment Paths
    paths: {
        local: './production-build/',
        remote: '/public_html/droneverse/',
        backup: '/public_html/droneverse-backup/'
    },

    // Files to include/exclude
    include: [
        '.next/**',
        'public/**',
        'package.json',
        'package-lock.json',
        'deployment-info.txt'
    ],

    exclude: [
        '**/.git*',
        '**/node_modules/**',
        '**/src/**',
        '**/.github/**',
        '**/README.md',
        '**/tailwind.config.js',
        '**/postcss.config.mjs',
        '**/eslint.config.mjs',
        '**/jsconfig.json',
        '**/.gitignore',
        '**/API_INTEGRATION.md',
        '**/scripts/**',
        '**/production.env'
    ],

    // Build Configuration
    build: {
        command: 'npm run build',
        env: {
            NODE_ENV: 'production',
            NEXT_PUBLIC_API_URL: 'http://new.droneverse.in',
            NEXT_PUBLIC_DOMAIN: 'http://new.droneverse.in',
            NEXT_PUBLIC_USE_DUMMY_DATA: 'false'
        }
    },

    // Pre-deployment hooks
    hooks: {
        preDeploy: [
            'npm ci --only=production',
            'npm run lint',
            'npm run build'
        ],
        postDeploy: [
            'echo "Deployment completed successfully!"',
            'echo "Build timestamp: $(date)"'
        ]
    }
};
