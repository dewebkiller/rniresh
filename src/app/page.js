import Header from "../Components/layout/Header";
import Skills from "../Components/home/Skills";
import Progress from "../Components/home/Progress";
import PortfolioList from "../Components/portfolio/PortfolioList";
import Testimonial from "../Components/home/Testimonial";
import Hireme from "../Components/home/Hireme";
import BlogSection from "../Components/blog/BlogSection";
import Getintouch from "../Components/contact/Getintouch";
import FooterSocial from "../Components/layout/FooterSocial";
import Footer from "../Components/layout/Footer";

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
