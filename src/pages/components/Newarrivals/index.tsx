import Link from 'next/link';
import { useState } from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {CiUser , CiShoppingCart} from 'react-icons/ci'
import Image from 'next/image'

export default function Newarrivals() {
    
    return (
        <>
       <div className='flex justify-center'>
         <h1>New Arrivals</h1>
          <Image
                src={'/Product/product1.png'}
                alt="Picture of the author"
                width={320} 
                height={320}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
            />
       </div>
        </>
    );
}