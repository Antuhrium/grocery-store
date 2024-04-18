import HeroImage from "../images/HeroImage.png";
import MainButton from "./ui/buttons/MainButton";

const HeroSection = () => {
  return (
    <section className="w-full bg-[#0B6434] py-20">
      <div className="md:container mx-5 md:mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:max-w-1/2">
          <h1 className="text-white font-bold text-5xl max-w-[35rem] uppercase">
            Healthy and Fresh Grocery
          </h1>
          <p className="mt-6 text-white text-[1rem] max-w-[30rem]">
            We pride ourselves on providing a curated of the finest,
            nutrient-rich products that cater to your health conscious
            lifestyle.
          </p>
          <MainButton className="mt-12 bg-white">Learn more</MainButton>
        </div>
        <div className="mt-12 md:mt-0 md:max-w-1/2">
          <img src={HeroImage} alt="Vegetables" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
