import { useCallback, useState } from 'react';

/**
 * Custom hook for form validation
 * @param {Object} initialValues - Initial form values
 * @param {Function} validate - Validation function that returns errors object
 */
function useFormValidation(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback(
    (e) => {
      const { name, value, type, checked } = e.target;
      setValues((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));

      // Clear error when field is modified
      if (errors[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: '',
        }));
      }
    },
    [errors]
  );

  const handleBlur = useCallback(
    (e) => {
      const { name } = e.target;
      setTouched((prev) => ({
        ...prev,
        [name]: true,
      }));

      // Validate single field on blur
      if (validate) {
        const fieldErrors = validate({ [name]: values[name] });
        if (fieldErrors[name]) {
          setErrors((prev) => ({
            ...prev,
            [name]: fieldErrors[name],
          }));
        }
      }
    },
    [values, validate]
  );

  const handleSubmit = useCallback(
    (onSubmit) => (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      const validationErrors = validate ? validate(values) : {};
      setErrors(validationErrors);

      // Mark all fields as touched
      const allTouched = Object.keys(values).reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {});
      setTouched(allTouched);

      if (Object.keys(validationErrors).length === 0) {
        onSubmit(values);
      }

      setIsSubmitting(false);
    },
    [values, validate]
  );

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  const setFieldValue = useCallback((name, value) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    setFieldValue,
    setErrors,
  };
}

export default useFormValidation;
