import { FaCalendarAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const CallToAction = () => {
    return (
        <section style={{backgroundImage: "url('https://giantmarketers.com/wp-content/uploads/2021/07/bg-pattern-1536x640.png')", backgroundRepeat: "no-repeat", backgroundPosition: "center", objectFit: "cover"}} className="bg-[#0d183f] text-white">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="mb-12">
                    <h2 className="text-[40px] font-bold text-center mb-3 leading-tight">
                        Ready To Grow Your Business?
                    </h2>

                    <p className="max-w-lg lg:max-w-4xl mx-auto text-xl font-medium text-center">
                        Just take a step ahead and contact us today or get a free quote to discuss how we can help you.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-x-6 gap-y-2">
                    <div className="bg-[#02a2e0] hover:bg-transparent px-5 py-3 rounded-lg border-2 border-white cursor-pointer w-full md:w-auto">
                        <button className="flex items-center gap-3 text-lg font-medium uppercase px-6 md:px-0">
                            <FaCalendarAlt />
                            Book an appoinment
                        </button>
                    </div>

                    <p className="text-2xl font-bold">
                        OR
                    </p>

                    <div className="hover:bg-[#02a2e0] px-5 py-3 rounded-lg border-2 border-white cursor-pointer w-full md:w-auto">
                        <button className="flex items-center gap-3 text-lg font-medium uppercase px-6 md:px-0">
                            <IoCall className="text-xl" />
                            Call +8801911806157
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;