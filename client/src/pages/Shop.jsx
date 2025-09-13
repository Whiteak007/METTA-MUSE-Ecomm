import React, { useState, useEffect } from 'react';
import FilterSidebar from '../components/FilterSidebar';
import SortDropDown from '../components/SortDropDown';
import ProductGrid from '../components/ProductGrid';
import ProductModal from '../components/ProductModal';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ category: [] });
  const [sort, setSort] = useState('recommended');
  const [showSidebar, setShowSidebar] = useState(window.innerWidth >= 1024);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        
        if (currentUser) {
          // If user is logged in, fetch from our protected API
          const response = await api.get('/products');
          setProducts(response.data);
        } else {
          // If user is not logged in, fetch directly from FakeStore API
          const response = await fetch('https://fakestoreapi.com/products');
          const data = await response.json();
          setProducts(data);
        }
      } catch (err) {
        setError('Failed to load products. Please try again.');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
    
    const handleResize = () => {
      setShowSidebar(window.innerWidth >= 1024);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentUser]);

  const filteredProducts = products
    .filter((p) => {
      return (
        filters.category.length === 0 || filters.category.includes(p.category)
      );
    })
    .sort((a, b) => {
      if (sort === 'high') return b.price - a.price;
      if (sort === 'low') return a.price - b.price;
      if (sort === 'popular') return b.rating.rate - a.rating.rate;
      return 0;
    });

  if (loading) {
    return (
    <div className="container mx-auto py-20 text-center">
      <ClipLoader size={50} color="#6366F1" loading={true} />
      <p className="mt-4 text-gray-600 text-sm">Loading products...</p>
    </div>
  );
  }

  if (error) {
    return (
      <div className="container mx-auto py-20 text-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto border-t border-gray-200">
      <div className="flex justify-between items-center py-4 text-sm">
        <div className="flex items-center space-x-4">
          <span className="font-semibold">{filteredProducts.length} ITEMS</span>
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="font-semibold uppercase underline"
          >
            {showSidebar ? 'HIDE FILTER' : 'SHOW FILTER'}
          </button>
        </div>
        <SortDropDown sort={sort} setSort={setSort} />
      </div>
      
      {!currentUser && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                Sign in to see prices
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  <Link to="/login" className="font-medium underline text-yellow-800 hover:text-yellow-900">
                    Sign in
                  </Link>{' '}
                  or{' '}
                  <Link to="/signup" className="font-medium underline text-yellow-800 hover:text-yellow-900">
                    create an account
                  </Link>{' '}
                  to view product prices and details.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <main className="flex flex-col lg:flex-row">
        {showSidebar && (
          <div className="w-full lg:w-1/4 xl:w-1/5 lg:pr-8">
            <FilterSidebar 
              filters={filters} 
              setFilters={setFilters} 
              products={products} 
            />
          </div>
        )}
        <div className="flex-1">
          <ProductGrid 
            products={filteredProducts} 
            onProductClick={setSelectedProduct} 
          />
        </div>
      </main>

      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
};

export default Shop;