import React from "react";
import Image from 'next/image';

const UnderConstruction = () => {
    return (
        <div className="h-screen w-full">
            <Image
                src="./BG5.svg"
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                priority
            />
            <div className="absolute flex flex-col items-center justify-center w-full h-full">
                <h2 className="text-white text-[30px] sm:text-[56px]">
                    🚧 Under Construction 🚧
                </h2>
                <p className="text-[20px]">{`(But soon we'll be lit 🔥)`}</p>
                <br />
                <p className="text-[20px] sm:text-[30px] w-[70vw] text-center">
                    {`We're cookin' something up 🔥 and we can't wait to share it with you.
                    Sign up and be the first to know when we drop.`}
                </p>
            </div>
        </div>
    );
}

export default UnderConstruction;