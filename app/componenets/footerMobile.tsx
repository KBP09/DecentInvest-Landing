'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FooterMobile = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbxpfdwzeQW-tTvV6CCjEyOadkvUVjUeidOy-3iHyiGTZqS6MhP4xcQL0ccDleDHRbSn/exec", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            setMessage(data.message || "Something went wrong!");
        } catch (error) {
            setMessage("Failed to subscribe. Try again later.");
        }
    };
    return (
        <footer className="lg:hidden flex flex-col w-full">
            <div className="bg-[#1A1A1D] text-white py-8 flex items-center justify-center">
                <div className="container flex flex-col justify-between items-center h-[200px] sm:max-h-[300px]">
                    <div className="flex items-center justify-center mb-2">
                        <Image
                            src="/logo.svg"
                            alt="Logo"
                            width={60}
                            height={30}
                            className="w-[60px] sm:w-[70px]"
                            priority
                        />
                        <h2 className="text-2xl font-semibold ml-2">DecentInvest</h2>
                    </div>
                    <p className="text-[#E7E7E7] text-lg xl:text-xl leading-snug text-center">
                        Invest Decently, Invest Decentrally
                    </p>
                    <div className="mt-8 flex flex-col w-full px-4">
                        <h3 className="text-[#E7E7E7] font-medium mb-2 text-left text-sm md:text-[16px] lg:text-[18px]">
                            Subscribe to our newsletter
                        </h3>
                        <div className="flex items-center w-full">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your Email Address"
                                className="bg-[#E7E7E7] px-2 py-1 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 flex-grow h-[30px]"
                            />
                        </div>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="bg-[#FFB200] text-black py-1 rounded-xl hover:bg-yellow-400 mt-3 w-[100px] sm:w-[120px] ml-auto"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-black text-white w-full flex items-center justify-center flex-col py-4 sm:py-6 ">
                <div className="grid grid-cols-2 gap-1 text-center md:text-[16px] lg:text-[20px] w-full">
                    <Link href="/" className="text-[#E7E7E7] hover:text-gray-300">Home</Link>
                    <Link href="/about" className="text-[#E7E7E7] hover:text-gray-300">Startups</Link>
                    <Link href="/newsletter" className="text-[#E7E7E7] hover:text-gray-300">Newsletter</Link>
                    <Link href="/startups" className="text-[#E7E7E7] hover:text-gray-300">About</Link>
                </div>
                <p className="text-[#E7E7E7] text-center mt-4 text-sm">Contact Us:</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                    <Link href="#" className="hover:text-gray-300">
                        <Image src="/twitter.svg" alt="Twitter" width={20} height={20} />
                    </Link>
                    <Link href="#" className="hover:text-gray-300">
                        <Image src="/facebook.svg" alt="Facebook" width={22} height={22} />
                    </Link>
                    <Link href="#" className="hover:text-gray-300">
                        <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
                    </Link>
                </div>
                <p className="text-[#E7E7E7] text-xs mt-4">
                    © 2024 Brand, Inc. • Privacy • Terms
                </p>
            </div>
        </footer>

    )
}

export default FooterMobile;
