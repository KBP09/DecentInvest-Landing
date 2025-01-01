import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="w-full flex h-[600px]">
            <div className="bg-black text-white py-12 w-[50%] flex items-center justify-center">
                <div className="container mx-auto px-6 flex flex-col justify-between h-full">
                    <div className="space-y-4 flex flex-col items-center justify-center flex-grow">
                        <Image
                            src="/logo.svg"
                            alt="Logo"
                            width={100}
                            height={50}
                            className="w-[80px] sm:w-[100px]"
                        />
                        <h2 className="text-5xl font-semibold">DecentInvest</h2>
                        <p className="text-[#E7E7E7] text-2xl leading-none">
                            Invest Decently, Invest Decentrally
                        </p>
                    </div>

                    <p className="text-[#E7E7E7] text-md leading-none self-center mt-auto">
                        © 2024 Brand, Inc. • Privacy • Terms
                    </p>
                </div>
            </div>

            <div className="bg-[#1A1A1D] text-white w-full flex items-center justify-center">
                <div className="grid grid-cols-3 gap-2 text-[25px] w-full">
                    <Link href="/" className="text-[#E7E7E7] hover:text-gray-300 text-center">Home</Link>
                    <Link href="/about" className="text-[#E7E7E7] hover:text-gray-300 text-center">Startups</Link>
                    <p className="text-[#E7E7E7] hover:text-gray-300 text-center">Contact Us:</p>
                    <Link href="/newsletter" className="text-[#E7E7E7] hover:text-gray-300 text-center">Newsletter</Link>
                    <Link href="/startups" className="text-[#E7E7E7] hover:text-gray-300 text-center">About</Link>
                    <div className="flex items-center justify-center gap-4">
                        <Link href="#" className="hover:text-gray-300">
                            <Twitter className="h-6 w-6" />
                        </Link>
                        <Link href="#" className="hover:text-gray-300">
                            <Facebook className="h-6 w-6" />
                        </Link>
                        <Link href="#" className="hover:text-gray-300">
                            <Linkedin className="h-6 w-6" />
                        </Link>
                        <Link href="#" className="hover:text-gray-300">
                            <Youtube className="h-6 w-6" />
                        </Link>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer
