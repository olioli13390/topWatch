import { createContext, useContext, useEffect, useRef, useState } from "react"
import { GetPopSeries, GetSerieById, GetTopRatedSeries } from "../services/ApiSeries"

const SerieContext = createContext()

const SerieProvider = ({ children }) => {

    const imgUrl = "https://image.tmdb.org/t/p/w500";

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    const [popSeries, setPopSeries] = useState([])
    const [topSeries, setTopSeries] = useState([])
    const [selectedSerie, setSelectedSerie] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentTopIndex, setCurrentTopIndex] = useState(0)
    const modalRef = useRef()

    const fetchSeries = async () => {
        try {
            const results = await GetPopSeries()
            const resultsTop = await GetTopRatedSeries()
            setPopSeries(results.data.results)
            setTopSeries(resultsTop.data.results)

        } catch (error) {
            setError("Impossible de charger la liste des films")
            console.log("fetch n'atteind pas", error);

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchSeries()
    }, [])

    const openModal = async (serie) => {
        try {
            const result = await GetSerieById(serie.id)
            console.log(result.data);
            setSelectedSerie(result.data)
            if (modalRef.current) {
                modalRef.current.showModal();
            }
        } catch (error) {
            console.log("N'atteind pas le détail", error)
        }
    }
    const closeModal = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
    };

    const visiblePopSeries = popSeries.slice(currentIndex, currentIndex + 5);

    const nextPopSlide = () => {
        if (currentIndex + 5 < popSeries.length) {
            setCurrentIndex(currentIndex + 5)
        } else if (currentIndex + 5 >= popSeries.length)
            setCurrentIndex(0)
    }

    const prevPopSlide = () => {
        if (currentIndex - 5 >= 0) {
            setCurrentIndex(currentIndex - 5)
        }
    }
    const visibleTopSeries = topSeries.slice(currentTopIndex, currentTopIndex + 5);

    const nextTopSlide = () => {
        if (currentTopIndex + 5 < topSeries.length) {
            setCurrentTopIndex(currentTopIndex + 5)
        } else if (currentTopIndex + 5 >= topSeries.length)
            setCurrentTopIndex(0)
    }

    const prevTopSlide = () => {
        if (currentTopIndex - 5 >= 0) {
            setCurrentTopIndex(currentTopIndex - 5)
        }
    }
    return (
        <SerieContext.Provider
            value={{
                popSeries,
                setPopSeries,
                imgUrl,
                selectedSerie,
                visiblePopSeries,
                visibleTopSeries,
                nextPopSlide,
                prevPopSlide,
                nextTopSlide,
                prevTopSlide,
                openModal,
                closeModal,
                modalRef
            }}
        >
            {children}
        </SerieContext.Provider>
    )
}

export default SerieProvider

export function useSerieContext() {
    return useContext(SerieContext);
}