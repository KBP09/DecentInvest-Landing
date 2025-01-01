import Image from "next/image";
import Navbar from "./componenets/navbar";
import Footer from "./componenets/footer";
import myImage from "../public/Bitcoin.svg"


export default function Home() {


  return (
    <>
      <Navbar />
      <div className="h-screen w-full bg-cover bg-center relative flex items-center justify-center flex-col">
        <div
          className="absolute inset-0 bg-cover bg-center bg-[url('../public/homebg.svg')] blur-sm z-0"
        />
        <div
          className="mt-16 h-[80vh] w-[80vw] bg-[#D9D9D91A] border-4 rounded-2xl overflow-hidden flex items-center justify-center flex-col border-gradient relative z-10"
        >
          <h1 className="text-[40px] sm:text-[100px] xl:text-[130px] font-bold mb-8 sm:mb-0">DecentInvest</h1>
          <h2 className="text-[18px] xl:text-[40px] mb-8 sm:mb-0">Invest Decently, Invest Decentrally</h2>
          <h2 className=" text-[12px] xl:text-[30px]  mb-8 sm:mb-0">Secure, transparent, and fair investments</h2>
          <button className="bg-[#FFB200] text-black font-medium  w-[147px] h-[35px] sm:h-[65px] sm:w-[281px] rounded-2xl hover:bg-yellow-500 transition-colors duration-300 text-[18px] mt-8 ">
            Get Started
          </button>
        </div>
      </div>
      <div className="bg-[#1A1A1D] h-[500px] w-full">

      </div>
      <div className="min-h-screen bg-black bg-[url('../public/BG1.svg')] bg-cover bg-center p-6 md:p-8 flex items-center justify-center flex-col">
        <h1 className="text-[80px] mt-16 text-center mb-8">About Us</h1>

        <div className="max-w-7xl flex items-center justify-center grid grid-cols-1 md:grid-cols-2 gap-6">

          <div
            className="relative w-full max-w-[550px] aspect-[14/9] rounded-[48px] overflow-hidden flex flex-col items-center"
            style={{
              background: 'linear-gradient(76.91deg, #FFDE4D -0.16%, #C847FF 104.72%)',
              padding: '2px',
            }}
          >
            <div className="absolute inset-[2px] rounded-[46px] bg-black overflow-hidden">
              <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-white text-[22px] sm:text-[25px] lg:text-[28px] font-bold leading-none mt-8">
                  Marketplace for startups and investors
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
                className="absolute inset-0 z-0"
                style={{
                  background: 'radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.15), transparent 50%), radial-gradient(circle at 70% 30%, rgba(234, 179, 8, 0.15), transparent 50%)',
                  filter: 'blur(40px)',
                }}
              />
            </div>
          </div>

          <div
            className="relative w-full max-w-[550px] aspect-[14/9] md:aspect-[14/19] rounded-[48px] overflow-hidden flex flex-col items-center row-span-2"
            style={{
              background: 'linear-gradient(76.91deg, #FFDE4D -0.16%, #C847FF 104.72%)',
              padding: '2px',
            }}
          >
            <div className="absolute inset-[2px] rounded-[46px] bg-black overflow-hidden">
              <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-white text-[18px] sm:text-[25px] md:text-[30px] font-bold leading-none mt-2">
                  All startups in one place for investors and all investors in one place for startups
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
                className="absolute inset-0 z-0"
                style={{
                  background: 'radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.15), transparent 50%), radial-gradient(circle at 70% 30%, rgba(234, 179, 8, 0.15), transparent 50%)',
                  filter: 'blur(40px)',
                }}
              />
            </div>
          </div>

          <div
            className="relative w-full max-w-[550px] aspect-[14/9] rounded-[48px] overflow-hidden flex flex-col items-center"
            style={{
              background: 'linear-gradient(76.91deg, #FFDE4D -0.16%, #C847FF 104.72%)',
              padding: '2px',
            }}
          >
            <div className="absolute inset-[2px] rounded-[46px] bg-black overflow-hidden">
              <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center">
                <h2 className="text-white text-[22px] sm:text-[28px] font-bold leading-none mt-16">
                  NFT for your startups
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
                className="absolute inset-0 z-0"
                style={{
                  background: 'radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.15), transparent 50%), radial-gradient(circle at 70% 30%, rgba(234, 179, 8, 0.15), transparent 50%)',
                  filter: 'blur(40px)',
                }}
              />
            </div>
          </div>


          <div
            className="relative w-full col-span-full max-w-[550px] md:max-w-[1150px] aspect-[14/9] md:aspect-[32/9] h-[240px] sm:h-[350px] md:h-[400px] rounded-[48px] overflow-hidden "
            style={{
              background: 'linear-gradient(76.91deg, #FFDE4D -0.16%, #C847FF 104.72%)',
              padding: '2px',
            }}
          >
            <div className="absolute inset-[2px] rounded-[46px] bg-black overflow-hidden">
              <div className="relative z-10 h-full w-full flex flex-col md:flex-row  items-center justify-center text-center px-6">
                <h2 className="text-white text-[min(4vw,38px)] font-bold leading-tight mb-4 mt-4 sm:mt-8">
                  Find customised investors and startups according to your needs
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
                className="absolute inset-0 z-0"
                style={{
                  background: 'radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.15), transparent 50%), radial-gradient(circle at 70% 30%, rgba(234, 179, 8, 0.15), transparent 50%)',
                  filter: 'blur(40px)',
                }}
              />
            </div>
          </div>


          <div
            className="relative w-full max-w-[550px] aspect-[14/9] 
          sm:aspect-[14/9] rounded-[48px] overflow-hidden flex flex-col items-center"
            style={{
              background: 'linear-gradient(76.91deg, #FFDE4D -0.16%, #C847FF 104.72%)',
              padding: '2px',
            }}
          >
            <div className="absolute inset-[2px] rounded-[46px] bg-black overflow-hidden">
              <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-white text-[22px] sm:text-[28px] font-bold leading-none mt-8">
                  Easy transactions
                </h2>
                <Image
                  src="/transactions.svg"
                  alt="Transactions illustration"
                  width={280}
                  height={280}
                  className="w-[150px] h-[150px] sm:w-[260px] sm:h-[260px] md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[260px]"
                />
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
            className="relative w-full max-w-[550px] aspect-[14/9] 
          sm:aspect-[14/9] rounded-[48px] overflow-hidden flex flex-col items-center"
            style={{
              background: 'linear-gradient(76.91deg, #FFDE4D -0.16%, #C847FF 104.72%)',
              padding: '2px',
            }}
          >
            <div className="absolute inset-[2px] rounded-[46px] bg-black overflow-hidden">
              <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-white text-[22px] sm:text-[28px] font-bold leading-none mt-8">
                  Grants and investments
                </h2>
                <Image
                  src="/grants.svg"
                  alt="Grants illustration"
                  width={280}
                  height={280}
                  className="w-[150px] h-[150px] sm:w-[240px] sm:h-[240px] md:w-[190px] md:h-[190px] lg:w-[260px] lg:h-[260px]"
                />
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
      <Footer/>
    </>
  );
}
