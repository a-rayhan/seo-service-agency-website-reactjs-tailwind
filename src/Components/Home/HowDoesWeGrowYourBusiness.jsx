import HowDoesWeGrowYourBusinessCard from "./HowDoesWeGrowYourBusinessCard";

const HowDoesWeGrowYourBusiness = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="mb-12">
                <h2 className="text-4xl font-bold text-[#3b3663] text-center mb-4">
                    How Does Giant Marketers Grow Your Business?
                </h2>

                <p className="max-w-4xl mx-auto text-xl font-semibold text-[#3b3663] text-center">
                    For every client project we take on, a roadmap is drawn up at the start of our journey together. Our roadmap helps us all gain a clear idea of what we aim to achieve in a specific time period.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <HowDoesWeGrowYourBusinessCard
                    img={'https://giantmarketers.com/wp-content/uploads/2021/09/Goals-and-Objectives.png'}
                    text={'Goals and Objectives'}
                    description={'To begin, we will listen to your goals and objectives for your business. Understanding your industry and the purpose of the product or service you offer is the first step.'}
                />

                <HowDoesWeGrowYourBusinessCard
                    img={'https://giantmarketers.com/wp-content/uploads/2021/09/data-driven-seo.png'}
                    text={'Data Driven SEO'}
                    description={'Understanding your business goals and objectives, we will then start to analyse quantitative and qualitative data to develop a custom SEO strategy for you.'}
                />

                <HowDoesWeGrowYourBusinessCard
                    img={'https://giantmarketers.com/wp-content/uploads/2021/09/SEO-Strategy-Roadmap.png'}
                    text={'SEO Strategy Roadmap'}
                    description={'To help track our progress together, our roadmap will be supplied to you and continuously updated as we move through each stage of our strategy.'}
                />

                <HowDoesWeGrowYourBusinessCard
                    img={'https://giantmarketers.com/wp-content/uploads/2021/09/Quality-Standard.png'}
                    text={'Quality Standard'}
                    description={'As part of maintaining our quality standards, our team will provide documentation on requirements, specifications, guidelines, and characteristics for each of our deliverables.'}
                />

                <HowDoesWeGrowYourBusinessCard
                    img={'https://giantmarketers.com/wp-content/uploads/2021/09/Process-and-Execution.png'}
                    text={'Process and Execution'}
                    description={'Our work processes are proven to be value-added. We promise to execute our work in a timely and efficient manner, in line with the original scope and strategy we established together.'}
                />

                <HowDoesWeGrowYourBusinessCard
                    img={'https://giantmarketers.com/wp-content/uploads/2021/09/monitoring.png'}
                    text={'Monitoring & Progress Tracking'}
                    description={'As we execute our plan, we will provide consistent updates on our work. This is to help you keep track of our progress toward the completion date.'}
                />
            </div>
        </div>
    );
};

export default HowDoesWeGrowYourBusiness;