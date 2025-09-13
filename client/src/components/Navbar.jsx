import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.jpg";
import { useTranslation } from "react-i18next";

// SVG Icons
const SearchIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const HeartIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
    />
  </svg>
);

const ShoppingBagIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    />
  </svg>
);

const UserIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
  </svg>
);

const MenuIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const { t, i18n } = useTranslation();

  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsLangOpen(false);
  };

  return (
    <nav className="bg-white font-sans border-b border-gray-200 relative">
      <div className="h-1 bg-black"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-1 flex items-center">
            <div className="hidden lg:block">
              <NavLink to="/">
                <img src={logo} alt="Logo" className="h-10" />
              </NavLink>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <NavLink to="/">
              <h1 className="text-3xl font-bold tracking-widest">LOGO</h1>
            </NavLink>
          </div>

          <div className="flex-1 flex items-center justify-end">
            <div className="hidden lg:flex items-center space-x-5">
              <button className="text-black hover:text-gray-700">
                <SearchIcon />
              </button>
              <button className="text-black hover:text-gray-700">
                <HeartIcon />
              </button>
              <button className="text-black hover:text-gray-700">
                <ShoppingBagIcon />
              </button>
              {currentUser ? (
                <div className="relative">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center text-black hover:text-gray-700"
                  >
                    <UserIcon />
                    <span className="ml-1">{currentUser.name}</span>
                    <ChevronDownIcon />
                  </button>
                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {t("SIGN_OUT")}
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink to="/login" className="text-black hover:text-gray-700">
                  <UserIcon />
                </NavLink>
              )}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center text-black font-semibold uppercase"
                >
                  {i18n.language.slice(0, 3).toUpperCase()}
                  <ChevronDownIcon />
                </button>
                {isLangOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-50">
                    {["English", "Hindi", "Marathi"].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => changeLanguage(lang)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black hover:text-gray-700"
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-center py-4">
          <div className="flex space-x-10">
            <NavLink to="/shop" className="text-lg font-medium tracking-wider hover:underline">
              {t("SHOP")}
            </NavLink>
            <NavLink to="/skills" className="text-lg font-medium tracking-wider hover:underline">
              {t("SKILLS")}
            </NavLink>
            <NavLink to="/stories" className="text-lg font-medium tracking-wider hover:underline">
              {t("STORIES")}
            </NavLink>
            <NavLink to="/about" className="text-lg font-medium tracking-wider hover:underline">
              {t("ABOUT")}
            </NavLink>
            <NavLink to="/contact" className="text-lg font-medium tracking-wider hover:underline">
              {t("CONTACT")}
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white z-20 border-t border-gray-200">
          <div className="px-4 pt-2 pb-3 space-y-1 sm:px-6">
            <NavLink
              to="/shop"
              className="block py-2 text-base font-medium text-center tracking-wider text-black hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("SHOP")}
            </NavLink>
            <NavLink
              to="/skills"
              className="block py-2 text-base font-medium text-center tracking-wider text-black hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("SKILLS")}
            </NavLink>
            <NavLink
              to="/stories"
              className="block py-2 text-base font-medium text-center tracking-wider text-black hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("STORIES")}
            </NavLink>
            <NavLink
              to="/about"
              className="block py-2 text-base font-medium text-center tracking-wider text-black hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("ABOUT")}
            </NavLink>
            <NavLink
              to="/contact"
              className="block py-2 text-base font-medium text-center tracking-wider text-black hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("CONTACT")}
            </NavLink>
          </div>
          <div className="border-t border-gray-200 mt-4">
            <div className="flex justify-center items-center space-x-5 py-4">
              <button className="text-black hover:text-gray-700">
                <SearchIcon />
              </button>
              <button className="text-black hover:text-gray-700">
                <HeartIcon />
              </button>
              <button className="text-black hover:text-gray-700">
                <ShoppingBagIcon />
              </button>
              {currentUser ? (
                <button onClick={handleLogout} className="text-black hover:text-gray-700">
                  <UserIcon />
                </button>
              ) : (
                <NavLink
                  to="/login"
                  className="text-black hover:text-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <UserIcon />
                </NavLink>
              )}
            </div>
            <div className="flex justify-center py-2">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center text-black font-semibold uppercase"
              >
                {i18n.language.slice(0, 3).toUpperCase()}
                <ChevronDownIcon />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
