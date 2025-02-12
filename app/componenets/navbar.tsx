'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="fixed z-50 w-full top-4 md:pr-4 md:pl-4">
            <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto px-4 lg:px-0 lg:mr-2 lg:pr-12 lg:ml-4 lg:w-full">

                <div className="flex items-center space-x-2">
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={100}
                        height={50}
                        className='w-[80px] sm:w-[100px]'
                    />
                </div>

                <button
                    type="button"
                    className="inline-flex items-center w-12 p-2 h-12 text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                    onClick={handleToggle}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div
                    className={`lg:hidden w-full ${isOpen ? 'block' : 'hidden'} transition-transform duration-300 transform ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
                    id="navbar-default"
                >
                    <ul className="font-bold flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-white md:bg-transparent dark:bg-white dark:border-gray-700">
                        <li>
                            <Link href='/' className='px-[15px] py-[12px] flex items-center justify-center text-black cursor-pointer whitespace-nowrap font-bold relative'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/#aboutus" className='px-[15px] py-[12px] flex items-center justify-center text-black  cursor-pointer whitespace-nowrap'>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/#newsletter" className='px-[15px] py-[12px] flex items-center justify-center text-black cursor-pointer whitespace-nowrap'>
                                NewsLetter
                            </Link>

                        </li>
                        <li>
                            <Link href='/startups' className='px-[15px] py-[12px] flex items-center justify-center text-black cursor-pointer whitespace-nowrap'>
                                Startups
                            </Link>
                        </li>
                    </ul>
                </div>

                <ul className="hidden justify-end lg:flex items-center space-x-4 text-black h-[8vh] font-bold rounded-full ml-auto bg-white px-6 lg:px-8 xl:px-11">
                    <Link href='/'>
                        <li className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
                            Home
                        </li>
                    </Link>
                    <Link href='/#aboutus'>
                        <li className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
                            About Us
                        </li>
                    </Link>
                    <Link href='/#newsletter'>
                        <li className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
                            Newsletter
                        </li>
                    </Link>
                    <Link href='/startups'>
                        <li className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
                            Startups
                        </li>
                    </Link>
                    <button className="bg-[#FFB200] text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-500 transition-colors duration-300">
                        <Link href='/business'>
                            <li className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
                                Business
                            </li>
                        </Link>
                    </button>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar
