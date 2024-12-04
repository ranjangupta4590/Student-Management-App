import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center mt-4">
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
);

export default Pagination;
