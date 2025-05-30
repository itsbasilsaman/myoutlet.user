"use client"

import { useState } from "react"
import { ChevronLeft, Minus, Plus } from "lucide-react"
import Image from "next/image"
import { Poppins } from 'next/font/google';
import { FaArrowLeft } from "react-icons/fa6";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500','600', '700', '800', '900'], // 500 = medium, 700 = bold
  variable: '--font-poppins', // optional for CSS variable usage
});

export default function FoodDetail() {
  const [mayoCount, setMayoCount] = useState(2)
  const [saladCount, setSaladCount] = useState(0)

  return (
    <div className={`flex flex-col w-full h-auto py-12 bg-white ${poppins.className}`}>
       

      {/* Back Button */}
      <div className="px-6 py-2">
        <button className="w-10 h-10 rounded-full flex items-center justify-center border border-[#dadada]">
        <FaArrowLeft />
        </button>
      </div>

      {/* Food Title and Rating */}
      <div className="px-6 py-4 flex justify-between items-center">
        <h1 className="text-[24px] font-semibold text-black">Beef curry</h1>
        <div className="flex items-center">
          <div className="flex">
            {[1, 2, 3, 4].map((star) => (
              <svg key={star} width="15" height="15" viewBox="0 0 20 20" fill="none" className="text-[#fece00]">
                <path d="M10 1L13 7L19 8L14.5 13L16 19L10 16L4 19L5.5 13L1 8L7 7L10 1Z" fill="currentColor" />
              </svg>
            ))}
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none" className="text-[#dadada]">
              <path d="M10 1L13 7L19 8L14.5 13L16 19L10 16L4 19L5.5 13L1 8L7 7L10 1Z" fill="currentColor" />
            </svg>
          </div>
          <span className="text-[#696868] ml-1 text-[12px]">(14)</span>
        </div>
      </div>

      {/* Food Image */}
      <div className="px-6 py-2">
        <div className="rounded-3xl overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Beef curry"
            width={600}
            height={400}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Details Section */}
      <div className="px-6 py-4">
        <h2 className="text-[20px] font-medium text-black mb-1">Details</h2>
        <p className="text-[#696868] text-[12px]">
          Beef prepared by adding different spices and ginger garlic and onion and others herbs by carefully cooking the
          beef in a low flame so that the taste of beef can also be in the gravy
        </p>
      </div>

      {/* Add-ons Section */}
      <div className="px-6 py-4">
        <h2 className="text-[20px] font-medium text-black mb-1">Add ons</h2>

        {/* Mayonnaise */}
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#f5f5f5] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Mayonnaise"
                width={64}
                height={64}
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h3 className="text-[14px] font-medium text-black">Mayonnaise</h3>
              <p className="text-[#696868] font-medium text-[12px]">1 portion</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMayoCount(Math.max(0, mayoCount - 1))}
              className="w-6 h-6 rounded-full border border-[#dadada] flex items-center justify-center"
            >
              <Minus size={16} className="text-black" />
            </button>
            <span className="w-6 text-center text-[14px]">{mayoCount}</span>
            <button
              onClick={() => setMayoCount(mayoCount + 1)}
              className="w-6 h-6 rounded-full border border-[#dadada] flex items-center justify-center"
            >
              <Plus size={16} className="text-black" />
            </button>
          </div>
        </div>

        {/* Salad */}
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#f5f5f5] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Salad"
                width={64}
                height={64}
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h3  className="text-[14px] font-medium text-black">Salad</h3>
              <p className="text-[#696868] font-medium text-[12px]">1 piece</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSaladCount(Math.max(0, saladCount - 1))}
              className="w-6 h-6 rounded-full border border-[#dadada] flex items-center justify-center"
            >
              <Minus size={16} className="text-black" />
            </button>
            <span className="w-6 text-center text-[14px]">{saladCount}</span>
            <button
              onClick={() => setSaladCount(saladCount + 1)}
              className="w-6 h-6 rounded-full border border-[#dadada] flex items-center justify-center"
            >
              <Plus size={16} className="text-black" />
            </button>
          </div>
        </div>
      </div>

      {/* Add to Basket Button */}
      <div className="px-6 py-4 mt-auto mb-6">
        <button className="w-full py-4 bg-[#fe0000] text-white text-xl font-semibold rounded-full">
          Add to basket
        </button>
      </div>
    </div>
  )
}
