export default function Logo({className}:{className?:string}){
    return (
        <>
            <div className={``+className}>
                <div className="flex w-full h-1/2 justify-around relative max-xl:items-center">
                    <img src="/note1.png"  className="w-1/4 h-1/2 rotate-[32.19deg] absolute -top-10 left-10" />
                    <img src="/logo.png" className="w-[50%] h-auto absolute right-10 -bottom-10"/>
                </div>
                <div className="flex w-full h-1/2 justify-between relative">
                    <img src="/note2.png"  className="w-1/2 h-2/3 rotate-[-22.71deg]"/>
                    <img src="/note1.png" className="w-1/4 h-1/2 rotate-[-10.88deg] absolute -right-20" />
                </div>
            </div>
        </>
    )
}