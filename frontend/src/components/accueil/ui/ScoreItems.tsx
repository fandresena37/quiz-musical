export default function ScoreItems() {
    const userScore = {
        score: 750,
        level: "Intermédiaire",
        progress: 65, 
    };
    return (
        <>
            <div className="relative bg-white rounded-xl shadow-lg w-[50%] h-[450px] max-lg:w-[80%] max-lg:mx-10 max-md:h-auto max-md:py-20">
                    <h1 className="text-5xl font-extrabold text-blue-600 text-center mt-12 max-md:text-3xl">
                        Votre Score
                    </h1>
                    <div className="mt-12 flex flex-col items-center gap-6 max-md:gap-4 px-8">
                            <span className=" hidden text-6xl font-bold text-blue-600  max-md:block">
                                {userScore.score}
                            </span>
                        <div className="relative flex justify-center mb-6 max-md:hidden">
                            <svg className="w-32 h-32 max-md:w-20 max-md:h-20 max-sm:w-20 max-sm:h-20">
                                <circle cx="64" cy="64" r="60" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                                <circle
                                    cx="64"
                                    cy="64"
                                    r="60"
                                    stroke="#3B82F6"
                                    strokeWidth="8"
                                    fill="none"
                                    strokeDasharray="377"
                                    strokeDashoffset={377 - (377 * (userScore.score % 1000) / 1000)}
                                    className="transition-all duration-1000"
                                />
                            </svg>
                            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-blue-600 max-md:text-2xl">
                                {userScore.score}
                            </span>
                        </div>
                        <div className="text-center w-full max-w-md">
                            <p className="text-lg font-semibold text-gray-800 max-md:text-base" aria-label={`Niveau actuel : ${userScore.level}`}>
                                Niveau : {userScore.level}
                            </p>
                            <div className="w-full bg-gray-200 rounded-full h-4 mt-2 max-md:h-3">
                                <div
                                    className="bg-blue-500 h-4 rounded-full transition-all duration-1000 max-md:h-3"
                                    style={{ width: `${userScore.progress}%` }}
                                    aria-label={`Progression vers le prochain niveau : ${userScore.progress}%`}
                                ></div>
                            </div>
                            <p className="text-sm text-gray-600 mt-2 max-md:text-xs">
                                {userScore.progress}% vers le prochain niveau
                            </p>
                        </div>
                    </div>
                </div>
        </>
    )
}