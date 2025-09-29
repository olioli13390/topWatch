import { useMovieContext } from "../../../../context/MovieProvider";

const MovieCard = ({ movie }) => {
    const { openModal } = useMovieContext();
    const imgUrl = "https://image.tmdb.org/t/p/w500";

    return (
        <li
            onClick={() => openModal(movie)}
            className="bg-[#DBDEE6] rounded-xl overflow-hidden shadow-md flex flex-col h-full transition-transform hover:scale-101 cursor-pointer relative group"
        >
            <div className="flex-grow min-h-0 overflow-hidden">
                {movie.poster_path ? (
                    <>
                        <img
                            src={`${imgUrl}${movie.poster_path}`}
                            alt={movie.title}
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
                <p className="font-bold">{movie.title}</p>
            </div>
        </li>
    );
};

export default MovieCard;
