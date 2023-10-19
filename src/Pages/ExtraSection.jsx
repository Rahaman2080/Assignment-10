

const ExtraSection = () => {
    return (
        <div className="">
            <div className="text-center pt-12 pb-6">
                <h3 className="text-xl md:text-2xl font-bold"><span className="text-[#C33442]">INSPIRED</span> BY YOUR</h3>
                <h1 className="text-3xl md:text-5xl font-bold">PASSION</h1>
            </div>
            <section className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto p-5">
                <div className="rounded-lg shadow-xl bg-[#EBE9E6] col-span-2 py-10 px-5">
                    <h3 className="text-1xl md:text-3xl font-semibold">What you need</h3>
                    <h1 className="text-3xl md:text-5xl font-bold"><span className="text-[#C33442]">TO KNOW</span> ABOUT US</h1>
                    <p className="py-6">
                        "At [Fashion World Beauty Tips], we are passionate about quality and style. With a commitment to delivering the finest products, we strive to provide our customers with a unique shopping experience. Our collections are curated with love and dedication, reflecting our values of craftsmanship and fashion. Discover the essence of [Fashion World Beauty Tips] and join us in celebrating elegance and individuality."

                        Feel free to customize it with your brand's specific details and values. </p>
                    <div className="stats shadow mx-auto flex flex-col md:flex-row">

                        <div className="stat">
                            <div className="stat-figure text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </div>
                            <div className="stat-title">Total Likes</div>
                            <div className="stat-value text-primary">25.6K</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <div className="stat-title">Page Views</div>
                            <div className="stat-value text-secondary">2.6M</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 rounded-lg shadow-xl  bg-[#EBE9E6] h-80">
                    <div className=" text-center py-8" >
                            <div className="">
                                    <h1 className="mb-5 text-3xl md:text-5xl font-bold"><span className="text-[#C33442]">FIRST TIME</span> HERE?</h1>
                                    <p className="text-2xl md:text-4xl font-semibold">We are pleased to offer you</p>
                                    <p className="text-3xl font-bold"><span className="text-[#C33442]">10%</span> DISCOUNT</p>
                                    <button className="btn btn-primary btn-outline mt-5">Get Started</button>
                            </div>
                        </div>
                </div>
            </section>
        </div>
    );
};

export default ExtraSection;