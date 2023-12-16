import { IoDocumentTextOutline } from "react-icons/io5";
import { ImLink } from "react-icons/im";
import { MdSettingsSuggest } from "react-icons/md";
import { PiLightbulbFill } from "react-icons/pi";

const AuditForm = () => {
    return (
        <section style={{ backgroundImage: "url('https://giantmarketers.com/wp-content/uploads/2021/07/bg-pattern-1536x640.png')", backgroundRepeat: "no-repeat", backgroundPosition: "center", objectFit: "cover" }} className="bg-[#0d183f] text-white">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="mb-12">
                    <h2 className="text-[40px] font-bold text-center mb-3 leading-tight">
                        Get A FREE SEO Audit For Your Website!
                    </h2>

                    <p className="max-w-lg lg:max-w-2xl mx-auto text-xl font-medium text-center">
                        To prove our value to you, we will complete an SEO Audit Report to evaluate the current state of your
                        website, for FREE!
                    </p>
                </div>

                <div className="flex flex-col items-center gap-x-6 gap-y-2">
                    <div>
                        <div className="bg-gray-700 p-6">
                            <div className="bg-gray-400 p-5">
                                <form>
                                    <div className="grid xl:grid-cols-3 gap-3">
                                        <div className="w-full mx-auto">
                                            <input type="text"
                                                placeholder="URL"
                                                className="w-full py-4 px-6 rounded placeholder:text-lg"
                                                required
                                            />
                                        </div>

                                        <div className="w-full mx-auto">
                                            <input type="text"
                                                placeholder="Email"
                                                className="w-full py-4 px-6 rounded placeholder:text-lg"
                                            />
                                        </div>

                                        <div className="flex justify-center items-center">
                                            <button className="text-xl bg-[#02a2e0] py-4 w-full rounded text-white font-medium">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="mt-3 flex flex-col lg:flex-row justify-between items-center gap-5">
                                <div>
                                    <p className="flex items-center gap-2 text-lg font-medium">
                                        <IoDocumentTextOutline />
                                        Onpage Audit
                                    </p>
                                </div>
                                <div>
                                    <p className="flex items-center gap-2 text-lg font-medium">
                                        <ImLink />
                                        Backlinks Audit
                                    </p>
                                </div>
                                <div>
                                    <p className="flex items-center gap-2 text-lg font-medium">
                                        <MdSettingsSuggest />
                                        Technical SEO
                                    </p>
                                </div>
                                <div>
                                    <p className="flex items-center gap-2 text-lg font-medium">
                                        <PiLightbulbFill />
                                        Suggestion
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p className="text-sm mt-3 text-[#b1b1b1]">
                            *The Audit Report Will Be Sent To Your Mail Within 120 Hours
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuditForm;