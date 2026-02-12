/* eslint-disable react/prop-types */
import './Button.css';

function Button({
  children,
  variant = 'primary',
  type = 'button',
  disabled = false,
  onClick,
  href,
  className = '',
  ...props
}) {
  const baseClass = 'btn';
  const variantClass = `btn--${variant}`;
  const classes = `${baseClass} ${variantClass} ${className}`.trim();

  // Render as link if href is provided
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
