import { TestimonialCard } from '../../components/features/menu';
import { testimonials } from '../../data/testimonials';
import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <h2 className="testimonials__title">Testimonials</h2>
        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
