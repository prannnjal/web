import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import ResultsSection from "@/components/results-section"
import PackagesSection from "@/components/packages-section"
import ContactSection from "@/components/contact-section"

export const metadata = {
  title: "Xylotek - Digital Solutions & Custom ERP Software",
  description: "Xylotek provides comprehensive digital solutions including Web Development, Mobile Apps, UI/UX Design, and Custom ERP Software. Transform your business with us.",
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ResultsSection />
      {/* <PackagesSection /> */}
      <ContactSection />
    </>
  )
}
