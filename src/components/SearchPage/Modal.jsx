import { X } from "lucide-react";

const Modal = ({ showModal, closeModal, selectedMovie }) => {
    return (
        <>
            {showModal && (
                <dialog id="my_modal_1" className="modal " open={showModal} onClick={(e) => {
                    if (e.target === e.currentTarget) closeModal();
                }}>
                    <div className="modal-box relative ">
                        < X
                            onClick={closeModal}
                            className="cursor-pointer absolute right-2 top-2"
                        />

                        {selectedMovie && (
                            <div className="text-black">
                                <div >
                                    <h3 className="font-bold text-lg">{selectedMovie.title}</h3>
                                    <p className="font-bold">Note : <span>{selectedMovie.vote_average}</span></p>
                                </div>
                                <p className="py-4">{selectedMovie.overview}</p>
                            </div>
                        )}
                    </div>
                </dialog>

            )}
        </>
    )
}

export default Modal