"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSlider() {
  return (
    <div className="w-full h-[500px] relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative h-full">
            <img
              src="https://videos.openai.com/vg-assets/assets%2Ftask_01k595mf5nf4trvgdfppb9vqrw%2F1758023335_img_0.webp?st=2025-09-16T10%3A01%3A13Z&se=2025-09-22T11%3A01%3A13Z&sks=b&skt=2025-09-16T10%3A01%3A13Z&ske=2025-09-22T11%3A01%3A13Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=JAeFvQetNpFtNNT7pcy2bR3k2fNuXoG2fea2bwhkCjg%3D&az=oaivgprodscus"
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-6">
              <h2 className="text-4xl font-bold mb-4">Welcome in our webshop!</h2>
              <p className="mb-6 text-lg">Explore our newest and greatest offers and prices.</p>
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg font-semibold transition">
                Explore
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative h-full">
            <img
              src="https://videos.openai.com/vg-assets/assets%2Ftask_01k595mf5nf4trvgdfppb9vqrw%2F1758023335_img_1.webp?st=2025-09-16T10%3A01%3A13Z&se=2025-09-22T11%3A01%3A13Z&sks=b&skt=2025-09-16T10%3A01%3A13Z&ske=2025-09-22T11%3A01%3A13Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=%2B4fDeBI5o%2FOTA8iG5razomIMJ0XuFB7Q2dx8uBg9s1s%3D&az=oaivgprodscus"
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-6">
              <h2 className="text-4xl font-bold mb-4">Discounts every month</h2>
              <p className="mb-6 text-lg">Do not miss our discounts and buy now!</p>
              <button className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg shadow-lg font-semibold transition">
                Buy now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative h-full">
            <img
              src="https://videos.openai.com/vg-assets/assets%2Ftask_01k595weatejntj5jzxg8w3bs1%2F1758023598_img_0.webp?st=2025-09-16T10%3A00%3A53Z&se=2025-09-22T11%3A00%3A53Z&sks=b&skt=2025-09-16T10%3A00%3A53Z&ske=2025-09-22T11%3A00%3A53Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=5lOXiIDCtWRBiwfgRkgc08DGaSpEcDA6p7XUCtHeylw%3D&az=oaivgprodscus"
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-6">
              <h2 className="text-4xl font-bold mb-4">Join Us</h2>
              <p className="mb-6 text-lg">Be a part of our community and get extra discounts!</p>
              <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg shadow-lg font-semibold transition">
                Registration
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
