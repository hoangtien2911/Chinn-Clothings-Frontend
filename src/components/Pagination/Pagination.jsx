import React from 'react'
import './Pagination.scss'

export const Pagination = ({ pageNumber, totalPages, onPageChange }) => {
    const handlePageClick = (newPageNumber) => {
        if (newPageNumber >= 1 && newPageNumber <= totalPages) {
            onPageChange(newPageNumber);
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const minPage = Math.max(1, pageNumber - 1);
        const maxPage = Math.min(totalPages, pageNumber + 1);

        for (let i = minPage; i <= maxPage; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    className={`btn btn-primary mt-3 fs-6 me-3 ${i === pageNumber ? 'active-btn-paging' : ''}`}
                    style={{ borderRadius: '0', width: '40px', height: '40px', padding: '0' }}
                    onClick={() => handlePageClick(i)}
                >
                    {i}
                </button>
            );
        }

        return pageNumbers;
    };
    return (
        <div className="flex flex-center mb-5">
          {pageNumber !== 1 && (
            <div className="text-center">
              <button
                className="btn btn-primary mt-3 me-3"
                style={{ borderRadius: '0', width: '40px', height: '40px', padding: '0' }}
                onClick={() => handlePageClick(pageNumber - 1)}
              >
                <i className="fa-solid fa-arrow-left" style={{fontSize:'17px'}}></i>
              </button>
            </div>
          )}
    
          {renderPageNumbers()}
    
          {pageNumber !== totalPages && (
            <div className="text-center">
              <button
                className="btn btn-primary mt-3"
                style={{ borderRadius: '0', width: '40px', height: '40px', padding: '0' }}
                onClick={() => handlePageClick(pageNumber + 1)}
              >
                <i className="fa-solid fa-arrow-right" style={{fontSize:'17px'}}></i>
              </button>
            </div>
          )}
        </div>
      );
}


export default Pagination;
