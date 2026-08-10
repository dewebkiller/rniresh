import '../index.css';
import '../App.css';
import 'aos/dist/aos.css';
import Providers from './providers';

export const metadata = {
  metadataBase: new URL('https://niresh.com.np'),
  title: 'Freelance WordPress Developer Nepal | WordPress Developer | Niresh Shrestha',
  description: 'Niresh Shrestha is a skilled Freelance WordPress developer from Nepal and Frontend developer with a passion for creating visually stunning and highly functional websites.',
  keywords: 'Freelance WordPress Developer Nepal kathmandu, Frontend developer, WordPress Developer, Niresh Shrestha, Web Customization Services Kathmandu, Plugin Development',
  icons: {
    icon: '/favicon_64.png',
    apple: '/logo192.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    images: ['/logo192.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
