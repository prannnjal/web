"use client"

import Link from "next/link"
import { ArrowLeft, Shield, Lock, Eye, FileText } from "lucide-react"

export default function PrivacyPolicy() {
  const lastUpdated = "March 23, 2026"

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center text-white/60 hover:text-white mb-12 transition-colors group font-generalsans"
        >
          <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-16">
          <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center mb-6 border border-red-600/20">
            <Shield className="w-8 h-8 text-red-500" />
          </div>
          <h1 className="text-4xl md:text-6xl font-generalsans font-bold mb-6">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-white/40 font-generalsans">Last Updated: {lastUpdated}</p>
        </div>

        {/* Content */}
        <article className="prose prose-invert prose-red max-w-none font-generalsans space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Eye className="w-6 h-6 mr-3 text-red-500" />
              1. Introduction
            </h2>
            <div className="text-white/70 space-y-4 leading-relaxed">
              <p>
                At Xylotek, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website or use our services.
              </p>
              <p>
                By using our website, you consent to the data practices described in this policy. If you do not agree with the terms of this Privacy Policy, please do not access the site.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-red-500" />
              2. Information We Collect
            </h2>
            <div className="text-white/70 space-y-4 leading-relaxed">
              <p>We may collect several types of information from and about users of our website, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> Such as your name, email address, phone number, and company name when you contact us.</li>
                <li><strong>Usage Data:</strong> Information about your internet connection, the equipment you use to access our website, and usage details (IP addresses, browser type, etc.).</li>
                <li><strong>Payment Information:</strong> If you purchase our services, we may collect billing addresses and payment details through our secure payment processors.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Lock className="w-6 h-6 mr-3 text-red-500" />
              3. How We Use Your Information
            </h2>
            <div className="text-white/70 space-y-4 leading-relaxed">
              <p>We use the information we collect for various purposes, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our services.</li>
                <li>To notify you about changes to our services.</li>
                <li>To provide customer support and respond to your inquiries.</li>
                <li>To gather analysis or valuable information so that we can improve our website.</li>
                <li>To monitor the usage of our website and detect technical issues.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-red-500" />
              4. Data Security
            </h2>
            <p className="text-white/70 leading-relaxed">
              We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">5. Third-Party Services</h2>
            <p className="text-white/70 leading-relaxed">
              We may use third-party companies and individuals to facilitate our website ("Service Providers"), provide the website on our behalf, perform website-related services, or assist us in analyzing how our website is used. These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">6. Changes to This Policy</h2>
            <p className="text-white/70 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 p-8 rounded-2xl mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-white/70 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="text-white space-y-2">
              <li className="flex items-center">
                <span className="text-red-500 mr-2">Email:</span> solutionsxylotek@gmail.com
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">Phone:</span> +91 8051216699
              </li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  )
}
