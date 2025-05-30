'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, Edit, Minus, Plus, ChevronRight } from 'lucide-react'
import { Playfair_Display, Figtree } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function BasketClient() {
  const [quantities, setQuantities] = useState({
    alfaham: 2,
    beefcurry: 1,
    mayonnaise: 2,
    salad: 1,
  })

  const updateQuantity = (item: keyof typeof quantities, change: number) => {
    setQuantities((prev) => ({
      ...prev,
      [item]: Math.max(0, prev[item] + change),
    }))
  }

  return (
    <div className={`max-w-[1440px] mx-auto bg-[#ffffff] min-h-screen relative ${figtree.className}`}>
      <div className="max-w-md mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        {/* Back Button */}
        <div className="p-4">
          <button className="w-10 h-10 rounded-full border border-[#dadada] flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-[#000000]" />
          </button>
        </div>

        {/* Header */}
        <div className="px-5 pt-2 pb-4">
          <h1 className={`text-3xl md:text-4xl lg:text-5xl text-[#040919] ${playfair.className}`}>Review & Order</h1>
        </div>

        {/* Table Info */}
        <div className="mx-5 mb-4 flex justify-between items-center bg-[#fdfafa] rounded-lg p-3 md:p-4">
          <div className="text-[#393636] md:text-lg">You&apos;re in table</div>
          <div className={`text-xl md:text-2xl font-medium text-[#040919] ${playfair.className}`}>Inside, 04</div>
        </div>

        {/* Name */}
        <div className="mx-5 mb-8 flex justify-between items-center bg-[#fdfafa] rounded-lg p-3 md:p-4">
          <div className="text-[#393636] md:text-lg">Your name</div>
          <div className="flex items-center gap-2">
            <div className={`text-xl md:text-2xl font-medium text-[#040919] ${playfair.className}`}>Aslam</div>
            <Edit className="w-5 h-5 text-[#fe0000] hover:text-red-600 transition-colors cursor-pointer" />
          </div>
        </div>

        {/* Your Items */}
        <div className="px-5 mb-6">
          <h2 className={`text-2xl md:text-3xl font-medium text-[#040919] mb-4 ${playfair.className}`}>Your items</h2>

          {/* Al Faham */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden relative">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Al Faham"
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  <h3 className={`text-lg md:text-xl font-medium text-[#040919] ${playfair.className}`}>Al Faham</h3>
                  <p className="text-sm md:text-base text-[#696868]">More mayonnaise</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-[#dadada] flex items-center justify-center hover:bg-gray-50 transition-colors"
                    onClick={() => updateQuantity("alfaham", -1)}
                  >
                    <Minus className="w-4 h-4 text-[#000000]" />
                  </button>
                  <span className="w-4 text-center md:text-lg">{quantities.alfaham}</span>
                  <button
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-[#dadada] flex items-center justify-center hover:bg-gray-50 transition-colors"
                    onClick={() => updateQuantity("alfaham", 1)}
                  >
                    <Plus className="w-4 h-4 text-[#000000]" />
                  </button>
                </div>
              </div>
              <div className={`mt-1 text-lg md:text-xl font-medium ${playfair.className}`}>$34</div>
            </div>
          </div>

          {/* Beef Curry */}
          <div className="flex items-center gap-3">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden relative">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Beef curry"
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  <h3 className={`text-lg md:text-xl font-medium text-[#040919] ${playfair.className}`}>Beef curry</h3>
                  <p className="text-sm md:text-base text-[#696868]">More spicy</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-[#dadada] flex items-center justify-center hover:bg-gray-50 transition-colors"
                    onClick={() => updateQuantity("beefcurry", -1)}
                  >
                    <Minus className="w-4 h-4 text-[#000000]" />
                  </button>
                  <span className="w-4 text-center md:text-lg">{quantities.beefcurry}</span>
                  <button
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-[#dadada] flex items-center justify-center hover:bg-gray-50 transition-colors"
                    onClick={() => updateQuantity("beefcurry", 1)}
                  >
                    <Plus className="w-4 h-4 text-[#000000]" />
                  </button>
                </div>
              </div>
              <div className={`mt-1 text-lg md:text-xl font-medium ${playfair.className}`}>$12</div>
            </div>
          </div>
        </div>

        {/* Add Ons */}
        <div className="px-5 mb-6">
          <h2 className={`text-2xl md:text-3xl font-medium text-[#040919] mb-4 ${playfair.className}`}>Add ons</h2>

          {/* Mayonnaise */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden relative">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Mayonnaise"
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  <h3 className={`text-lg md:text-xl font-medium text-[#040919] ${playfair.className}`}>Mayonnaise</h3>
                  <p className="text-sm md:text-base text-[#696868]">Alfaham</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-[#dadada] flex items-center justify-center hover:bg-gray-50 transition-colors"
                    onClick={() => updateQuantity("mayonnaise", -1)}
                  >
                    <Minus className="w-4 h-4 text-[#000000]" />
                  </button>
                  <span className="w-4 text-center md:text-lg">{quantities.mayonnaise}</span>
                  <button
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-[#dadada] flex items-center justify-center hover:bg-gray-50 transition-colors"
                    onClick={() => updateQuantity("mayonnaise", 1)}
                  >
                    <Plus className="w-4 h-4 text-[#000000]" />
                  </button>
                </div>
              </div>
              <div className={`mt-1 text-lg md:text-xl font-medium ${playfair.className}`}>$2</div>
            </div>
          </div>

          {/* Salad */}
          <div className="flex items-center gap-3">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden relative">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Salad"
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  <h3 className={`text-lg md:text-xl font-medium text-[#040919] ${playfair.className}`}>Salad</h3>
                  <p className="text-sm md:text-base text-[#696868]">Beef curry</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-[#dadada] flex items-center justify-center hover:bg-gray-50 transition-colors"
                    onClick={() => updateQuantity("salad", -1)}
                  >
                    <Minus className="w-4 h-4 text-[#000000]" />
                  </button>
                  <span className="w-4 text-center md:text-lg">{quantities.salad}</span>
                  <button
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-[#dadada] flex items-center justify-center hover:bg-gray-50 transition-colors"
                    onClick={() => updateQuantity("salad", 1)}
                  >
                    <Plus className="w-4 h-4 text-[#000000]" />
                  </button>
                </div>
              </div>
              <div className={`mt-1 text-lg md:text-xl font-medium ${playfair.className}`}>$5</div>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="px-5 mb-24 md:mb-32">
          <h2 className="text-2xl md:text-3xl font-medium text-[#040919] mb-4">Details</h2>
          <div className="space-y-2 md:space-y-3">
            <div className="flex justify-between">
              <span className="text-[#696868] md:text-lg">Total item(s)</span>
              <span className="font-medium md:text-lg">2</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#696868] md:text-lg">Subtotal</span>
              <span className="font-medium md:text-lg">$46</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#696868] md:text-lg">GST+Tax</span>
              <span className="font-medium md:text-lg">$2.6</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="text-[#040919] font-medium md:text-lg">Total</span>
              <span className="font-medium md:text-lg">$48.6</span>
            </div>
          </div>
        </div>

        {/* Payment Button */}
        <div className="fixed bottom-6 left-5 right-5 md:max-w-md md:mx-auto lg:max-w-lg xl:max-w-xl">
          <button className="w-full bg-[#fe0000] text-white rounded-full py-3 px-4 flex items-center justify-between hover:bg-red-600 transition-colors">
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-[#fece00] flex items-center justify-center mr-2">
                <ChevronRight className="w-4 h-4 text-[#fe0000]" />
              </div>
              <span className="font-medium md:text-lg">Swipe to pay</span>
            </div>
            <span className="font-medium text-lg md:text-xl">$48.6</span>
          </button>
        </div>
      </div>
    </div>
  )
} 