// import { Link } from "react-router-dom";
import { Button } from "../ui/button";
// import { AlignLeft, LogIn, X } from "lucide-react";
// import { useState } from "react";
import LogoAccueil from "../ui-quiz/LogoAccueil";
import Header from "../ui-quiz/Header";

export default function Main(){
    return (
        <>
            <section className="h-screen w-screen max-md:h-auto">
                <Header/>
                <section className="bg-gradient-to-bl to-blue-500 from-violet-600 w-full h-[calc(100%-80px)] flex justify-center max-md:h-auto">
                    <div className="flex container h-full px-20 max-lg:px-5 max-md:flex-col-reverse max-md:h-auto max-md:py-14">
                        <div className="w-1/2 h-full flex flex-col justify-center gap-10 max-xl:w-[60%] max-md:w-full max-md:items-center">
                            <div className="flex justify-between items-center max-md:hidden">
                                <img src="/point-orange.png" className="w-[50px] h-[50px] -rotate-[30deg]" />
                                <div className="flex -rotate-[19.14deg] mr-30">
                                    <img src="point-blanc.png" className="w-[40px] h-[40px]" />
                                    <img src="point-blanc.png" className="w-[40px] h-[40px]" />
                                    <img src="point-blanc.png" className="w-[40px] h-[40px]" />
                                </div>
                            </div>
                            <p className="text-white text-6xl font-bold max-xl:text-5xl max-lg:text-4xl max-md:text-center max-md:mt-20">DECOUVREZ LE MONDE DE LA MUSIQUE EN S'AMUSANT</p>
                            <Button className="text-[#2D57FF] w-[150px] h-[40px] bg-white rounded-full font-semibold hover:bg-white cursor-pointer">Commencer</Button>
                        </div>
                        <div className="w-1/2 h-full flex justify-center items-center max-xl:w-[40%] max-md:h-auto max-md:w-full">
                            <LogoAccueil className="w-1/2 h-1/2 max-xl:w-[70%] max-xl:h-[70%] max-xl:flex max-xl:items-center max-md:w-[50%]"/>
                        </div>
                    </div>
                </section>
            </section>
            </>
    )
}