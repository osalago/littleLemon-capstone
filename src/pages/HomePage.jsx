import About from '../components/About/About';
import Hero from '../components/Hero/Hero';
import Specials from '../components/Specials/Specials';
import Testimonials from '../components/Testimonials/Testimonials';

function HomePage() {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </>
  );
}

export default HomePage;
