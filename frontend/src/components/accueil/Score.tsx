import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import ScoreItems from "./ui/ScoreItems";

export default function Score() {
    
    return (
        <section className="py-12 bg-gradient-to-br from-blue-100 to-purple-100 flex justify-center w-screen min-h-[55vh] max-md:h-auto max-md:py-16">
            <div className="container flex items-center max-lg:flex-col max-md:gap-12">
                <ScoreItems/>
                <div className="w-1/2 flex flex-col justify-center gap-6 pl-12 pr-20 max-lg:w-full max-lg:mt-10 max-sm:px-10">
                    <h1 className="font-extrabold text-blue-600 text-3xl max-sm:text-3xl max-sm:text-center leading-tight">
                        Découvrez Votre Score et Progressez !
                    </h1>
                    <p className="text-gray-700 font-medium text-lg max-sm:text-base max-sm:text-center max-md:text-sm">
                        Suivez vos performances, montez de niveau, et devenez un maître de la musique !
                    </p>
                    <div className="max-sm:w-full max-sm:flex max-sm:justify-center">
                    <Link to="/">
                        <Button className="bg-gradient-to-r h-[40px] from-blue-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg flex items-center max-sm:text-sm hover:cursor-pointer">
                            Voir mes Stats
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </Button>
                    </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}