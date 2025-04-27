"use client"

import { useState } from "react";

export function Popup() {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4 relative">
        <div className="flex justify-end">
          <button
            className="text-gray-500 hover:text-gray-700 bg-green-100 rounded-full p-1 transition-colors duration-300"
            onClick={closePopup}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <h2 className="text-xl font-bold mb-4 text-center">Exciting News!</h2>
        <p className="text-gray-600 text-sm">
          We’re proud to share that Direct Impact Empowerment Foundation is now
          officially registered in Switzerland and Nigeria — a huge milestone
          that strengthens our ability to reach even more lives.
        </p>
        <p className="text-gray-600 text-sm mt-4">
          From our base in Apata, Ibadan, Nigeria, we’re building a model for
          youth empowerment through skill acquisition, entrepreneurial support,
          and community-driven projects. By equipping young people with the
          tools they need to succeed, we’re helping them transform their lives,
          their families, and their communities.
        </p>
        <p className="text-gray-600 text-sm mt-4">
          Our journey is just beginning — and we’re excited to keep growing, one
          empowered youth at a time.
        </p>
      </div>
    </div>
  );
}