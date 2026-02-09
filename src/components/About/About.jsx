import './About.css';

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__content">
          <h2 className="about__title">Little Lemon Restaurant</h2>
          <h3 className="about__subtitle">Chicaco</h3>
          <p className="about__description">
            Little Lemon is a family-owned Mediterranean restaurant located in
            the heart of the city. We pride ourselves on serving authentic
            dishes made with fresh, locally-sourced ingredients. Our menu
            features a variety of options, including vegetarian and vegan
            dishes, to cater to all dietary preferences. We are committed to
            providing a warm and welcoming atmosphere for our guests, making
            every dining experience memorable.
          </p>
        </div>
        <div className="about__images">
          <img
            src="/assets/restaurant.jpg"
            alt="Restaurant interior"
            className="about__image about__image--front"
          />
          <img
            src="/assets/MarioAdrian.jpg"
            alt="Delicious dish"
            className="about__image about__image--back"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
