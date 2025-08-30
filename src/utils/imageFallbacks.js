// Image Fallback Utility
// Provides fallback image paths when API images are not found

export const imageFallbacks = {
    // Hero Section
    hero: {
        droneImage: '/assets/img/hero-section/drone.png',
        globeVideo: '/assets/videos/globe.mp4'
    },
    
    // About Section
    about: {
        icon: '/assets/icons/about-icon.png',
        backgroundVideo: '/assets/videos/about-bg.mp4'
    },
    
    // Defence Section
    defence: {
        fighterJetImage: '/assets/img/defence/fighter-jet.svg',
        gridBallsImage: '/assets/img/defence/grid-balls.svg',
        droneImage: '/assets/img/defence/drone.svg'
    },
    
    // Training Section
    training: {
        courseImages: [
            '/assets/img/course&instruction/img1.png',
            '/assets/img/course&instruction/img2.png',
            '/assets/img/course&instruction/img3.png'
        ],
        instructorImages: [
            '/assets/img/course&instruction/1.png',
            '/assets/img/course&instruction/2.png'
        ]
    },
    
    // Certification Section
    certification: {
        images: [
            '/assets/img/certification/1.png',
            '/assets/img/certification/2.png',
            '/assets/img/certification/3.png'
        ]
    },
    
    // News Section
    news: {
        bannerImages: [
            '/assets/img/news/1.png',
            '/assets/img/news/2.png',
            '/assets/img/news/3.png',
            '/assets/img/news/4.png'
        ],
        articleImages: [
            '/assets/img/news/news1.png',
            '/assets/img/news/news2.png',
            '/assets/img/news/news3.png'
        ]
    },
    
    // Partners Section
    partners: {
        images: [
            '/assets/img/partners/img1.png',
            '/assets/img/partners/img2.png',
            '/assets/img/partners/img3.png',
            '/assets/img/partners/img4.png',
            '/assets/img/partners/img5.png',
            '/assets/img/partners/img6.png',
            '/assets/img/partners/img7.png',
            '/assets/img/partners/img8.png',
            '/assets/img/partners/img9.png',
            '/assets/img/partners/img10.png',
            '/assets/img/partners/img11.png',
            '/assets/img/partners/img12.png'
        ]
    },
    
    // Presence Section
    presence: {
        mapImage: '/assets/img/presence/states.svg',
        locationIcon: '/assets/img/presence/location.svg'
    },
    
    // Footer
    footer: {
        logo: '/assets/logo/white-logo.svg',
        backgroundVideo: '/assets/img/footer/bg.mp4'
    },
    
    // Common
    common: {
        lockIcon: '/assets/icons/lock.svg',
        blackLogo: '/assets/logo/black-logo.svg'
    }
};

// Function to get fallback image for a specific path
export function getImageFallback(imagePath, fallbackType, fallbackKey) {
    if (!imagePath || imagePath === '') {
        const fallbacks = imageFallbacks[fallbackType];
        if (!fallbacks) return '/assets/img/placeholder.png';
        
        // If fallbackKey is provided, get the specific fallback
        if (fallbackKey && fallbacks[fallbackKey]) {
            return fallbacks[fallbackKey];
        }
        
        // If no specific key, return the first available fallback
        if (typeof fallbacks === 'object') {
            const firstKey = Object.keys(fallbacks)[0];
            return fallbacks[firstKey] || '/assets/img/placeholder.png';
        }
        
        return fallbacks || '/assets/img/placeholder.png';
    }
    return imagePath;
}

// Function to get fallback image for specific component types
export function getComponentImageFallback(componentType, imageType, index = 0) {
    const fallbacks = imageFallbacks[componentType];
    if (!fallbacks) return '/assets/img/placeholder.png';
    
    if (Array.isArray(fallbacks[imageType])) {
        return fallbacks[imageType][index] || fallbacks[imageType][0] || '/assets/img/placeholder.png';
    }
    
    return fallbacks[imageType] || '/assets/img/placeholder.png';
}
