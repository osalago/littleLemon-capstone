/* eslint-disable react/prop-types */

function BookingSlot({ time, isBooked }) {
  return (
    <li
      className={`booking-slot ${isBooked ? 'booking-slot--booked' : 'booking-slot--available'}`}
    >
      <span>{time}</span>
      <span>{isBooked ? 'Booked' : 'Available'}</span>
    </li>
  );
}

export default BookingSlot;
