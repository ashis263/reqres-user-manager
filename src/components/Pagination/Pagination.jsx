import useAuth from "../../hooks/useAuth";

const Pagination = () => {
    const { currentPage, setCurrentPage, totalPages } = useAuth();
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    }
    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    }
    return (
        <div>
            <div className="flex justify-center gap-5 mt-5">
                <button onClick={prevPage} className="btn text-outline text-te7 btn-sm sm:btn-md w-28 sm:w-40" disabled={currentPage === 1}>Previous</button>
                <button className="btn bg-teal-700 text-white btn-sm sm:btn-md">{currentPage}</button>
                <button onClick={nextPage} className="btn text-outline text-te7 btn-sm sm:btn-md w-28 sm:w-40" disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
}

export default Pagination;
