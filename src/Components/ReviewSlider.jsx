import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import axios from "axios";

const ReviewSlider = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get("https://socio-server.vercel.app/reviews") 
      .then(res => setReviews(res.data))
      .catch(err => console.error("Error fetching reviews:", err));
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">What Our Users Say</h2>

<div className="[&_.swiper-pagination]:mt-8">
  <Swiper
    modules={[Autoplay, Pagination]}
    spaceBetween={30}
    slidesPerView={1}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    breakpoints={{
      640: { slidesPerView: 1 },
      1024: { slidesPerView: 3 },
    }}
    className="pb-12"
  >
    {reviews.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center">
          <img
            src={item.img}
            alt={item.name}
            className="w-20 h-20 object-cover rounded-full mb-4 border-2 border-gray-200"
          />
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <p className="text-gray-600 mt-3 leading-relaxed">{item.review}</p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

    </div>
  );
};

export default ReviewSlider;
