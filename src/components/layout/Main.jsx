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
    </main>
  );
}

export default Main;
