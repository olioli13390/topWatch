import { useSerieContext } from "../../../../context/SerieProvider";

const Modal = ({ children }) => {
    const { modalRef, closeModal, selectedSerie } = useSerieContext();
    const imgUrl = "https://image.tmdb.org/t/p/w500";

    return (
        <dialog ref={modalRef} className="modal">
            <div className="modal-box bg-[#261B25] p-0 text-white max-w-4xl">
                {selectedSerie && (
                    <div className="relative">
                        <div className="relative h-[300px] overflow-hidden">
                            <img
                                src={`${imgUrl}${selectedSerie.poster_path}`}
                                alt={selectedSerie.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#261B25] to-transparent"></div>
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold text-2xl mb-4">{selectedSerie.name}</h3>
                            {children}
                        </div>
                    </div>
                )}
                <div className="modal-action flex items-center justify-end p-6 pt-0">
                    <p className="text-sm mr-4">Press ESC key</p>
                    <button onClick={closeModal} className="btn border-0 shadow-none bg-[#261B25] hover:bg-[#3a2e3a]">
                        Fermer
                    </button>
                </div>
            </div>
        </dialog>
    );
};

export default Modal;
