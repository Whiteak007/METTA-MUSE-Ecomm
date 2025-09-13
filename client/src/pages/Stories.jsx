// src/pages/Stories.jsx

import React from 'react';
import { FaStar, FaUsers, FaBoxOpen, FaStore, FaCity } from 'react-icons/fa';
import CountUp from 'react-countup';

// --- Sample Data ---
const customerStories = [
  {
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop',
    name: 'Ramesh K.',
    location: 'Mumbai, IN',
    category: 'Electronics',
    story: 'I bought a laptop stand from this platform, and it has massively improved my work-from-home setup. The delivery was fast, and the support team was excellent!',
    rating: 5,
  },
  {
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
    name: 'Priya S.',
    location: 'Delhi, IN',
    category: 'Fashion',
    story: 'The collection of dresses is just stunning. I found the perfect outfit for a wedding, and the quality was far better than I expected for the price. Highly recommended.',
    rating: 5,
  },
  {
    image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop',
    name: 'Amit V.',
    location: 'Bengaluru, IN',
    category: 'Books',
    story: 'As an avid reader, finding a reliable source for both new and old books is a dream. This platform delivers on its promise of variety and quality.',
    rating: 4,
  },
];

const sellerStories = [
  {
    shopImage: 'https://tse3.mm.bing.net/th/id/OIP.L36IxBdg8Cs1yFzRkzhxiQHaHa?r=0&w=626&h=626&rs=1&pid=ImgDetMain&o=7&rm=3',
    avatar: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=1885&auto=format&fit=crop',
    name: 'Anjali',
    shopName: 'Jewels by Anjali',
    story: 'I started selling my handmade jewelry here in 2022 with just a few items. Today, I’ve reached thousands of happy customers across the country. This platform gave me the tools and visibility to turn my passion into a successful brand.',
  },
];

// --- Reusable Components ---
const StarRating = ({ rating, className = '' }) => (
  <div className={`flex items-center text-yellow-500 ${className}`}>
    {[...Array(5)].map((_, index) => (
      <FaStar key={index} className={index < rating ? 'text-yellow-400' : 'text-gray-300'} />
    ))}
  </div>
);

const CustomerStoryCard = ({ image, name, location, category, story, rating }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300">
    <img src={image} alt={name} className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-gray-100" />
    <p className="text-gray-500 text-sm font-semibold">{location}</p>
    <h3 className="text-xl font-bold text-gray-900 mt-1">{name}</h3>
    <span className="my-3 px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">{category}</span>
    <StarRating rating={rating} />
    <blockquote className="mt-4 text-gray-600 italic flex-grow">"{story}"</blockquote>
  </div>
);


const Stories = () => {
  return (
    <div className="bg-gray-50 font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative bg-gray-900 text-white h-[50vh] flex items-center justify-center text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1887&auto=format&fit=crop')" }}
        />
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Inspiring Stories from Our Community</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
            Discover how people are finding joy, growth, and success with our platform.
          </p>
        </div>
      </section>

      {/* 2. Intro Paragraph */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-4xl">
          <p className="text-lg text-gray-700 leading-relaxed">
            Every customer and seller has a journey. Some found their favorite fashion pieces, some launched their small businesses, and some discovered books that changed their lives. These are their voices, and they form the vibrant heart of our community.
          </p>
        </div>
      </section>
      
      {/* 3. Customer Stories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">From Our Customers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customerStories.map((story, index) => <CustomerStoryCard key={index} {...story} />)}
          </div>
        </div>
      </section>

      {/* 4. Seller Stories Section */}
      <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">From Our Sellers</h2>
              {sellerStories.map((seller, index) => (
                  <div key={index} className="max-w-5xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden md:flex">
                      <div className="md:w-1/2">
                          <img className="h-64 w-full object-cover md:h-full" src={seller.shopImage} alt={seller.shopName} />
                      </div>
                      <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                          <div className="flex items-center mb-4">
                              <img src={seller.avatar} alt={seller.name} className="w-16 h-16 rounded-full object-cover mr-4"/>
                              <div>
                                  <h3 className="text-2xl font-bold text-gray-900">{seller.name}</h3>
                                  <p className="text-blue-600 font-semibold">{seller.shopName}</p>
                              </div>
                          </div>
                          <blockquote className="text-gray-700 text-lg leading-relaxed">"{seller.story}"</blockquote>
                      </div>
                  </div>
              ))}
          </div>
      </section>

      {/* 5. Impact Numbers (Stats Section) */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
                <FaUsers className="mx-auto text-5xl text-blue-400 mb-2"/>
                <p className="text-4xl font-extrabold"><CountUp end={50000} duration={3} separator="," />+</p>
                <p className="text-gray-300">Happy Customers</p>
            </div>
            <div className="p-4">
                <FaBoxOpen className="mx-auto text-5xl text-blue-400 mb-2"/>
                <p className="text-4xl font-extrabold"><CountUp end={10000} duration={3} separator="," />+</p>
                <p className="text-gray-300">Successful Deliveries</p>
            </div>
            <div className="p-4">
                <FaStore className="mx-auto text-5xl text-blue-400 mb-2"/>
                <p className="text-4xl font-extrabold"><CountUp end={2000} duration={3} separator="," />+</p>
                <p className="text-gray-300">Active Sellers</p>
            </div>
             <div className="p-4">
                <FaCity className="mx-auto text-5xl text-blue-400 mb-2"/>
                <p className="text-4xl font-extrabold"><CountUp end={100} duration={3} />+</p>
                <p className="text-gray-300">Cities Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Call-to-Action (CTA) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-3xl font-bold text-gray-800">Want to be our next success story?</h2>
           <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Join a community of passionate buyers and sellers. Start your journey with us today.</p>
           <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
             <a href="/shop" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-700 transition-colors duration-300">
              Start Shopping
             </a>
             <a href="/sell" className="inline-block bg-gray-800 text-white font-bold py-3 px-8 rounded-md hover:bg-gray-900 transition-colors duration-300">
              Become a Seller
             </a>
           </div>
        </div>
      </section>

    </div>
  );
};

export default Stories;