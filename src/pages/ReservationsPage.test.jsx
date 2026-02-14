import { initializeTimes, timesReducer } from './ReservationsPage';

describe('initializeTimes', () => {
  test('returns initial state with empty available times and no bookings', () => {
    const initialState = initializeTimes();

    expect(initialState).toEqual({
      availableTimes: [],
      bookedTimes: [],
    });
  });
});

describe('timesReducer', () => {
  test('UPDATE_TIMES sets available times from API response', () => {
    const currentState = {
      availableTimes: [],
      bookedTimes: [],
    };
    const apiTimes = ['17:00', '18:30', '19:00', '20:30'];

    const newState = timesReducer(currentState, {
      type: 'UPDATE_TIMES',
      times: apiTimes,
    });

    expect(newState.availableTimes).toEqual(apiTimes);
    expect(newState.bookedTimes).toEqual([]);
  });

  test('BOOK_TIME removes booked time from available times', () => {
    const currentState = {
      availableTimes: ['17:00', '18:00', '19:00'],
      bookedTimes: [],
    };

    const newState = timesReducer(currentState, {
      type: 'BOOK_TIME',
      time: '18:00',
    });

    expect(newState.bookedTimes).toContain('18:00');
    expect(newState.availableTimes).not.toContain('18:00');
    expect(newState.availableTimes).toEqual(['17:00', '19:00']);
  });
});
