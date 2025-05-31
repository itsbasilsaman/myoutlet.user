"use client"

import { useState } from "react"
import { ArrowLeft, Edit, Minus, Plus, ChevronRight } from "lucide-react"
import Image from "next/image"

type MenuItem = 'alfaham' | 'beefcurry' | 'mayonnaise' | 'salad'

type Quantities = {
  [key in MenuItem]: number
}

export default function OrderReview() {
  const [quantities, setQuantities] = useState<Quantities>({
    alfaham: 2,
    beefcurry: 1,
    mayonnaise: 2,
    salad: 1,
  })

  const updateQuantity = (item: MenuItem, change: number) => {
    setQuantities((prev) => ({
      ...prev,
      [item]: Math.max(0, prev[item] + change),
    }))
  }

  return (
    <div className="max-w-md mx-auto bg-[#ffffff] min-h-screen relative">
      {/* Status Bar */}
      <div className="flex justify-between items-center p-4 text-[#000000]">
        <div className="text-sm font-medium">9:41</div>
        <div className="flex items-center gap-1">
          <div className="flex items-end gap-0.5 h-3">
            <div className="w-0.5 h-1 bg-[#000000] rounded-t-sm"></div>
            <div className="w-0.5 h-2 bg-[#000000] rounded-t-sm"></div>
            <div className="w-0.5 h-1.5 bg-[#000000] rounded-t-sm"></div>
            <div className="w-0.5 h-2.5 bg-[#000000] rounded-t-sm"></div>
          </div>
          <div className="flex items-center gap-1">
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 9.5C10.4853 9.5 12.5 7.48528 12.5 5C12.5 2.51472 10.4853 0.5 8 0.5C5.51472 0.5 3.5 2.51472 3.5 5C3.5 7.48528 5.51472 9.5 8 9.5Z"
                stroke="black"
                strokeWidth="1"
              />
              <path
                d="M1 5C1 5 3.5 0.5 8 0.5C12.5 0.5 15 5 15 5C15 5 12.5 9.5 8 9.5C3.5 9.5 1 5 1 5Z"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
            <div className="w-6 h-3 bg-[#000000] rounded-sm relative overflow-hidden">
              <div className="absolute right-0.5 top-0.5 bottom-0.5 left-1 bg-[#ffffff] rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="p-4">
        <button className="w-10 h-10 rounded-full border border-[#dadada] flex items-center justify-center">
          <ArrowLeft className="w-5 h-5 text-[#000000]" />
        </button>
      </div>

      {/* Header */}
      <div className="px-5 pt-2 pb-4">
        <h1 className="text-3xl font-serif text-[#040919]">Review & Order</h1>
      </div>

      {/* Table Info */}
      <div className="mx-5 mb-4 flex justify-between items-center bg-[#fdfafa] rounded-lg p-3">
        <div className="text-[#393636]">You&apos;re in table</div>
        <div className="text-xl font-medium text-[#040919]">Inside, 04</div>
      </div>

      {/* Name */}
      <div className="mx-5 mb-8 flex justify-between items-center bg-[#fdfafa] rounded-lg p-3">
        <div className="text-[#393636]">Your name</div>
        <div className="flex items-center gap-2">
          <div className="text-xl font-medium text-[#040919]">Aslam</div>
          <Edit className="w-5 h-5 text-[#fe0000]" />
        </div>
      </div>

      {/* Your Items */}
      <div className="px-5 mb-6">
        <h2 className="text-2xl font-medium text-[#040919] mb-4">Your items</h2>

        {/* Al Faham */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-20 h-20 rounded-lg overflow-hidden relative">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="Al Faham"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <div>
                <h3 className="text-lg font-medium text-[#040919]">Al Faham</h3>
                <p className="text-sm text-[#696868]">More mayonnaise</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="w-7 h-7 rounded-full border border-[#dadada] flex items-center justify-center"
                  onClick={() => updateQuantity("alfaham", -1)}
                >
                  <Minus className="w-4 h-4 text-[#000000]" />
                </button>
                <span className="w-4 text-center">{quantities.alfaham}</span>
                <button
                  className="w-7 h-7 rounded-full border border-[#dadada] flex items-center justify-center"
                  onClick={() => updateQuantity("alfaham", 1)}
                >
                  <Plus className="w-4 h-4 text-[#000000]" />
                </button>
              </div>
            </div>
            <div className="mt-1 text-lg font-medium">$34</div>
          </div>
        </div>

        {/* Beef Curry */}
        <div className="flex items-center gap-3">
          <div className="w-20 h-20 rounded-lg overflow-hidden relative">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="Beef curry"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <div>
                <h3 className="text-lg font-medium text-[#040919]">Beef curry</h3>
                <p className="text-sm text-[#696868]">More spicy</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="w-7 h-7 rounded-full border border-[#dadada] flex items-center justify-center"
                  onClick={() => updateQuantity("beefcurry", -1)}
                >
                  <Minus className="w-4 h-4 text-[#000000]" />
                </button>
                <span className="w-4 text-center">{quantities.beefcurry}</span>
                <button
                  className="w-7 h-7 rounded-full border border-[#dadada] flex items-center justify-center"
                  onClick={() => updateQuantity("beefcurry", 1)}
                >
                  <Plus className="w-4 h-4 text-[#000000]" />
                </button>
              </div>
            </div>
            <div className="mt-1 text-lg font-medium">$12</div>
          </div>
        </div>
      </div>

      {/* Add Ons */}
      <div className="px-5 mb-6">
        <h2 className="text-2xl font-medium text-[#040919] mb-4">Add ons</h2>

        {/* Mayonnaise */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-20 h-20 rounded-lg overflow-hidden relative">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="Mayonnaise"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <div>
                <h3 className="text-lg font-medium text-[#040919]">Mayonnaise</h3>
                <p className="text-sm text-[#696868]">Alfaham</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="w-7 h-7 rounded-full border border-[#dadada] flex items-center justify-center"
                  onClick={() => updateQuantity("mayonnaise", -1)}
                >
                  <Minus className="w-4 h-4 text-[#000000]" />
                </button>
                <span className="w-4 text-center">{quantities.mayonnaise}</span>
                <button
                  className="w-7 h-7 rounded-full border border-[#dadada] flex items-center justify-center"
                  onClick={() => updateQuantity("mayonnaise", 1)}
                >
                  <Plus className="w-4 h-4 text-[#000000]" />
                </button>
              </div>
            </div>
            <div className="mt-1 text-lg font-medium">$2</div>
          </div>
        </div>

        {/* Salad */}
        <div className="flex items-center gap-3">
          <div className="w-20 h-20 rounded-lg overflow-hidden relative">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="Salad"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <div>
                <h3 className="text-lg font-medium text-[#040919]">Salad</h3>
                <p className="text-sm text-[#696868]">Beef curry</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="w-7 h-7 rounded-full border border-[#dadada] flex items-center justify-center"
                  onClick={() => updateQuantity("salad", -1)}
                >
                  <Minus className="w-4 h-4 text-[#000000]" />
                </button>
                <span className="w-4 text-center">{quantities.salad}</span>
                <button
                  className="w-7 h-7 rounded-full border border-[#dadada] flex items-center justify-center"
                  onClick={() => updateQuantity("salad", 1)}
                >
                  <Plus className="w-4 h-4 text-[#000000]" />
                </button>
              </div>
            </div>
            <div className="mt-1 text-lg font-medium">$5</div>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="px-5 mb-24">
        <h2 className="text-2xl font-medium text-[#040919] mb-4">Details</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-[#696868]">Total item(s)</span>
            <span className="font-medium">2</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#696868]">Subtotal</span>
            <span className="font-medium">$46</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#696868]">GST+Tax</span>
            <span className="font-medium">$2.6</span>
          </div>
          <div className="flex justify-between pt-1">
            <span className="text-[#040919] font-medium">Total</span>
            <span className="font-medium">$48.6</span>
          </div>
        </div>
      </div>

      {/* Payment Button */}
      <div className="fixed bottom-6 left-5 right-5">
        <button className="w-full bg-[#fe0000] text-white rounded-full py-3 px-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-[#fece00] flex items-center justify-center mr-2">
              <ChevronRight className="w-4 h-4 text-[#fe0000]" />
            </div>
            <span className="font-medium">Swipe to pay</span>
          </div>
          <span className="font-medium text-lg">$48.6</span>
        </button>
      </div>
    </div>
  )
}
