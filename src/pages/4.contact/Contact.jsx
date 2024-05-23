import React, { useState } from 'react';

function Contact() {
  // State to hold form values and error messages
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  // Function to update state when input changes
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    // Clear error messages when the user starts correcting
    if (!!errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  // Function to validate form and set error messages
  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

  //Regex for email validation
  const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    if (!formValues.name) {
      isValid = false;
      newErrors.name = 'Name is required';
    }
    if (!formValues.email) {
      isValid = false;
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formValues.email)) {
      isValid = false;
      newErrors.email = 'Please enter a valid email';
    }
    if (!formValues.message) {
      isValid = false;
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return isValid;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Process the form submission here
      console.log('Form data:', formValues);
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-ocean to-sunset flex flex-col items-center justify-center font-funky">
      <header className="w-full py-12">
        <h1 className="text-5xl text-white text-center">Contact Me</h1>
      </header>
      <main className="flex-grow flex flex-col items-center pt-12">
        <p className="text-4xl text-sand">Get in touch:</p>
        <form className="flex flex-col items-center space-y-4 mt-4" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="name"
                 className={`p-2 border ${errors.name ? 'border-red-500' : 'border-gray-400'} rounded w-96`}
                 value={formValues.name} onChange={handleChange} />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
          <input type="email" placeholder="Email" name="email"
                 className={`p-2 border ${errors.email ? 'border-red-500' : 'border-gray-400'} rounded w-96`}
                 value={formValues.email} onChange={handleChange} />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
          <textarea placeholder="Message" name="message"
                    className={`p-2 border ${errors.message ? 'border-red-500' : 'border-gray-400'} rounded w-full`}
                    rows="4" value={formValues.message} onChange={handleChange}></textarea>
          {errors.message && <p className="text-red-500">{errors.message}</p>}
          <button type="submit" className="bg-kelp text-sunset p-2 rounded w-32 text-2xl hover:bg-sky-900">Send</button>
        </form>
      </main>
    </div>
  );
}

export default Contact;
