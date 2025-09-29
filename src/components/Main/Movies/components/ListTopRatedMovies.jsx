import MovieList from "./MovieList";

const ListTopRatedMovies = () => {

    return (
        <div className="w-full my-5">
            <h2 className="text-7xl font-bold px-20">Films les mieux notés</h2>
            <MovieList isTopRated={true} />
        </div>
    )
};

export default ListTopRatedMovies;
