import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

import slide_image_1 from "../../../assets/images/image-1.jpg";
import slide_image_2 from "../../../assets/images/image-2.jpg";
import slide_image_3 from "../../../assets/images/image-3.jpg";
import slide_image_4 from "../../../assets/images/image-4.jpg";
import slide_image_5 from "../../../assets/images/image-5.jpg";

const Gallery = () => {
  return (
    <div className=" bg-[#030303]">
      <div className="w-3/4 mx-auto py-20 h-full">
        <div className="space-y-4">
          <h3 className="text-3xl font-bold">Fan Arts | <span className="text-[#F0141E]">Superfinity Gallery</span></h3>
          <div className="line h-1"></div>
        </div>
        <div className="w-full h-3/4 mt-10 grid lg:grid-cols-2 gap-4">
          <div className="flex items-center"  data-aos="fade-up-right">
            <div className="lg:w-3/4 space-y-3">
              <h3 className="lg:text-3xl text-2xl font-bold">
                <span className="text-[#F0141E]">Marvel Masterpieces:</span> Fan Art Showcase
              </h3>
              <p>
                Unleashing the Imagination of Marvel Fans: Discover an
                Extraordinary Collection of Fan-Created Artwork Celebrating Your
                Favorite Superheroes. Immerse Yourself in the Talents of Marvel
                Enthusiasts, Bringing Marvel Characters to Life with Passion and
                Creativity.
              </p>
              <button className="border lg:px-7 px-3 lg:py-3 py-2 rounded-md font-semibold hover:bg-[#F0141E] hover:ease-in hover:duration-200 hover:transition">Submit Yours</button>
            </div>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
            data-aos="fade-up-left"
          >
            <SwiperSlide>
              <img src={slide_image_1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_5} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
