// Fallback data utility for components when API data is not available
export function getFallbackData(section) {
    const fallbackData = {
        about: {
            heading: "About droneverse",
            description: "Welcome to DroneVerse, where we redefine India's drone industry. Driven by a vision to create world-class drone pilots, we go above & beyond in everything we do. Recognized in the esteemed World Book of Records, we are proud trailblazers in drone training & innovation.",
            icon: "/assets/icons/about-icon.png",
            backgroundVideo: "/assets/videos/about-bg.mp4",
            services: [
                {
                    title: "Defence",
                    subtitle: "Single Pane of Glass for Complete End-to-End Kill Chain"
                },
                {
                    title: "Training",
                    subtitle: "Single Pane of Glass for Complete End-to-End Kill Chain"
                },
                {
                    title: "Manufacturing",
                    subtitle: "Single Pane of Glass for Complete End-to-End Kill Chain"
                },
                {
                    title: "Service",
                    subtitle: "Single Pane of Glass for Complete End-to-End Kill Chain"
                }
            ],
            buttons: {
                knowMore: "Know more",
                getInTouch: "Get in touch"
            }
        },
        hero: {
            badge: "For government and military",
            heading: "AI-Driven",
            highlight1: "Autonomous",
            highlight2: "CsUAS",
            droneImage: "/assets/img/hero-section/drone.png",
            globeVideo: "/assets/videos/globe.mp4"
        },
        usp: {
            heading: "Why Choose DroneVerse",
            description: "Leading innovation in drone technology and training",
            features: [
                {
                    title: "DGCA Certified Training",
                    description: "Government approved drone pilot certification"
                },
                {
                    title: "Advanced Technology",
                    description: "AI-powered autonomous drone systems"
                },
                {
                    title: "Defence Solutions",
                    description: "Specialized military and government applications"
                }
            ]
        }
    };

    return fallbackData[section] || {};
}
