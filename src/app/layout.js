import "../index.css";
import "../App.css";
import "aos/dist/aos.css";
import Providers from "./providers";

export const metadata = {
  metadataBase: new URL("https://niresh.com.np"),
  title:
    "Freelance WordPress Developer Nepal | WordPress Developer | Niresh Shrestha",
  description:
    "Niresh Shrestha is a skilled Freelance WordPress developer from Nepal and Frontend developer with a passion for creating visually stunning and highly functional websites.",
  keywords:
    "Freelance WordPress Developer Nepal kathmandu, Frontend developer, WordPress Developer, Niresh Shrestha, Web Customization Services Kathmandu, Plugin Development",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Freelance WordPress Developer Nepal | Niresh Shrestha",
    description:
      "Niresh Shrestha is a skilled Freelance WordPress developer from Nepal and Frontend developer with a passion for creating visually stunning and highly functional websites.",
    url: "https://niresh.com.np",
    siteName: "Niresh Shrestha Portfolio",
    images: [
      {
        url: "/niresh-shrestha-wpdeveloper.png",
        width: 1200,
        height: 630,
        alt: "Niresh Shrestha - Freelance WordPress Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance WordPress Developer Nepal | Niresh Shrestha",
    description:
      "Niresh Shrestha is a skilled Freelance WordPress developer from Nepal and Frontend developer.",
    images: ["/niresh-shrestha-wpdeveloper.png"],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Niresh Shrestha",
    url: "https://niresh.com.np",
    image: "https://niresh.com.np/niresh-shrestha-wpdeveloper.png",
    jobTitle: "Freelance WordPress Developer & Frontend Developer",
    description:
      "Niresh Shrestha is a skilled Freelance WordPress developer from Nepal and Frontend developer with a passion for creating visually stunning and highly functional websites.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressCountry: "NP",
    },
    sameAs: [
      "https://www.linkedin.com/in/dewebkiller/",
      "https://github.com/dewebkiller",
      "https://codepen.io/dewebkiller/",
      "https://dribbble.com/dewebkiller/",
      "https://youtube.com/@dewebkiller",
    ],
    knowsAbout: [
      "WordPress Development",
      "Frontend Development",
      "Content Writing",
      "Web Design",
      "Plugin Development",
    ],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
