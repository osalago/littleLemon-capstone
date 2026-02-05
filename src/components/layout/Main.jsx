import './Main.css';

function Main() {
  return (
    <main className="main-content">
      <article className="main-content__intro-container">
        <section className="main-content__text-content">
          <h1 className="main-content__heading">Little Lemon</h1>
          <h2 className="main-content__subheading">Chicago</h2>
          <details className="main-content__description">
            We are a family-owned Mediterranean restaurant in Chicago serving
            traditional recipes with a modern twist
          </details>
          <button className="main-content__button">Reserve a Table</button>
        </section>

        <section className="main-content__image-container">
          <img
            src="/src/assets/RestaurantFood.jpg"
            alt="Delicious Mediterranean Food"
            className="main-content__image"
          />
        </section>
      </article>
      <article className="main-content__specials-container">
        <h2 className="main-content__heading">This week's specials!</h2>
        <ul>
          <li>
            <h3>Greek Salad</h3>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <p>$12.99</p>
          </li>
          <li>
            <h3>Bruschetta</h3>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
            <p>$5.99</p>
          </li>
          <li>
            <h3>Lemon Dessert</h3>
            <p>
              This comes straight from grandma's recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
            <p>$5.00</p>
          </li>
        </ul>
      </article>
    </main>
  );
}

export default Main;
