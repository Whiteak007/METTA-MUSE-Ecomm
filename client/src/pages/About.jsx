// src/pages/About.jsx

import React from 'react';
import { FaTshirt, FaLaptop, FaGem, FaBook, FaShippingFast, FaLock, FaUndo, FaHeadset, FaStar } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            About Metta Muse
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Your one-stop destination for curated fashion, cutting-edge electronics, and everything in between.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose lg:prose-lg max-w-none">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Story</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Metta Muse began with a simple idea: to create a seamless and trustworthy online marketplace that connects passionate sellers with discerning buyers. We saw a world full of incredible products but a gap in a platform that truly prioritized quality, variety, and customer experience.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Founded in 2024, our mission is to empower creators and provide customers with a diverse collection of goods, from the latest fashion trends to must-have gadgets. We believe shopping should be more than a transaction; it should be an experience.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop" 
                alt="Diverse products on display"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What We Offer</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A curated selection of products across various categories to suit your lifestyle.
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <FaTshirt className="mx-auto text-4xl text-blue-500" />
              <h3 className="mt-4 font-semibold text-lg">Clothing</h3>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <FaLaptop className="mx-auto text-4xl text-blue-500" />
              <h3 className="mt-4 font-semibold text-lg">Electronics</h3>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <FaGem className="mx-auto text-4xl text-blue-500" />
              <h3 className="mt-4 font-semibold text-lg">Jewelry</h3>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <FaBook className="mx-auto text-4xl text-blue-500" />
              <h3 className="mt-4 font-semibold text-lg">Books</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Choose Us?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">We are dedicated to providing you with the best online shopping experience.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <FaShippingFast className="mx-auto text-5xl text-gray-700 mb-4" />
              <h3 className="font-bold text-xl">Free Delivery</h3>
              <p className="text-gray-600 mt-2">Enjoy free and fast delivery on all your orders, no minimum purchase required.</p>
            </div>
            <div className="p-4">
              <FaLock className="mx-auto text-5xl text-gray-700 mb-4" />
              <h3 className="font-bold text-xl">Secure Payments</h3>
              <p className="text-gray-600 mt-2">Your payments are processed securely with industry-standard encryption.</p>
            </div>
            <div className="p-4">
              <FaUndo className="mx-auto text-5xl text-gray-700 mb-4" />
              <h3 className="font-bold text-xl">Easy Returns</h3>
              <p className="text-gray-600 mt-2">Not satisfied? We offer a hassle-free return policy within 30 days.</p>
            </div>
            <div className="p-4">
              <FaHeadset className="mx-auto text-5xl text-gray-700 mb-4" />
              <h3 className="font-bold text-xl">24/7 Support</h3>
              <p className="text-gray-600 mt-2">Our support team is available around the clock to assist you with any queries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet the Founder</h2>
          <div className="mt-12 flex flex-col items-center">
            <div className="max-w-xs text-center">
              <img
                src="https://coderak-3-d-portfolio.vercel.app/assets/profile2-D54Vg5CP.png"
                alt="Founder"
                className="w-40 h-40 rounded-full mx-auto shadow-lg object-cover"
              />
              <h3 className="mt-6 text-2xl font-semibold">Ankit Kumar</h3>
              <p className="text-gray-500">Founder & CEO</p>
              <p className="mt-2 text-gray-600">"We are committed to building a platform that brings joy and value to both our customers and sellers."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center tracking-tight text-gray-900 sm:text-4xl">What Our Customers Say</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex text-yellow-500">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p className="mt-4 italic text-gray-600">"An amazing selection of products and incredibly fast shipping. Metta Muse is my new go-to for online shopping!"</p>
              <p className="mt-4 font-semibold">- Sarah J.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex text-yellow-500">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p className="mt-4 italic text-gray-600">"The quality of the electronics I bought exceeded my expectations. The customer support was also very helpful."</p>
              <p className="mt-4 font-semibold">- Michael B.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex text-yellow-500">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p className="mt-4 italic text-gray-600">"I love the unique jewelry pieces available here. The entire process was smooth and secure."</p>
              <p className="mt-4 font-semibold">- Emily R.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-800 text-white lg:mb-[-40px]">
        <div className="container mx-auto px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Explore?</h2>
          <p className="mt-4 text-lg text-gray-300">Dive into our collection and find what you're looking for.</p>
          <div className="mt-8">
            <a 
              href="/" 
              className="inline-block bg-white text-gray-800 font-bold py-3 px-8 rounded-md hover:bg-gray-200 transition-colors duration-300"
            >
              Start Shopping
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;