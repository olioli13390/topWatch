import { createContext, useContext, useState, useEffect, useRef } from "react"
import { GetMovieById, GetPopMovies, GetMovieTrailer, GetTopRatedMovies } from "../services/ApiMovies"

const MovieContext = createContext()

const MovieProvider = ({ children }) => {

    const [popMovies, setPopMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [selectedMovie, setSelectedMovie] = useState(null)
    const modalRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndexTop, setCurrentIndexTop] = useState(0);
    const [topRatedMovies, setTopRatedMovies] = useState([])


    const fetchPopMovies = async () => {
        try {
            setLoading(true);
            const data = await GetPopMovies(page);
            const dataTop = await GetTopRatedMovies(page);
            setTopRatedMovies(dataTop.results)
            setPopMovies(data.results);
            setTotalPages(data.total_pages);
        } catch (error) {
            console.error("Erreur dans la récupération des films :", error);
            setError("Impossible de récupérer la liste de films");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPopMovies();
    }, [page])

    const openModal = async (movie) => {
        try {
            const movieData = await GetMovieById(movie.id);
            const trailerData = await GetMovieTrailer(movie.id);
            setSelectedMovie({ ...movieData, trailer: trailerData });
            if (modalRef.current) {
                modalRef.current.showModal();
            }
        } catch (error) {
            console.error(`N'accède pas à la data du film ${movie.title}`);
        }
    };

    const closeModal = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
    };

    const nextSlide = () => {
        if (currentIndex + 5 < popMovies.length) {
            setCurrentIndex(currentIndex + 5);
        } else if (currentIndex + 5 >= popMovies.length) { setCurrentIndex(0) }
    };

    const prevSlide = () => {
        if (currentIndex - 5 >= 0) {
            setCurrentIndex(currentIndex - 5);
        }
    };

    const nextSlideTop = () => {
        if (currentIndexTop + 5 < topRatedMovies.length) {
            setCurrentIndexTop(currentIndexTop + 5);
        } else if (currentIndexTop + 5 >= topRatedMovies.length) {
            setCurrentIndexTop(0);
        }
    };

    const prevSlideTop = () => {
        if (currentIndexTop - 5 >= 0) {
            setCurrentIndexTop(currentIndexTop - 5);
        }
    };

    const visibleMovies = popMovies.slice(currentIndex, currentIndex + 5);

    const visibleTopMovies = topRatedMovies.slice(currentIndexTop, currentIndexTop + 5)

    return (
        <MovieContext.Provider
            value={{
                popMovies,
                topRatedMovies,
                loading,
                error,
                selectedMovie,
                fetchPopMovies,
                openModal,
                closeModal,
                modalRef,
                prevSlide,
                nextSlide,
                visibleMovies,
                visibleTopMovies,
                nextSlideTop,
                prevSlideTop
            }}
        >
            {children}
        </MovieContext.Provider >
    )
}

export default MovieProvider

export function useMovieContext() {
    return useContext(MovieContext);
}