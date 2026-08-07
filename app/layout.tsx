import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Bakhtar Dental Clinic | Your Smile, Our Priority",
  description:
    "Bakhtar Dental Clinic in Shahr-e-Naw, Kabul offers advanced, luxurious dental care with modern technology and professional specialists.",
  generator: "v0.app",

  icons: {
    icon: "/png.png",
    apple: "/png.png",
  },
}

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f8f4ec",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light bg-background ${inter.variable} ${playfair.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}