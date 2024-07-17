import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = Array.from(
        { length: totalPages },
        (_, index) => index + 1
    );

    return (
        <div className="join">
            {pageNumbers.map((pageNumber) => (
                <button
                    key={pageNumber}
                    className={`join-item btn ${
                        pageNumber === currentPage ? "btn-active" : ""
                    }`}
                    onClick={() => onPageChange(pageNumber)}
                >
                    {pageNumber}
                </button>
            ))}
        </div>
    );
};

export default Pagination;

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};
