export default function Footer(){
    return (
        <>
            <footer className="w-full h-[50vh] bg-gradient-to-bl to-blue-500 from-violet-600 flex justify-center max-lg:h-auto max-lg:py-20">
                <section className="container flex max-md:flex-col h-auto max-md:px-20">
                    <div className="w-1/3 h-full flex flex-col items-center justify-center max-lg:w-1/2 max-md:w-full max-md:mb-20">
                        <img src="/public/logo.png" className="w-1/3 h-1/3 max-md:h-[120px] max-md:w-[120px]"/>
                        <div className="w-full h-auto flex justify-around">
                            <img src="/public/git.png" alt="" className="w-12 h-12" />
                            <img src="/public/facebook.png" alt="" className="w-10 h-10" />
                        </div>
                    </div>
                    <div className="w-2/3 h-full flex max-lg:h-auto max-lg:flex-col max-lg:w-1/2 max-lg:gap-10 max-md:w-full">
                        <div className="w-1/2 h-full flex text-white flex-col justify-center ml-5 max-lg:w-full max-md:ml-0 max-md:items-center">
                            <ul>
                                <h1 className="font-bold mb-5 text-lg">Contact</h1>
                                <li className="max-sm:text-sm"><span className="font-semibold max-sm:text-sm">E-mail:</span> fandresenarazafindratina@gmail.com</li>
                                <li className="max-sm:text-sm"><span className="font-semibold">Tel:</span> 034 16 744 62</li>
                                <li className="max-sm:text-sm"><span className="font-semibold">Facebook:</span> fandresena razafindratina</li>
                            </ul>
                        </div>
                        <div className="w-1/2 h-full flex text-white flex-col justify-center ml-5 max-lg:w-full max-md:ml-0 max-md:items-center">
                            <ul>
                                <h1 className="font-bold mb-5 text-lg">Contact</h1>
                                <li className="max-sm:text-sm"><span className="font-semibold">E-mail:</span> fandresenarazafindratina@gmail.com</li>
                                <li className="max-sm:text-sm"><span className="font-semibold">Tel:</span> 034 16 744 62</li>
                                <li className="max-sm:text-sm"><span className="font-semibold">Facebook:</span> fandresena razafindratina</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}