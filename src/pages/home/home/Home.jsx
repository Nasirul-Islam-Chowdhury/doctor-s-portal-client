import Banner from "../banner/Banner";
import Contact from "../contact/Contact";
import DentalCare from "../dentalCare/DentalCare";
import InfoCards from "../infoCards/InfoCards";
import MakeApointment from "../makeApointment/MakeApointment";
import Services from "../service/Services";
import Testimonial from "../testomonial/Testimonial";

const Home = () => {
    return (
        <div className="lg:mx-5 bg-white text-black">
          <Banner/>
          <InfoCards/>
          <Services/>
          <DentalCare/>
          <MakeApointment/>
          <Testimonial/>
          <Contact/>
        </div>
    );
};

export default Home;