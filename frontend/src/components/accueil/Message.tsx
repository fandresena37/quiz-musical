export default function Message(){
    return (
        <>
            <section className="w-screen h-[calc(100vh/2)] bg-white flex justify-center max-md:h-auto max-md:py-20">
                <section className="container flex max-md:flex-col max-md:gap-20">
                    <div className="w-1/2 h-full flex flex-col items-center gap-3 px-44 justify-center max-xl:px-12 max-md:w-full max-md:px-20 max-sm-px-10">
                        <img src="/public/teste.png"/>
                        <h1 className="font-bold text-lg max-lg:text-center">Tester vos compétences en musique</h1>
                        <p className="text-gray-400 font-semibold max-xl:text-center max-lg:text-sm">Commencer le test et gagner des niveaux en s’amusant, vous pouvez découvrir des nouvelles choses que vous ignorez</p>
                    </div>
                    <div className="w-1/2 h-full flex flex-col items-center gap-3 px-44 justify-center max-xl:px-12 max-md:w-full max-md:px-20 max-sm:px-10">
                        <img src="/public/progres.png"/>
                        <h1 className="font-bold text-lg max-lg:text-center">Progrésser à votre rythmes</h1>
                        <p className="text-gray-400 font-semibold max-xl:text-center max-lg:text-sm">Gagner des niveaux progressivement et à votre rythme et apprennez des nouvelles choses</p>
                    </div>
                </section>
            </section>
        </>
    )
}