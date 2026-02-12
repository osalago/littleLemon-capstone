/* eslint-disable react/prop-types */

import BookingSlot from './BookingSlot';

function BookingSlotList({ allTimes, bookedTimes }) {
  return (
    <div className="booking-slots">
      <h3>Table Availability</h3>
      <ul>
        {allTimes.map((time) => (
          <BookingSlot
            key={time}
            time={time}
            isBooked={bookedTimes.includes(time)}
          />
        ))}
      </ul>
    </div>
  );
}

export default BookingSlotList;
