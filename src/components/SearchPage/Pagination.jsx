const Pagination = ({ prevPage, nextPage, page }) => {
    return (
        <div>
            <div className="grid grid-cols-3">
                <button
                    onClick={prevPage}
                    className="btn btn-outline">Previous page
                </button>
                <div className="flex justify-center items-end">
                    <p className="text-4xl">{page}</p>

                </div>
                <button
                    onClick={nextPage}
                    className=" btn btn-outline">
                    Next
                </button>
            </div></div >
    )
}

export default Pagination