import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // nice arrow icon

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button only after scrolling 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-gray-700 text-white shadow-lg hover:bg-gray-800 transition-all duration-300"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;
