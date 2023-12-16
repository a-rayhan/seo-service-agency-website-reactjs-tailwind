const HowDoesWeGrowYourBusinessCard = ({img, text, description}) => {
    return (
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 p-5 rounded shadow-lg bg-[#f7f7f7]">
            <img src={img} alt="" />

            <div>
                <p className="text-xl font-bold text-[#3b3663] mb-2">
                    {text}
                </p>

                <p className="text-[#696687] text-lg font-medium">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default HowDoesWeGrowYourBusinessCard;