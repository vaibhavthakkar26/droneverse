// Utility function to generate dynamic metadata based on page data
export function generateMetadata(pageData, defaultMetadata) {
    if (!pageData || !pageData.meta) {
        return defaultMetadata;
    }

    const { meta } = pageData;
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://droneverse.com';

    return {
        title: meta.title || defaultMetadata.title,
        description: meta.description || defaultMetadata.description,
        keywords: meta.keywords || defaultMetadata.keywords,
        openGraph: {
            title: meta.ogTitle || meta.title || defaultMetadata.openGraph.title,
            description: meta.ogDescription || meta.description || defaultMetadata.openGraph.description,
            url: meta.canonical || `${baseUrl}/${pageData.slug || ''}`,
            siteName: "Droneverse",
            images: [
                {
                    url: meta.ogImage || defaultMetadata.openGraph.images[0].url,
                    width: 1200,
                    height: 630,
                    alt: meta.ogTitle || meta.title || "Droneverse",
                },
            ],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: meta.ogTitle || meta.title || defaultMetadata.twitter.title,
            description: meta.ogDescription || meta.description || defaultMetadata.twitter.description,
            images: [meta.ogImage || defaultMetadata.twitter.images[0]],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        verification: {
            google: "your-google-verification-code",
        },
        alternates: {
            canonical: meta.canonical || `${baseUrl}/${pageData.slug || ''}`,
        },
    };
}

// Default metadata for fallback
export const defaultMetadata = {
    title: "Droneverse - AI-Driven Autonomous CsUAS for Government and Military",
    description: "Droneverse is India's leading drone training and defence solutions provider. We offer DGCA-approved drone pilot training, AI-driven autonomous CsUAS systems, and comprehensive defence solutions for government and military applications.",
    keywords: "drone training, DGCA approved, autonomous drones, CsUAS, defence solutions, military drones, AI drones, drone pilot certification, India drone training",
    openGraph: {
        title: "Droneverse - AI-Driven Autonomous CsUAS",
        description: "Leading drone training and defence solutions for government and military applications",
        url: "https://droneverse.com",
        siteName: "Droneverse",
        images: [
            {
                url: "/assets/logo/black-logo.svg",
                width: 1200,
                height: 630,
                alt: "Droneverse Logo",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Droneverse - AI-Driven Autonomous CsUAS",
        description: "Leading drone training and defence solutions for government and military applications",
        images: ["/assets/logo/black-logo.svg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "your-google-verification-code",
    },
};
