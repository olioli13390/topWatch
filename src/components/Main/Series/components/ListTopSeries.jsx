import SerieList from "./SeriesList"

const ListPopSeries = () => {
    return (
        <>
            <div className="w-full my-5">
                <h2 className="text-7xl font-bold px-20">Séries au Top</h2>
            </div>
            <SerieList isTopRated={true} />

        </>
    )
}

export default ListPopSeries