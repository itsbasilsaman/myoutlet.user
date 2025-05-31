import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Page not found</h2>
      <p className="text-gray-600 mb-4">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" className="px-4 py-2 bg-blue-500 text-white rounded">
        Go back home
      </Link>
    </div>
  )
} 