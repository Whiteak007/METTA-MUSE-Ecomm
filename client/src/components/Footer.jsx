import React from 'react';

// SVG Icon for the US Flag
const USFlagIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
        <g fill="none">
            <path fill="#333D4B" d="M0 0h512v512H0z"/>
            <path fill="#FFF" d="M0 55.6h512v39.7H0zm0 79.4h512v39.7H0zm0 79.4h512v39.7H0zm0 79.4h512v39.7H0z"/>
            <path fill="#0052B4" d="M0 0h256v278H0z"/>
            <g fill="#FFF">
                <path d="m51.2 39.7 7.7 23.9 25-1.5-17.6 15.4 4.8 24.6L51.2 86.8l-20 15.4 4.8-24.6-17.6-15.4 25 1.5zM128 39.7l7.8 23.9 25-1.5-17.6 15.4 4.8 24.6-20-15.4-20 15.4 4.8-24.6-17.6-15.4 25 1.5zM204.8 39.7l7.7 23.9 25-1.5-17.6 15.4 4.8 24.6-20-15.4-20 15.4 4.8-24.6-17.6-15.4 25 1.5zM89.6 94.6l7.7 23.9 25-1.5-17.6 15.4 4.8 24.6-20-15.4-20 15.4 4.8-24.6-17.6-15.4 25 1.5zM166.4 94.6l7.7 23.9 25-1.5-17.6 15.4 4.8 24.6-20-15.4-20 15.4 4.8-24.6-17.6-15.4 25 1.5zM51.2 149.5l7.7 23.9 25-1.5-17.6 15.4 4.8 24.6L51.2 202l-20 15.4 4.8-24.6-17.6-15.4 25 1.5zM128 149.5l7.8 23.9 25-1.5-17.6 15.4 4.8 24.6-20-15.4-20 15.4 4.8-24.6-17.6-15.4 25 1.5zM204.8 149.5l7.7 23.9 25-1.5-17.6 15.4 4.8 24.6-20-15.4-20 15.4 4.8-24.6-17.6-15.4 25 1.5zM89.6 204.4l7.7 23.9 25-1.5-17.6 15.4 4.8 24.6-20-15.4-20 15.4 4.8-24.6-17.6-15.4 25 1.5zM166.4 204.4l7.7 23.9 25-1.5-17.6 15.4 4.8 24.6-20-15.4-20 15.4 4.8-24.6-17.6-15.4 25 1.5z"/>
            </g>
        </g>
    </svg>
);


