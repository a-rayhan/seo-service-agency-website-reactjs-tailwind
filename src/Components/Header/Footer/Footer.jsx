import { CiMobile1 } from "react-icons/ci";
import { GrMapLocation } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
    return (
        <footer className='bg-[#0d183f]'>
            <div className='max-w-7xl mx-auto px-6 text-white py-8'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-6'>
                    <div className='flex flex-col xl:flex-row xl:items-center gap-5'>
                        <CiMobile1 className='text-6xl text-[#02a2e0]' />
                        <div className='text-lg'>
                            <p>+88 01911 806157</p>
                            <p>+88 01711930027</p>
                            <p>service@giantmarketers.com</p>
                        </div>
                    </div>
                    <div className='flex flex-col xl:flex-row xl:items-center gap-5'>
                        <GrMapLocation className='text-5xl text-[#02a2e0]' />
                        <div className='text-lg'>
                            <p>Amin Tower [3rd & 4th Floor]</p>
                            <p>H.No – 224/202, Jhawtola,</p>
                            <p>Comilla 3500, Bangladesh</p>
                        </div>
                    </div>
                    <div className='flex flex-col xl:flex-row xl:items-center gap-5'>
                        <GrMapLocation className='text-5xl text-[#02a2e0]' />
                        <div className='text-lg'>
                            <p>Giant Marketers Inc.</p>
                            <p>3552 W 41st Ave, Vancouver, BC</p>
                            <p>V6N 3E6 , Canada</p>
                        </div>
                    </div>
                </div>

                <div className='bg-[#ffffff33] w-full h-[2px] my-8' />

                <div className='flex flex-col lg:flex-row flex-wrap justify-between gap-10'>
                    <div className='max-w-[427px]'>
                        <p className='text-2xl font-semibold mb-5'>
                            About Us
                        </p>

                        <p className='text-lg mb-8 font-medium'>
                            Giant Marketers is one of the fastest-growing SEO agencies in Bangladesh. We help businesses with SEO, Website Design and Development, Online Business Consultancy, and other SEO services to grow and make an impact online with results-driven strategies derived from our 14 years of industry experience. Our passionate team of 50+ SEO experts who have established a strong global presence for GM by successfully providing SEO services to over 3000+ clients across 55+ countries.
                        </p>

                        <div className='text-xl flex gap-3'>
                            <FaTwitter />
                            <FaFacebookF />
                            <FaLinkedinIn />
                            <FaYoutube />
                            <FaPinterestP />
                            <FaInstagram />
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row flex-wrap gap-10'>
                        <div>
                            <h2 className='text-2xl font-semibold mb-5'>
                                Featured Services
                            </h2>
                            <div className='flex flex-col gap-3 font-medium'>
                                <p className='flex items-center gap-2 text-lg hover:text-[#ff6900] cursor-pointer'>
                                    <IoIosArrowForward />
                                    Shopify SEO Services
                                </p>
                                <p className='flex items-center gap-2 text-lg hover:text-[#ff6900] cursor-pointer'>
                                    <IoIosArrowForward />
                                    eCommerce SEO Services
                                </p>
                                <p className='flex items-center gap-2 text-lg hover:text-[#ff6900] cursor-pointer'>
                                    <IoIosArrowForward />
                                    SaaS SEO Services
                                </p>
                                <p className='flex items-center gap-2 text-lg hover:text-[#ff6900] cursor-pointer'>
                                    <IoIosArrowForward />
                                    White Label SEO Service
                                </p>
                                <p className='flex items-center gap-2 text-lg hover:text-[#ff6900] cursor-pointer'>
                                    <IoIosArrowForward />
                                    Real Outreach backlinks
                                </p>
                                <p className='flex items-center gap-2 text-lg hover:text-[#ff6900] cursor-pointer'>
                                    <IoIosArrowForward />
                                    Monthly SEO Packages
                                </p>
                                <p className='flex items-center gap-2 text-lg hover:text-[#ff6900] cursor-pointer'>
                                    <IoIosArrowForward />
                                    Local SEO Services
                                </p>
                                <p className='flex items-center gap-2 text-lg hover:text-[#ff6900] cursor-pointer'>
                                    <IoIosArrowForward />
                                    SEO Friendly Website Design
                                </p>
                                <p className='flex items-center gap-2 text-lg hover:text-[#ff6900] cursor-pointer'>
                                    <IoIosArrowForward />
                                    WordPress Speed Optimization
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className='text-2xl font-semibold mb-5'>
                                Giant Marketers
                            </h2>
                            <div className='flex flex-col gap-3 font-medium'>
                                <p className='flex items-center gap-2 text-lg hover:text-[#ff6900] cursor-pointer'>
                                    <IoIosArrowForward />

                                    About Us
                                </p>
                                <p className='flex items-center gap-2 text-lg hover:text-[#ff6900] cursor-pointer'>
                                    <IoIosArrowForward />

                                    GM Team
                                </p>
                                <p className='flex items-center gap-2 text-lg hover:text-[#ff6900] cursor-pointer'>
                                    <IoIosArrowForward />

                                    Career
                                </p>
                                <p className='flex items-center gap-2 text-lg hover:text-[#ff6900] cursor-pointer'>
                                    <IoIosArrowForward />

                                    GM Culture
                                </p>
                                <p className='flex items-center gap-2 text-lg hover:text-[#ff6900] cursor-pointer'>
                                    <IoIosArrowForward />

                                    Contribution
                                </p>
                                <p className='flex items-center gap-2 text-lg hover:text-[#ff6900] cursor-pointer'>
                                    <IoIosArrowForward />

                                    Consultancy
                                </p>
                                <p className='flex items-center gap-2 text-lg hover:text-[#ff6900] cursor-pointer'>
                                    <IoIosArrowForward />

                                    Case Study
                                </p>
                                <p className='flex items-center gap-2 text-lg hover:text-[#ff6900] cursor-pointer'>
                                    <IoIosArrowForward />

                                    Testimonials
                                </p>
                                <p className='flex items-center gap-2 text-lg hover:text-[#ff6900] cursor-pointer'>
                                    <IoIosArrowForward />

                                    Blog
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className='text-2xl font-semibold mb-5'>
                                Important Links
                            </h2>
                            <div className='flex flex-col gap-3 font-medium'>
                                <p className='flex items-center gap-2 text-lg hover:text-[#ff6900] cursor-pointer'>
                                    <IoIosArrowForward />

                                    SEO Quote
                                </p>
                                <p className='flex items-center gap-2 text-lg hover:text-[#ff6900] cursor-pointer'>
                                    <IoIosArrowForward />

                                    Contact Us
                                </p>
                                <p className='flex items-center gap-2 text-lg hover:text-[#ff6900] cursor-pointer'>
                                    <IoIosArrowForward />

                                    Sales Support
                                </p>
                                <p className='flex items-center gap-2 text-lg hover:text-[#ff6900] cursor-pointer'>
                                    <IoIosArrowForward />

                                    How To Order
                                </p>
                                <p className='flex items-center gap-2 text-lg hover:text-[#ff6900] cursor-pointer'>
                                    <IoIosArrowForward />

                                    Refund Policy
                                </p>
                                <p className='flex items-center gap-2 text-lg hover:text-[#ff6900] cursor-pointer'>
                                    <IoIosArrowForward />

                                    Disclaimer
                                </p>
                                <p className='flex items-center gap-2 text-lg hover:text-[#ff6900] cursor-pointer'>
                                    <IoIosArrowForward />

                                    FAQ
                                </p>
                                <p className='flex items-center gap-2 text-lg hover:text-[#ff6900] cursor-pointer'>
                                    <IoIosArrowForward />

                                    Privacy Policy
                                </p>
                                <p className='flex items-center gap-2 text-lg hover:text-[#ff6900] cursor-pointer'>
                                    <IoIosArrowForward />

                                    T&C
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-[#ffffff33] w-full h-[4px] mt-8 mb-5' />

                <div className='flex flex-col md:flex-row justify-between text-sm font-medium gap-3'>
                    <p>
                        © 2023 Giant Marketers. All Rights Reserved.
                    </p>

                    <div className='flex gap-4'>
                        <p>
                            We accept:
                        </p>

                        <div className='flex gap-2'>
                            <img src="https://giantmarketers.com/wp-content/uploads/2021/03/paypal1.png" alt="" />

                            <img src="https://giantmarketers.com/wp-content/uploads/2021/03/payoneer1.png" alt="" />

                            <img src="https://giantmarketers.com/wp-content/uploads/2021/03/master_card1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;