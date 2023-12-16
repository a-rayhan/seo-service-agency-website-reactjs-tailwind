const ExperiencesCard = ({years, type, text}) => {
    return (
        <div className="flex items-center gap-10">
            <div className="w-44">
                <h3 className="text-[40px] font-bold text-[#3b3663]">
                    {years}<span>+</span>
                </h3>
                <p className="text-[#696687] text-xl font-medium">
                    {type}
                </p>
            </div>

            <div>
                <p className="text-[#696687] text-xl font-medium">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default ExperiencesCard;