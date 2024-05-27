import React, { useState, useEffect, useRef } from 'react';

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const validationOptionsRef = useRef({}); // Store validation options using a ref

  const validate = (options, name, value, allValues) => {
    let error = [];

    // Required field validation
    if (options.required && !value) {
      error.push({ type: 'required', msg: 'This field is required.' });
    } else if (options.pattern && !options.pattern.test(value)) {
      // Pattern validation
      error.push({ type: 'pattern', msg: 'Invalid format.' });
    } else if (options.email && !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(value)) {
      // Email validation
      error.push({ type: 'email', msg: 'Invalid Email ID.' });
    } else if (options.minLength && value.length < options.minLength) {
      // Length validation
      error.push({ type: 'minLength', msg: `Minimum length is ${options.minLength} characters.` });
    } else if (options.maxLength && value.length > options.maxLength) {
      error.push({ type: 'maxLength', msg: `Maximum length is ${options.maxLength} characters.` });
    } else if (options.min !== undefined && value < options.min) {
      // Range validation (for numbers)
      error.push({ type: 'min', msg: `Value must be at least ${options.min}.` });
    } else if (options.max !== undefined && value > options.max) {
      error.push({ type: 'max', msg: `Value must be at most ${options.max}.` });
    } else if (options.match && value !== allValues[options.match]) {
      // Value matching validation (e.g., password confirmation)
      error.push({ type: 'match', msg: 'Values do not match.' });
    } else if (options.type) {
      // Type validation
      const type = options.type;
      const isValidType =
        (type === 'number' && !isNaN(value)) ||
        (type === 'date' && !isNaN(Date.parse(value)));

      if (!isValidType) {
        error.push({ type: 'type', msg: `Invalid ${type} format.` });
      }
    } else if (options.custom && typeof options.custom === 'function') {
      // Custom validation function
      const customError = options.custom(value, allValues);
      if (customError) {
        error.push({ type: 'custom', msg: customError });
      }
    }

    // Set the first error only
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error.length > 0 ? error[0] : null,
    }));

    return error.length > 0 ? error[0] : null; // Return the first error if exists
  };

  const addField = (name, options = {}) => {
    useEffect(() => {
      // Store validation options for each field
      validationOptionsRef.current[name] = options;
    }, [name, options]);

    return {
      name,
      className: errors[name] && 'inValid' ,
      onChange: (e) => {

        const { name, value, type, checked } = e.target;
        let newValue = value;

        if (type === 'checkbox' ) {
          newValue = checked;
        } else if (type === 'radio' && checked) {
          newValue = value;
        }
        setValues((prevValues) => ({
          ...prevValues,
          [name]: newValue,
        }));

        validate(options, name, newValue, values); // Pass values here
      },
      onBlur: (e) => {
        const { name, value, type, checked } = e.target;
        let newValue = value;

        if (type === 'checkbox' ) {
          newValue = checked;
        } else if (type === 'radio' && checked) {
          newValue = value;
        }
        setValues((prevValues) => ({
          ...prevValues,
          [name]: newValue,
        }));

        validate(options, name, newValue, values); // Pass values here
      },
    };
  };



  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    const newErrors = {};
    let hasErrors = false;

    // Validate all fields using stored validation options
    Object.keys(values).forEach((name) => {
      const options = validationOptionsRef.current[name] || {};
      const error = validate(options, name, values[name], values); // Pass the correct options
      if (error) {
        newErrors[name] = error;
        hasErrors = true;
      }
    });

    setErrors(newErrors);

    if (!hasErrors) {
      callback(values);
    } else {
      console.log('Form validation failed:', newErrors);
      return newErrors; // Return errors if validation fails
    }
  };

  return {
    addField,
    handleSubmit,
    errors,
  };
};

export default useForm;

