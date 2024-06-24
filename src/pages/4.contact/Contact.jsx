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
      setFormValues({ name: '', email: '', message: ''})
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-ocean to-sunset flex flex-col items-center justify-center font-funky">
      {/* Header section */}
      <header className="w-full py-12">
        <h1 className="text-5xl text-black text-center">Contact Me Today!</h1>
      </header>
      
      {/* Main content section */}
      <main className="flex-grow flex flex-col items-center pt-8">
        <p className="text-4xl text-black">Get in touch:</p>
        
        {/* Contact form */}
        <form className="flex flex-col items-center space-y-4 mt-4" onSubmit={handleSubmit}>
          {/* Name input field */}
          <input
            type="text"
            placeholder="Name"
            name="name"
            className={`p-2 border ${errors.name ? 'border-red-500' : 'border-gray-400'} rounded w-96`}
            value={formValues.name}
            onChange={handleChange}
          />
          {/* Error message for name */}
          {errors.name && <p className="text-red-500">{errors.name}</p>}
          
          {/* Email input field */}
          <input
            type="email"
            placeholder="Email"
            name="email"
            className={`p-2 border ${errors.email ? 'border-red-500' : 'border-gray-400'} rounded w-96`}
            value={formValues.email}
            onChange={handleChange}
          />
          {/* Error message for email */}
          {errors.email && <p className="text-red-500">{errors.email}</p>}
          
          {/* Message textarea */}
          <textarea
            placeholder="Message"
            name="message"
            className={`p-2 border ${errors.message ? 'border-red-500' : 'border-gray-400'} rounded w-full`}
            rows="4"
            value={formValues.message}
            onChange={handleChange}
          ></textarea>
          {/* Error message for message */}
          {errors.message && <p className="text-red-500">{errors.message}</p>}
          
          {/* Submit button */}
          <button
            type="submit"
            className="bg-kelp text-sunset p-2 rounded w-32 text-2xl hover:bg-sky-900"
          >
            Send
          </button>
        </form>
      </main>
    </div>
  );
}

export default Contact;