import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const faqData = [
  {
    category: "Ordering & Payment",
    questions: [
      {
        q: "How can I place an order?",
        a: "To place an order, simply browse our product categories, select the items you wish to purchase, add them to your cart, and proceed to checkout. Follow the on-screen instructions to complete your purchase."
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept a variety of payment methods, including major credit cards (Visa, MasterCard, American Express), PayPal, and other secure online payment gateways."
      }
    ]
  },
  {
    category: "Shipping & Delivery",
    questions: [
      {
        q: "How long does delivery take?",
        a: "Delivery times vary based on your location and the seller. Standard shipping typically takes 3-7 business days. You will receive a tracking number once your order has shipped."
      },
      {
        q: "Do you offer free shipping?",
        a: "Yes, many of our sellers offer free shipping on their products! You can filter for items with free shipping or check the product details page for more information."
      }
    ]
  },
  {
    category: "Returns & Refunds",
    questions: [
      {
        q: "What is your return policy?",
        a: "We offer a 30-day hassle-free return policy for most items. If you are not satisfied with your purchase, you can initiate a return through your account dashboard. Please ensure the item is in its original condition."
      },
      {
        q: "How do I request a refund?",
        a: "Once your returned item is received and inspected by the seller, your refund will be processed automatically to your original method of payment. You will be notified via email."
      }
    ]
  },
  {
    category: "Account & Support",
    questions: [
      {
        q: "Do I need an account to shop?",
        a: "While you can check out as a guest, creating an account allows you to track your orders, manage returns, and save your shipping information for a faster checkout process in the future."
      },
      {
        q: "How can I contact customer support?",
        a: "Our customer support team is available 24/7. You can reach us through the 'Contact Us' page, via live chat, or by emailing support@mettamuse.com."
      }
    ]
  }
];
const scrollToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
};

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 focus:outline-none"
      >
        <span>{question}</span>
        <span>{isOpen ? <FaMinus className="text-gray-500" /> : <FaPlus className="text-blue-500" />}</span>
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-600 leading-relaxed">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Find answers to the most common questions from our customers.
          </p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          {faqData.map((categoryItem, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-500 pl-4 mb-6">
                {categoryItem.category}
              </h3>
              {categoryItem.questions.map((item, qIndex) => (
                <AccordionItem key={qIndex} question={item.q} answer={item.a} />
              ))}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gray-50 p-8 rounded-lg shadow-inner max-w-4xl mx-auto">
           <h3 className="text-2xl font-bold text-gray-800">Didn't find your answer?</h3>
           <p className="mt-2 text-gray-600">Our support team is here to help you with any questions you may have.</p>
           <NavLink
            to="/contact"
            onClick={scrollToTop}
            className="mt-6 inline-block bg-gray-600 text-white font-bold py-3 px-8 rounded-md hover:bg-gray-700 transition-colors duration-300"
           >
            Contact Support
           </NavLink>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
