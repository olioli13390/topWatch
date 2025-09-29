import { ChevronLeft, ChevronRight } from "lucide-react";
import MovieCard from "./MovieCard";
import { useMovieContext } from "../../../../context/MovieProvider";

const MovieList = ({ isTopRated = false }) => {
    const { visibleMovies, visibleTopMovies, nextSlide, prevSlide, nextSlideTop, prevSlideTop } = useMovieContext();
    const movies = isTopRated ? visibleTopMovies : visibleMovies;

    return (
        <div className="relative px-15 mb-8">
            <div className="relative h-130 overflow-hidden">
                <button
                    type="button"
                    onClick={isTopRated ? prevSlideTop : prevSlide}
                    className="absolute top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full cursor-pointer hover:bg-black/70 transition-colors"
                >
                    <ChevronLeft />
                </button>
                <ul className="flex gap-4 overflow-x-auto scrollbar-hide px-4 py-2 h-full">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </ul>
                <button
                    type="button"
                    onClick={isTopRated ? nextSlideTop : nextSlide}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full cursor-pointer hover:bg-black/70 transition-colors"
                >
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
};

export default MovieList
