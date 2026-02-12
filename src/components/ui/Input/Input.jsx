/* eslint-disable react/prop-types */
import './Input.css';

function Input({
  label,
  id,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  required = false,
  placeholder,
  className = '',
  ...props
}) {
  const inputId = id || name;
  const errorId = `${inputId}-error`;

  return (
    <div className={`input-field ${className}`.trim()}>
      {label && (
        <label htmlFor={inputId} className="input-field__label">
          {label}
          {required && <span aria-hidden="true"> *</span>}
        </label>
      )}
      <input
        type={type}
        id={inputId}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`input-field__input ${error ? 'input-field__input--error' : ''}`}
        required={required}
        aria-describedby={error ? errorId : undefined}
        aria-invalid={error ? 'true' : undefined}
        {...props}
      />
      {error && (
        <span id={errorId} className="input-field__error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

function Select({
  label,
  id,
  name,
  value,
  onChange,
  onBlur,
  error,
  required = false,
  children,
  className = '',
  ...props
}) {
  const selectId = id || name;
  const errorId = `${selectId}-error`;

  return (
    <div className={`input-field ${className}`.trim()}>
      {label && (
        <label htmlFor={selectId} className="input-field__label">
          {label}
          {required && <span aria-hidden="true"> *</span>}
        </label>
      )}
      <select
        id={selectId}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`input-field__input ${error ? 'input-field__input--error' : ''}`}
        required={required}
        aria-describedby={error ? errorId : undefined}
        aria-invalid={error ? 'true' : undefined}
        {...props}
      >
        {children}
      </select>
      {error && (
        <span id={errorId} className="input-field__error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

function Textarea({
  label,
  id,
  name,
  value,
  onChange,
  onBlur,
  error,
  required = false,
  placeholder,
  rows = 3,
  className = '',
  ...props
}) {
  const textareaId = id || name;
  const errorId = `${textareaId}-error`;

  return (
    <div className={`input-field ${className}`.trim()}>
      {label && (
        <label htmlFor={textareaId} className="input-field__label">
          {label}
          {required && <span aria-hidden="true"> *</span>}
        </label>
      )}
      <textarea
        id={textareaId}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        rows={rows}
        className={`input-field__textarea ${error ? 'input-field__input--error' : ''}`}
        required={required}
        aria-describedby={error ? errorId : undefined}
        aria-invalid={error ? 'true' : undefined}
        {...props}
      />
      {error && (
        <span id={errorId} className="input-field__error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

Input.Select = Select;
Input.Textarea = Textarea;

export default Input;
