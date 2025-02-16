import { notFound } from "next/navigation";
import Image from "next/image";
import { GradientCard } from "../../componenets/gradientCard";
import { ProfileCard } from "../../componenets/profileCard";
import NftSection from "../../componenets/nftSection";

const investors = [
    {
        id: "1",
        name: "Anushka Gupta",
        company: "DecentInvest",
        description: "Believe in either a home run or running back home.",
        image: "/akg.jpg",
        amountInvested: [1, 0, 0, 0, 0],
        equity: [
            { title: "Completed", value: "0.45" },
            { title: "In Progress", value: "0.25" },
        ]
    },
    {
        id: "2",
        name: "Kanak B Pandey",
        company: "DecentInvest",
        description: "Innovation drives progress and transforms ideas into reality.",
        image: "/kbp.jpg",
        amountInvested: [1, 0, 0, 0, 0],
        equity: [
            { title: "Completed", value: "0.60" },
            { title: "In Progress", value: "0.40" },
        ]
    }
];

export default function InvestorPage({ params }: { params: { id: string } }) {
    const investor = investors.find(i => i.id === params.id);

    if (!investor) return notFound(); // Show 404 if ID is invalid

    return (
        <div className="pt-[15vh] min-h-screen bg-black">
            <div className="flex gap-8 justify-center w-full p-8 flex-col md:flex-row items-center">
                <ProfileCard className="aspect-[35/39] max-w-full h-[100px] sm:h-[400px] flex items-center justify-center overflow-hidden">
                    <div className="relative w-full h-full">
                        <Image
                            src={investor.image}
                            alt="Profile Image"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                            priority
                        />
                    </div>
                </ProfileCard>

                <GradientCard bgColor="#1A1A1D" className="aspect-[45/20] text-white flex items-center justify-center max-w-full h-[100px] sm:h-[400px]">
                    <div className="flex flex-col justify-center w-full h-full p-8">
                        <p className="text-[45px] font-bold mb-4">{investor.name}</p>
                        <p className="text-[30px] mb-4">Company: {investor.company}</p>
                        <p className="text-[30px]">{investor.description}</p>
                    </div>
                </GradientCard>
            </div>

            <div className="w-full min-h-screen mt-8 bg-[url('/Vector.svg')] bg-cover bg-center flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[#1A1A1D] bg-opacity-50 flex flex-col items-center justify-center gap-8 px-4">

                    <div className="bg-white p-8 text-[30px] w-[80%] rounded-2xl">
                        <p className='text-black font-bold mb-4'>Amount Invested (in $)</p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {investor.amountInvested.map((num, i) => (
                                <GradientCard key={i} bgColor="linear-gradient(180deg, #300C3B 0%, #48114C 50%, #B3278C 100%)" 
                                    className="text-white flex items-center justify-center w-[90px] h-[90px] sm:w-[110px] sm:h-[110px]">
                                    <h1 className="text-[50px] sm:text-[70px] text-center">{num}</h1>
                                </GradientCard>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center w-full">
                        <div className="w-[80%] flex flex-col items-center">
                            <GradientCard bgColor="#1A1A1D" className="w-full text-white flex flex-col items-center justify-center h-[200px] sm:h-[300px]">
                                <h2 className="text-white w-[80%] text-[30px] sm:text-[35px] mb-4">Equity Gained</h2>
                                <div className="flex flex-wrap gap-8 justify-center w-full">
                                    {investor.equity.map((item, i) => (
                                        <GradientCard key={i}
                                            bgColor="linear-gradient(180deg, rgba(48, 12, 59, 0.7) 0%, rgba(72, 17, 76, 0.7) 50%, rgba(179, 39, 140, 0.7) 100%)"
                                            className="text-white flex flex-col items-center justify-center w-[45%] sm:w-[40%] h-[130px] sm:h-[150px]">
                                            <h1 className="text-[30px] sm:text-[40px] text-center font-bold">{item.title}</h1>
                                            <p className="text-[30px] sm:text-[40px] text-center mt-2">{item.value}</p>
                                        </GradientCard>
                                    ))}
                                </div>
                            </GradientCard>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col items-center justify-start mt-16">
                <h1 className='text-white text-[40px] sm:text-[50px] w-[80%] mb-4'>Startups Invested In:</h1>
                <NftSection background='black' />
            </div>
        </div>
    );
}
