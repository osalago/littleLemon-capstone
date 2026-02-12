import { useReducer, useState } from 'react';
import BookingConfirmation from '../components/features/booking/BookingConfirmation';
import BookingForm from '../components/features/booking/BookingForm';
import BookingSlotList from '../components/features/booking/BookingSlotList';

const ALL_TIMES = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

// Simulates fetching available times for a date
//const fetchAvailableTimes = (date) => {
// In reality, this would be an API call
// For now, return default times (could vary by date)
//  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
//};

// Reducer to manage available times
const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // return fetchAvailableTimes(action.date); # uncomment if API call should be used.
      // Filter out booked times to get available times
      return {
        ...state,
        availableTimes: ALL_TIMES.filter(
          (time) => !state.bookedTimes.includes(time)
        ),
      };
    case 'BOOK_TIME':
      // Add newly booked time to bookedTimes array
      return {
        ...state,
        bookedTimes: [...state.bookedTimes, action.time],
        availableTimes: state.availableTimes.filter((t) => t !== action.time),
      };
    default:
      return state;
  }
};

// Initialize with default times
const initializeTimes = () => ({
  availableTimes: ALL_TIMES,
  bookedTimes: [],
});

function ReservationsPage() {
  const [timesState, dispatch] = useReducer(
    timesReducer,
    null,
    initializeTimes
  );
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  const handleDateChange = (date) => {
    dispatch({ type: 'UPDATE_TIMES', date });
  };

  const handleSubmit = (formData) => {
    // API call would go here
    // Mark the time as booked
    dispatch({ type: 'BOOK_TIME', time: formData.time });
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
        <div className="reservations-layout">
          <BookingForm
            availableTimes={timesState.availableTimes}
            onDateChange={handleDateChange}
            onSubmit={handleSubmit}
          />
          <BookingSlotList
            allTimes={ALL_TIMES}
            bookedTimes={timesState.bookedTimes}
          />
        </div>
      )}
    </section>
  );
}

export default ReservationsPage;
