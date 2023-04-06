import Link from 'next/link';
import { useState } from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {CiUser , CiShoppingCart} from 'react-icons/ci'

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    return (
        <>
            <div className='w-full flex justify-center bg-[#282828] text-white p-2 text-lg tracking-widest'>
                Free shipping Over $50
            </div>
            <nav className="w-full bg-white shadow">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link href="/">
                                <h2 className="text-2xl text-[#282828] font-bold ">h a p p y &nbsp; k i d s</h2>
                                </Link>      
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-[#282828]"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-[#282828]"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="text-[#282828]">
                                    <Link href="/home">
                                    <div >Home </div>
                                    </Link>
                                </li>
                                <li className="text-[#282828]">
                                    <Link href="/shopcollection">
                                    <div>Shop Collection</div>
                                    </Link>
                                </li>
                                <li className="text-[#282828]">
                                    <Link href="/ourstory">
                                    <div>Our Story</div>
                                    </Link>
                                </li>
                                <li className="text-[#282828]">
                                    <Link href="/contact">
                                    <div>Contact</div>
                                    </Link>
                                </li>
                                    <li className="text-[#282828]">
                                    <Link href="/">
                                    <div className='flex flex-row'> 
                                    <div className='mr-2'><CiUser size={25}/> </div>
                                    <div>Log In</div>
                                    </div>
                                    </Link>
                                </li>
                                     <li className="text-[#282828]">
                                    <Link href="/purchase">
                                    <div className='flex flex-row' >
                                        <div className='mr-2'><CiShoppingCart size={25} /></div> 
                                        <div>My Cart</div>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}