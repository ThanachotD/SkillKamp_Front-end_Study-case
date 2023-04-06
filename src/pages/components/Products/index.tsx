import Link from 'next/link';
import { useState } from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {CiUser , CiShoppingCart} from 'react-icons/ci'
import Image from 'next/image'

export default function Products() {
    
    return (
        <>
            <div className="flex justify-center" >
            <div className="grid grid-cols-1 justify-items-center">
            <div> <Image
                        src={'/Product/Product1.png'}
                        alt="Picture 1"
                        
                        width={1920}
                        height={1080}
                        className='static'
                        
                    /></div>
            <div>I`m product</div>
            <div>19,99₺</div>
            <div className='mt-2 py-2 text-[12px] bg-[#282828] text-white w-full flex justify-center'>Add to Cart</div>
            </div> 
            </div>
        </>
    );
}