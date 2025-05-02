export default function CategoriesItems({bg,titre,imgPath,classDiv}:{ bg?: string, titre: string,imgPath:string,classDiv?: string }) {
    return (
        <>
            <div className={`w-[200px] bg-white h-[300px] rounded-2xl max-2xl:w-[170px] max-2xl:h-[250px] max-sm:w-[120px] max-sm:h-[180px] ${classDiv}`}>
                <div className={`${bg} flex justify-center h-[80px] w-full rounded-t-xl items-center gap-3 max-xl:h-[60px] max-lg:h-[50px] max-lg:gap-1`}>
                    <img src="/public/note1.png" className="h-1/2" />
                        <h1 className="text-white text-[16px] max-xl:text-sm font-bold max-sm:text-sm">{titre}</h1>
                    <img src="/public/note1.png" className="h-1/2" />
                </div>
                <div className="h-[calc(100%-80px)] w-full flex justify-center items-center">    
                    <img src={imgPath} className="w-[80%] h-[80%]"/>
                </div>
            </div>
        </>
    )
}