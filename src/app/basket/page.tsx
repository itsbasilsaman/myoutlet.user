"use client"

import { useState } from "react"
import { ArrowLeft, Edit, Minus, Plus, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Playfair_Display } from 'next/font/google'
import { Figtree } from 'next/font/google'
import dynamic from 'next/dynamic'

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'], // Choose weights as needed
  variable: '--font-figtree', // Optional for Tailwind use
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'], // customize weights as needed
  variable: '--font-playfair', // optional if using Tailwind
  display: 'swap',
})

const BasketClient = dynamic(() => import('./BasketClient'), {
  ssr: false
})

export default function BasketPage() {
  return <BasketClient />
}
