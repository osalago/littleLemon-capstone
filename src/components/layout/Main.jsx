import About from '../About/About';
import Hero from '../Hero/Hero';
import Specials from '../Specials/Specials';
import Testimonials from '../Testimonials/Testimonials';
import './Main.css';

function Main() {
  return (
    <main className="main-content">
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </main>
  );
}

export default Main;

/* TODO: adjust padding, line-height, border-radius, etc in all styles */
