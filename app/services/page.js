import ServicesSection from "@/components/services-section"
import PackagesSection from "@/components/packages-section"

export const metadata = {
    title: "Services & Packages | Xylotek",
    description: "Explore our comprehensive digital services including Web Development, App Development, and our flexible pricing packages.",
}

export default function ServicesPage() {
    return (
        <div className="pt-20 bg-black min-h-screen">
            <ServicesSection />
            <PackagesSection />
        </div>
    )
}
