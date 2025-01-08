import React from 'react'
import Image from 'next/image';

const page = () => {
    return (
        <div>
            <Image
                src="./BG5.svg"
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
            />
        </div>
    )
}

export default page;
