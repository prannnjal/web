import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Xylotek - Next-Gen UX Design & Development",
  description: "Crafting next-generation user experiences through innovative design and cutting-edge technology. We specialize in web development, mobile apps, and digital solutions.",
  keywords: "Xylotek, UX design, web development, mobile apps, digital solutions, next-gen technology",
  authors: [{ name: "Xylotek" }],
  creator: "Xylotek",
  publisher: "Xylotek",
  robots: "index, follow",
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    title: "Xylotek - Next-Gen UX Design & Development",
    description: "Crafting next-generation user experiences through innovative design and cutting-edge technology.",
    url: "https://xylotek.com",
    siteName: "Xylotek",
    images: [
      {
        url: "/ChatGPT_Image_Feb_18__2026__12_52_36_AM-removebg-preview.png",
        width: 1200,
        height: 630,
        alt: "Xylotek Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xylotek - Next-Gen UX Design & Development",
    description: "Crafting next-generation user experiences through innovative design and cutting-edge technology.",
    images: ["/ChatGPT_Image_Feb_18__2026__12_52_36_AM-removebg-preview.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "any" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.png",
  },
  manifest: "/site.webmanifest",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  )
}
