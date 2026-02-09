/* eslint-disable react/prop-types */

import './TestimonialCard.css';

function TestimonialCard({ name, rating, review, image }) {
  const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);

  return (
    <article className="testimonial-card">
      <div
        className="testimonial-card__rating"
        aria-label={`${rating} out of 5 stars`}
      >
        {stars}
      </div>
      <div className="testimonial-card__author">
        <img src={image} alt={name} className="testimonial-card__image" />
        <span className="testimonial-card__name">{name}</span>
      </div>
      <p className="testimonial-card__review">{review}</p>
    </article>
  );
}

export default TestimonialCard;
