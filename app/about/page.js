export const metadata = {
    title: "About Xylotek - Our Mission & Vision",
    description: "Learn about Xylotek's mission to craft next-generation user experiences through innovative design and cutting-edge technology.",
}

export default function AboutPage() {
    return (
        <div className="pt-20 bg-black min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="text-center mb-16 fade-in-up">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        About <span className="gradient-text">Xylotek</span>
                    </h1>
                    <p className="text-xl text-white/60 max-w-3xl mx-auto font-generalsans leading-relaxed">
                        We are a modern digital agency dedicated to transforming ideas into powerful, user-centric experiences.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-20 fade-in-up">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white font-generalsans">Our Mission</h2>
                        <p className="text-white/70 text-lg leading-relaxed">
                            At Xylotek, our mission is to bridge the gap between imagination and reality. We believe that technology should not just exist but perform, inspire, and elevate businesses to new heights.
                        </p>
                        <p className="text-white/70 text-lg leading-relaxed">
                            We strive to deliver digital solutions that are not only visually stunning but also technically robust, ensuring that every project we undertake becomes a benchmark of quality and innovation.
                        </p>
                    </div>
                    <div className="glass-card p-8 rounded-2xl border border-white/10 bg-white/5">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="text-center p-4">
                                <div className="text-4xl font-bold text-red-500 mb-2">5+</div>
                                <div className="text-white/60">Years Experience</div>
                            </div>
                            <div className="text-center p-4">
                                <div className="text-4xl font-bold text-blue-500 mb-2">500+</div>
                                <div className="text-white/60">Projects Completed</div>
                            </div>
                            <div className="text-center p-4">
                                <div className="text-4xl font-bold text-green-500 mb-2">98%</div>
                                <div className="text-white/60">Client Satisfaction</div>
                            </div>
                            <div className="text-center p-4">
                                <div className="text-4xl font-bold text-purple-500 mb-2">24/7</div>
                                <div className="text-white/60">Support</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-20 fade-in-up">
                    <h2 className="text-3xl font-bold text-white text-center mb-12 font-generalsans">Our Core Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="glass-card p-8 hover:bg-white/5 transition-all duration-300">
                            <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
                            <p className="text-white/60">
                                We push boundaries and explore new technologies to deliver cutting-edge solutions that keep you ahead of the curve.
                            </p>
                        </div>
                        <div className="glass-card p-8 hover:bg-white/5 transition-all duration-300">
                            <h3 className="text-xl font-bold text-white mb-4">Quality</h3>
                            <p className="text-white/60">
                                Excellence is not an act, but a habit. We maintain rigorous standards in every line of code and every pixel of design.
                            </p>
                        </div>
                        <div className="glass-card p-8 hover:bg-white/5 transition-all duration-300">
                            <h3 className="text-xl font-bold text-white mb-4">Client-Centric</h3>
                            <p className="text-white/60">
                                Your success is our success. We work collaboratively, transparently, and tirelessly to bring your vision to life.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
