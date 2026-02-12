/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import './BookingForm.css';

function BookingForm({
  availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
  onDateChange,
  onSubmit,
}) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 2,
    occasion: 'none',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.date) {
      newErrors.date = 'Please select a date';
    }

    if (!formData.time) {
      newErrors.time = 'Please select a time';
    }

    if (formData.guests < 1 || formData.guests > 10) {
      newErrors.guests = 'Guests must be between 1 and 10';
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }

    // Trigger date change to update available times
    if (name === 'date' && onDateChange) {
      onDateChange(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <h2 className="booking-form__title">Reserve a Table</h2>

      {/* Date & Time Section */}
      <fieldset className="booking-form__fieldset">
        <legend className="booking-form__legend">Date & Time</legend>

        <div className="booking-form__row">
          <Input
            type="date"
            label="Date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            error={errors.date}
            required
          />

          <Input.Select
            label="Time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            error={errors.time}
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
            value={formData.guests}
            onChange={handleChange}
            error={errors.guests}
            min="1"
            max="10"
            required
          />

          <Input.Select
            label="Occasion"
            name="occasion"
            value={formData.occasion}
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
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
            required
          />

          <Input
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
            required
          />
        </div>

        <div className="booking-form__row">
          <Input
            type="email"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
          />

          <Input
            type="tel"
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            required
          />
        </div>

        <Input.Textarea
          label="Special Requests"
          name="specialRequests"
          value={formData.specialRequests}
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
