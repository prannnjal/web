import ContactSection from "@/components/contact-section"

export const metadata = {
    title: "Contact Us | Xylotek",
    description: "Get in touch with Xylotek for your next digital project. We are ready to bring your vision to life.",
}

export default function ContactPage() {
    return (
        <div className="pt-20 bg-black min-h-screen">
            <ContactSection />
        </div>
    )
}
