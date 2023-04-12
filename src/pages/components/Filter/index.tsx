import Link from 'next/link';
import { useState } from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {CiUser , CiShoppingCart} from 'react-icons/ci'
import Image from 'next/image'

export default function Filter() {
    
    return (
        <>
            <div className="grid grid-rows-5 grid-flow-col gap-4">
            <div>Filter by</div>
            <div>Collection</div>
            <div>Price</div>
            <div>Color</div>
            <div>Size</div>
            </div>
        </>
    );
}