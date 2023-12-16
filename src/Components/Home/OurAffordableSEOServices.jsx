import OurAffordableSEOServicesCard from "./OurAffordableSEOServicesCard";

const OurAffordableSEOServices = () => {
    return (
        <section className="bg-[#f7f7f7] py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold text-[#3b3663] text-center mb-4">
                        Our Affordable Search Engine Optimization Services
                    </h2>

                    <p className="max-w-4xl mx-auto text-xl font-bold text-[#3b3663] text-center">
                        Your business is set to scale and we know just how to do it. Using our SEO services on your website means getting a step ahead of the competition.
                    </p>

                    <p className="text-xl font-semibold text-[#696687] text-center my-8">
                        For over a decade now, with our company as a top-notch SEO expert in Bangladesh, we have provided every kind of service offering in the SEO industry to clients around the globe. As a result, we know search engines and online growth strategies inside and out. Here are the professional SEO services packages that Giant Marketers provides for clients:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    <OurAffordableSEOServicesCard
                        img={'https://giantmarketers.com/wp-content/uploads/2021/09/Keyword-Research-2.png'}
                        title={'SEO'}
                        description={'Our team of specialists can help optimize both on-page and off-page SEO. We will work to develop a unique strategy for your small or medium-sized business website to boost your ranking on the Google SERP.'}
                    />

                    <OurAffordableSEOServicesCard
                        img={'https://giantmarketers.com/wp-content/uploads/2021/10/E-Commerce.png'}
                        title={'E-Commerce'}
                        description={'Ecommerce companies need their sites and content optimized for search. In order to expand in the competitive online arena, no matter your business category, you’ll need some help! Our team knows what drives eCommerce.'}
                    />

                    <OurAffordableSEOServicesCard
                        img={'https://giantmarketers.com/wp-content/uploads/2021/09/Monthly-SEO-packages.png'}
                        title={'SEO for SaaS'}
                        description={'Make the most out of our scalable SEO approach for SaaS businesses to explore opportunities for your organic growth, overcome all your online challenges, and generate more leads as well as revenues.'}
                    />

                    <OurAffordableSEOServicesCard
                        img={'https://giantmarketers.com/wp-content/uploads/2021/09/Monthly-SEO-packages.png'}
                        title={'Monthly SEO Packages'}
                        description={'Get your online business discovered and growing with our monthly SEO service package. We will ensure that your website is always up-to-date with the best-in-practice SEO strategies and content.'}
                    />

                    <OurAffordableSEOServicesCard
                        img={'https://giantmarketers.com/wp-content/uploads/2021/09/Guest-post-backlinks.png'}
                        title={'Guest Post Backlinks'}
                        description={'We provide advisory on guest posting contributions to other blogs or websites in an effort to gain exposure for your own. Backlinking is an excellent way to increase your traffic for keyword ranking and compete on SERPs.'}
                    />

                    <OurAffordableSEOServicesCard
                        img={'https://giantmarketers.com/wp-content/uploads/2021/09/Local-SEO.png'}
                        title={'Local SEO'}
                        description={'We can show you the ideal strategy guide to boost your signal in local search results. Local SEO provides the most benefit for businesses serving a specific geographical area or community.'}
                    />

                    <OurAffordableSEOServicesCard
                        img={'https://giantmarketers.com/wp-content/uploads/2021/09/Technical-SEO-2.png'}
                        title={'Technical SEO'}
                        description={'A technical SEO audit will ensure that your website meets the technical requirements of search engines. This will improve your rankings organically by resolving your site’s technical issues for the search engine algorithm.'}
                    />

                    <OurAffordableSEOServicesCard
                        img={'https://giantmarketers.com/wp-content/uploads/2021/09/Web-design-and-development.png'}
                        title={'Web Design & Development'}
                        description={'Your website’s appearance influences how users perceive your brand and business, and how long they stick around on your page. We can help you strategize your web design to make the best possible first impression.'}
                    />

                    <OurAffordableSEOServicesCard
                        img={'https://giantmarketers.com/wp-content/uploads/2021/09/Website-Maintenance.png'}
                        title={'Website Maintenance'}
                        description={'Keeping your website maintained and updated is a key part of running a business. We will help you ensure that you never let down your users by sustaining your site’s content as always up-to-date.'}
                    />
                </div>
            </div>
        </section>
    );
};

export default OurAffordableSEOServices;