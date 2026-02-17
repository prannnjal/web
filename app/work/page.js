import ResultsSection from "@/components/results-section"

export const metadata = {
    title: "Our Work & Results | Xylotek",
    description: "See how we've helped businesses achieve exceptional results with our digital solutions.",
}

export default function WorkPage() {
    return (
        <div className="pt-20 bg-black min-h-screen">
            <ResultsSection />
        </div>
    )
}
