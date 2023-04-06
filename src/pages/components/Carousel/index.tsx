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
        <div >
           <Image
                        src={'/Banner1.png'}
                        alt="Picture 1"
                        
                        width={1920}
                        height={1080}
                        className='static'
                        
                    />
        </div>
        </>
    );
}
