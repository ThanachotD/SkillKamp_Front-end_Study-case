import Link from 'next/link';
import { useState } from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {CiUser , CiShoppingCart} from 'react-icons/ci'
import Image from 'next/image'
import Products from '../Products';
export default function Newarrivals() {
    
    return (
        <>
       
       <div className="flex justify-center  my-8">
        <div className="grid grid-cols-1 gap-4">
        <div className="flex justify-center"><h1 className='text-2xl tracking-widest '>New Arrivals</h1></div>
        
        <div className="flex justify-center p-8" >
            <div className="grid lg:grid-cols-4 gap-4 grid-cols-1 md:grid-cols-2">
            <Products />
            <Products />
            <Products />
            <Products />
            </div>
        </div>
        </div>
        </div>
        </>
    );
}