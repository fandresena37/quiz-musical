import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { AlignLeft, LogIn, X } from "lucide-react";
import { useState } from "react";
import LogoAccueil from "../ui-quiz/LogoAccueil";

export default function Header(){
    const [showMenu,setShowMenu] = useState<boolean>(false)
    return (
        <>
            <div className="w-[300px] h-full bg-white fixed top-0 z-30 transition-all duration-500 max-md:flex hidden shadow-2xl max-md:flex-col" style={{left:showMenu?0:-300}}>
                <div className="flex w-full justify-between p-8 px-6 items-center">
                    <h1 className="text-[#2D57FF] font-extrabold text-xl max-sm:text-lg">Quiz musical</h1>
                    <Button className="cursor-pointer bg-white hover:bg-white p-0" onClick={()=>setShowMenu((!showMenu))}>
                        <X className="min-w-[30px] min-h-[30px] stroke-[2px] text-black" />
                    </Button>
                </div>
                <div>
                    <ul className="flex flex-col font-semibold gap-3 pl-6">
                        <li className="hover:cursor-pointer">Accueil</li>
                        <li className="hover:cursor-pointer">Score</li>
                        <li className="hover:cursor-pointer">Classement</li>
                        <li className="hover:cursor-pointer">Profil</li>
                    </ul>
                </div>
            </div>
            <section className="h-screen w-screen max-md:h-auto">
                <header className="w-full h-[60px] bg-white flex justify-center">
                    <section className="container h-full flex items-center justify-between px-20 max-lg:px-3">
                        <div className="hidden max-md:flex">
                            <div className=" rounded-full flex justify-center items-center gap-5 max-sm:gap-3">
                                <Button className="cursor-pointer mr-3 bg-white hover:bg-white p-0 max-sm:mr-0" onClick={()=>setShowMenu((!showMenu))}>
                                    <AlignLeft  className="min-w-[25px] min-h-[25px] stroke-[2px] text-black"   />
                                </Button>
                                <div className="w-[40px] h-[40px] bg-[#2D57FF] rounded-full flex justify-center items-center max-sm:mr-2">
                                    <img src="/logo.png" className="w-[25px] h-[25px]" />
                                </div>
                                <h1 className="text-[#2D57FF] font-extrabold text-xl max-sm:text-lg">Quiz musical</h1>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className=" rounded-full flex justify-center items-center gap-5 max-md:hidden">
                                <div className="w-[45px] h-[45px] bg-[#2D57FF] rounded-full flex justify-center items-center">
                                    <img src="/logo.png" className="w-[30px] h-[30px]" />
                                </div>
                                <h1 className="text-[#2D57FF] font-extrabold text-xl">Quiz musical</h1>
                            </div>
                            <div className="hidden max-md:flex flex-col justify-center items-center">  
                                <Link to="/login">
                                    <Button className="bg-gradient-to-r to-blue-500 from-purple-600 w-[150px] h-[40px] rounded-full hover:bg-[#2D57FF] cursor-pointer font-semibold max-lg:w-[40px]">
                                        <LogIn  className="min-w-[20px] min-h-[20px] stroke-[3px] text-white hidden max-lg:block"   />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex gap-10 items-center max-md:hidden">
                            <nav className="flex">
                                <ul className="flex font-semibold gap-10 text-gray-500">
                                    <li className="hover:cursor-pointer">Accueil</li>
                                    <li className="hover:cursor-pointer">Score</li>
                                    <li className="hover:cursor-pointer">Classement</li>
                                    <li className="hover:cursor-pointer">Profil</li>
                                </ul>
                            </nav>
                            <Link to="/login">
                                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 w-[150px] h-[40px] rounded-full hover:bg-[#2D57FF] cursor-pointer font-semibold max-lg:w-[40px]">
                                    <span className="max-lg:hidden">se deconnecter</span>
                                    <LogIn  className="min-w-[20px] min-h-[20px] stroke-[3px] text-white hidden max-lg:block"   />
                                </Button>
                            </Link>
                        </div>
                    </section>
                </header>
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