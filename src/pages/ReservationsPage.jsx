import { useState } from 'react';
import BookingConfirmation from '../components/features/booking/BookingConfirmation';
import BookingForm from '../components/features/booking/BookingForm';

function ReservationsPage() {
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  const handleSubmit = (formData) => {
    // API call would go here
    setConfirmedBooking(formData);
  };

  const handleNewBooking = () => {
    setConfirmedBooking(null);
  };

  return (
    <section className="reservations-page">
      {confirmedBooking ? (
        <BookingConfirmation
          booking={confirmedBooking}
          onNewBooking={handleNewBooking}
        />
      ) : (
        <BookingForm onSubmit={handleSubmit} />
      )}
    </section>
  );
}

export default ReservationsPage;
