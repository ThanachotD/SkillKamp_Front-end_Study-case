import Link from 'next/link';
import { useState } from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {CiUser , CiShoppingCart} from 'react-icons/ci'
import Image from 'next/image'

export default function Carousel() {
    
    return (
        <>
       <div>
         <Image
                src={'/Banner1.png'}
                alt="Picture of the author"
                width={1920} 
                height={1080}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
            />
       </div>
        </>
    );
}