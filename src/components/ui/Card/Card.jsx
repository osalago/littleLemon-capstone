/* eslint-disable react/prop-types */
import './Card.css';

function Card({ children, className = '', ...props }) {
  return (
    <article className={`card ${className}`.trim()} {...props}>
      {children}
    </article>
  );
}

function CardImage({ src, alt, className = '' }) {
  return (
    <div className={`card__image ${className}`.trim()}>
      <img src={src} alt={alt} />
    </div>
  );
}

function CardContent({ children, className = '' }) {
  return <div className={`card__content ${className}`.trim()}>{children}</div>;
}

Card.Image = CardImage;
Card.Content = CardContent;

export default Card;
