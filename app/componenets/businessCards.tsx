"use client"
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const BusinessCards = () => {
    // const [clickedCard, setClickedCard] = useState<number | null>(null);

    // const handleCardClick = (cardId: number) => {
    //     setClickedCard(prev => (prev === cardId ? null : cardId));
    // };
    useEffect(() => {
        const elements = gsap.utils.toArray('.animate-left') as HTMLElement[];
        elements.forEach((element) => {
            gsap.fromTo(
                element,
                { x: '-100%', opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 100%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        });
    }, []);

    useEffect(() => {
        const elements2 = gsap.utils.toArray('.animate-right') as HTMLElement[];
        elements2.forEach((element) => {
            gsap.fromTo(
                element,
                { x: '100%', opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 100%',
                        toggleActions: 'play none none none'
                    },
                }
            );
        })
    }, []);

    return (
        <>
            <div id="aboutus" className="min-h-screen bg-black bg-[url('../public/BG1.svg')] bg-cover bg-center p-6 md:p-8 flex items-center justify-center flex-col overflow-hidden">
                <h1 className="text-white text-[40px] sm:text-[55px] mt-16 text-center mb-8">Services we offer</h1>
                <div className="max-w-5xl flex items-center justify-center grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div
                        className="group relative animate-me w-full max-w-[550px] h-[250px] sm:h-full aspect-[14/9] rounded-[48px] overflow-hidden flex flex-col items-center cursor-pointer"
                        style={{
                            background: 'linear-gradient(76.91deg, #FFDE4D -0.16%, #C847FF 104.72%)',
                            padding: '2px',
                        }}
                    >
                        <div className="absolute inset-[2px] rounded-[46px] bg-black overflow-hidden">
                            <div className="relative h-full w-full">

                                <div
                                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-all duration-500 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95"
                                >
                                    <h2 className="text-white sm:text-[min(3vw,20px)] lg:text-[min(3vw,22px)] font-bold leading-none mt-8">
                                        Tokenized Fundraising & Startup NFTs
                                    </h2>
                                    <Image
                                        src="/Bitcoin.svg"
                                        alt="Marketplace illustration"
                                        width={260}
                                        height={260}
                                        className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] lg:w-[220px] lg:h-[220px] xl:w-[260px] xl:h-[260px]"
                                    />
                                </div>

                                <div
                                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-all duration-500 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
                                >
                                    <p className="text-white text-[15px] sm:text-[min(3vw,22px)] font-medium leading-normal">
                                        We enable startups to tokenize their equity and raise funds through blockchain-based assets. By minting a unique NFT for each startup, founders can showcase their business on our marketplace, making investment opportunities more transparent and accessible. Investors can acquire these NFTs to gain equity or trade them in the secondary market.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="absolute inset-0 z-0"
                                style={{
                                    background: 'radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.15), transparent 50%), radial-gradient(circle at 70% 30%, rgba(234, 179, 8, 0.15), transparent 50%)',
                                    filter: 'blur(40px)',
                                }}
                            />
                        </div>
                    </div>


                    <div
                        className="group relative w-full max-w-[550px] aspect-[14/9]  h-[250px] sm:h-full md:aspect-[14/19] rounded-[48px] overflow-hidden flex flex-col items-center row-span-2 animate-right cursor-pointer"
                        style={{
                            background: 'linear-gradient(76.91deg, #FFDE4D -0.16%, #C847FF 104.72%)',
                            padding: '2px',
                        }}
                    >
                        <div className="absolute inset-[2px] rounded-[46px] bg-black overflow-hidden">
                            <div className="relative h-full w-full">

                                <div
                                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:mt-8 transition-all duration-500 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95"
                                >
                                    <h2 className="text-white sm:text-[min(3vw,20px)] lg:text-[min(3vw,22px)] font-bold leading-none mt-2">
                                        Security Token Offerings (STO) for Equity
                                    </h2>
                                    <Image
                                        src="/startups.svg"
                                        alt="Startups illustration"
                                        width={600}
                                        height={200}
                                        className="ml-8 md:ml-16 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px]"
                                    />
                                </div>


                                <div
                                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-all duration-500 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
                                >
                                    <p className="text-white text-[15px] sm:text-[min(3vw,22px)] font-medium leading-normal">
                                        DecentInvest introduces a cutting-edge approach to investment through security tokens, allowing startups to distribute equity in a legally compliant and decentralized manner. These blockchain-based security tokens provide investors with a stake in the company, ensuring transparent ownership records and automated dividends where applicable.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="absolute inset-0 z-0"
                                style={{
                                    background: 'radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.15), transparent 50%), radial-gradient(circle at 70% 30%, rgba(234, 179, 8, 0.15), transparent 50%)',
                                    filter: 'blur(40px)',
                                }}
                            />
                        </div>
                    </div>


                    <div
                        className="group relative w-full max-w-[550px] aspect-[14/9] h-[250px] sm:h-full rounded-[48px] overflow-hidden flex flex-col items-center animate-left cursor-pointer"
                        style={{
                            background: 'linear-gradient(76.91deg, #FFDE4D -0.16%, #C847FF 104.72%)',
                            padding: '2px',
                        }}
                    >
                        <div className="absolute inset-[2px] rounded-[46px] bg-black overflow-hidden">
                            <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center">


                                <div
                                    className="absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95"
                                >
                                    <h2 className="text-white sm:text-[min(3vw,20px)] lg:text-[min(3vw,22px)] font-bold leading-none mt-16">
                                        Decentralized Marketplace & Liquidity Solutions
                                    </h2>
                                    <Image
                                        src="/nfts.svg"
                                        alt="NFT illustration"
                                        width={280}
                                        height={280}
                                        className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[200px] md:h-[250px] lg:w-[260px] lg:h-[260px] mb-8"
                                    />
                                </div>


                                <div
                                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-all duration-500 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
                                >
                                    <p className="text-white text-[15px] sm:text-[min(3vw,22px)] font-medium leading-normal">
                                        Our platform offers a seamless marketplace for buying, selling, and trading startup NFTs and security tokens. We provide liquidity solutions, including peer-to-peer investor trading and liquidity pools, ensuring that investments remain accessible and tradable beyond the initial fundraising phase.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="absolute inset-0 z-0"
                                style={{
                                    background: 'radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.15), transparent 50%), radial-gradient(circle at 70% 30%, rgba(234, 179, 8, 0.15), transparent 50%)',
                                    filter: 'blur(40px)',
                                }}
                            />
                        </div>
                    </div>



                    <div
                        className="group relative w-full col-span-full max-w-[550px] md:max-w-[1150px] aspect-[14/9] md:aspect-[32/9] h-[250px] sm:h-[350px] md:h-[400px] rounded-[48px] overflow-hidden animate-right cursor-pointer"
                        style={{
                            background: 'linear-gradient(76.91deg, #FFDE4D -0.16%, #C847FF 104.72%)',
                            padding: '2px',
                        }}
                    >
                        <div className="absolute inset-[2px] rounded-[46px] bg-black overflow-hidden">
                            <div className="relative z-10 h-full w-full flex flex-col md:flex-row items-center justify-center text-center px-6">

                                <div
                                    className="absolute inset-0 flex flex-col md:flex-row items-center justify-center text-center transition-all duration-500 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95"
                                >
                                    <h2 className="text-white sm:text-[min(3vw,20px)] lg:text-[min(3vw,22px)] font-bold leading-tight mb-4 mt-4">
                                        Web3 Startup Identity & On-Chain Governance
                                    </h2>
                                    <Image
                                        src="/people.svg"
                                        alt="Customised search illustration"
                                        width={600}
                                        height={200}
                                        className="w-[220px] h-[220px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]"
                                    />
                                </div>


                                <div
                                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-all duration-500 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
                                >
                                    <p className="text-white text-[15px] sm:text-[min(3vw,22px)] font-medium leading-normal">
                                        We help businesses establish a verifiable on-chain identity, ensuring transparency and credibility for investors. Additionally, our decentralized governance tools allow startups to implement DAO-based decision-making, enabling community-driven development through smart voting mechanisms.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="absolute inset-0 z-0"
                                style={{
                                    background: 'radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.15), transparent 50%), radial-gradient(circle at 70% 30%, rgba(234, 179, 8, 0.15), transparent 50%)',
                                    filter: 'blur(40px)',
                                }}
                            />
                        </div>
                    </div>



                    <div
                        className="group relative w-full max-w-[550px] aspect-[14/9] 
              sm:aspect-[14/9] h-[250px] sm:h-full rounded-[48px] overflow-hidden flex flex-col items-center animate-left cursor-pointer"
                        style={{
                            background: 'linear-gradient(76.91deg, #FFDE4D -0.16%, #C847FF 104.72%)',
                            padding: '2px',
                        }}
                    >
                        <div className="absolute inset-[2px] rounded-[46px] bg-black overflow-hidden">

                            <div
                                className="absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95"
                            >
                                <h2 className="text-white sm:text-[min(3vw,20px)] lg:text-[min(3vw,22px)] font-bold leading-none mt-8">
                                    Regulatory Compliance & Smart Contract Audits
                                </h2>
                                <Image
                                    src="/transactions.svg"
                                    alt="Transactions illustration"
                                    width={280}
                                    height={280}
                                    className="w-[150px] h-[150px] sm:w-[240px] sm:h-[240px] md:w-[180px] md:h-[180px] lg:w-[260px] lg:h-[260px]"
                                />
                            </div>


                            <div
                                className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-all duration-500 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
                            >
                                <p className="text-white text-[15px] sm:text-[min(3vw,22px)] font-medium leading-normal">
                                    We simplify blockchain compliance by integrating regulatory-compliant KYC/AML processes into fundraising mechanisms. Our smart contract auditing services ensure that startup tokenization, investment flows, and automated agreements remain secure and legally robust.
                                </p>
                            </div>


                            <div
                                className="absolute inset-0 z-0"
                                style={{
                                    background: 'radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.15), transparent 50%), radial-gradient(circle at 70% 30%, rgba(234, 179, 8, 0.15), transparent 50%)',
                                    filter: 'blur(40px)',
                                }}
                            />
                        </div>
                    </div>



                    <div
                        className="group relative w-full max-w-[550px] aspect-[14/9] 
              sm:aspect-[14/9] h-[250px] sm:h-full rounded-[48px] overflow-hidden flex flex-col items-center animate-right cursor-pointer"
                        style={{
                            background: 'linear-gradient(76.91deg, #FFDE4D -0.16%, #C847FF 104.72%)',
                            padding: '2px',
                        }}
                    >
                        <div className="absolute inset-[2px] rounded-[46px] bg-black overflow-hidden">

                            <div
                                className="absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95"
                            >
                                <h2 className="text-white sm:text-[min(3vw,20px)] lg:text-[min(3vw,22px)] font-bold leading-none mt-8">
                                    Blockchain-Powered Treasury & Payment Solutions
                                </h2>
                                <Image
                                    src="/grants.svg"
                                    alt="Grants illustration"
                                    width={280}
                                    height={280}
                                    className="w-[150px] h-[150px] sm:w-[240px] sm:h-[240px] md:w-[180px] md:h-[180px] lg:w-[260px] lg:h-[260px]"
                                />
                            </div>


                            <div
                                className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-all duration-500 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
                            >
                                <p className="text-white text-[15px] sm:text-[min(3vw,22px)] font-medium leading-normal">
                                    DecentInvest enables startups to manage their treasury efficiently with blockchain-based financial tools. From accepting crypto payments to setting up smart contract-powered vesting schedules and escrow services, we provide secure, automated, and efficient financial operations tailored to the Web3 ecosystem.
                                </p>
                            </div>


                            <div
                                className="absolute inset-0 z-0"
                                style={{
                                    background: 'radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.15), transparent 50%), radial-gradient(circle at 70% 30%, rgba(234, 179, 8, 0.15), transparent 50%)',
                                    filter: 'blur(40px)',
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default BusinessCards;