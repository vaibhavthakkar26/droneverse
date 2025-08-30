import { generateMetadata, defaultMetadata } from './metadata';

// Helper function to generate metadata for any page
export async function generatePageMetadata(pageSlug, customDefaults = {}) {
    try {
        const { getPageContent } = await import('./api');
        const pageData = await getPageContent(pageSlug);

        // Merge custom defaults with default metadata
        const mergedDefaults = {
            ...defaultMetadata,
            ...customDefaults,
            openGraph: {
                ...defaultMetadata.openGraph,
                ...customDefaults.openGraph,
            },
            twitter: {
                ...defaultMetadata.twitter,
                ...customDefaults.twitter,
            },
        };

        return generateMetadata(pageData, mergedDefaults);
    } catch (error) {
        console.error(`Error generating metadata for ${pageSlug}:`, error);
        return {
            ...defaultMetadata,
            ...customDefaults,
        };
    }
}

// Predefined metadata for common page types
export const pageMetadataDefaults = {
    home: {
        title: "Droneverse - AI-Driven Autonomous CsUAS for Government and Military",
        description: "Droneverse is India's leading drone training and defence solutions provider. We offer DGCA-approved drone pilot training, AI-driven autonomous CsUAS systems, and comprehensive defence solutions for government and military applications.",
        keywords: "drone training, DGCA approved, autonomous drones, CsUAS, defence solutions, military drones, AI drones, drone pilot certification, India drone training",
        openGraph: {
            title: "Droneverse - AI-Driven Autonomous CsUAS",
            description: "Leading drone training and defence solutions for government and military applications",
            url: "https://droneverse.com",
        },
        twitter: {
            title: "Droneverse - AI-Driven Autonomous CsUAS",
            description: "Leading drone training and defence solutions for government and military applications",
        },
    },
    about: {
        title: "About Us - Droneverse | Leading Drone Training & Defence Solutions",
        description: "Learn about Droneverse, India's premier drone training and defence solutions provider. Discover our mission, values, and commitment to innovation in autonomous CsUAS technology.",
        keywords: "about droneverse, drone training company, defence solutions, autonomous drones, CsUAS technology, India drone industry, drone pilot training",
        openGraph: {
            title: "About Us - Droneverse",
            description: "Learn about Droneverse, India's premier drone training and defence solutions provider.",
            url: "https://droneverse.com/about",
        },
        twitter: {
            title: "About Us - Droneverse",
            description: "Learn about Droneverse, India's premier drone training and defence solutions provider.",
        },
    },
    training: {
        title: "Drone Training Programs - Droneverse | DGCA Approved Courses",
        description: "Enroll in DGCA-approved drone training programs at Droneverse. From basic pilot certification to advanced autonomous systems training, we offer comprehensive courses for defence and civilian applications.",
        keywords: "drone training, DGCA approved courses, drone pilot certification, autonomous drone training, defence drone training, India drone courses",
        openGraph: {
            title: "Drone Training Programs - Droneverse",
            description: "DGCA-approved drone training programs for defence and civilian applications.",
            url: "https://droneverse.com/training",
        },
        twitter: {
            title: "Drone Training Programs - Droneverse",
            description: "DGCA-approved drone training programs for defence and civilian applications.",
        },
    },
    defence: {
        title: "Defence Solutions - Droneverse | Autonomous CsUAS Systems",
        description: "Advanced defence solutions with AI-driven autonomous CsUAS systems. Counter-drone technology, surveillance drones, and tactical solutions for government and military applications.",
        keywords: "defence solutions, autonomous CsUAS, counter-drone systems, military drones, surveillance drones, tactical drones, government drone solutions",
        openGraph: {
            title: "Defence Solutions - Droneverse",
            description: "Advanced AI-driven autonomous CsUAS systems for government and military applications.",
            url: "https://droneverse.com/defence",
        },
        twitter: {
            title: "Defence Solutions - Droneverse",
            description: "Advanced AI-driven autonomous CsUAS systems for government and military applications.",
        },
    },
    contact: {
        title: "Contact Us - Droneverse | Get in Touch",
        description: "Contact Droneverse for drone training, defence solutions, and autonomous CsUAS systems. Reach out to our experts for consultation and support.",
        keywords: "contact droneverse, drone training contact, defence solutions contact, CsUAS consultation, drone company contact",
        openGraph: {
            title: "Contact Us - Droneverse",
            description: "Get in touch with Droneverse for drone training and defence solutions.",
            url: "https://droneverse.com/contact",
        },
        twitter: {
            title: "Contact Us - Droneverse",
            description: "Get in touch with Droneverse for drone training and defence solutions.",
        },
    },
};

// Export the helper function for easy use in pages
export { generateMetadata, defaultMetadata };
