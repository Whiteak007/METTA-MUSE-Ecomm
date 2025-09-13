import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useAuth } from '../context/AuthContext';

const ProductModal = ({ product, onClose }) => {
  const { currentUser } = useAuth();
  
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-gray-100 bg-opacity-95 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl"
        >
          <AiOutlineClose />
        </button>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain rounded mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
        
        {currentUser ? (
          <>
            <p className="text-gray-700 mb-2">${product.price}</p>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <p className="text-sm text-gray-600">Category: {product.category}</p>
            <p className="text-sm text-gray-600">Rating: {product.rating.rate}⭐ ({product.rating.count} reviews)</p>
          </>
        ) : (
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="text-sm text-gray-600 mb-3">
              <span className="font-semibold">Sign in</span> or Create an account to see pricing and details
            </p>
            <div className="flex space-x-3">
              <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-800">
                Sign In
              </button>
              <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-800">
                Create Account
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductModal;