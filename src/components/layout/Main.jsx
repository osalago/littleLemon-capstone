import Hero from '../Hero/Hero';
import './Main.css';

function Main() {
  return (
    <main className="main-content">
      <Hero />
      <article className="main-content__specials-container">
        <h2 className="main-content__heading">This week's specials!</h2>
        <button id="menu" className="main-content__button">
          Online Menu
        </button>
        <ul className="main-content__cards">
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
