import { useState } from 'react';
import { GetMovieBySearch } from '../../../services/ApiMovies';
import { RotateCcw } from 'lucide-react';

const SearchBar = ({ onSearchResults, onLoading, onError, onReset }) => {
    const [term, setTerm] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!term.trim()) {
            onError("Veuillez entrer un terme de recherche");
            return;
        }
        try {
            onLoading(true);
            const results = await GetMovieBySearch(term, "fr-FR");
            onSearchResults(results);
            console.log(results);

        } catch (error) {
            onError("Impossible de trouver le titre");
        } finally {
            onLoading(false);
        }
    };

    const reset = () => {
        setTerm('')
        onReset()
    }

    return (
        <div className="flex items-center gap-2">
            <RotateCcw
                className='cursor-pointer hover:text-white transition-colors duration-200'
                size={20}
                onClick={reset}
            />
            <form onSubmit={handleSubmit}>
                <fieldset className="fieldset">
                    <input
                        type="text"
                        className="input bg-gray-200"
                        placeholder="Chercher un film"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                    <button type="submit" className="hidden">Rechercher</button>
                </fieldset>
            </form>

        </div>
    );
};

export default SearchBar;
