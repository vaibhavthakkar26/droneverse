import {
  getPageContent,
  getNewsArticles,
  getPartners,
  getLocations,
} from "@/lib/api";
import { getApiBaseUrl, shouldUseDummyData } from "@/config/environment";
import { generatePageMetadata, pageMetadataDefaults } from "@/lib/pageMetadata";

// Components
import HeroBanner from "./components/HeroBanner";
import AboutSection from "./components/AboutSection";
import UspSection from "./components/UspSection";
import DefenceSection from "./components/DefenceSection/DefenceSection";
import Training from "./components/Training";
import NewsSection from "./components/NewsSection";
import Partners from "./components/Partners";
import Presence from "./components/Presence";
import Footer from "./components/Footer";
import Certifications from "./components/Certification";
import OurPresenceSection from "./components/TrainingPage/OurPresenceSection/page";
import CourseAll from "../app/components/trainingCourse/page";

// Generate dynamic metadata for the homepage
export async function generateMetadata() {
  return generatePageMetadata("home", pageMetadataDefaults.home);
}

export default async function Home() {
  console.log("Environment:", {
    apiBaseUrl: getApiBaseUrl(),
    useDummyData: shouldUseDummyData(),
    nodeEnv: process.env.NODE_ENV,
  });

  try {
    // Fetch all data in parallel for better performance
    const [pageData, newsData, partnersData, locationsData] =
      await Promise.allSettled([
        getPageContent("home"),
        getNewsArticles(),
        getPartners(),
        getLocations(),
      ]);

    // Extract data or use fallbacks
    const page = pageData.status === "fulfilled" ? pageData.value : null;
    const news = newsData.status === "fulfilled" ? newsData.value : [];
    const partners =
      partnersData.status === "fulfilled" ? partnersData.value : [];
    const locations =
      locationsData.status === "fulfilled" ? locationsData.value : [];

    console.log("Data loaded:", {
      page: !!page,
      news: news.length,
      partners: partners.length,
      locations: locations.length,
    });

    // If no page data, show error or fallback
    if (!page) {
      console.warn("No page data available, using fallback");
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="mb-4 text-2xl font-bold text-red-600">
              Unable to load page content
            </h1>
            <p className="text-gray-600">
              Please check your API configuration or enable dummy data mode.
            </p>
            <div className="p-4 mt-4 bg-gray-100 rounded">
              <p className="text-sm text-gray-500">
                <strong>API Base URL:</strong> {getApiBaseUrl()}
                <br />
                <strong>Using Dummy Data:</strong>{" "}
                {shouldUseDummyData() ? "Yes" : "No"}
                <br />
                <strong>Environment:</strong> {process.env.NODE_ENV}
              </p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <main>
        {/* Hero Section */}
        {page.hero && (
          <HeroBanner
            data={page.hero}
            fallbackData={{
              badge: "Welcome to DroneVerse",
              heading: "India's Leading Drone Training & Defence Solutions",
              highlight1: "Innovation",
              highlight2: "Excellence",
            }}
          />
        )}

        {/* About Section */}
        {page.about && (
          <AboutSection
            data={page.about}
            fallbackData={{
              heading: "About DroneVerse",
              description:
                "We are a company that values innovation and creativity. DroneVerse is India's leading drone training and defence solutions provider, committed to excellence in everything we do.",
              services: [
                {
                  title: "Innovation",
                  subtitle: "Pushing the boundaries of drone technology",
                },
                {
                  title: "Excellence",
                  subtitle: "Delivering world-class training and solutions",
                },
                {
                  title: "Integrity",
                  subtitle: "Building trust through transparent practices",
                },
                {
                  title: "Growth",
                  subtitle: "Fostering continuous learning and development",
                },
              ],
            }}
          />
        )}

        

        {/* Defence Section */}
        {page.defence && (
          <DefenceSection
            data={page.defence}
            fallbackData={{
              heading: "Defence Solutions",
              description:
                "Advanced drone defence systems for modern security challenges",
            }}
          />
        )}

        {/* Course Section */}

        <CourseAll />

        {/* Training Section */}
        {/* {page.training && (
          <Training
            data={page.training}
            fallbackData={{
              heading: "Training Programs",
              description:
                "Comprehensive drone training programs for all skill levels",
            }}
          />
        )} */}
        {/* Certifications Section */}
        <Certifications data={page.certifications} />
        {/* News Section */}
        <NewsSection
          newsData={news}
          fallbackData={[
            {
              title: "DroneVerse Launches New Training Program",
              description: "Latest DGCA-approved drone pilot training program",
              image: "/assets/img/news/news1.jpg",
              link: "#",
            },
          ]}
        />

        {/* Partners Section */}
        <Partners
          partnersData={partners}
          fallbackData={[
            { name: "DRDO", logo: "/assets/img/partners/drdo-logo.png" },
            { name: "HAL", logo: "/assets/img/partners/hal-logo.png" },
            { name: "BEL", logo: "/assets/img/partners/bel-logo.png" },
            { name: "ISRO", logo: "/assets/img/partners/isro-logo.png" },
          ]}
        />

        {/* Presence Section */}
        {/* <Presence
          locationsData={locations}
          fallbackData={[
            { name: "Mumbai", city: "Mumbai", state: "Maharashtra", lat: 19.0760, lng: 72.8777 },
            { name: "Delhi", city: "New Delhi", state: "Delhi", lat: 28.7041, lng: 77.1025 },
            { name: "Bangalore", city: "Bangalore", state: "Karnataka", lat: 12.9716, lng: 77.5946 }
          ]}
        /> */}
        <OurPresenceSection />
      </main>
    );
  } catch (error) {
    console.error("Error loading page data:", error);

    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-red-600">
            Error Loading Page
          </h1>
          <p className="mb-4 text-gray-600">{error.message}</p>
          <div className="p-4 text-left bg-gray-100 rounded">
            <p className="text-sm text-gray-500">
              <strong>Error:</strong> {error.message}
              <br />
              <strong>API Base URL:</strong> {getApiBaseUrl()}
              <br />
              <strong>Environment:</strong> {process.env.NODE_ENV}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
