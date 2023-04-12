import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Carousel from '.';
import Image from 'next/image';

export default function Carousel2 (){
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={4}
      width={1920}
      height={1080}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><Image
          src="/Banner2.png"
          alt="Picture 1"
          width={1920}
          height={1080}
         
        /></SwiperSlide>
      <SwiperSlide><Image
          src="/Banner2.png"
          alt="Picture 1"
          width={1920}
          height={1080}
         
        /></SwiperSlide>
      <SwiperSlide><Image
          src="/Banner2.png"
          alt="Picture 1"
          width={1920}
          height={1080}
         
        /></SwiperSlide>
      <SwiperSlide><Image
          src="/Banner2.png"
          alt="Picture 1"
          width={1920}
          height={1080}
         
        /></SwiperSlide>

    </Swiper>
  );
};