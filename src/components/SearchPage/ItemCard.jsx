import { SearchX } from "lucide-react";
import { useState } from "react";
import Modal from "./Modal";

const ItemCard = ({ items, type }) => {
    const imgUrl = "https://image.tmdb.org/t/p/w500";
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const openModal = (item) => {
        setSelectedItem(item);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedItem(null);
        setShowModal(false);
    };

    return (
        <>
            {!items || items.length === 0 ? (
                <div className="flex flex-col items-center w-full justify-center">
                    <SearchX size={32} />
                    {type === "movies" ? (
                        <p>Aucun film trouvé</p>
                    ) : (
                        <p>Aucune série trouvée</p>
                    )}
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => openModal(item)}
                            className="flex flex-col items-center cursor-pointer"
                        >
                            <img
                                src={`${imgUrl}${item.poster_path}`}
                                alt={type === "movies" ? item.title : item.name}
                                className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform"
                            />
                            <p className="m-2 text-center font-medium">
                                {type === "movies" ? item.title : item.name}
                            </p>
                        </div>
                    ))}
                </div>
            )}
            <Modal
                showModal={showModal}
                closeModal={closeModal}
                selectedItem={selectedItem}
                type={type}
            />
        </>
    );
};

export default ItemCard;
