import React, { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ProductGrid from '../components/ProductGrid';

const Home = () => {
    const { currentUser } = useAuth();
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const fetchFeaturedProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products?limit=4');
                const data = await response.json();
                setFeaturedProducts(data);
            } catch (error) {
                console.error('Error fetching featured products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchFeaturedProducts();
    }, []);

    return (
        <>
            <Hero />
            <section className="bg-white font-sans py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-normal text-gray-800 uppercase tracking-widest mb-8 text-center">
                        Featured Products
                    </h2>

                    {loading ? (
                        <div className="flex justify-center items-center py-12">
                            <div className="text-center">
                                <ClipLoader size={40} color="#6366F1" loading={true} />
                                <p className="mt-4 text-gray-600 text-sm">Loading featured products...</p>
                            </div>
                        </div>
                    ) : (
                        <div className="mb-12">
                            <ProductGrid
                                products={featuredProducts}
                                onProductClick={() => { }}
                            />
                        </div>
                    )}

                    {currentUser ? (
                        <div className="text-center">
                            <Link
                                onClick={scrollToTop}
                                to="/shop"
                                className="inline-block bg-black text-white px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-gray-800 transition-colors"
                            >
                                View All Products
                            </Link>
                        </div>
                    ) : (
                        <div className="text-center">
                            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                                Sign in to explore our exclusive collection of products and see pricing
                            </p>
                            <Link
                                onClick={scrollToTop}
                                to="/login"
                                className="inline-block bg-black text-white px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-gray-800 transition-colors mr-4"
                            >
                                Sign In
                            </Link>
                            <Link
                                onClick={scrollToTop}
                                to="/signup"
                                className="inline-block border border-black text-black px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Create Account
                            </Link>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default Home;
