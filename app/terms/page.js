"use client"

import Link from "next/link"
import { ArrowLeft, Gavel, FileText, Scale, AlertCircle } from "lucide-react"

export default function TermsAndConditions() {
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
            <Gavel className="w-8 h-8 text-red-500" />
          </div>
          <h1 className="text-4xl md:text-6xl font-generalsans font-bold mb-6">
            Terms & <span className="gradient-text">Conditions</span>
          </h1>
          <p className="text-white/40 font-generalsans">Last Updated: {lastUpdated}</p>
        </div>

        {/* Content */}
        <article className="prose prose-invert prose-red max-w-none font-generalsans space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-red-500" />
              1. Agreement to Terms
            </h2>
            <p className="text-white/70 leading-relaxed">
              By accessing or using the Xylotek website and services, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you disagree with any part of the terms, then you may not access the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Scale className="w-6 h-6 mr-3 text-red-500" />
              2. Intellectual Property
            </h2>
            <p className="text-white/70 leading-relaxed">
              The Service and its original content, features, and functionality are and will remain the exclusive property of Xylotek and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Xylotek.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <AlertCircle className="w-6 h-6 mr-3 text-red-500" />
              3. User Responsibilities
            </h2>
            <div className="text-white/70 space-y-4 leading-relaxed">
              <p>When using our services, you agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the service for any illegal purpose or in violation of any local, state, national, or international law.</li>
                <li>Violate or encourage others to violate the rights of third parties, including intellectual property rights.</li>
                <li>Post, upload, or distribute any content that is unlawful, defamatory, inaccurate, or that a reasonable person could deem objectionable.</li>
                <li>Interfere with security-related features of the service.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">4. Limitation of Liability</h2>
            <p className="text-white/70 leading-relaxed">
              In no event shall Xylotek, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">5. Governing Law</h2>
            <p className="text-white/70 leading-relaxed">
              These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 p-8 rounded-2xl mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">Questions?</h2>
            <p className="text-white/70 mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <ul className="text-white space-y-2 font-medium">
              <li>Email: solutionsxylotek@gmail.com</li>
              <li>Phone: +91 8051216699</li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  )
}
