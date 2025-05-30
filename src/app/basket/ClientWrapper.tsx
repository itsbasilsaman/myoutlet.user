'use client'

import dynamic from 'next/dynamic'

const BasketClient = dynamic(() => import('./BasketClient'), { ssr: false })

export default function ClientWrapper() {
  return <BasketClient />
} 