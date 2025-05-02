export default function LogoAccueil({className}:{className?:string}){
    return (
        <>
            <div className={``+className}>
                <div className="flex w-full h-1/2 justify-around relative max-xl:items-center max-sm:h-auto">
                    <img src="/note1.png"  className="w-1/4 h-1/2 rotate-[32.19deg] absolute -top-10 left-10 max-xl:hidden" />
                    <img src="/logo.png" className="w-[50%] h-auto absolute right-10 -bottom-10 max-xl:w-full max-xl:-right-0 max-md:relative"/>
                </div>
                <div className="flex w-full h-1/2 justify-between relative max-xl:hidden">
                    <img src="/note2.png"  className="w-1/2 h-2/3 rotate-[-22.71deg] max-xl:hidden"/>
                    <img src="/note1.png" className="w-1/4 h-1/2 rotate-[-10.88deg] absolute -right-20 max-xl:hidden" />
                </div>
            </div>
        </>
    )
}