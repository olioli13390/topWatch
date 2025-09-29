import { useMovieContext } from "../../../../context/MovieProvider"

const MovieDetails = () => {

    const { selectedMovie } = useMovieContext()

    return (
        <div>
            <div className="justify-between flex">
                <div>
                    <h2 className="text-xl font-bold">Infos</h2>
                    <p>Sortie le : {selectedMovie.release_date}</p>

                </div>
            </div>
            <hr className="my-4 border-[#C59F61] opacity-70" />
            <div>
                <h2 className="text-xl font-bold my-4">Résumé</h2>
                <p>{selectedMovie.overview}</p>
            </div>
            <hr className="my-4 border-[#C59F61] opacity-70" />
            <div>
                <h2 className="text-xl font-bold my-2">Bande d'annonce</h2>
                {selectedMovie.trailer && selectedMovie.trailer.length > 0 && (
                    <iframe
                        width="100%"
                        height="315"
                        src={`https://www.youtube.com/embed/${selectedMovie.trailer[0].key}`}
                        title={`Bande-annonce de ${selectedMovie.title}`}
                        allowFullScreen
                        className="rounded-lg"
                    ></iframe>
                )}
            </div>
            <hr className="my-4 border-[#C59F61] opacity-70" />
            <div className="my-4">
                <h2 className="text-xl font-bold">Production</h2>
                <div className="flex flex-wrap gap-2">
                    {selectedMovie.production_companies.map((pc) => (
                        <p key={pc.id}>{pc.name}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieDetails