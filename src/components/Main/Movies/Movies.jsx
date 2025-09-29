import { Loader2, TriangleAlert } from "lucide-react";
import { useMovieContext } from "../../../context/MovieProvider";
import ListPopMovies from './components/ListPopMovies';
import ListTopRatedMovies from './components/ListTopRatedMovies';
import Modal from "./components/Modal";
import MovieDetails from "./components/MovieDetails"

const Movies = () => {
    const { error, loading } = useMovieContext();

    return (
        <>
            <div className='flex flex-col items-center h-full'>
                {error && (
                    <div className='flex gap-4'>
                        <TriangleAlert />
                        <p>{error}</p>
                    </div>
                )}
                {loading ? (
                    <Loader2 className='animate-spin h-12 w-12 text-center' />
                ) : (
                    <>
                        <ListPopMovies />
                        <ListTopRatedMovies />
                    </>
                )}
            </div>
            <Modal>
                <MovieDetails />
            </Modal>
        </>
    );
};

export default Movies;
