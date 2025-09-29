import { useMovieContext } from "../../../../context/MovieProvider"


const Modal = ({ children }) => {
    const { modalRef, selectedMovie, closeModal } = useMovieContext()
    return (
        <dialog ref={modalRef} className="modal">
            <div className="modal-box bg-[#261B25]">
                {selectedMovie && (
                    <>
                        <h3 className="font-bold text-2xl mb-10">{selectedMovie.title}</h3>
                        {children}
                    </>
                )}
                <div className="modal-action flex items-center">
                    <p className="py-4">Press ESC key</p>
                    <button onClick={closeModal} className="btn border-0 shadow-none">
                        Fermer
                    </button>
                </div>
            </div>
        </dialog>
    )
}

export default Modal