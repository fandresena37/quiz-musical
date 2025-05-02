import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import ClassementItems from "./ui/ClassementItems";

export default function Classement(){
    return (
        <>
            <section className="py-12 bg-white flex justify-center w-screen h-[600px] max-lg:h-auto max-lg:py-16">
                <section className="container flex items-center max-lg:flex-col-reverse max-lg:gap-12 px-4">
                    <div className="w-1/2 flex flex-col justify-center gap-6 pl-16 pr-12 max-lg:w-full max-lg:pl-6 max-lg:pr-6 max-sm:px-4">
                        <h1 className="font-extrabold text-blue-600 text-3xl max-sm:text-3xl max-sm:text-center leading-tight">
                            Grimpez au Sommet du Classement !
                        </h1>
                        <p className="text-gray-700 font-medium text-lg max-sm:text-base max-sm:text-center max-md:text-sm">
                            Voyez où vous vous situez parmi les meilleurs musiciens et hissez-vous en tête !
                        </p>
                        <div className="max-sm:w-full max-sm:flex max-sm:justify-center">
                        <Link to="/">
                            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 h-[40px] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:cursor-pointer flex items-center max-sm:text-sm">
                                Voir le Classement
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </Button>
                        </Link>
                        </div>
                    </div>   
                    <div className="w-1/2 flex h-full justify-center items-center max-lg:h-auto max-lg:w-full">
                        <ClassementItems/>
                    </div>
                </section>
            </section>
        </>
    )
}