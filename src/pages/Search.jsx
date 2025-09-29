import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { useLocation } from "react-router-dom";
import { GetAllMovies, GetMovieBySearch } from "../services/ApiMovies"
import { GetAllSeries, GetSerieBySearch } from "../services/ApiSeries";
import ItemsList from "../components/SearchPage/ItemsList";
import SearchInput from "../components/SearchPage/SearchInput";

const SearchPage = ({ type }) => {
    const location = useLocation()

    const currentType = type || location.pathname.split('/')[1]

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [items, setItems] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [page, setPage] = useState(1)

    const fetchAllMedia = async () => {
        setLoading(true);
        setError('');
        try {
            const apiCall = currentType === "movies" ? GetAllMovies : GetAllSeries;
            const result = await apiCall(page);
            setItems(result.data.results);
        } catch (error) {
            setError(error.message || "Erreur dans l'affichage des données");
        } finally {
            setLoading(false);
        }
    };

    const searchQuery = async (query) => {
        try {
            const apiCall = currentType === 'movies' ? GetMovieBySearch : GetSerieBySearch
            const result = await apiCall(query)
            setItems(result.data.results)
        } catch (error) {
            console.error("erreur :", error.message)
        }
    }

    const handleSearch = () => {
        searchQuery(inputValue);
    };

    const resetSearch = () => {
        setLoading(true);
        setError('');
        setInputValue('');
        fetchAllMedia();
    };

    const nextPage = () => {
        const totalPages = 500
        if (page > totalPages) {
            return
        } else {
            setPage(page + 1)
        }
    }

    const prevPage = () => {
        if (page - 1 <= 0) {
            return
        } else {
            setPage((prev) => prev - 1)
        }
    }

    useEffect(() => {
        fetchAllMedia()
    }, [page])

    return (
        <div className="p-20">


            {error ? (
                <>
                    <p>{error}</p>
                </>
            ) : loading ? (
                <Loader2 className="animate-spin" />
            ) : (

                <>
                    <SearchInput onChange={(e) => setInputValue(e.target.value)}
                        onSearch={handleSearch}
                        onClick={resetSearch}
                    />
                    <ItemsList
                        items={items}
                        nextPage={nextPage}
                        prevPage={prevPage}
                        page={page}
                    />
                </>
            )}
        </div>
    )
}

export default SearchPage