"use client"

import { useState } from "react"
import { ChevronLeft, Minus, Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function FoodDetail() {
  const [mayoCount, setMayoCount] = useState(2)
  const [saladCount, setSaladCount] = useState(0)

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Status Bar */}
      <div className="flex justify-between items-center p-4">
        <div className="text-black text-lg font-semibold">9:41</div>
        <div className="flex items-center gap-1">
          <div className="flex items-end h-3.5 gap-0.5">
            <div className="w-1 h-1.5 bg-black rounded-sm"></div>
            <div className="w-1 h-2 bg-black rounded-sm"></div>
            <div className="w-1 h-2.5 bg-black rounded-sm"></div>
            <div className="w-1 h-3.5 bg-black rounded-sm"></div>
          </div>
          <div className="ml-1.5">
            <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
              <path
                d="M0 0.5C0 0.223858 0.223858 0 0.5 0H14.5C14.7761 0 15 0.223858 15 0.5V10.5C15 10.7761 14.7761 11 14.5 11H0.5C0.223858 11 0 10.7761 0 10.5V0.5Z"
                fill="white"
              />
              <path
                d="M1 1.5C1 1.22386 1.22386 1 1.5 1H13.5C13.7761 1 14 1.22386 14 1.5V9.5C14 9.77614 13.7761 10 13.5 10H1.5C1.22386 10 1 9.77614 1 9.5V1.5Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="px-6 py-2">
        <Link href="/" className="w-14 h-14 rounded-full flex items-center justify-center border border-[#dadada]">
          <ChevronLeft size={24} className="text-black" />
        </Link>
      </div>

      {/* Food Title and Rating */}
      <div className="px-6 py-4 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-black">Beef curry</h1>
        <div className="flex items-center">
          <div className="flex">
            {[1, 2, 3, 4].map((star) => (
              <svg key={star} width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#fece00]">
                <path d="M10 1L13 7L19 8L14.5 13L16 19L10 16L4 19L5.5 13L1 8L7 7L10 1Z" fill="currentColor" />
              </svg>
            ))}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#dadada]">
              <path d="M10 1L13 7L19 8L14.5 13L16 19L10 16L4 19L5.5 13L1 8L7 7L10 1Z" fill="currentColor" />
            </svg>
          </div>
          <span className="text-[#696868] ml-1">(14)</span>
        </div>
      </div>

      {/* Food Image */}
      <div className="px-6 py-2">
        <div className="rounded-3xl overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WIP_Sahla-m7FIIa1wDDKx6er569SsFhmCuckwwS.png"
            alt="Beef curry"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Details Section */}
      <div className="px-6 py-4">
        <h2 className="text-3xl font-bold text-black mb-3">Details</h2>
        <p className="text-[#696868] text-lg">
          Beef prepared by adding different spices and ginger garlic and onion and others herbs by carefully cooking the
          beef in a low flame so that the taste of beef can also be in the gravy
        </p>
      </div>

      {/* Add-ons Section */}
      <div className="px-6 py-4">
        <h2 className="text-3xl font-bold text-black mb-4">Add ons</h2>

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
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">Mayonnaise</h3>
              <p className="text-[#696868]">1 portion</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMayoCount(Math.max(0, mayoCount - 1))}
              className="w-8 h-8 rounded-full border border-[#dadada] flex items-center justify-center"
            >
              <Minus size={16} className="text-black" />
            </button>
            <span className="w-6 text-center text-lg">{mayoCount}</span>
            <button
              onClick={() => setMayoCount(mayoCount + 1)}
              className="w-8 h-8 rounded-full border border-[#dadada] flex items-center justify-center"
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
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">Salad</h3>
              <p className="text-[#696868]">1 piece</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSaladCount(Math.max(0, saladCount - 1))}
              className="w-8 h-8 rounded-full border border-[#dadada] flex items-center justify-center"
            >
              <Minus size={16} className="text-black" />
            </button>
            <span className="w-6 text-center text-lg">{saladCount}</span>
            <button
              onClick={() => setSaladCount(saladCount + 1)}
              className="w-8 h-8 rounded-full border border-[#dadada] flex items-center justify-center"
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
