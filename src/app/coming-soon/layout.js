import '../../../public/assets/css/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: "Coming Soon - Droneverse",
  description: "Droneverse is coming soon! Get ready to elevate your experience with our innovative aerial mastery solutions.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ComingSoonLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <Header variant="dark" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
