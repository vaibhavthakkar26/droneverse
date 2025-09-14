import '../../public/assets/css/globals.css';

// Default metadata
export const metadata = {
  title: "test Droneverse - AI-Driven Autonomous CsUAS for Government and Military ",
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

import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from './components/WhatsAppButton';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <Header />
        {children}
        <WhatsAppButton 
          phoneNumber="1234567890" 
          message="Hello! I'd like to know more about your services."
          position="bottom-right"
          showTooltip={true}
        />
        <Footer />
      </body>
    </html>
  );
}
