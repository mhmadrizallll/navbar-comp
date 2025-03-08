// import Image1 from "../../assets/img/ayo.jpg";
import Image2 from "../../assets/img/ayo2.jpeg";
import { ImageSwiper } from "../../data";
// import { FaBook } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { categories } from "../../data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

// Import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="homepage container mx-auto">
      {/* Banner */}
      <div className="banner pt-42 relative">
        <div className="flex justify-center md:gap-5 items-center p-5 md:p-10">
          {/* Tombol Navigasi di luar */}
          <div className="w-full md:w-8/12 swipper-main">
            <button className="custom-prev swiper-button-prev"></button>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true} // Loop agar terus berjalan
              autoplay={{
                delay: 5000, // Waktu antara slide (dalam ms)
                disableOnInteraction: false, // Jangan berhenti jika user interaksi
              }}
              pagination={{ clickable: true }}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              {ImageSwiper.map((image) => (
                <SwiperSlide key={image.id}>
                  <Link to={image.path}>
                    <img
                      src={image.image}
                      alt={image.path}
                      className="w-full md:h-[300px] lg:h-[410px] xl:h-[500px] rounded-2xl shadow-b-2xl"
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="custom-next swiper-button-next"></button>
          </div>

          {/* Container untuk dua gambar kecil */}
          <div className="hidden w-4/12 md:flex md:flex-col items-center justify-center gap-2 h-full">
            <div>
              <img
                src={Image2}
                alt=""
                className="w-full md:h-[150px] lg:h-[200px] xl:h-[250px] rounded-2xl"
              />
            </div>
            <div>
              <img
                src={Image2}
                alt=""
                className="w-full md:h-[150px] lg:h-[200px] xl:h-[250px] rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Kategori */}
      <div className="categories my-10 p-5">
        <Swiper
          spaceBetween={30}
          loop={true} // Loop agar terus berjalan
          autoplay={{
            delay: 2000, // Waktu antara slide (dalam ms)
            disableOnInteraction: false, // Jangan berhenti jika user interaksi
          }}
          modules={[Autoplay]} // Tambahkan modul autoplay
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
            1440: { slidesPerView: 8 },
          }}
          className="mySwiper overflow-visible"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <SwiperSlide key={category.id} className="overflow-visible p-2">
                <Link to={`/category/${category.id}`}>
                  <div
                    className="flex flex-col items-center gap-2 rounded-xl shadow 
                  h-30 justify-center hover:bg-amber-50
                  transition-all duration-300 ease-in-out overflow-visible hover:cursor-pointer"
                  >
                    <Icon className="text-2xl" />
                    <p className="text-sm">{category.name}</p>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default HomePage;
