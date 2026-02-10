import Button from '../ui/Button/Button';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <article className="hero__container">
        <section className="hero__content">
          <h1 className="hero__heading">Little Lemon</h1>
          <h2 className="hero__subheading">Chicago</h2>
          <p className="hero__description">
            We are a family-owned Mediterranean restaurant in Chicago serving
            traditional recipes with a modern twist
          </p>
          <Button href="/reservations" variant="primary">
            Reserve a Table
          </Button>
        </section>
        <section className="hero__image">
          <img
            src="/src/assets/RestaurantFood.jpg"
            alt="Delicious Mediterranean Food"
          />
        </section>
      </article>
    </section>
  );
}

export default Hero;
