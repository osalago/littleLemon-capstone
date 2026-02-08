import './Specials.css';

function Specials() {
  return (
    <section className="specials">
      <article className="specials__container">
        <section className="specials__header">
          <h2>This week's specials!</h2>
          <button id="menu" className="specials__button">
            Online Menu
          </button>
        </section>
        <section className="specials__grid">
          /* Specials cards will go here, but they are currently in the Main
          component. * /
        </section>
      </article>
    </section>
  );
}

export default Specials;
