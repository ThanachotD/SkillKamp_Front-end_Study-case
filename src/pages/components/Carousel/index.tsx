import Link from 'next/link';
import { useState } from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {CiUser , CiShoppingCart} from 'react-icons/ci'
import Image from 'next/image'
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Carousel() {

    return (
        <>
        <div className="relative md:h-[600px] lg:h-[900px] h-[731px] z-0">
        <Image
          src="/Banner2.png"
          alt="Picture 1"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 0"
         
        />
      </div>
        </>
    );
}
