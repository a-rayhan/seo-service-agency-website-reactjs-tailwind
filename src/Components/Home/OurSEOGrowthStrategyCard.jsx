const OurSEOGrowthStrategyCard = ({text, description}) => {
    return (
        <div>
            <div className="flex gap-x-5">
                <div className="mt-3">
                    <img src='https://giantmarketers.com/wp-content/uploads/2021/08/blue-chek-icon-XY40.png' alt="" />
                </div>

                <div className="flex-1">
                    <p className="text-xl text-[#696687]">
                        <span className="font-bold text-[#3b3663]">{text}</span> {description}
                    </p>

                    <hr className="my-8" />
                </div>
            </div >
        </div>
    );
};

export default OurSEOGrowthStrategyCard;