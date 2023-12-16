import LatestCaseStudyCard from "./LatestCaseStudyCard";

const LatestCaseStudy = () => {
    return (
        <div className="bg-[#f8f9fb] py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-14">
                    <p className="text-[#02a2e0] text-xl font-bold mb-3 text-center">
                        CASE STUDY
                    </p>
                    <h2 className="text-3xl font-bold text-[#3b3663] text-center mb-4">
                        Our Latest Case Study
                    </h2>

                    <p className="max-w-5xl mx-auto text-xl font-semibold text-[#3b3663] text-center">
                        Read our latest case studies for more information on our service offering deliverables and their stellar, quantifiable results. We use our own case studies to 1) showcase how SEO is so vital to helping businesses grow, and 2) help us to keep up to date with the changing trends in the digital marketing industry. In all, we always want to maintain our track record by creating the best service for you, our clients.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <LatestCaseStudyCard
                        img={'https://giantmarketers.com/wp-content/uploads/2021/08/a.png'}
                        name={'Coffee Shop Website'}
                        num1={'270'}
                        num2={'110'}
                    />
                    <LatestCaseStudyCard
                        img={'https://giantmarketers.com/wp-content/uploads/2021/08/b.png'}
                        name={'Motor Vehicle Website'}
                        num1={'210'}
                        num2={'105'}
                    />
                    <LatestCaseStudyCard
                        img={'https://giantmarketers.com/wp-content/uploads/2021/08/c.png'}
                        name={'Restaurant Website'}
                        num1={'200'}
                        num2={'90'}
                    />
                    <LatestCaseStudyCard
                        img={'https://giantmarketers.com/wp-content/uploads/2021/08/d.png'}
                        name={'Services Website'}
                        num1={'170'}
                        num2={'90'}
                    />
                    <LatestCaseStudyCard
                        img={'https://giantmarketers.com/wp-content/uploads/2021/08/e.png'}
                        name={'Cleaning Company Website'}
                        num1={'150'}
                        num2={'70'}
                    />
                    <LatestCaseStudyCard
                        img={'https://giantmarketers.com/wp-content/uploads/2021/08/f.png'}
                        name={'Cleaning Company Website'}
                        num1={'165'}
                        num2={'80'}
                    />
                </div>

                <div className="flex justify-center mt-5">
                    <button className="bg-[#02a2e0] px-8 py-3 rounded text-xl text-white font-bold mt-6">
                        See All Case Studies
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LatestCaseStudy;