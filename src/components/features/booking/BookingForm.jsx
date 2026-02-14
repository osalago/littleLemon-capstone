/* eslint-disable react/prop-types */
import { useFormValidation } from '../../../hooks';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import './BookingForm.css';

const initialValues = {
  date: '',
  time: '',
  guests: 2,
  occasion: 'none',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  specialRequests: '',
};

const validate = (values) => {
  const errors = {};

  if (!values.date) {
    errors.date = 'Please select a date';
  }

  if (!values.time) {
    errors.time = 'Please select a time';
  }

  if (values.guests < 1 || values.guests > 10) {
    errors.guests = 'Guests must be between 1 and 10';
  }

  if (!values.firstName?.trim()) {
    errors.firstName = 'First name is required';
  }

  if (!values.lastName?.trim()) {
    errors.lastName = 'Last name is required';
  }

  if (!values.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email';
  }

  if (!values.phone?.trim()) {
    errors.phone = 'Phone number is required';
  }

  return errors;
};

function BookingForm({ availableTimes = [], onDateChange, onSubmit }) {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormValidation(initialValues, validate);

  const onChange = (e) => {
    handleChange(e);

    if (e.target.name === 'date' && onDateChange) {
      onDateChange(e.target.value);
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2 className="booking-form__title">Reserve a Table</h2>

      {/* Date & Time Section */}
      <fieldset className="booking-form__fieldset">
        <legend className="booking-form__legend">Date & Time</legend>

        <div className="booking-form__row">
          <Input
            type="date"
            label="Date"
            name="date"
            value={values.date}
            onChange={onChange}
            onBlur={handleBlur}
            error={touched.date && errors.date}
            required
          />

          <Input.Select
            label="Time"
            name="time"
            value={values.time}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.time && errors.time}
            required
          >
            <option value="">Select a time</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </Input.Select>
        </div>

        <div className="booking-form__row">
          <Input
            type="number"
            label="Number of guests"
            name="guests"
            value={values.guests}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.guests && errors.guests}
            min="1"
            max="10"
            required
          />

          <Input.Select
            label="Occasion"
            name="occasion"
            value={values.occasion}
            onChange={handleChange}
          >
            <option value="none">No special occasion</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="business">Business</option>
            <option value="other">Other</option>
          </Input.Select>
        </div>
      </fieldset>

      {/* Contact Details Section */}
      <fieldset className="booking-form__fieldset">
        <legend className="booking-form__legend">Contact Details</legend>

        <div className="booking-form__row">
          <Input
            label="First Name"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.firstName && errors.firstName}
            required
          />

          <Input
            label="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.lastName && errors.lastName}
            required
          />
        </div>

        <div className="booking-form__row">
          <Input
            type="email"
            label="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email}
            required
          />

          <Input
            type="tel"
            label="Phone"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.phone && errors.phone}
            required
          />
        </div>

        <Input.Textarea
          label="Special Requests"
          name="specialRequests"
          value={values.specialRequests}
          onChange={handleChange}
          placeholder="Any dietary requirements or special requests?"
          className="booking-form__field--full"
        />
      </fieldset>

      <Button type="submit" variant="primary" className="booking-form__submit">
        Confirm Reservation
      </Button>
    </form>
  );
}

export default BookingForm;
