// API Configuration
const API_CONFIG = {
    // Detect environment and set appropriate base URL
    baseUrl: process.env.NODE_ENV === 'production'
        ? (process.env.NEXT_PUBLIC_PRODUCTION_API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://admin.droneverse.in')
        : (process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000'),

    // API endpoints
    endpoints: {
        pages: '/api/v1/pages',
        news: '/api/v1/news',
        partners: '/api/v1/partners',
        locations: '/api/v1/locations'
    },

    // Request options
    options: {
        timeout: parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT) || 10000,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
};

// Utility function to get full API URL
function getApiUrl(endpoint) {
    return `${API_CONFIG.baseUrl}${endpoint}`;
}

// Enhanced fetch with timeout and error handling
async function apiFetch(url, options = {}) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.options.timeout);

    try {
        const response = await fetch(url, {
            ...API_CONFIG.options,
            ...options,
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        clearTimeout(timeoutId);

        if (error.name === 'AbortError') {
            throw new Error('API request timed out');
        }

        throw error;
    }
}

// Main API functions
export async function getPageContent(slug) {
    const useDummy = process.env.NEXT_PUBLIC_USE_DUMMY_DATA === "true";

    if (useDummy) {
        // Load from local JSON with simulated delay
        return new Promise((resolve) => {
            setTimeout(() => {
                const pages = require('@/data/pages.json');
                const page = pages.find((p) => p.slug === slug);
                resolve(page || null);
            }, 200);
        });
    }

    try {
        console.log(`Fetching page: ${slug} from ${getApiUrl(`${API_CONFIG.endpoints.pages}/${slug}`)}`);

        const data = await apiFetch(getApiUrl(`${API_CONFIG.endpoints.pages}/${slug}`));
        return data;
    } catch (error) {
        console.error("Error fetching from Laravel API:", error);

        // Fallback to dummy data if API fails
        if (process.env.NODE_ENV !== 'production') {
            console.warn("Falling back to dummy data due to API error");
            const pages = require('@/data/pages.json');
            const page = pages.find((p) => p.slug === slug);
            return page || null;
        }

        return null;
    }
}

// News API functions
export async function getNewsArticles() {
    const useDummy = process.env.NEXT_PUBLIC_USE_DUMMY_DATA === "true";

    if (useDummy) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const news = require('@/data/news.json');
                resolve(news || []);
            }, 200);
        });
    }

    try {
        const data = await apiFetch(getApiUrl(API_CONFIG.endpoints.news));
        return data.data || data; // Handle both paginated and non-paginated responses
    } catch (error) {
        console.error("Error fetching news from API:", error);
        return [];
    }
}

// Partners API functions
export async function getPartners() {
    const useDummy = process.env.NEXT_PUBLIC_USE_DUMMY_DATA === "true";

    if (useDummy) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const partners = require('@/data/partners.json');
                resolve(partners || []);
            }, 200);
        });
    }

    try {
        const data = await apiFetch(getApiUrl(API_CONFIG.endpoints.partners));
        return data.data || data;
    } catch (error) {
        console.error("Error fetching partners from API:", error);
        return [];
    }
}

// Locations API functions
export async function getLocations() {
    const useDummy = process.env.NEXT_PUBLIC_USE_DUMMY_DATA === "true";

    if (useDummy) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const locations = require('@/data/locations.json');
                resolve(locations || []);
            }, 200);
        });
    }

    try {
        const data = await apiFetch(getApiUrl(API_CONFIG.endpoints.locations));
        return data.data || data;
    } catch (error) {
        console.error("Error fetching locations from API:", error);
        return [];
    }
}

// Utility function to check API health
export async function checkApiHealth() {
    try {
        const response = await fetch(`${API_CONFIG.baseUrl}/api/v1/health`, {
            method: 'GET',
            signal: AbortSignal.timeout(5000)
        });
        return response.ok;
    } catch (error) {
        console.error("API health check failed:", error);
        return false;
    }
}

// Export configuration for debugging
export const apiConfig = {
    baseUrl: API_CONFIG.baseUrl,
    endpoints: API_CONFIG.endpoints,
    isProduction: process.env.NODE_ENV === 'production',
    useDummyData: process.env.NEXT_PUBLIC_USE_DUMMY_DATA === "true"
};
