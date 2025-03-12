import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <div className="w-full h-[500px]">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        modules={[Navigation, Pagination, Autoplay]}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="h-full flex items-center justify-center bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 text-white">
            <div className="text-center p-10">
              <h2 className="text-5xl font-extrabold mb-4">Welcome to EquipHub</h2>
              <p className="text-lg">Find the best sports equipment with ease.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="h-full flex items-center justify-center bg-gradient-to-r from-purple-900 via-purple-600 to-purple-400 text-white">
            <div className="text-center p-10">
              <h2 className="text-5xl font-extrabold mb-4">Best Deals & Offers</h2>
              <p className="text-lg">Get premium quality gear at unbeatable prices.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="h-full flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 text-white">
            <div className="text-center p-10">
              <h2 className="text-5xl font-extrabold mb-4">Join Our Sports Community</h2>
              <p className="text-lg">Connect with athletes and enthusiasts worldwide.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
  