export default function ClassementItems(){
    const topPlayers = [
        { position: 1, username: "faxlePro", score: 950 },
        { position: 2, username: "fandresena", score: 850 },
        { position: 3, username: "faxmusic", score: 720 },
    ];

    return (
        <section className=" flex justify-center w-screen h-full max-md:py-16 max-lg:w-full max-lg:h-auto">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl h-full">
                <h1 className="text-5xl font-extrabold text-blue-600 text-center mt-12 max-md:text-3xl">
                    Classement
                </h1>
                <div className="mt-12 flex flex-col gap-6 max-md:gap-4 px-8 max-md:pb-4">
                    {topPlayers.map((player) => (
                        <div
                            key={player.position}
                            className="flex items-center gap-4 p-4 bg-white/50 rounded-lg shadow-sm hover:shadow-md transition-all max-md:gap-3"
                            role="listitem"
                            aria-label={`Position ${player.position}: ${player.username} avec ${player.score} points`}
                        >
                            <span className={`text-2xl font-bold ${player.position === 1 ? 'text-yellow-500' : player.position === 2 ? 'text-blue-500' : 'text-purple-500'} max-md:text-xl`}>
                                {player.position}
                            </span>
                            <img
                                src="/public/Sample_User_Icon.png"
                                alt={`Avatar de ${player.username}`}
                                className="w-12 h-12 rounded-full max-md:w-10 max-md:h-10"
                            />
                            <div className="flex-1">
                                <p className="text-lg font-semibold text-gray-800 max-md:text-base">{player.username}</p>
                                <p className="text-sm text-gray-600 max-md:text-xs">{player.score} points</p>
                            </div>
                            <svg
                                className={`w-6 h-6 ${player.position === 1 ? 'text-yellow-500' : player.position === 2 ? 'text-blue-500' : 'text-purple-500'} max-md:w-5 max-md:h-5`}
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 2a8 8 0 100 16 8 8 0 000-16zm0 10l-4-4 1.5-1.5L12 11l2.5-2.5L16 10l-4 4z" />
                            </svg>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}