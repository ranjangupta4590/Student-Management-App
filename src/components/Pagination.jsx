import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-between bottom-0 items-center mt-4">
    {/* Previous Button */}
    <button
      className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-blue-600 text-white cursor-not-allowed' : 'bg-blue-600 text-white'}`}
      onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
    >
      Prev
    </button>

    {/* Page Numbers */}
    <div className="flex justify-center flex-grow">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`px-3 py-1 mx-1 rounded ${
            currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>

    {/* Next Button */}
    <button
      className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-blue-600 text-white cursor-not-allowed' : 'bg-blue-600 text-white'}`}
      onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      Next
    </button>
  </div>
);

export default Pagination;
