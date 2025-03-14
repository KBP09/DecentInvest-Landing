'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { toast } from "sonner"

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await fetch("https://newsletter-proxy.kanakbpandey2014.workers.dev", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
                mode: "cors",
            });
            toast("Newsletter subscribed");
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <footer id="newsletter" className="hidden lg:flex w-full flex-col sm:flex-row h-[380px]">
            <div className="bg-black text-white py-12 w-[50%] flex items-center justify-center">
                <div className="container mx-auto px-6 flex flex-col justify-between h-full">
                    <div className="space-y-4 flex flex-col items-center justify-center flex-grow">
                        <Image
                            src="/logo.svg"
                            alt="Logo"
                            width={100}
                            height={50}
                            className="w-[80px] sm:w-[100px]"
                            priority
                        />
                        <h2 className="text-4xl font-semibold">DecentInvest</h2>
                        <p className="text-[#E7E7E7] text-lg xl:text-xl leading-none">
                            Invest Decently, Invest Decentrally
                        </p>
                    </div>

                    <p className="text-[#E7E7E7] text-md leading-none self-center mt-auto">
                        © 2024 Brand, Inc. • Privacy • Terms
                    </p>
                </div>
            </div>

            <div className="bg-[#1A1A1D] text-white w-full flex items-center justify-center flex-col">
                <div className="grid grid-cols-3 gap-2 md:text-[18px] lg:text-[25px] w-full">
                    <Link href="/" className="text-[#E7E7E7] hover:text-gray-300 text-center">Home</Link>
                    <Link href="/startups" className="text-[#E7E7E7] hover:text-gray-300 text-center">Startups</Link>
                    <p className="text-[#E7E7E7] text-center">Contact Us:</p>
                    <Link href="/business" className="text-[#E7E7E7] hover:text-gray-300 text-center">Business</Link>
                    <Link href="/#aboutus" className="text-[#E7E7E7] hover:text-gray-300 text-center">About</Link>
                    <div className="flex items-center justify-center gap-2">
                        <Link href="https://x.com/DecentInvest24" className="hover:text-gray-300">
                            <Image
                                src="/twitter.svg"
                                alt="Transactions illustration"
                                width={25}
                                height={25}
                                className=""
                            />
                        </Link>
                        <Link href="https://x.com/DecentInvest24" className="hover:text-gray-300">
                            <Image
                                src="/mail2.svg"
                                alt="Transactions illustration"
                                width={28}
                                height={28}
                                className=""
                            />
                        </Link>
                        <Link href="https://x.com/DecentInvest24" className="hover:text-gray-300">
                            <Image
                                src="/linkedin.svg"
                                alt="Transactions illustration"
                                width={30}
                                height={30}
                                className=""
                            />
                        </Link>
                    </div>
                </div>

                <div className="mt-16 flex items-center justify-center w-full md:mr-16 lg:mr-0">
                    <div className="flex flex-col w-[60%]">
                        <h3 className="text-[#E7E7E7] font-medium mb-2 text-left md:text-[18px] lg:text-[25px]">Subscribe to our newsletter</h3>
                        <div className="flex items-center w-full">
                            <input
                                type="email"
                                placeholder="Enter your Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-[#E7E7E7] px-3 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 flex-grow"
                            />
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="bg-[#FFB200] text-black px-8 py-2 ml-2 rounded-xl hover:bg-yellow-400"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </footer>
    )
}

export default Footer
