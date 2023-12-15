const Hero = () => {
    return (
        <section className="bg-[#0d183f] text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col xl:flex-row justify-between gap-x-20 gap-y-14 pb-10 xl:py-12">
                    <div className="flex-1 mt-6">
                        <h1 className="text-[42px] md:text-6xl font-bold leading-tight mb-10">
                            Digital Marketing For Scaling Your Online Business, <span className="text-[#02a2e0]">14 Years Experience In</span> <br />
                            Web Developer.
                        </h1>

                        <p className="text-xl font-medium">
                            We’re an SEO agency in Bangladesh with a combination of a robust and top-notch team of 50+ SEO experts. Giant Marketers help any small to medium-sized business reach the top of search rankings, build a strong online presence, and generate more leads and revenue with our affordable SEO services. We have successfully established a strong global presence by Providing SEO services to 3000+ clients in 55+ countries.
                        </p>
                    </div>

                    <div className="flex-1 XL:max-w-[430px]">
                        <div className="bg-[#f7f7f7] p-6 rounded-lg">
                            <div className="flex justify-center items-center mb-4 shadow-lg">
                                <button className="text-2xl bg-[#02a2e0] py-5 w-full rounded text-white font-bold">
                                    GET START NOW!
                                </button>
                            </div>

                            <form action="">
                                <div className="w-full mb-4 shadow-md">
                                    <div className="flex flex-col">
                                        <input type="text" name="email" placeholder="Enter Your Name *" className="py-4 px-6 text-xl font-semibold rounded-lg placeholder:text-xl placeholder:font-semibold" required />
                                    </div>
                                </div>

                                <div className="mb-4 shadow-md">
                                    <div className="flex flex-col">
                                        <input type="text" name="password" placeholder="Enter Your Email *" className="py-4 px-6 text-xl font-semibold rounded-lg placeholder:text-xl placeholder:font-semibold" />
                                    </div>
                                </div>

                                <div className="mb-4 shadow-md">
                                    <div className="flex flex-col">
                                        <input type="text" name="password" placeholder="Enter Your Phone *" className="py-4 px-6 text-xl font-semibold rounded-lg  placeholder:text-xl placeholder:font-semibold" />
                                    </div>
                                </div>

                                <div className="mb-4 grid grid-cols-2 gap-4">
                                    <div>
                                        <input type="checkbox" name="" className="w-8 cursor-pointer" />
                                        <label className="text-gray-500 text-base md:text-lg font-semibold">Consultancy</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="" className="w-8 cursor-pointer" />
                                        <label className="text-gray-500 text-base md:text-lg font-semibold">SEO Strategy</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="" className="w-8 cursor-pointer" />
                                        <label className="text-gray-500 text-base md:text-lg font-semibold">Project</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="" className="w-8 cursor-pointer" />
                                        <label className="text-gray-500 text-base md:text-lg font-semibold">Ranking Strategy</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="" className="w-8 cursor-pointer" />
                                        <label className="text-gray-500 text-base md:text-lg font-semibold">Audit</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="" className="w-8 cursor-pointer" />
                                        <label className="text-gray-500 text-base md:text-lg font-semibold">SEO Quote</label>
                                    </div>
                                </div>

                                <div className="mb-4 shadow-md">
                                    <div className="flex flex-col">
                                        <textarea rows={3} type="password" name="password" placeholder="Enter Your Message" className="py-4 px-6 text-xl font-semibold rounded-lg placeholder:text-xl placeholder:font-semibold" />
                                    </div>
                                </div>

                                <div className="flex justify-center items-center mt-7 shadow-md">
                                    <button className="text-xl bg-[#02a2e0] py-4 w-full rounded text-white font-bold">
                                        SUBMIT
                                    </button>
                                </div>
                            </form>

                            <p className="text-gray-500 text-[10px] md:text-[11px] pt-3 text-center">
                                ∗ Mandatory fields, We respect your privacy and your data are 100% safe!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;