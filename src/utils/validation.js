export const validateEmail = (value) => {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
};

export const validatePassword = (value) => {
  let error;
  if (!value) {
    error = 'Required';
  } else if (value.length < 6) {
    error = 'Password can not be less 6 characters';
  }
  return error;
};

export const isPasswordEqual = (password, values) => {
  let error;
  if (!password) {
    error = 'Required';
  } else if (password !== values.password) {
    error = 'Password mismatch';
  }
  return error;
};

export const valideteDate = (value) => {
  let error;
  if (!value) {
    error = 'Required';
  } else if (value.length < 2) {
    error = 'Incorrect format';
  }
  return error;
};

export const valideteYear = (value) => {
  let error;
  if (!value) {
    error = 'Required';
  } else if (value.length < 4) {
    error = 'Incorrect format';
  }
  return error;
};

export const validationPhone = (phone) => {
  const regexpE164Phone = /^\+(\d{1,3})(\d{9,12})$/;

  return regexpE164Phone.test(phone);
};
