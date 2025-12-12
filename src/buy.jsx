import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../public/logo.svg";

// Slide Images
import slide0 from "../public/slide0.png";
import slide1 from "../public/slide1.png";
import slide2 from "../public/slide2.png";

// Header Images
import booster from "../public/BOOSTER.png";
import other from "../public/OTHER.png";
import cards from "../public/CARDS.png";

// Booster Pack Images
import booster1 from "../public/booster1.png";
import booster2 from "../public/booster2.png";
import booster3 from "../public/booster3.png";
import booster4 from "../public/booster4.png";
import booster5 from "../public/booster5.png";

// Open Card Images
import open1 from "../public/open1.png";
import open2 from "../public/open2.png";
import open3 from "../public/open3.png";
import open4 from "../public/open4.png";
import open5 from "../public/open5.png";

// Other Box Images
import other1 from "../public/other1.png";
import other2 from "../public/other2.png";
import other3 from "../public/other3.png";
import other4 from "../public/other4.png";
import other5 from "../public/other5.png";

// Footer Image
import fifth1 from "../public/5th.png";

function Buy() {
  // --- CAROUSEL STATE ---
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slide0, slide1, slide2];

  // --- AUTO-PLAY EFFECT ---
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // --- CLICK HANDLER ---
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const boosterPacks = [
    { id: 1, name: "WILD FORCE", type: "LEGENDARY TYPE 1", img: booster1 },
    { id: 2, name: "CYBER JUDGE", type: "LEGENDARY TYPE 2", img: booster2 },
    { id: 3, name: "CLAY BURST", type: "LEGENDARY TYPE 3", img: booster3 },
    { id: 4, name: "RAGING SURF", type: "LEGENDARY TYPE 4", img: booster4 },
    { id: 5, name: "DARK FLAMES", type: "LEGENDARY TYPE 5", img: booster5 },
  ];

  const openCards = [
    { id: 1, name: "BULBASAUR V", img: open1 },
    { id: 2, name: "CHARMANDER SPECIAL", img: open2 },
    { id: 3, name: "GIRATINA V", img: open3 },
    { id: 4, name: "LUCARIO EX", img: open4 },
    { id: 5, name: "CHARIZARD VZ", img: open5 },
  ];

  const accessories = [
    { id: 1, name: "HOLIDAY BOX SET", img: other1 },
    { id: 2, name: "PHANTASMAL BOX SET", img: other2 },
    { id: 3, name: "PRISMATIC BOX SET", img: other3 },
    { id: 4, name: "GENGAR BOX SET", img: other4 },
    { id: 5, name: "ROCKET BOX SET", img: other5 },
  ];

  return (
    <div className="min-h-screen bg-gray-200 font-sans text-gray-800 flex flex-col">
      {/* --- HEADER --- */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center mb-4 bg-white rounded-full px-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="w-8 h-8 invert" />
            </div>

            <nav className="hidden md:flex space-x-8 text-xs font-bold tracking-widest text-black">
              <Link
                to="/"
                className="text-black hover:text-gray-600 transition-colors"
              >
                HOME
              </Link>
              <Link to="/buy" className="text-gray-400 cursor-default">
                BUY
              </Link>
              <a href="#" className="hover:text-black transition-colors">
                SELL
              </a>
              <a href="#" className="hover:text-black transition-colors">
                TRADE
              </a>
            </nav>

            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-xs">👤</span>
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="SEARCH"
              className="w-full bg-white py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-12 flex-grow">
        {/* --- HERO BANNER --- */}
        <div
          className="relative w-full h-64 md:h-70 rounded-xl overflow-hidden shadow-lg cursor-pointer group"
          onClick={handleNextSlide}
        >
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Hero Slide ${index}`}
              className={`absolute inset-0 w-full h-full object-fit transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? "bg-white w-4" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* --- SECTION 1: BOOSTER PACKS --- */}
        <div>
          <div className="mb-6">
            <img src={booster} alt="Booster Packs" className="h-20 w-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {boosterPacks.map((pack) => (
              <div
                key={pack.id}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-full aspect-[2/3] rounded-lg shadow-md mb-3 relative overflow-hidden">
                  <img
                    src={pack.img}
                    alt={pack.name}
                    className="w-full h-full object-fit transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <span className="text-[10px] font-bold tracking-wider text-gray-500 uppercase">
                  {pack.type}
                </span>
                <h3 className="text-sm font-bold mt-1 text-center">
                  {pack.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION 2: OPEN CARDS --- */}
        <div>
          <div className="mb-6">
            <img src={cards} alt="Open Cards" className="h-20 w-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {openCards.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-full aspect-[2/3] rounded-lg shadow-md mb-3 relative overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-[10px] font-bold mt-4 tracking-widest text-gray-600 uppercase text-center">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION 3: OTHER ACCESSORIES --- */}
        <div>
          <div className="mb-6">
            <img src={other} alt="Other Accessories" className="h-20 w-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {accessories.map((acc) => (
              <div
                key={acc.id}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-full aspect-square rounded-lg shadow-md mb-3 relative overflow-hidden">
                  <img
                    src={acc.img}
                    alt={acc.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xs font-bold tracking-widest uppercase text-center">
                  {acc.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- SECTION 4: FOOTER IMAGE --- */}
      <div className="w-full mt-auto">
        <img
          src={fifth1}
          alt="The PokeMarket Footer"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}

export default Buy;
