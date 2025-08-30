// Environment Configuration
const config = {
    // API Configuration
    api: {
        baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000',
        productionUrl: process.env.NEXT_PUBLIC_PRODUCTION_API_URL || 'http://admin.droneverse.in',
        timeout: parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT) || 10000,
        enableCaching: process.env.NEXT_PUBLIC_ENABLE_API_CACHING === 'true'
    },

    // Environment Detection
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',
    isTest: process.env.NODE_ENV === 'test',

    // Feature Flags
    useDummyData: process.env.NEXT_PUBLIC_USE_DUMMY_DATA === 'true',

    // App Configuration
    app: {
        name: 'DroneVerse',
        version: '1.0.0',
        description: 'Leading drone training and defence solutions provider'
    }
};

// Get the appropriate API base URL based on environment
export function getApiBaseUrl() {
    if (config.isProduction) {
        return config.api.productionUrl;
    }
    return config.api.baseUrl;
}

// Get full API URL for a specific endpoint
export function getApiUrl(endpoint) {
    const baseUrl = getApiBaseUrl();
    return `${baseUrl}${endpoint}`;
}

// Check if we should use dummy data
export function shouldUseDummyData() {
    return config.useDummyData || !config.isProduction;
}

// Get API timeout
export function getApiTimeout() {
    return config.api.timeout;
}

// Check if API caching is enabled
export function isApiCachingEnabled() {
    return config.api.enableCaching;
}

// Export the full config for debugging
export default config;
