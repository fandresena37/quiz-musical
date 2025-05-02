import { Button } from "../ui/button";

export default function Essai(){
    return (
        <>
            <section className="h-[55vh] bg-gradient-to-bl to-blue-500 from-violet-600">
                <div className="flex flex-col items-center h-full justify-center gap-3">
                    <h1 className="text-white text-4xl font-bold">Relevez votre premier défi avec notre test de démo</h1>
                    <p className="text-white font-semibold text-sm">commencez notre petite test de demo pour ce vous divertir</p>
                    <Button className="bg-white hover:bg-white w-[120px] h-12 text-violet-600 font-semibold rounded-full hover:cursor-pointer mt-10">
                        Commencez
                    </Button>
                </div>
            </section>
        </>
    )
}