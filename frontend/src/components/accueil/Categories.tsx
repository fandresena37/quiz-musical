import CategoriesItems from "./ui/CategoriesItems";

export default function Categories(){
    return (
        <>
        <section className="py-12 bg-gradient-to-br from-blue-100 to-purple-100 flex justify-center w-screen min-h-[60vh] max-lg:h-auto max-lg:py-16">
                <section className="container flex items-center max-lg:flex-col">
                    <div className="w-1/2 flex relative pl-20 max-lg:w-full max-lg:pl-0 max-lg:justify-center">
                        <CategoriesItems bg="bg-[#2D57FF]" titre="POP" imgPath="/public/pop.png" classDiv="-rotate-[20deg]"/>
                        <CategoriesItems bg="bg-[#542DFF]" titre="ROCK" imgPath="/public/rock.png" classDiv="rotate-[10deg]"/>
                        <CategoriesItems bg="bg-[#2600D0]" titre="HIP-HOP" imgPath="/public/hip-hop.png" classDiv="rotate-[20deg] max-sm:hidden"/>
                    </div>
                    <div className="w-1/2 flex flex-col justify-center gap-6 pl-12 pr-20 max-xl:pr-12 max-xl:pl-12 max-lg:w-full max-lg:mt-12 max-lg:pl-6 max-lg:pr-6 max-sm:px-4">
                    <h1 className="font-extrabold text-blue-600 text-3xl max-sm:text-3xl max-sm:text-center leading-tight">
                        Explorez Votre Style Musical !
                    </h1>
                    <p className="text-gray-700 font-medium text-lg max-sm:text-base max-sm:text-center max-md:text-sm">
                        Plongez dans Pop, Rock, Hip-Hop et bien plus – trouvez votre vibe et jouez !
                    </p>
                    <ul className="text-gray-600 font-medium text-lg max-sm:text-base max-sm:text-center list-none flex gap-4 max-2xl:flex-col max-sm:w-full max-sm:flex max-sm:justify-center">
                        <div className="flex gap-4 max-sm:w-full max-sm:flex max-sm:justify-center">
                            <li className="bg-blue-50 px-4 py-2 rounded-full hover:bg-blue-100 cursor-pointer transition-colors">Pop</li>
                            <li className="bg-blue-50 px-4 py-2 rounded-full hover:bg-blue-100 cursor-pointer transition-colors">Rap</li>
                            <li className="bg-blue-50 px-4 py-2 rounded-full hover:bg-blue-100 cursor-pointer transition-colors">Hip Hop</li>
                        </div>
                        <div className="flex gap-4 max-sm:w-full max-sm:flex max-sm:justify-center">
                            <li className="bg-blue-50 px-4 py-2 rounded-full hover:bg-blue-100 cursor-pointer transition-colors">Rock</li>
                            <li className="bg-blue-50 px-4 py-2 rounded-full hover:bg-blue-100 cursor-pointer transition-colors">Jazz</li>
                            <li className="bg-blue-50 px-4 py-2 rounded-full hover:bg-blue-100 cursor-pointer transition-colors">Classique</li>
                        </div>
                    </ul>
                </div>
                </section>
            </section>
        </>
    )
}