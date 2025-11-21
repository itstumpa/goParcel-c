import HeroSection from "./Sections/HeroSection";
import HowitWorks from "./Sections/HowitWorks";
import FAQ from "./Sections/FAQ";
import OurServices from "./Sections/OurServices/OurServices";
import Brands from "./Sections/Brands";
import FeaturesSection from "./Sections/FeaturesSection";
import CTASection from "./Sections/CTASection";
import Reviews from "./Sections/Reviews";



const Home = () => {


  return (
    <div className="home-page">
      <HeroSection />
<Brands/>
      <div className="" >
        <HowitWorks/>
      </div>
<div>
  <OurServices/>
</div>
      <FeaturesSection/>
      <CTASection/>
      <Reviews/>

    
      <div>
       
        <FAQ/>
      </div>
      
    </div>
  );
};

export default Home;
