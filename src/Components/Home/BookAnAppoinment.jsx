import { FaCalendarAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const BookAnAppoinment = () => {
    return (
        <section style={{ backgroundImage: "url('https://giantmarketers.com/wp-content/uploads/2021/07/bg-pattern-1536x640.png')", backgroundRepeat: "no-repeat", backgroundPosition: "center", objectFit: "cover" }} className="bg-[#0d183f] text-white">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="mb-8">
                    <h2 className="text-[40px] font-bold text-center mb-3 leading-tight">
                        Ready To Take Your Business To The Next Level?
                    </h2>

                    <p className="text-[18px] font-medium text-center">
                        Schedule a free consultation with one of our SEO experts and find out what we can do for you using the power of SEO strategies and discuss- <br /> <span className="font-bold">
                            ✓ Your business goals, objectives, and requirements ✓ The best SEO strategy for your Website ✓ The right package for your website SEO goals.</span>
                    </p>
                </div>

                <div className="flex justify-center">
                    <button className="flex items-center gap-3 text-lg font-bold uppercase bg-[#02a2e0] px-8 py-3 rounded">
                        <FaCalendarAlt />
                        Book an appoinment
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BookAnAppoinment;