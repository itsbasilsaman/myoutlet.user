"use client"

import Image from "next/image"
import { Playfair_Display } from 'next/font/google'
import { IoCartSharp } from "react-icons/io5";
import { useState } from 'react';
import SkeletonLoader from './components/SkeletonLoader';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-playfair',
  display: 'swap',
})

// Mock data for different categories
const menuItems: { [key: string]: { id: number; name: string; price: number; rating: number; reviews: number; description: string; image: string; }[] } = {
  breakfast: [
    {
      id: 1,
      name: "Al Faham",
      price: 34,
      rating: 5,
      reviews: 14,
      description: "Spices packed with aromatic flavours",
      image: "https://i.ytimg.com/vi/HVi7xxQZDRQ/maxresdefault.jpg"
    },
    {
      id: 2,
      name: "Beef curry",
      price: 34,
      rating: 4.5,
      reviews: 14,
      description: "Spices packed with aromatic flavours",
      image: "https://tse2.mm.bing.net/th?id=OIP.ZucaywrmmEfOPxf8vegMEgHaFP&pid=Api&P=0&h=180"
    },
    {
      id: 3,
      name: "Chicken pizza",
      price: 34,
      rating: 4.5,
      reviews: 14,
      description: "Spices packed with aromatic flavours",
      image: "https://tse3.mm.bing.net/th?id=OIP.fz5QfZh2zDrrOh-YAr1JvQHaHa&pid=Api&P=0&h=180"
    }
  ],
  lunch: [
    {
      id: 4,
      name: "Grilled Salmon",
      price: 42,
      rating: 4.8,
      reviews: 23,
      description: "Fresh salmon with herbs",
      image: "https://tse1.mm.bing.net/th?id=OIP.fheAIiZm-ASUtmFZ8_AyDgAAAA&pid=Api&P=0&h=180"
    }
  ],
  snacks: [
    {
      id: 5,
      name: "Loaded Fries",
      price: 18,
      rating: 4.2,
      reviews: 45,
      description: "Crispy fries with toppings",
      image: "https://images.unsplash.com/photo-1669743851910-b7e19930c8a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ],
  dinner: [
    {
      id: 6,
      name: "Steak",
      price: 56,
      rating: 4.9,
      reviews: 32,
      description: "Premium cut with sauce",
      image: "https://tse1.mm.bing.net/th?id=OIP.pTMRIYlr4-nku6kFyArJXAHaHa&pid=Api&P=0&h=180"
    }
  ]
};

// Dynamically generate category list from menuItems
const categoryList = Object.keys(menuItems).map((key) => ({
  key,
  label: key.charAt(0).toUpperCase() + key.slice(1),
  count: menuItems[key].length,
}));

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('breakfast');
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState(menuItems.breakfast);
  const [showCategorySheet, setShowCategorySheet] = useState(false);

  const handleCategoryChange = (category: string) => {
    setIsLoading(true);
    setActiveCategory(category);
    setShowCategorySheet(false);
    setTimeout(() => {
      setItems(menuItems[category as keyof typeof menuItems] || []);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full mx-auto px-4 h-auto lg:max-w-7xl lg:px-8">
      {/* Logo and Cart */}
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center">
          <Image
            src="/images/myoutlet.logo.png"
            alt="Logo"
            width={140}
            height={50}
            className="object-contain"
            priority
          />
        </div>
        <div className="relative">
          <div className="p-2 rounded-full">
            <IoCartSharp className="text-2xl text-gray-800" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-2 lg:flex lg:gap-8">
        {/* Left Column - Main Content */}
        <div className="flex-1">
          <h1 className={`text-[26px] font-semibold text-[#040919] ${playfair.className}`}>Order your favourites !</h1>

          {/* Table Info */}
          <div className="mt-6 px-[12px] bg-[#fdfafa] py-[12px] rounded-[12px] flex justify-between items-center">
            <div>
              <div className="text-[19px] text-[#696868]">Table</div>
              <div className={`text-[20px] font-medium ${playfair.className}`}>Inside, 04</div>
            </div>
            <button className={`text-[#fe0000] flex items-center ${playfair.className} rounded-full bg-white px-4 py-2`}>
              Scan again
              <svg
                className="ml-2"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 3H21V9" stroke="#fe0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 21H3V15" stroke="#fe0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 3L14 10" stroke="#fe0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 21L10 14" stroke="#fe0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Search Bar */}
          <div className="mt-4 relative lg:max-w-xl">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search"
              className={`w-full py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fe0000] focus:border-transparent font-[var(--font-playfair)]`}
            />
          </div>

          {/* Offers Today */}
          <div className="mt-6">
            <h2 className={`text-2xl font-semibold text-[#040919] ${playfair.className}`}>Offers today</h2>

            <div className="mt-4 flex space-x-4 overflow-x-auto pb-4 scrollbar-hide lg:grid lg:grid-cols-2 lg:gap-4 lg:overflow-x-visible">
              {/* Loaded Fries */}
              <div className="min-w-[190px] rounded-lg overflow-hidden flex-shrink-0 lg:min-w-0">
                <div className="relative h-32 w-full lg:h-40">
                  <Image
                    src="https://images.unsplash.com/photo-1669743851910-b7e19930c8a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Loaded fries"
                    width={160}
                    height={128}
                    className="object-cover w-full h-full rounded-lg"
                    priority
                  />
                  <div className="absolute bottom-2 right-2 bg-white rounded-md px-1.5 py-0.5 flex items-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#fece00" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                        stroke="#fece00"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className={`ml-1 text-sm ${playfair.className}`}>4.2</span>
                  </div>
                </div>
                <div className="p-2 flex justify-between">
                  <div>
                    <h3 className="font-medium">Loaded fries</h3>
                    <div className="flex items-center mt-1">
                      <span className="text-lg font-semibold">$18</span>
                      <span className="ml-2 text-gray-400 line-through text-sm">$24</span>
                    </div>
                  </div>
                  <button className="mt-2 w-10 h-10 border border-[#fe0000] rounded-lg flex items-center justify-center hover:bg-[#fe0000] hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Biriyani */}
              <div className="min-w-[190px] rounded-lg overflow-hidden flex-shrink-0 lg:min-w-0">
                <div className="relative h-32 w-full lg:h-40">
                  <Image
                    src="https://plus.unsplash.com/premium_photo-1694141253763-209b4c8f8ace?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Biriyani"
                    width={160}
                    height={128}
                    className="object-cover w-full h-full rounded-lg"
                    priority
                  />
                  <div className="absolute bottom-2 right-2 bg-white rounded-md px-1.5 py-0.5 flex items-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#fece00" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                        stroke="#fece00"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className={`ml-1 text-sm ${playfair.className}`}>4.5</span>
                  </div>
                </div>
                <div className="p-2 flex justify-between">
                  <div>
                    <h3 className="font-medium">Biriyani</h3>
                    <div className="flex items-center mt-1">
                      <span className="text-lg font-semibold">$28</span>
                      <span className="ml-2 text-gray-400 line-through text-sm">$34</span>
                    </div>
                  </div>
                  <button className="mt-2 w-10 h-10 border border-[#fe0000] rounded-lg flex items-center justify-center hover:bg-[#fe0000] hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="mt-6 flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-hide">
            <button
              className="p-2 rounded-md hover:bg-gray-100"
              onClick={() => setShowCategorySheet(true)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="7" height="7" rx="1" stroke="#8d4b0e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="14" y="3" width="7" height="7" rx="1" stroke="#8d4b0e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="14" y="14" width="7" height="7" rx="1" stroke="#8d4b0e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="3" y="14" width="7" height="7" rx="1" stroke="#8d4b0e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {categoryList.map((cat) => (
              <button
                key={cat.key}
                onClick={() => handleCategoryChange(cat.key)}
                className={`px-4 py-2 rounded-md font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat.key
                    ? 'bg-[#ffefe0] text-[#8d4b0e] hover:bg-[#ffe5cc]'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.label}
                <span className="ml-2 text-xs text-gray-400">({cat.count})</span>
              </button>
            ))}
          </div>

          {/* Menu Items Section */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-[#040919] capitalize">{activeCategory}</h2>

            {isLoading ? (
              // Show 3 skeleton loaders while loading
              <>
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
              </>
            ) : (
              // Show actual menu items
              <div className="lg:grid lg:grid-cols-2 lg:gap-4">
                {items.map((item) => (
                  <div key={item.id} className="mt-4 flex justify-between items-center py-3 lg:bg-white lg:rounded-lg lg:p-4 lg:shadow-sm">
                    <div className="flex">
                      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={96}
                          height={96}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="ml-3">
                        <h3 className="font-medium text-lg">{item.name}</h3>
                        <div className="flex items-center mt-1">
                          {[...Array(Math.floor(item.rating))].map((_, i) => (
                            <svg
                              key={i}
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="#fece00"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                                stroke="#fece00"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          ))}
                          {item.rating % 1 !== 0 && (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                                stroke="#fece00"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                          <span className="ml-1 text-xs text-gray-500">({item.reviews})</span>
                        </div>
                        <div className="mt-1">
                          <span className="text-lg font-semibold">${item.price}</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                      </div>
                    </div>
                    <button className="h-10 w-10 border border-[#fe0000] rounded-lg flex items-center justify-center hover:bg-[#fe0000] hover:text-white transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Restaurant Info (Desktop Only) */}
        <div className="hidden lg:block lg:w-80 lg:flex-shrink-0">
          <div className="sticky top-4">
            <div className="bg-[#fff4f4] rounded-lg p-4">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 22L3 12C3 10.9 3.9 10 5 10H19C20.1 10 21 10.9 21 12V22"
                    stroke="#696868"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 10V6C5 4.9 5.9 4 7 4H17C18.1 4 19 4.9 19 6V10"
                    stroke="#696868"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M12 22V16" stroke="#696868" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 16L15 19" stroke="#696868" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 16L9 19" stroke="#696868" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-medium">Al Baik Restaurant</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                    stroke="#696868"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                    stroke="#696868"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm text-gray-500">Near xxx school</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                    stroke="#696868"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm text-gray-500">+917252443210</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Info (Mobile Only) */}
      <div className="mt-8 mb-6 bg-[#fff4f4] rounded-lg p-4 lg:hidden">
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 22L3 12C3 10.9 3.9 10 5 10H19C20.1 10 21 10.9 21 12V22"
              stroke="#696868"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 10V6C5 4.9 5.9 4 7 4H17C18.1 4 19 4.9 19 6V10"
              stroke="#696868"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M12 22V16" stroke="#696868" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 16L15 19" stroke="#696868" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 16L9 19" stroke="#696868" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-medium">Al Baik Restaurant</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
              stroke="#696868"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="10"
              r="3"
              stroke="#696868"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm text-gray-500">Near xxx school</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
              stroke="#696868"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm text-gray-500">+917252443210</span>
        </div>
      </div>

      {/* Bottom Sheet Modal */}
      {showCategorySheet && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-transparent backdrop-blur-sm transition-all">
          <div
            className="w-full max-w-md mx-auto rounded-t-2xl bg-white shadow-lg p-4 pb-8 relative animate-slideup"
            style={{ minHeight: '320px' }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-xl font-semibold text-[#040919] ${playfair.className}`}>Categories</h2>
              <button
                className="text-2xl text-gray-500 hover:text-gray-800"
                onClick={() => setShowCategorySheet(false)}
                aria-label="Close"
              >
                &times;
              </button>
            </div>
            <div className="divide-y divide-gray-200">
              {categoryList.map((cat) => (
                <button
                  key={cat.key}
                  className="w-full flex justify-between items-center py-3 px-2 text-left hover:bg-[#fff4f4] transition-colors"
                  onClick={() => handleCategoryChange(cat.key)}
                >
                  <span className={`text-base ${playfair.className}`}>{cat.label}</span>
                  <span className="text-base text-gray-700 font-semibold">{cat.count}</span>
                </button>
              ))}
            </div>
            <svg className="absolute right-8 top-16 opacity-20" width="80" height="80" viewBox="0 0 80 80"><circle cx="40" cy="40" r="30" stroke="#fece00" strokeWidth="3" fill="none" /></svg>
            <svg className="absolute left-4 bottom-4 opacity-20" width="60" height="60" viewBox="0 0 60 60"><ellipse cx="30" cy="30" rx="25" ry="15" stroke="#fece00" strokeWidth="2" fill="none" /></svg>
          </div>
        </div>
      )}
    </div>
  )
}

// Add this to your globals.css or tailwind config:
// .animate-slideup { animation: slideup 0.3s cubic-bezier(0.4,0,0.2,1); }
// @keyframes slideup { from { transform: translateY(100%); } to { transform: translateY(0); } }