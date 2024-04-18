import VegetablesImage from "../images/Featured/Vegetables.png";
import FruitsImage from "../images/Featured/Fruits.png";
import JuiceImage from "../images/Featured/Juice.png";

import MainButton from "./ui/buttons/MainButton";

const FeaturedSection = () => {
  return (
    <section className="container mx-auto px-5 md:px-0 my-20">
      <h3 className="mb-8 font-semibold text-3xl uppercase">
        Featured products
      </h3>
      <div className="flex flex-col lg:flex-row gap-9 w-full h-fit">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-8 bg-[#FFDD60] rounded-xl py-14 px-10">
          <h2 className="font-semibold text-center max-w-64 text-2xl">
            FRESH VEGETABLES <br />
            <span className="text-3xl font-bold md:text-5xl">BIG SALE</span>
          </h2>
          <img src={VegetablesImage} alt="Vegetables" />
        </div>

        <div className="flex flex-col w-full gap-9">
          <div className="flex flex-col h-1/2 items-center sm:items-end justify-center gap-8 bg-[#FF7272] rounded-xl py-14 px-14 relative">
            <h2 className="font-semibold text-center sm:text-end text-2xl text-white z-10">
              FRESH FRUIT
              <span className="text-3xl font-bold"> SUPER SALE</span>
            </h2>
            <MainButton className="bg-black text-white z-10">
              SHOP NOW
            </MainButton>
            <img
              src={FruitsImage}
              alt="Fruits"
              className="max-h-full sm:absolute sm:top-0 sm:left-0"
            />
          </div>

          <div className="flex flex-col h-1/2 items-center sm:items-start justify-center gap-8 bg-[#FF9564] rounded-xl py-14 px-5 relative">
            <h2 className="font-semibold text-center sm:text-end text-2xl text-white z-10">
              ENJOY YOUR
              <span className="text-3xl font-bold"> FRESH DRINK</span>
            </h2>
            <div className="flex items-center gap-5">
              <MainButton className="bg-black text-white z-10">
                SHOP NOW
              </MainButton>
              <div className="font-bold text-sm z-10">
                UP TO 20% <br /> DISCOUNT
              </div>
            </div>
            <img
              src={JuiceImage}
              alt="Juice"
              className="max-h-full sm:absolute sm:top-0 sm:right-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
