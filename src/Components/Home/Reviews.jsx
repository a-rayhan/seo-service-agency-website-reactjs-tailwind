import { FaStar } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa6";


const Reviews = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 pb-24">
            <div className="mb-12">
                <h2 className="text-4xl font-bold text-[#3b3663] text-center mb-6">
                    Affordable SEO Services For Small Businesses Like You!
                </h2>

                <p className="max-w-4xl mx-auto text-xl font-medium text-[#696687] text-center">
                    We average 5-star reviews from trusted online sources such as Facebook, Google and Trustpilot! Read our client reviews to gain a better understanding of the kind of service we are capable of providing to help grow businesses like yours.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-between gap-6">
                <div className="cursor-pointer bg-[#f7f7f7] hover:shadow-lg rounded-md flex items-center gap-7 h-[131px] py-2 ps-5 shadow-inner border-b-[6px] border-[#02a2e0]">
                    <div className="bg-[#e5f6fc] w-[70px] h-[70px] rounded-md flex justify-center items-center">
                        <AiOutlineFacebook className="text-[#13a8e2] text-4xl" />
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-[#3b3663]">
                            Facebook Reviews
                        </p>

                        <p className="text-base text-[#696687]">
                           Based on 166 reviews
                        </p>

                        <div className="text-[#3b3663] flex gap-2 text-lg">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                </div>

                <div className="cursor-pointer bg-[#f7f7f7] hover:shadow-lg rounded-md flex items-center gap-7 h-[131px] py-2 ps-5 shadow-inner border-b-[6px] border-[#02a2e0]">
                    <div className="bg-[#e5f6fc] w-[70px] h-[70px] rounded-md flex justify-center items-center">
                        <FaGoogle className="text-[#13a8e2] text-4xl" />
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-[#3b3663]">
                            Google Reviews
                        </p>

                        <p className="text-base text-[#696687]">
                           Based on 235 reviews
                        </p>

                        <div className="text-[#3b3663] flex gap-2 text-lg">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                </div>

                <div className="cursor-pointer bg-[#f7f7f7] hover:shadow-lg rounded-md flex items-center gap-7 h-[131px] py-2 ps-5 shadow-inner border-b-[6px] border-[#02a2e0]">
                    <div className="bg-[#e5f6fc] w-[70px] h-[70px] rounded-md flex justify-center items-center">
                        <FaStar className="text-[#13a8e2] text-4xl" />
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-[#3b3663]">
                            Trustpilot Reviews
                        </p>

                        <p className="text-base text-[#696687]">
                           Based on 9 reviews
                        </p>

                        <div className="text-[#3b3663] flex gap-2 text-lg">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;