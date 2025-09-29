import { useParams } from "react-router-dom"
import ItemCard from "./ItemCard"
import Pagination from "./Pagination"

const ItemsList = ({ items, prevPage, nextPage, page, type }) => {

    const urlParams = useParams()
    const currentType = type || urlParams.type;

    return (
        <div>
            <ItemCard items={items} type={currentType} />
            <Pagination prevPage={prevPage} nextPage={nextPage} page={page} />
        </div>
    )
}

export default ItemsList