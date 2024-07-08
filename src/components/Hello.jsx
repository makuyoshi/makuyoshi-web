import React from 'react';
import {Caveat, Exo} from "next/font/google";
import {Image} from "@nextui-org/react";
import Socials from "@/components/Socials.jsx";

const caveat = Caveat({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
});

const exo = Exo({
    weight: '300',
    style: 'normal',
    subsets: ['latin'],
});

export default function Hello() {
    return (
        <>
            <div className="flex flex-row justify-center sm:space-x-5">
                <div className="hidden sm:flex sm:w-2/3">
                    <h1 className="font-bold text-6xl text-wrap bg-gradient-to-r from-neutral-900 to-neutral-300 bg-clip-text text-transparent">
                        {` "I’m passionate about creating responsive and user-friendly websites."`}
                    </h1>
                </div>
                <Image isZoomed isBlurred radius={"full"} width={300} alt="makuyoshi pfp" src="DSCF4717.JPG"></Image>
            </div>
            <div className="flex flex-row justify-start sm:pt-0 pt-16 sm:pl-10 pl-3">
                <div className="space-y-1">
                    <h1 className={`${caveat.className} text-4xl sm:text-4xl text-black`}>
                        {`Max Yushkevich`}
                    </h1>
                    <p className={`${exo.className} text-xl sm:text-xl text-black`}>
                        Frontend Engineer
                    </p>
                    <Socials />
                </div>
            </div>
        </>
    )
}