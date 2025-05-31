'use client'

import React from 'react'
import Link from 'next/link'

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <Link href="/" className="px-4 py-2 bg-blue-500 text-white rounded">
        Go back home
      </Link>
    </div>
  )
} 