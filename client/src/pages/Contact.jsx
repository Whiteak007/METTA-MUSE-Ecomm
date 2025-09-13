import React, { useState, useEffect } from 'react';
import { FaGithub , FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // In a real app, you would send the data to a server here.
      console.log('Form Submitted:', formData);
      setShowModal(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };
  const scrollToTop = () => {
  window.scrollTo({
      top: 1275,
      behavior: 'smooth',
  });
};

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => setShowModal(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="bg-gray-50 font-sans">
      {/* 1. Hero Section */}
      <section className="relative bg-gray-800 text-white h-[40vh] flex items-center justify-center text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Get in Touch</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
            We’re here to help you with orders, returns, or any questions you may have.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* 2. Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form onSubmit={submitHandler} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`mt-1 block w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-3 px-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-3 px-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`mt-1 block w-full border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-3 px-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                />
                {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`mt-1 block w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-3 px-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-gray-600 text-white font-bold py-3 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* 3. Contact Information Section */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <FiMapPin className="text-blue-600 text-2xl mt-1"/>
                  <div>
                    <h3 className="text-lg font-semibold">Address</h3>
                    <p className="text-gray-600">123 E-Shop Lane, New Delhi, 110001, India</p>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <FiPhone className="text-blue-600 text-2xl mt-1"/>
                  <div>
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p className="text-gray-600">+91 7520622129</p>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <FiMail className="text-blue-600 text-2xl mt-1"/>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-gray-600">ankitbhagata@gmail.com</p>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <FiClock className="text-blue-600 text-2xl mt-1"/>
                  <div>
                    <h3 className="text-lg font-semibold">Working Hours</h3>
                    <p className="text-gray-600">Mon–Sat: 9am – 8pm IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Social Media Links */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="https://github.com/Whiteak007" className="text-gray-500 hover:text-gray-800 transition-colors"><FaGithub size={24} /></a>
                <a href="https://www.linkedin.com/in/ankit-bhagata/" className="text-gray-500 hover:text-blue-700 transition-colors"><FaLinkedin size={24} /></a>
                <a href="https://www.instagram.com/coderak_/" className="text-gray-500 hover:text-pink-500 transition-colors"><FaInstagram size={24} /></a>
                <a href="https://x.com/AnkitKumar50657" className="text-gray-500 hover:text-gray-800 transition-colors"><FaTwitter size={24} /></a>
              </div>
            </div>

            {/* 6. FAQ Shortcut */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-lg font-semibold text-gray-800">Looking for quick answers?</h3>
                <p className="text-gray-600 mt-1">
                    Many common questions are already answered on our FAQ page.
                    <NavLink to="/skills" onClick={scrollToTop} className="text-blue-600 font-semibold hover:underline ml-2">Check it out!</NavLink>
                </p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-2xl text-center max-w-sm mx-4">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-800">Message Sent!</h2>
            <p className="text-gray-600 mt-2">Thank you for reaching out. We'll get back to you shortly.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
