import { Search } from "lucide-react";
import Menu from "./components/Menu"
import Title from "./components/Title"
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const searchButton = () => {
        const isMoviesPage = location.pathname.includes("movies")
        const isSeriesPage = location.pathname.includes("series")

        if (isMoviesPage) {
            navigate("/movies/search")
        } else if (isSeriesPage) {
            navigate('/series/search')
        } else {
            navigate("/movies/search")
        }
    }

    return (
        <div className="navbar shadow-sm px-20">
            <div className="navbar-start">
                <Title />
            </div>
            <div className="navbar-center">
                <Menu />
            </div>
            <div className="navbar-end">
                <Search
                    onClick={searchButton}
                    className="cursor-pointer hover:text-white transition duration-300"
                />
            </div>
        </div>
    )
}

export default Header