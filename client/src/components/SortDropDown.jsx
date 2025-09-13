import React, { useState, useRef, useEffect } from 'react';

const CheckIcon = () => (
    <svg className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
);

const ChevronDownIcon = () => (
     <svg className="h-4 w-4 ml-1 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
);


const SortDropDown = ({ sort, setSort }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = [
    { value: 'recommended', label: 'RECOMMENDED' },
    { value: 'newest', label: 'NEWEST FIRST' },
    { value: 'popular', label: 'POPULAR' },
    { value: 'high', label: 'PRICE: HIGH TO LOW' },
    { value: 'low', label: 'PRICE: LOW TO HIGH' },
  ];

  const selectedLabel = options.find(opt => opt.value === sort)?.label || 'RECOMMENDED';

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (value) => {
    setSort(value);
    setIsOpen(false);
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedLabel}
          <ChevronDownIcon />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {options.map((opt) => (
              <a
                key={opt.value}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleSelect(opt.value);
                }}
                className={`flex justify-between items-center px-4 py-2 text-sm ${
                  sort === opt.value ? 'font-bold text-black' : 'text-gray-700'
                } hover:bg-gray-100`}
                role="menuitem"
              >
                <span>{opt.label}</span>
                {sort === opt.value && <CheckIcon />}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortDropDown;