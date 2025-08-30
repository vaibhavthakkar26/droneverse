# Dynamic Metadata System

This system provides dynamic metadata generation for Next.js pages based on API data or fallback defaults.

## How It Works

1. **API Integration**: The system fetches page data from your Laravel backend API
2. **Fallback Support**: If API is unavailable, it falls back to dummy data from `pages.json`
3. **Dynamic Generation**: Metadata is generated based on the page content and predefined defaults
4. **SEO Optimized**: Includes OpenGraph, Twitter Cards, and other SEO meta tags

## Usage

### For Homepage
```javascript
// In app/page.js
import { generatePageMetadata, pageMetadataDefaults } from '@/lib/pageMetadata';

export async function generateMetadata() {
  return generatePageMetadata('home', pageMetadataDefaults.home);
}
```

### For About Page
```javascript
// In app/about/page.js
import { generatePageMetadata, pageMetadataDefaults } from '@/lib/pageMetadata';

export async function generateMetadata() {
  return generatePageMetadata('about', pageMetadataDefaults.about);
}
```

### For Custom Pages
```javascript
// In app/custom/page.js
import { generatePageMetadata } from '@/lib/pageMetadata';

export async function generateMetadata() {
  return generatePageMetadata('custom-page', {
    title: "Custom Page - Droneverse",
    description: "Custom page description",
    keywords: "custom, keywords",
    openGraph: {
      title: "Custom Page - Droneverse",
      description: "Custom page description",
      url: "https://droneverse.com/custom-page",
    },
    twitter: {
      title: "Custom Page - Droneverse",
      description: "Custom page description",
    },
  });
}
```

## API Data Structure

Your Laravel backend should return page data with this structure:

```json
{
  "slug": "page-slug",
  "meta": {
    "title": "Page Title - Droneverse",
    "description": "Page description for SEO",
    "keywords": "keyword1, keyword2, keyword3",
    "ogTitle": "OpenGraph Title",
    "ogDescription": "OpenGraph Description",
    "ogImage": "/path/to/image.jpg",
    "canonical": "https://droneverse.com/page-slug"
  },
  "content": "Page content...",
  "otherData": "..."
}
```

## Backend Implementation

To implement this in your Laravel backend:

1. **Create a Pages API endpoint**:
```php
// routes/api.php
Route::get('/v1/pages/{slug}', [PageController::class, 'show']);

// PageController.php
public function show($slug)
{
    $page = Page::where('slug', $slug)->first();
    
    if (!$page) {
        return response()->json(['error' => 'Page not found'], 404);
    }
    
    return response()->json($page);
}
```

2. **Database Migration**:
```php
// Create pages table with metadata fields
Schema::create('pages', function (Blueprint $table) {
    $table->id();
    $table->string('slug')->unique();
    $table->string('title');
    $table->text('content');
    $table->json('meta')->nullable(); // Store metadata as JSON
    $table->timestamps();
});
```

3. **Page Model**:
```php
// Page.php
class Page extends Model
{
    protected $fillable = ['slug', 'title', 'content', 'meta'];
    
    protected $casts = [
        'meta' => 'array',
    ];
}
```

## Environment Variables

Add these to your `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://droneverse.com
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
NEXT_PUBLIC_USE_DUMMY_DATA=true
```

## Features

- ✅ Dynamic metadata based on API data
- ✅ Fallback to dummy data when API is unavailable
- ✅ SEO optimized with OpenGraph and Twitter Cards
- ✅ Canonical URLs
- ✅ Keywords support
- ✅ Responsive image support
- ✅ Easy to extend for new pages

## Testing

To test the metadata:

1. **Check browser dev tools** - View the `<head>` section
2. **Use social media debuggers**:
   - Facebook: https://developers.facebook.com/tools/debug/
   - Twitter: https://cards-dev.twitter.com/validator
   - LinkedIn: https://www.linkedin.com/post-inspector/

3. **Check Google Search Console** for indexing status
