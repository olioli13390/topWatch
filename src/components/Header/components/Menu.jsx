import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <>
            <ul className="menu menu-horizontal px-1 space-x-5">
                <Link to="/movies " className="font-bold text-lg hover:text-white cursor-pointer transition-colors duration-200" >Films</Link>
                <Link to="/series" className="font-bold text-lg hover:text-white cursor-pointer transition-colors duration-200" >Séries</Link>
            </ul>
        </>
    )
}

export default Menu