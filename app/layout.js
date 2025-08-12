import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "LeadBoostX - Next-Gen UX Design & Development",
  description: "Crafting next-generation user experiences through innovative design and cutting-edge technology. We specialize in web development, mobile apps, and digital solutions.",
  keywords: "LeadBoostX, UX design, web development, mobile apps, digital solutions, next-gen technology",
  authors: [{ name: "LeadBoostX" }],
  creator: "LeadBoostX",
  publisher: "LeadBoostX",
  robots: "index, follow",
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    title: "LeadBoostX - Next-Gen UX Design & Development",
    description: "Crafting next-generation user experiences through innovative design and cutting-edge technology.",
    url: "https://leadboostx.com",
    siteName: "LeadBoostX",
    images: [
      {
        url: "/Screenshot_2025-08-13_023958-removebg-preview.png",
        width: 1200,
        height: 630,
        alt: "LeadBoostX Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeadBoostX - Next-Gen UX Design & Development",
    description: "Crafting next-generation user experiences through innovative design and cutting-edge technology.",
    images: ["/Screenshot_2025-08-13_023958-removebg-preview.png"],
  },
  icons: {
    icon: [
      { url: "/Screenshot_2025-08-13_023958-removebg-preview.png", sizes: "any" },
    ],
    apple: [
      { url: "/Screenshot_2025-08-13_023958-removebg-preview.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/Screenshot_2025-08-13_023958-removebg-preview.png",
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
        <link rel="icon" href="/Screenshot_2025-08-13_023958-removebg-preview.png" sizes="any" />
        <link rel="apple-touch-icon" href="/Screenshot_2025-08-13_023958-removebg-preview.png" />
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