// Social and Payment Icons as SVG components for better control and performance
const InstagramIcon = () => (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const LinkedinIcon = () => (
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

const GPayIcon = () => (
    <svg className="w-12 h-8" viewBox="0 0 53 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.541 12.33L3.72 10.14H6.51L5.331 12.33H2.541ZM8.01 6.87C7.3 6.87 6.64 7.23 6.31 7.82L3.92 12.19C3.82 12.37 3.82 12.58 3.92 12.76L5.27 15.22C5.59 15.82 6.25 16.17 6.95 16.17H11.53C12.23 16.17 12.89 15.82 13.21 15.22L14.56 12.76C14.66 12.58 14.66 12.37 14.56 12.19L12.17 7.82C11.84 7.23 11.18 6.87 10.48 6.87H8.01Z" fill="#5F6368" />
        <path d="M12.44 3.19C11.82 2.3 10.87 1.75 9.74 1.75C8.3 1.75 7.06 2.65 6.55 3.95L3.9 8.76L6.34 7.82C6.67 7.23 7.33 6.87 8.03 6.87H10.51C11.21 6.87 11.87 7.23 12.2 7.82L13.1 9.47L12.44 3.19Z" fill="#EA4335" />
        <path d="M15.48 8.76L12.84 3.95C12.33 2.65 11.09 1.75 9.65 1.75C8.52 1.75 7.57 2.3 6.95 3.19L6.29 9.47L7.19 7.82C7.52 7.23 8.18 6.87 8.88 6.87H11.36C12.06 6.87 12.72 7.23 13.05 7.82L15.48 12.19C15.58 12.37 15.58 12.58 15.48 12.76L14.86 13.9L15.48 8.76Z" fill="#4285F4" />
        <path d="M18.17 12.33L19.35 10.14H22.14L20.96 12.33H18.17ZM23.64 6.87C22.93 6.87 22.27 7.23 21.94 7.82L19.55 12.19C19.45 12.37 19.45 12.58 19.55 12.76L20.9 15.22C21.22 15.82 21.88 16.17 22.58 16.17H27.16C27.86 16.17 28.52 15.82 28.84 15.22L30.19 12.76C30.29 12.58 30.29 12.37 30.19 12.19L27.8 7.82C27.47 7.23 26.81 6.87 26.11 6.87H23.64Z" fill="#FBBC04" />
        <path d="M30.69 8.76L28.05 3.95C27.54 2.65 26.3 1.75 24.86 1.75C23.73 1.75 22.78 2.3 22.16 3.19L21.5 9.47L22.4 7.82C22.73 7.23 23.39 6.87 24.09 6.87H26.57C27.27 6.87 27.93 7.23 28.26 7.82L30.69 12.19C30.79 12.37 30.79 12.58 30.69 12.76L30.07 13.9L30.69 8.76Z" fill="#34A853" />
        <path d="M42.41 6.94C41.34 6.94 40.54 7.74 40.54 8.77C40.54 9.8 41.34 10.6 42.41 10.6C43.48 10.6 44.28 9.8 44.28 8.77C44.28 7.74 43.48 6.94 42.41 6.94ZM42.41 12.63C40.63 12.63 39.26 11.23 39.26 9.45C39.26 7.67 40.63 6.27 42.41 6.27C44.19 6.27 45.56 7.67 45.56 9.45C45.56 11.23 44.19 12.63 42.41 12.63Z" fill="#5F6368" />
        <path d="M48.86 6.94C47.79 6.94 46.99 7.74 46.99 8.77C46.99 9.8 47.79 10.6 48.86 10.6C49.93 10.6 50.73 9.8 50.73 8.77C50.73 7.74 49.93 6.94 48.86 6.94ZM48.86 12.63C47.08 12.63 45.71 11.23 45.71 9.45C45.71 7.67 47.08 6.27 48.86 6.27C50.64 6.27 52 7.67 52 9.45C52 11.23 50.64 12.63 48.86 12.63Z" fill="#5F6368" />
        <path d="M36.19 12.42H37.49V7.15H36.19V12.42Z" fill="#5F6368" />
    </svg>
);

const MasterCardIcon = () => (
    <svg className="w-12 h-8" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pi-mastercard">
        <title id="pi-mastercard">Mastercard</title>
        <circle cx="15" cy="12" r="7" fill="#EB001B"></circle>
        <circle cx="23" cy="12" r="7" fill="#F79E1B"></circle>
        <path d="M20 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z" fill="#FF5F00"></path>
    </svg>
);

const PaypalIcon = () => (
    <svg className="w-12 h-8" viewBox="0 0 100 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pi-paypal">
        <title id="pi-paypal">PayPal</title>
        <path fill="#003087" d="M26.4 11.6c-.2 1.1-1.3 1.9-2.6 1.9H19c-.5 0-.8.3-.9.7L17.1 19c-.1.4-.4.6-.8.6h-3.1c-.5 0-.9-.4-.8-1l2.9-16.7c.1-.5.5-.8 1-.8h5.3c3.4 0 5.7 2.3 5 5.9zm-5.7-3.4h-2.1l1.2-6.8h.9c1.2 0 2.2 1 2 2.3-.2 1.3-1.1 2.2-2 2.5z"></path>
        <path fill="#009cde" d="M72.3 2.1c.1-.5.5-.8 1-.8h5.3c1.6 0 2.9 1.3 2.8 2.9-.1 1.1-.9 1.9-2 1.9h-1.9c-.5 0-.8.3-.9.7l-3.3 12.1c-.1.4-.4.6-.8.6h-3.1c-.5 0-.9-.4-.8-1L72.3 2.1z"></path>
        <path fill="#003087" d="M68.7 1.2h-4.3c-.5 0-.9.4-.8 1l2.9 16.7c.1.5.5.8 1 .8h3.1c.5 0 .9-.4.9-.8l.2-1.3c.2-1.1 1.3-1.9 2.6-1.9h2.3c3.4 0 5.7-2.3 5-5.9-.6-3.3-3.3-5.4-6.3-5.4h-4.5c-.5 0-.8.3-.9.7L68.7 1.2zm2.8 9.2c.9-.3 1.5-1.1 1.6-2.1.2-1.3-.8-2.5-2-2.5h-1.3l-1.1 6.4h1.9c.9 0 1.8-.7 1.9-1.8z"></path>
        <path fill="#003087" d="M89.2 1.2h-4.3c-.5 0-.9.4-.8 1l2.9 16.7c.1.5.5.8 1 .8h3.1c.5 0 .9-.4.9-.8l.2-1.3c.2-1.1 1.3-1.9 2.6-1.9h2.3c3.4 0 5.7-2.3 5-5.9-.6-3.3-3.3-5.4-6.3-5.4h-4.5c-.5 0-.8.3-.9.7L89.2 1.2zm2.8 9.2c.9-.3 1.5-1.1 1.6-2.1.2-1.3-.8-2.5-2-2.5h-1.3l-1.1 6.4h1.9c.9 0 1.8-.7 1.9-1.8z"></path>
        <path fill="#003087" d="M47.4 1.2h-4.3c-.5 0-.9.4-.8 1l2.9 16.7c.1.5.5.8 1 .8h3.1c.5 0 .9-.4.9-.8l.2-1.3c.2-1.1 1.3-1.9 2.6-1.9h2.3c3.4 0 5.7-2.3 5-5.9-.6-3.3-3.3-5.4-6.3-5.4h-4.5c-.5 0-.8.3-.9.7L47.4 1.2zm2.8 9.2c.9-.3 1.5-1.1 1.6-2.1.2-1.3-.8-2.5-2-2.5h-1.3l-1.1 6.4h1.9c.9 0 1.8-.7 1.9-1.8z"></path>
    </svg>
);


const AmexIcon = () => (
    <svg className="w-12 h-8" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pi-amex">
        <title id="pi-amex">American Express</title>
        <path fill="#0077C8" d="M0 0h38v24H0z"></path>
        <path d="M30.5 16.7h-3.4c-.4 0-.8-.3-.8-.7V8h4.9v1.2H28v1.9h2.5v1.2H28v3.1h2.5v1.3zm-7.6-8.7h-4.4v8.7h1.3V9.2h3.1v7.5h1.3V8zm-6 0H8.3v8.7h1.3V9.2H12v2.3l2.6-2.3h1.7l-2.6 2.3 2.9 6.4h-1.4l-2.2-5-1.6 1.4v3.6h-1.3V8zM7.4 12c0-.6.4-1 1-1h1.3v2H8.4c-.6 0-1-.4-1-1z" fill="#FFF"></path>
    </svg>
);

const ApplePayIcon = () => (
    <svg className="w-12 h-8" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pi-apple_pay">
        <title id="pi-apple_pay">Apple Pay</title>
        <path d="M3.2 11.7c0 2.4 2.3 3.4 2.3 3.4s-1.8 1.1-3 3.3c-1.6 2.8-.4 6.9.1 7.2.4.3 1.2.2 2.4-.6 1.2-.8 2.1-1.9 3.3-1.9 1.2 0 1.8.9 3.2.9 1.4 0 2.1-1 3.3-1 1.3 0 2 .9 3.2.9 1.2 0 2.2-1.2 3.2-1.2 1 0 2.2 1.3 2.9 1.2.7-.1 1.8-1 2.3-3 .5-2-1.1-3.6-2-4.1-1-.5-2.1-.8-2.5-.8s-1.9.8-3.3.8-2.6-1-3.7-1c-1.1 0-2.4.9-3.2.9s-1.8-.9-3.2-.9c-1.4 0-2.8 1.1-3.5 1.1-.7 0-1.8-1.1-2.9-1.1s-2.1 1.2-2.1 1.2zM22.5 4.9c-.3-1.7-1.7-3-3.2-3.1-1.6-.2-3.1 1-3.9 2.2-.7 1.1-1.4 2.7-1.2 4.3.3 1.7 1.8 3.1 3.4 3.1 1.5 0 2.9-1.2 3.8-2.4.8-1 .9-2.3 1.1-4.1z" fill="#000"></path>
    </svg>
);

const OPayIcon = () => (
    <svg className="w-12 h-8" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pi-opay">
      <title id="pi-opay">OPay</title>
      <path d="M19 24a18 18 0 110-24 18 18 0 010 24z" fill="#6AD790"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M19.7 15.1c-.2 0-.4 0-.6-.1a6.6 6.6 0 01-5.6-5.6c-.1-.2-.1-.4-.1-.6 0-.3.1-.6.2-.8.3-.5.9-.8 1.5-.8h1c.4 0 .7.1.9.4.5.5.4 1.3-.2 1.6l-.8.5c-.2.1-.3.3-.2.5a3.6 3.6 0 003.1 3.1c.2 0 .4-.1.5-.2l.5-.8c.3-.6 1.1-.7 1.6-.2.3.2.4.5.4.9v1c0 .6-.3 1.2-.8 1.5a2 2 0 01-.8.2z" fill="#fff"/>
    </svg>
);

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 font-sans mt-10">
            <div className="container mx-auto px-6 lg:px-16 py-12">
                {/* Top section with newsletter and contact info */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 lg:gap-20 pb-10">
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Be the first to know</h3>
                        <p className="mb-6 text-lg">Sign up for updates from mettā muse.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Enter your e-mail..."
                                className="bg-white text-black px-4 py-3 w-full sm:w-2/3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            />
                            <button className="bg-transparent text-white px-8 py-3 w-full sm:w-auto rounded-md border border-white hover:bg-white hover:text-black transition-colors duration-300 uppercase">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 lg:pl-10">
                        <div className="mb-6">
                           <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Contact Us</h3>
                            <p className="mb-2">+91 7520622129</p>
                            <p>ankitbhagata@gmail.com</p>
                        </div>
                         <div>
                            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Currency</h3>
                            <div className="flex items-center gap-2">
                                <USFlagIcon />
                                <span className="font-bold text-white">USD</span>
                            </div>
                            <p className="text-xs mt-2 opacity-60">Transactions will be completed in Euros and a currency reference is available on hover.</p>
                        </div>
                    </div>
                </div>

                <hr className="border-gray-700" />

                {/* Bottom section with links and social media */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-10">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6 uppercase">mettā muse</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Stories</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Artisans</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Boutiques</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">EU Compliances Docs</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6 uppercase">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-white transition-colors">Orders & Shipping</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Join/Login as a Seller</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Payment & Pricing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Return & Refunds</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                        </ul>
                    </div>
                     <div className="col-span-1 md:col-span-2 lg:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-6 uppercase">Follow Us</h3>
                                <div className="flex items-center space-x-4">
                                    <a href="https://www.instagram.com/coderak_/" aria-label="Instagram" className="hover:opacity-75 transition-opacity"><InstagramIcon /></a>
                                    <a href="https://www.linkedin.com/in/ankit-bhagata/" aria-label="LinkedIn" className="hover:opacity-75 transition-opacity"><LinkedinIcon /></a>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-6 uppercase">mettā muse Accepts</h3>
                                <div className="flex flex-wrap items-center gap-3">
                                   <div className="bg-white p-1 rounded-md"><GPayIcon /></div>
                                   <div className="bg-white p-1 rounded-md"><MasterCardIcon /></div>
                                   <div className="bg-white p-1 rounded-md"><PaypalIcon /></div>
                                   <div className="bg-white p-1 rounded-md"><AmexIcon /></div>
                                   <div className="bg-white p-1 rounded-md"><ApplePayIcon /></div>
                                   <div className="bg-white p-1 rounded-md"><OPayIcon /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12 pt-6 border-t border-gray-800">
                    <p className="text-sm">Copyright © 2025 mettamuse. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
