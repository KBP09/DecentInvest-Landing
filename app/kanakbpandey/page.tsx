import React from 'react'
import Image from 'next/image';
import { GradientCard } from '../componenets/gradientCard';
import { ProfileCard } from '../componenets/profileCard';
import NftSection from '../componenets/nftSection';

const Page = () => {
    const gradientStyle = "linear-gradient(180deg, #300C3B 0%, #48114C 50%, #B3278C 100%)";
    const values = ['*', '*', '*', '2', '3'];
    const cardData = [
        { title: "Completed", value: "*.1*%" },
        { title: "In Progress", value: "*9%" }
    ];

    return (
        <div className="pt-[15vh] min-h-screen bg-black">
            <div className="flex gap-8 justify-center w-full p-8 flex-col md:flex-row items-center">
                <ProfileCard className="aspect-[30/39] max-w-[300px] sm:max-w-[300px] h-[280px] sm:h-[320px] flex items-center justify-center overflow-hidden">
                    <div className="relative w-full h-full">
                        <Image
                            src="/kbp.jpg"
                            alt="Profile Image"
                            fill
                            sizes="(max-width: 640px) 300px, (max-width: 1024px) 350px, 300px"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                            className="rounded-lg"
                        />
                    </div>
                </ProfileCard>

                <GradientCard bgColor="#1A1A1D" className="aspect-[40/20] text-white flex items-center justify-center w-full md:max-w-[700px] h-[250px] sm:h-[320px] px-4">
                    <div className="flex flex-col items-left justify-center w-full h-full p-4">
                        <p className="text-[20px] sm:text-[28px] font-bold top-0 mb-4">KanaK B Pandey</p>
                        <p className="text-[15px] sm:text-[20px] mb-4">Company: DecentInvest</p>
                        <p className="text-[15px] sm:text-[20px] mb-2">About:</p>
                        <p className="text-[15px] sm:text-[16px] leading-6">I believe in nothing.I believe in nothing...I believe in nothing.I believe in nothingI believe in nothing I believe in nothing I believe in nothing.I believe in nothing...I believe in nothing.</p>
                    </div>
                </GradientCard>
            </div>

            <div className="w-full min-h-[60vh] mt-8 bg-[url('/Vector.svg')] bg-cover bg-center flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[#1A1A1D] bg-opacity-50 flex flex-col items-center justify-center gap-6 p-4">
                    <div className="bg-white p-6 text-[24px] flex flex-col items-center justify-center h-[180px] sm:h-[200px] w-full sm:w-[45%] rounded-xl">
                        <p className='text-black font-bold text-center'>Amount Invested (in $)</p>
                        <div className="w-full h-full flex items-center justify-center gap-3">
                            {values.map((num, i) => (
                                <GradientCard key={i} bgColor={gradientStyle} className="text-white flex items-center justify-center w-[60px] h-[60px] sm:w-[100px] sm:h-[100px]">
                                    <h1 className="text-[40px] sm:text-[60px] text-center">{num}</h1>
                                </GradientCard>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center w-full">
                        <div className="w-full sm:w-[65%] flex flex-col items-center">
                            <GradientCard bgColor="#1A1A1D" className="w-full text-white flex flex-col items-center justify-center h-[350px] sm:h-[180px]">
                                <div className='w-full h-full flex flex-col items-center justify-center'>
                                    <h2 className="text-white sm:w-[80%] text-[24px] sm:text-[28px]">Equity Gained</h2>
                                    <div className="flex-col items-center sm:flex-row flex gap-6 justify-center w-full mt-2">
                                        {cardData.map((item, i) => (
                                            <GradientCard key={i}
                                                bgColor="linear-gradient(180deg, rgba(48, 12, 59, 0.7) 0%, rgba(72, 17, 76, 0.7) 50%, rgba(179, 39, 140, 0.7) 100%)"
                                                className="text-white flex flex-col items-center justify-center w-[95%] sm:w-[40%] h-[100px]">
                                                <h1 className="text-[22px] text-center font-bold">{item.title}</h1>
                                                <p className="text-[22px] text-center mt-2">{item.value}</p>
                                            </GradientCard>
                                        ))}
                                    </div>
                                </div>
                            </GradientCard>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col items-center justify-start mt-12">
                <h1 className='text-white text-[28px] sm:text-[36px] w-[90%] sm:w-[80%]'>Startups Invested In:</h1>
                <NftSection background='black' />
            </div>
        </div>
    )
}

export default Page;
