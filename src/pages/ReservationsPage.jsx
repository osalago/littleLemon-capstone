import { useReducer, useState } from 'react';
import BookingConfirmation from '../components/features/booking/BookingConfirmation';
import BookingForm from '../components/features/booking/BookingForm';

// Simulates fetching available times for a date
const fetchAvailableTimes = (date) => {
  // In reality, this would be an API call
  // For now, return default times (could vary by date)
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

// Reducer to manage available times
const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAvailableTimes(action.date);
    default:
      return state;
  }
};

// Initialize with default times
const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

function ReservationsPage() {
  const [availableTimes, dispatch] = useReducer(
    timesReducer,
    [],
    initializeTimes
  );
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  const handleDateChange = (date) => {
    dispatch({ type: 'UPDATE_TIMES', date });
  };

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
        <BookingForm
          availableTimes={availableTimes}
          onDateChange={handleDateChange}
          onSubmit={handleSubmit}
        />
      )}
    </section>
  );
}

export default ReservationsPage;
