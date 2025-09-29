import { useSerieContext } from "../../../../context/SerieProvider";


const SerieCard = ({ serie }) => {
    const { imgUrl, openModal } = useSerieContext()
    return (
        <li
            onClick={() => openModal(serie)}
            className="bg-[#DBDEE6] rounded-xl overflow-hidden shadow-md flex flex-col h-full transition-transform hover:scale-101 cursor-pointer relative group"
        >
            <div className="flex-grow min-h-0 overflow-hidden">
                {serie.poster_path ? (
                    <>
                        <img
                            src={`${imgUrl}${serie.poster_path}`}
                            alt={serie.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </>
                ) : (
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                        Aucune affiche disponible
                    </div>
                )}
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-transparent p-2 transform translate-y-full transition-transform group-hover:translate-y-0">
                <p className="font-bold">{serie.name}</p>
            </div>
        </li>
    );
}

export default SerieCard