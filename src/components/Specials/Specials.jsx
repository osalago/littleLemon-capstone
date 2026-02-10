import { SpecialCard } from '../../components/features/menu';
import { specials } from '../../data/specials';
import './Specials.css';

function Specials() {
  return (
    <section className="specials">
      <article className="specials__container">
        <section className="specials__header">
          <h2 className="specials__title">This week's specials!</h2>
          <button id="menu" className="specials__button">
            Online Menu
          </button>
        </section>
        <section className="specials__grid">
          {specials.map((item) => (
            <SpecialCard key={item.id} {...item} />
          ))}
        </section>
      </article>
    </section>
  );
}

export default Specials;
