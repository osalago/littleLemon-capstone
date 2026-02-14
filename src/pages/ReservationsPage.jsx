import { useReducer, useState, useEffect } from 'react';
import BookingConfirmation from '../components/features/booking/BookingConfirmation';
import BookingForm from '../components/features/booking/BookingForm';
import BookingSlotList from '../components/features/booking/BookingSlotList';
import { fetchAvailableTimes, submitBooking } from '../services/api';

// Reducer to manage available times
const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // return fetchAvailableTimes(action.date); # uncomment if API call should be used.
      // Filter out booked times to get available times
      return {
        ...state,
        availableTimes: action.times,
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
  availableTimes: [],
  bookedTimes: [],
});

function ReservationsPage() {
  const [timesState, dispatch] = useReducer(
    timesReducer,
    null,
    initializeTimes
  );
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  // Fetch times for today on initial load
  useEffect(() => {
    const today = new Date();
    const times = fetchAvailableTimes(today);
    dispatch({ type: 'UPDATE_TIMES', times });
  }, []);

  const handleDateChange = (date) => {
    const times = fetchAvailableTimes(date);
    dispatch({ type: 'UPDATE_TIMES', times });
  };

  const handleSubmit = (formData) => {
    // API call would go here
    const success = submitBooking(formData);
    // Mark the time as booked
    if (success) {
      dispatch({ type: 'BOOK_TIME', time: formData.time });
      setConfirmedBooking(formData);
    }
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
            allTimes={timesState.availableTimes}
            bookedTimes={timesState.bookedTimes}
          />
        </div>
      )}
    </section>
  );
}

export default ReservationsPage;
export { initializeTimes, timesReducer };
