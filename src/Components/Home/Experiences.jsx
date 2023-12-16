import ExperiencesCard from "./ExperiencesCard";

const Experiences = () => {
    return (
        <section style={{backgroundImage: "url('https://giantmarketers.com/wp-content/uploads/2022/09/world-map3.png')", backgroundRepeat: "no-repeat", backgroundPosition: "center", objectFit: "cover"}} className="py-24">
            <div className="flex flex-col xl:flex-row items-center xl:items-start gap-16 max-w-7xl mx-auto px-6">
                <div className="flex-1">
                    <h2 className="text-4xl font-bold text-[#3b3663] mb-6">
                        14 Years of Experience in Online Marketing Industry
                    </h2>

                    <p className="text-xl font-medium text-[#696687]">
                        Giant Marketers has over 14 years of experience in the constantly changing online marketing industry, with a presence in over 55 countries that use our services. Our 50+ local and foreign hard-working SEO professionals have achieved a client satisfaction of 98% for small and medium-sized businesses just like yours.
                        <br /><br />
                        As an SEO service provider company in Bangladesh, yet working worldwide, we are experienced and specialized in this industry. From communication to planning to execution, we are best-in-class. Whichever professional service you need from us, you can trust us to do the job for you. We are passionate about helping businesses achieve their goals. We would love to do the same for you next!
                        <br /><br />
                        Our affordable SEO packages for small businesses are created for each client we take on, through collaboration with your vision, specifically designed to meet the needs of you and your business. From increasing your website traffic to building your brand as a trustworthy source that ranks higher in search, with our team of SEO experts in Bangladesh helping you – your business will be on the road to success in no time!
                    </p>

                    <button className="bg-[#02a2e0] px-8 py-3 rounded text-xl text-white font-bold mt-6">
                        About Us
                    </button>
                </div>

                <div className="flex-1">
                    <div>
                        <ExperiencesCard
                            years={'50'}
                            type={'Employees'}
                            text={'Our large team is full of diverse subject-matter specialists.'}
                        />

                        <div className="my-6 w-full h-[4px] bg-[#3b3663]" />

                        <ExperiencesCard
                            years={'55'}
                            type={'Country'}
                            text={'Our 40% retention rate proves our worth to the small business world.'}
                        />

                        <div className="my-6 w-full h-[4px] bg-[#3b3663]" />

                        <ExperiencesCard
                            years={'2000'}
                            type={'Clients'}
                            text={'Our 40% retention rate proves our worth to the small business world.'}
                        />

                        <div className="my-6 w-full h-[4px] bg-[#3b3663]" />

                        <ExperiencesCard
                            years={'3000'}
                            type={'Projects'}
                            text={'We have worked with businesses in many industries, both local and international.'}
                        />

                        <div className="my-6 w-full h-[4px] bg-[#3b3663]" />

                        <ExperiencesCard
                            years={'14'}
                            type={'Experience'}
                            text={'We have spent the last decade turning small names into million-dollar businesses.'}
                        />

                        <div className="my-6 w-full h-[4px] bg-[#3b3663]" />

                        <ExperiencesCard
                            years={'2'}
                            type={'Location'}
                            text={'1 physical office in Bangladesh and another physical office in Canada.'}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiences;