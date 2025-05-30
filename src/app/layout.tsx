import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ReduxProvider } from "@/providers/ReduxProvider"

export const metadata: Metadata = {
  title: "My Outlet - Food Delivery",
  description: "Order your favorite food online",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
