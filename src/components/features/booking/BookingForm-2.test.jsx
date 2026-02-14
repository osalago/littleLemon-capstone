import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm rendering', () => {
  test('renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={[]} />);
    const headingElement = screen.getByText('Reserve a Table');
    expect(headingElement).toBeInTheDocument();
  });
});

describe('BookingForm HTML attributes', () => {
  beforeEach(() => {
    render(<BookingForm availableTimes={['17:00', '18:00']} />);
  });

  test('date input has required attribute', () => {
    const dateInput = screen.getByLabelText(/date/i);
    expect(dateInput).toHaveAttribute('required');
  });

  test('date input has correct type', () => {
    const dateInput = screen.getByLabelText(/date/i);
    expect(dateInput).toHaveAttribute('type', 'date');
  });

  test('time select has required attribute', () => {
    const timeSelect = screen.getByLabelText(/time/i);
    expect(timeSelect).toHaveAttribute('required');
  });

  test('guests input has required attribute', () => {
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute('required');
  });

  test('guests input has min attribute set to 1', () => {
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute('min', '1');
  });

  test('guests input has max attribute set to 10', () => {
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute('max', '10');
  });

  test('guests input has correct type', () => {
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute('type', 'number');
  });

  test('email input has correct type', () => {
    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toHaveAttribute('type', 'email');
  });

  test('phone input has correct type', () => {
    const phoneInput = screen.getByLabelText(/phone/i);
    expect(phoneInput).toHaveAttribute('type', 'tel');
  });

  test('submit button has correct type', () => {
    const submitButton = screen.getByRole('button', {
      name: /confirm reservation/i,
    });
    expect(submitButton).toHaveAttribute('type', 'submit');
  });
});

describe('BookingForm validation - invalid states', () => {
  test('shows error when submitting empty form', async () => {
    const mockSubmit = vi.fn();
    render(
      <BookingForm availableTimes={['17:00', '18:00']} onSubmit={mockSubmit} />
    );

    const submitButton = screen.getByRole('button', {
      name: /confirm reservation/i,
    });
    fireEvent.click(submitButton);

    expect(
      await screen.findByText(/please select a date/i)
    ).toBeInTheDocument();
    expect(mockSubmit).not.toHaveBeenCalled();
  });

  test('shows error for invalid email format', async () => {
    const mockSubmit = vi.fn();
    render(
      <BookingForm availableTimes={['17:00', '18:00']} onSubmit={mockSubmit} />
    );

    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });

    const submitButton = screen.getByRole('button', {
      name: /confirm reservation/i,
    });
    fireEvent.click(submitButton);

    expect(
      await screen.findByText(/please enter a valid email/i)
    ).toBeInTheDocument();
    expect(mockSubmit).not.toHaveBeenCalled();
  });

  test('shows error when required fields are missing', async () => {
    const mockSubmit = vi.fn();
    render(
      <BookingForm availableTimes={['17:00', '18:00']} onSubmit={mockSubmit} />
    );

    // Fill only some fields
    const dateInput = screen.getByLabelText(/date/i);
    fireEvent.change(dateInput, { target: { value: '2025-03-15' } });

    const submitButton = screen.getByRole('button', {
      name: /confirm reservation/i,
    });
    fireEvent.click(submitButton);

    expect(
      await screen.findByText(/please select a time/i)
    ).toBeInTheDocument();
    expect(mockSubmit).not.toHaveBeenCalled();
  });
});

describe('BookingForm validation - valid states', () => {
  test('submits form when all required fields are valid', async () => {
    const mockSubmit = vi.fn();
    const mockDateChange = vi.fn();
    render(
      <BookingForm
        availableTimes={['17:00', '18:00']}
        onSubmit={mockSubmit}
        onDateChange={mockDateChange}
      />
    );

    // Fill all required fields
    fireEvent.change(screen.getByLabelText(/date/i), {
      target: { value: '2025-03-15' },
    });
    fireEvent.change(screen.getByLabelText(/time/i), {
      target: { value: '17:00' },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: '4' },
    });
    fireEvent.change(screen.getByLabelText(/first name/i), {
      target: { value: 'John' },
    });
    fireEvent.change(screen.getByLabelText(/last name/i), {
      target: { value: 'Doe' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/phone/i), {
      target: { value: '123-456-7890' },
    });

    const submitButton = screen.getByRole('button', {
      name: /confirm reservation/i,
    });
    fireEvent.click(submitButton);

    expect(mockSubmit).toHaveBeenCalledTimes(1);
    expect(mockSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        date: '2025-03-15',
        time: '17:00',
        guests: '4',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
      })
    );
  });

  test('clears error when user corrects invalid field', async () => {
    const mockSubmit = vi.fn();
    render(
      <BookingForm availableTimes={['17:00', '18:00']} onSubmit={mockSubmit} />
    );

    // Submit empty to trigger error
    const submitButton = screen.getByRole('button', {
      name: /confirm reservation/i,
    });
    fireEvent.click(submitButton);

    expect(
      await screen.findByText(/please select a date/i)
    ).toBeInTheDocument();

    // Now fill the date field
    const dateInput = screen.getByLabelText(/date/i);
    fireEvent.change(dateInput, { target: { value: '2025-03-15' } });

    // Error should be cleared
    expect(screen.queryByText(/please select a date/i)).not.toBeInTheDocument();
  });

  test('onDateChange is called when date is selected', () => {
    const mockDateChange = vi.fn();
    render(
      <BookingForm
        availableTimes={['17:00', '18:00']}
        onDateChange={mockDateChange}
      />
    );

    const dateInput = screen.getByLabelText(/date/i);
    fireEvent.change(dateInput, { target: { value: '2025-03-15' } });

    expect(mockDateChange).toHaveBeenCalledWith('2025-03-15');
  });
});
