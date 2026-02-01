import Hero from './hero/hero';
import AboutUs from './about-us/aboutUs';
import Services from './services/services';
import WhyChooseUs from './why-choose-us/whyChooseUs';
import Projects from './projects/projects';
import HowItWorks from './how-it-works/howItWorks';
import Testimonials from './testimonials/testimonials';
import FAQ from './faq/faq';
import Contact from './contact/contact';
import Footer from './footer/footer';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <Projects />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home;
