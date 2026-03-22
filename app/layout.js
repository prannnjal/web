import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"
import Script from "next/script"

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
    url: "https://xylotek.in",
    siteName: "Xylotek",
    images: [
      {
        url: "/assets/images/logo.jpeg",
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
    images: ["/assets/images/logo.jpeg"],
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=General+Sans:ital,opsz,wght@0,8..144,200..700;1,8..144,200..700&display=swap" />
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8937925647248720"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Xylotek",
              "url": "https://xylotek.in",
              "logo": "https://xylotek.in/logo.png",
              "sameAs": [
                "https://www.linkedin.com/company/xylotek",
                "https://twitter.com/xylotek",
                "https://www.facebook.com/xylotek"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Xylotek",
              "url": "https://xylotek.in",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://xylotek.in/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
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
