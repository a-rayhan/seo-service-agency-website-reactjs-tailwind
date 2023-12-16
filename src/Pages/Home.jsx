import Hero from "../Components/Header/Hero/Hero";
import AuditForm from "../Components/Home/AuditForm";
import BookAnAppoinment from "../Components/Home/BookAnAppoinment";
import CallToAction from "../Components/Home/CallToAction";
import Experiences from "../Components/Home/Experiences";
import HowDoesSEOHelp from "../Components/Home/HowDoesSEOHelp";
import HowDoesWeGrowYourBusiness from "../Components/Home/HowDoesWeGrowYourBusiness";
import LatestCaseStudy from "../Components/Home/LatestCaseStudy";
import LocalInternationalBrands from "../Components/Home/LocalInternationalBrands";
import OurAffordableSEOServices from "../Components/Home/OurAffordableSEOServices";
import OurSEOGrowthStrategy from "../Components/Home/OurSEOGrowthStrategy";
import Reviews from "../Components/Home/Reviews";
import SmallSeoServices from "../Components/Home/SmallSeoServices";
import Testimonial from "../Components/Home/Testimonial";

const Home = () => {
    return (
        <div>
            <Hero />
            <SmallSeoServices />
            <Reviews />
            <CallToAction />
            <OurAffordableSEOServices />
            <Experiences />
            <AuditForm />
            <HowDoesSEOHelp />
            <HowDoesWeGrowYourBusiness />
            <Testimonial />
            <BookAnAppoinment />
            <OurSEOGrowthStrategy />
            <LocalInternationalBrands />
            <LatestCaseStudy />
        </div>
    );
};

export default Home;