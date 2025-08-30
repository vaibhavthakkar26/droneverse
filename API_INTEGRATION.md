# API Integration Guide

This document explains how to integrate the DroneVerse frontend with the Laravel backend API.

## Environment Variables Setup

### 1. Create Environment Files

Create the following environment files in your frontend directory:

#### `.env.local` (for local development)
```bash
# API Configuration
NEXT_PUBLIC_USE_DUMMY_DATA=false
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
NEXT_PUBLIC_PRODUCTION_API_URL=https://yourdomain.com/admin-droneverse

# Environment Detection
NEXT_PUBLIC_NODE_ENV=development

# Feature Flags
NEXT_PUBLIC_ENABLE_API_CACHING=true
NEXT_PUBLIC_API_TIMEOUT=10000
```

#### `.env.production` (for production)
```bash
# API Configuration
NEXT_PUBLIC_USE_DUMMY_DATA=false
NEXT_PUBLIC_API_BASE_URL=https://yourdomain.com/admin-droneverse
NEXT_PUBLIC_PRODUCTION_API_URL=https://yourdomain.com/admin-droneverse

# Environment Detection
NEXT_PUBLIC_NODE_ENV=production

# Feature Flags
NEXT_PUBLIC_ENABLE_API_CACHING=true
NEXT_PUBLIC_API_TIMEOUT=15000
```

### 2. Environment Variables Explanation

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `NEXT_PUBLIC_USE_DUMMY_DATA` | Enable/disable dummy data fallback | `false` | No |
| `NEXT_PUBLIC_API_BASE_URL` | Local development API URL | `http://localhost:8000` | Yes |
| `NEXT_PUBLIC_PRODUCTION_API_URL` | Production API URL | `https://yourdomain.com/admin-droneverse` | Yes |
| `NEXT_PUBLIC_NODE_ENV` | Environment detection | `development` | No |
| `NEXT_PUBLIC_ENABLE_API_CACHING` | Enable API response caching | `true` | No |
| `NEXT_PUBLIC_API_TIMEOUT` | API request timeout (ms) | `10000` | No |

## API Endpoints

The frontend integrates with the following Laravel API endpoints:

### Pages API
- **GET** `/api/v1/pages/{slug}` - Get page content by slug
- **GET** `/api/v1/pages` - Get all pages

### News API
- **GET** `/api/v1/news` - Get all news articles
- **GET** `/api/v1/news/{id}` - Get specific news article

### Partners API
- **GET** `/api/v1/partners` - Get all partners
- **GET** `/api/v1/partners/{id}` - Get specific partner

### Locations API
- **GET** `/api/v1/locations` - Get all locations
- **GET** `/api/v1/locations/{id}` - Get specific location

## Usage Examples

### 1. Using the API Hook

```jsx
import { useApiData } from '@/hooks/useApiData';

function MyComponent() {
    const { data, loading, error, refreshData } = useApiData();
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    
    return (
        <div>
            <h1>{data.page?.title}</h1>
            <button onClick={refreshData}>Refresh</button>
        </div>
    );
}
```

### 2. Direct API Calls

```jsx
import { getPageContent, getNewsArticles } from '@/lib/api';

// In a component or page
const pageData = await getPageContent('home');
const newsData = await getNewsArticles();
```

### 3. Environment Configuration

```jsx
import { getApiBaseUrl, shouldUseDummyData } from '@/config/environment';

console.log('API Base URL:', getApiBaseUrl());
console.log('Using Dummy Data:', shouldUseDummyData());
```

## Error Handling

The API integration includes comprehensive error handling:

1. **Network Errors** - Automatic fallback to dummy data in development
2. **Timeout Errors** - Configurable timeout with AbortController
3. **API Errors** - Proper error messages and fallback handling
4. **Loading States** - Built-in loading state management

## Fallback Strategy

1. **Primary**: Try to fetch from Laravel API
2. **Fallback**: Use local dummy data if API fails
3. **Error Display**: Show user-friendly error messages
4. **Retry Mechanism**: Manual refresh functionality

## Development vs Production

### Development Mode
- Uses `NEXT_PUBLIC_API_BASE_URL` (localhost:8000)
- Enables dummy data fallback
- Shows detailed error messages
- Includes API health checks

### Production Mode
- Uses `NEXT_PUBLIC_PRODUCTION_API_URL`
- Disables dummy data fallback
- Minimal error information
- Optimized for performance

## Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure Laravel backend has proper CORS headers
   - Check API base URL configuration

2. **API Timeout**
   - Increase `NEXT_PUBLIC_API_TIMEOUT` value
   - Check network connectivity

3. **Dummy Data Always Loading**
   - Set `NEXT_PUBLIC_USE_DUMMY_DATA=false`
   - Verify API endpoint accessibility

4. **Environment Variables Not Loading**
   - Restart Next.js development server
   - Check variable naming (must start with `NEXT_PUBLIC_`)

### Debug Information

The integration includes built-in debugging:

```jsx
import { apiConfig } from '@/lib/api';

console.log('API Configuration:', apiConfig);
// Outputs: { baseUrl, endpoints, isProduction, useDummyData }
```

## Performance Optimization

1. **Parallel API Calls** - Multiple endpoints fetched simultaneously
2. **Request Caching** - Configurable response caching
3. **Timeout Management** - Prevents hanging requests
4. **Error Boundaries** - Graceful error handling

## Security Considerations

1. **Environment Variables** - Only `NEXT_PUBLIC_` variables are exposed to client
2. **API Validation** - All responses validated before use
3. **Error Sanitization** - Sensitive information not exposed in errors
4. **CORS Configuration** - Proper cross-origin request handling
