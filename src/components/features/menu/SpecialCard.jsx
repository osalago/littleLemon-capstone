/* eslint-disable react/prop-types */

import Card from '../../ui/Card';
import './SpecialCard.css';

function SpecialCard({ title, description, price, image }) {
  return (
    <Card className="special-card">
      <Card.Image src={image} alt={title} className="special-card__image" />
      <Card.Content>
        <div className="special-card__header">
          <h3 className="special-card__title">{title}</h3>
          <span className="special-card__price">${price.toFixed(2)}</span>
        </div>
        <p className="special-card__description">{description}</p>
      </Card.Content>
    </Card>
  );
}

export default SpecialCard;
