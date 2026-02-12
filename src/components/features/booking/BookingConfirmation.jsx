/* eslint-disable react/prop-types */
import Button from '../../ui/Button';
import './BookingConfirmation.css';

function BookingConfirmation({ booking, onNewBooking }) {
  return (
    <div className="booking-confirmation">
      <div className="booking-confirmation__icon" aria-hidden="true">
        ✓
      </div>
      <h2 className="booking-confirmation__title">Reservation Confirmed!</h2>
      <p className="booking-confirmation__message">
        Thank you, {booking.firstName}! Your table has been reserved.
      </p>

      <div className="booking-confirmation__details">
        <div className="booking-confirmation__detail">
          <span className="booking-confirmation__label">Date</span>
          <span className="booking-confirmation__value">{booking.date}</span>
        </div>
        <div className="booking-confirmation__detail">
          <span className="booking-confirmation__label">Time</span>
          <span className="booking-confirmation__value">{booking.time}</span>
        </div>
        <div className="booking-confirmation__detail">
          <span className="booking-confirmation__label">Guests</span>
          <span className="booking-confirmation__value">{booking.guests}</span>
        </div>
        {booking.occasion !== 'none' && (
          <div className="booking-confirmation__detail">
            <span className="booking-confirmation__label">Occasion</span>
            <span className="booking-confirmation__value">
              {booking.occasion}
            </span>
          </div>
        )}
      </div>

      <p className="booking-confirmation__email">
        A confirmation email has been sent to <strong>{booking.email}</strong>
      </p>

      <Button variant="primary" onClick={onNewBooking}>
        Make Another Reservation
      </Button>
    </div>
  );
}

export default BookingConfirmation;
