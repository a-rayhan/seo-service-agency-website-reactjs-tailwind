import { FaStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const TestimonialCard = ({img, message, name, designation}) => {
    return (
        <div className="bg-white shadow-2xl p-8 flex flex-col justify-center items-center rounded-md">
            <div className="w-[80px] h-[80px] rounded-full mb-4">
                <img src={img} alt="" className="w-full h-full object-cover" />
            </div>

            <FaQuoteRight className="text-[#02a2e0] text-2xl mb-3" />

            <div className="text-[#fdcc0d] flex gap-2 text-lg mb-3">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>

            <div>
                <p className="text-lg font-medium text-[#696687] text-center mb-6">
                    {message}
                </p>

                <div>
                    <h2 className="text-2xl text-[#3b3663] font-bold text-center mb-1">
                        {name}
                    </h2>

                    <p className="text-center text-[#02a2e0]">
                        {designation}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;