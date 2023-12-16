import { TbCircleArrowUpFilled } from "react-icons/tb";

const LatestCaseStudyCard = ({img, name, num1, num2}) => {
    return (
        <div className="bg-white p-8 border-2 rounded-lg">
            <div className="my-4 flex justify-center lg:justify-start">
                <img src={img} alt="" />
            </div>

            <p className="text-xl font-medium text-[#757575] text-center lg:text-start">
                {name}
            </p>

            <hr className="my-3" />

            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                <div className="flex flex-col gap-3">
                    <p className="flex items-center text-xl font-bold gap-4">
                        <TbCircleArrowUpFilled className="text-green-700" />
                        {num1}%
                    </p>

                    <p className="flex items-center text-xl font-bold gap-4">
                        <TbCircleArrowUpFilled className="text-green-700" />
                        {num2}%
                    </p>
                </div>

                <div className="text-base text-[#757575] font-medium text-center lg:text-start flex flex-col gap-2">
                    <p>
                        Increase in Website Traffic
                    </p>

                    <p>
                        Increase in Leads
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LatestCaseStudyCard;