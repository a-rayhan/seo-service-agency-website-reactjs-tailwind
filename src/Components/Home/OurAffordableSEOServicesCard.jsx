import { IoMdArrowRoundForward } from "react-icons/io";

const OurAffordableSEOServicesCard = ({img, title, description}) => {
    return (
        <div className="bg-white p-8 flex flex-col justify-center items-center border-b-[6px] border-[#02a2e0] rounded-md hover:shadow-lg shadow-xl">
            <div>
                <img src={img} alt="" className="w-full h-full object-cover" />
            </div>

            <div>
                <h2 className="text-3xl font-bold my-4 text-center">
                    {title}
                </h2>

                <p className="text-lg font-medium text-[#696687] text-center">
                    {description}
                </p>
            </div>

            <div className="mt-8">
                <button className="flex items-center gap-x-1 text-[#02a2e0] text-xl hover:text-[#696687] font-bold">
                    Read more <IoMdArrowRoundForward />
                </button>
            </div>
        </div>
    );
};

export default OurAffordableSEOServicesCard;