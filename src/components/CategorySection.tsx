import VegetablesImage from "../images/Categories/Vegetables.png";
import FruitsImage from "../images/Categories/Fruit.png";
import DrinksImage from "../images/Categories/Drinks.png";
import NutsImage from "../images/Categories/Nuts.png";
import FishImage from "../images/Categories/Fish.png";
import MeatImage from "../images/Categories/Meat.png";
import TeaImage from "../images/Categories/Tea.png";

import "swiper/css";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { useState, useEffect } from "react";

const Categories = [
  {
    title: "Vegetables",
    img: VegetablesImage,
  },
  {
    title: "Fruits",
    img: FruitsImage,
  },
  {
    title: "Drinks",
    img: DrinksImage,
  },
  {
    title: "Nuts",
    img: NutsImage,
  },
  {
    title: "Fish",
    img: FishImage,
  },
  {
    title: "Meat",
    img: MeatImage,
  },
  {
    title: "Tea",
    img: TeaImage,
  },
];

const CategorySection = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const resizeHandler = () => setSize(window.innerWidth);
    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  const screenWidth = () => {
    if (size >= 640 && size <= 1280) return 3;
    if (size <= 640) return 2;
    return 6;
  };

  return (
    <section className="container mx-auto px-5 md:px-0 my-20">
      <h3 className="mb-8 font-semibold text-3xl uppercase">Category</h3>
      <Swiper
        modules={[Pagination]}
        className="pb-20 *:md:flex"
        spaceBetween={50}
        slidesPerView={screenWidth()}
        pagination={{ clickable: true }}
      >
        {Categories.map((category) => (
          <SwiperSlide
            key={category.title}
            className="flex flex-col items-center justify-center min-w-[150px] min-h-[150px]"
          >
            <img
              className="w-[150px] h-[100px] object-contain"
              src={category.img}
              alt={category.title}
            />
            <h2 className="font-semibold text-lg uppercase">
              {category.title}
            </h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CategorySection;
