import { ALL_TIMES, initializeTimes, timesReducer } from './ReservationsPage';

describe('initializeTimes', () => {
  test('returns initial state with all times available and none booked', () => {
    const initialState = initializeTimes();

    expect(initialState).toEqual({
      availableTimes: ALL_TIMES,
      bookedTimes: [],
    });
  });
});

describe('timesReducer', () => {
  test('UPDATE_TIMES returns same available times when no bookings exist', () => {
    const currentState = {
      availableTimes: ALL_TIMES,
      bookedTimes: [],
    };

    const newState = timesReducer(currentState, {
      type: 'UPDATE_TIMES',
      date: '2025-02-15',
    });

    expect(newState.availableTimes).toEqual(ALL_TIMES);
    expect(newState.bookedTimes).toEqual([]);
  });

  test('BOOK_TIME removes booked time from available times', () => {
    const currentState = {
      availableTimes: ALL_TIMES,
      bookedTimes: [],
    };

    const newState = timesReducer(currentState, {
      type: 'BOOK_TIME',
      time: '18:00',
    });

    expect(newState.bookedTimes).toContain('18:00');
    expect(newState.availableTimes).not.toContain('18:00');
  });
});
