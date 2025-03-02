// import Image1 from "../../assets/img/ayo.jpg";
import Image2 from "../../assets/img/ayo2.jpeg";
import { ImageSwiper } from "../../data";
import { FaBook } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="homepage container mx-auto">
      {/* Banner */}
      <div className="banner pt-42">
        <div className="flex justify-center items-center">
          {/* Gambar utama - Tinggi 2x dari gambar kecil */}
          <div className="w-full md:w-8/12">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {ImageSwiper.map((image) => (
                <SwiperSlide key={image.id}>
                  <Link to={image.path}>
                    <img
                      src={image.image}
                      alt=""
                      className="w-full md:h-[300px] lg:h-[410px] xl:h-[500px] rounded-2xl shadow-b-2xl"
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
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
      <div className="categories pt-20">
        <div className="flex justify-center items-center gap-5 border">
          <div className="flex flex-col items-center justify-center shadow p-10 rounded-2xl">
            <FaBook className="text-4xl" />
            <p>Buku Romance</p>
          </div>
          <div className="flex flex-col items-center justify-center shadow p-10 rounded-2xl">
            <FaBook className="text-4xl" />
            <p>Buku Romance</p>
          </div>
          <div className="flex flex-col items-center justify-center shadow p-10 rounded-2xl">
            <FaBook className="text-4xl" />
            <p>Buku Romance</p>
          </div>
          <div className="flex flex-col items-center justify-center shadow p-10 rounded-2xl">
            <FaBook className="text-4xl" />
            <p>Buku Romance</p>
          </div>
          <div className="flex flex-col items-center justify-center shadow p-10 rounded-2xl">
            <FaBook className="text-4xl" />
            <p>Buku Romance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
