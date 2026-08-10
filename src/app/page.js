import Header from "../Components/Header";
import Skills from "../Components/Skills";
import Progress from "../Components/Progress";
import PortfolioList from "../Components/PortfolioList";
import Testimonial from "../Components/Testimonial";
import Hireme from "../Components/Hireme";
import BlogSection from "../Components/BlogSection";
import Getintouch from "../Components/Getintouch";
import FooterSocial from "../Components/FooterSocial";
import Footer from "../Components/Footer";

export const metadata = {
  title: 'Freelance WordPress Developer Nepal | WordPress Developer | Niresh Shrestha',
  description: 'Niresh Shrestha is a skilled Freelance WordPress developer from Nepal and Frontend developer with a passion for creating visually stunning and highly functional websites.',
  keywords: 'Freelance WordPress Developer Nepal kathmandu, Frontend developer, WordPress Developer, Niresh Shrestha, Web Customization Services Kathmandu, Plugin Development',
};

export default function Home() {
  return (
    <div className="header">
      <Header />
      <Skills />
      <Progress />
      <Testimonial />
      <PortfolioList />
      <Hireme />
      <BlogSection />
      <Getintouch />
      <Footer />
      <FooterSocial />
    </div>
  );
}
