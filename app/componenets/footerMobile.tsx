import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react'

const FooterMobile = () => {
    return (
        <footer className="lg:hidden flex flex-col w-full h-[600px]">
            <div className="bg-[#1A1A1D] text-white py-12 flex items-center justify-center">
                <div className="container flex flex-col justify-between items-center h-full">
                    <div className="flex items-center justify-center flex-grow mb-4">
                        <Image
                            src="/logo.svg"
                            alt="Logo"
                            width={80}
                            height={40}
                            className="w-[70px] sm:w-[80px]"
                        />
                        <h2 className="text-3xl font-semibold">DecentInvest</h2>
                    </div>
                    <p className="text-[#E7E7E7] text-xl xl:text-2xl leading-none">
                        Invest Decently, Invest Decentrally
                    </p>
                    <div className="mt-16 flex flex-col w-full px-8">
                        <h3 className="text-[#E7E7E7] font-medium mb-2 text-left md:text-[18px] lg:text-[25px]">Subscribe to our newsletter</h3>
                        <div className="flex items-center w-full">
                            <input
                                type="email"
                                placeholder="Enter your Email Address"
                                className="bg-[#E7E7E7] px-3 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 flex-grow h-[35px]"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-[#FFB200] text-black py-1 sm:py-2  rounded-xl hover:bg-yellow-400 mt-4 w-[120px] sm:w-[150px] ml-auto"
                        >
                            Submit
                        </button>
                    </div>
                </div>

            </div>

            <div className="bg-black text-white w-full flex items-center justify-center flex-col">
                <div className="grid grid-cols-2 gap-2 md:text-[18px] lg:text-[25px] w-full mt-8">
                    <Link href="/" className="text-[#E7E7E7] hover:text-gray-300 text-center">Home</Link>
                    <Link href="/about" className="text-[#E7E7E7] hover:text-gray-300 text-center">Startups</Link>
                    <Link href="/newsletter" className="text-[#E7E7E7] hover:text-gray-300 text-center">Newsletter</Link>
                    <Link href="/startups" className="text-[#E7E7E7] hover:text-gray-300 text-center">About</Link>
                </div>
                <p className="text-[#E7E7E7] text-center mt-8">Contact Us:</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                        <Link href="#" className="hover:text-gray-300">
                            <Image
                                src="/twitter.svg"
                                alt="Transactions illustration"
                                width={25}
                                height={25}
                                className=""
                            />
                        </Link>
                        <Link href="#" className="hover:text-gray-300">
                            <Image
                                src="/facebook.svg"
                                alt="Transactions illustration"
                                width={28}
                                height={28}
                                className=""
                            />
                        </Link>
                        <Link href="#" className="hover:text-gray-300">
                            <Image
                                src="/linkedin.svg"
                                alt="Transactions illustration"
                                width={30}
                                height={30}
                                className=""
                            />
                        </Link>
                        <Link href="#" className="hover:text-gray-300">
                            <Image
                                src="/youtube.svg"
                                alt="Transactions illustration"
                                width={30}
                                height={30}
                                className=""
                            />
                        </Link>
                    </div>
                    <p className="text-[#E7E7E7] text-sm leading-none self-center mt-8">
                        © 2024 Brand, Inc. • Privacy • Terms
                    </p>
            </div>

        </footer>
    )
}

export default FooterMobile;
