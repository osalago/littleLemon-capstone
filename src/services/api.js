// Wrapper functions for the global API

export const fetchAvailableTimes = (date) => {
  // fetchAPI is loaded globally from the script
  // It expects a Date object and returns an array of available times
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return window.fetchAPI(dateObj);
};

export const submitBooking = (formData) => {
  // submitAPI returns true if submission was successful
  return window.submitAPI(formData);
};
