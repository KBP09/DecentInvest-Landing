import React from 'react'
import Image from 'next/image';
import { GradientCard } from '../componenets/gradientCard';
import { ProfileCard } from '../componenets/profileCard';
import NftSection from '../componenets/nftSection';

const Page = () => {
    const gradientStyle = "linear-gradient(180deg, #300C3B 0%, #48114C 50%, #B3278C 100%)";
    const values = [1, 0, 0, 0, 0];
    const cardData = [
        { title: "Completed", value: "0.45" },
        { title: "In Progress", value: "0.25" }
    ];

    return (
        <div className="pt-[10vh] min-h-screen bg-black">

            {/* Profile Section */}
            <div className="flex gap-6 justify-center w-full p-6 flex-col md:flex-row items-center">
                <ProfileCard className="aspect-[30/39] max-w-[300px] sm:max-w-[300px] h-[280px] sm:h-[350px] flex items-center justify-center overflow-hidden">
                    <div className="relative w-full h-full">
                        <Image
                            src="/akg.jpg"
                            alt="Profile Image"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                </ProfileCard>

                <GradientCard bgColor="#1A1A1D" className="aspect-[40/20] text-white flex items-center justify-center max-w-[400px] sm:max-w-[700px] h-[280px] sm:h-[350px]">
                    <div className="flex flex-col items-left justify-center w-full h-full p-6">
                        <p className="text-[28px] font-bold top-0 mb-4">Anushka Gupta</p>
                        <p className="text-[20px] mb-4">Company: DecentInvest</p>
                        <p className="text-[16px] leading-6">
                            Believe in either a home run or running back home. Believe in either a home run or running back home.Believe in either a home run or running back home. Believe in either a home run or running back home.Believe in either a home run or running back home. Believe in either a home run or running back home.
                            Believe in either a home run or running back home. Believe in either a home run or running back home.
                        </p>
                    </div>
                </GradientCard>
            </div>

            {/* Investment Section */}
            <div className="w-full min-h-[60vh] mt-8 bg-[url('/Vector.svg')] bg-cover bg-center flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[#1A1A1D] bg-opacity-50 flex flex-col items-center justify-center gap-6 p-4">

                    <div className="bg-white p-6 text-[24px] flex flex-col items-center justify-center h-[180px] sm:h-[200px] w-[90%] sm:w-[50%] rounded-xl">
                        <p className='text-black font-bold text-center'>Amount Invested (in $)</p>
                        <div className="w-full h-full flex items-center justify-center gap-3">
                            {values.map((num, i) => (
                                <GradientCard key={i} bgColor={gradientStyle} className="text-white flex items-center justify-center w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]">
                                    <h1 className="text-[40px] sm:text-[50px] text-center">{num}</h1>
                                </GradientCard>
                            ))}
                        </div>
                    </div>

                    {/* Equity Gained */}
                    <div className="flex justify-center w-full">
                        <div className="w-[90%] sm:w-[65%] flex flex-col items-center">
                            <GradientCard bgColor="#1A1A1D" className="w-full text-white flex flex-col items-center justify-center h-[120px] sm:h-[180px]">
                                <div className='w-full h-full flex flex-col items-center justify-center'>
                                    <h2 className="text-white w-[80%] text-[24px] sm:text-[28px]">Equity Gained</h2>
                                    <div className="flex gap-6 justify-center w-full mt-2">
                                        {cardData.map((item, i) => (
                                            <GradientCard key={i}
                                                bgColor="linear-gradient(180deg, rgba(48, 12, 59, 0.7) 0%, rgba(72, 17, 76, 0.7) 50%, rgba(179, 39, 140, 0.7) 100%)"
                                                className="text-white flex flex-col items-center justify-center w-[40%] h-[100px]">
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

            {/* NFT Section */}
            <div className="w-full flex flex-col items-center justify-start mt-12">
                <h1 className='text-white text-[32px] sm:text-[36px] w-[90%] sm:w-[80%]'>Startups Invested In:</h1>
                <NftSection background='black' />
            </div>

        </div>
    )
}

export default Page;
