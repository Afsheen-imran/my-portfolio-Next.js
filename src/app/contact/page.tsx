"use client";

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    // Implement email sending logic here
  };

  return (
    <div 
      id="Contact" 
      className="min-h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('https://i.pinimg.com/originals/c6/df/a2/c6dfa22150790c670c988c5196f6ba0e.gif')" }}
    >
      <section className="text-gray-600 body-font relative max-h-fit">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.9437246759503!2d67.01384657462954!3d24.865771545046336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e16a1def19d%3A0xdd161110d2e4e8a6!2sHassan%20Ali%20Hothi%20Market!5e0!3m2!1sen!2s!4v1685170258398!5m2!1sen!2s"
              style={{ filter: "contrast(1.2) opacity(0.4)" }}
            />
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-rose-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">Gulistan-e-Johar, Karachi.</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-rose-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-blue-500 leading-relaxed">afsheen6441@gmail.com</a>
                <h2 className="title-font font-semibold text-rose-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">03366861922</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium ml-5 text-rose-900">Contact</h2>
            <p className="leading-relaxed m-3 text-rose-600">Feel free to contact</p>
            <form onSubmit={sendEmail}>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-rose-600 m-3">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-blue-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 text-base outline-none text-rose-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-rose-600 m-3">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-rose-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-rose-600 m-3">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-rose-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button type="submit" className="text-white bg-blue-500 border-0 py-2 px-3 focus:outline-none hover:bg-red-500 rounded text-lg ml-20">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
