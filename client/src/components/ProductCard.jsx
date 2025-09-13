import React from 'react';
import { useAuth } from '../context/AuthContext';

const HeartIcon = () => (
    <svg className="h-6 w-6 text-gray-400 hover:text-red-500 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
    </svg>
);

const ProductCard = ({ product, onClick }) => {
  const { currentUser } = useAuth();

  return (
    <div
      onClick={() => onClick(product)}
      className="group relative cursor-pointer"
    >
      <div className="relative p-3 w-full h-60 bg-gray-100 flex items-center justify-center">
        <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300" 
        />
         <div className="absolute top-2 right-2">
            <HeartIcon />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider truncate">
          {product.title}
        </h3>
        {currentUser ? (
          <p className="mt-1 text-sm font-semibold text-gray-900">
            ${product.price}
          </p>
        ) : (
          <p className="mt-1 text-sm text-gray-500">
            <span className="font-semibold underline">Sign in</span> or Create an account to see pricing
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;