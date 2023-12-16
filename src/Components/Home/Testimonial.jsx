import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 pb-24">
            <div className="mb-14">
                <p className="text-[#02a2e0] text-xl font-bold mb-3 text-center">
                    TESTIMONIAL
                </p>
                <h2 className="text-3xl font-bold text-[#3b3663] text-center mb-4">
                    What Clients Say!
                </h2>

                <p className="max-w-5xl mx-auto text-xl font-semibold text-[#3b3663] text-center">
                    Our clients become our biggest ambassadors. We have served many, creating satisfying experiences building their SEO strategies and growing their businesses. See their testimonials for yourself!
                </p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-between gap-6">
                <TestimonialCard
                    img={'https://giantmarketers.com/wp-content/uploads/2021/04/Jonathan-Grant.png'}
                    message={'It was great working with this awesome team. Always willing to do whatever it takes to get the job done right. It’s great working with them and I’d look forward to seeing how it pays off! I highly recommend them.'}
                    name={'Jonathan Grant'}
                    designation={'PERSONNEL CONSULTANT'}
                />

                <TestimonialCard
                    img={'https://giantmarketers.com/wp-content/uploads/2021/04/Goldie-Atwood.png'}
                    message={'There are so many professional SEO services I worked with and Giant marketers had a great budget range for me without compromising the quality. They should add more services with a budget range like they’re offering now.'}
                    name={'Goldie Atwood'}
                    designation={'MARKETING MANAGER'}
                />

                <TestimonialCard
                    img={'https://giantmarketers.com/wp-content/uploads/2021/04/Harrison-Cawood.png'}
                    message={'My whole planning would go in vain if I had not decided to consult with giant marketers before investing the money. GM showed me the best way to spend the money and the whole process of how I can get the best out of it.'}
                    name={'Tyson Teasdale'}
                    designation={'LOCAL BUSINESS OWNER'}
                />
            </div>
        </div>
    );
};

export default Testimonial;