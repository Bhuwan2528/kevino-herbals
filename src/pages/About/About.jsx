import React from 'react'
import Banner from '../../components/GlobalComponents/Banner/Banner'

const About = () => {
    return (
        <div>
            <Banner
                title="About Us"
                subtitle="Explore our wide range of organic, pure, and healthy herbal products curated directly from nature."
                bgImage="https://t3.ftcdn.net/jpg/12/18/39/96/360_F_1218399642_i043CCylG6xIXVbVeypnkVbcGiGpW6BO.jpg"
            />
            <section className="herbal-about-section">
                <div className="container">

                    {/* HEADER */}
                    <div className="herbal-about-header">
                        <span className="herbal-about-tag">About Our Brand</span>
                        <h2>
                            Rooted in Nature,
                            <br /> Backed by Science
                        </h2>
                        <p>
                            We combine traditional herbal wisdom with modern research to create
                            safe, effective, and reliable products that support your everyday health.
                        </p>
                    </div>

                    {/* MAIN GRID */}
                    <div className="herbal-about-grid">

                        {/* IMAGE */}
                        <div className="herbal-about-img image-hover">
                            <img src="/about-herbal.jpg" alt="Herbal products" />
                        </div>

                        {/* CONTENT */}
                        <div className="herbal-about-content">

                            <div className="herbal-about-point card">
                                <h3>🌿 Pure Ingredients</h3>
                                <p>
                                    Carefully sourced herbs with no harmful additives —
                                    ensuring safety and natural effectiveness.
                                </p>
                            </div>

                            <div className="herbal-about-point card">
                                <h3>🧪 Research Driven</h3>
                                <p>
                                    Every formulation is crafted with scientific validation
                                    to ensure real and consistent results.
                                </p>
                            </div>

                            <div className="herbal-about-point card">
                                <h3>🤝 Trusted by Thousands</h3>
                                <p>
                                    Our growing community trusts us for quality,
                                    transparency, and results that matter.
                                </p>
                            </div>

                            {/* STATS */}
                            <div className="herbal-about-stats">
                                <div>
                                    <h4>10K+</h4>
                                    <span>Customers</span>
                                </div>
                                <div>
                                    <h4>50+</h4>
                                    <span>Herbal Products</span>
                                </div>
                                <div>
                                    <h4>4.8★</h4>
                                    <span>Ratings</span>
                                </div>
                            </div>

                            <button className="btn-primary">
                                Shop Herbal Range →
                            </button>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default About