import { useSerieContext } from "../../../../context/SerieProvider"
import Separator from "../../../ui/Separator"

const SerieDetails = () => {

    const { selectedSerie } = useSerieContext()
    return (
        <div>
            <div className="justify-between flex">
                <div>
                    <h2 className="text-xl font-bold">Infos</h2>
                    {selectedSerie.genres.map((genre) => (
                        <p>{genre.name}</p>
                    ))}

                </div>
            </div>
            <Separator />
            <div>
                <h2 className="text-xl font-bold my-4">Résumé</h2>
                <p>{selectedSerie.overview}</p>
            </div>
            <Separator />
            <div className="my-4">
                <h2 className="text-xl font-bold">Production</h2>
                <div className="flex flex-wrap gap-2">
                    {selectedSerie.production_companies.map((pc) => (
                        <p key={pc.id}>{pc.name}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SerieDetails