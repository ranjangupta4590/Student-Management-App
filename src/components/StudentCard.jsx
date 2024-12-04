import React from 'react';

const StudentCard = ({ student }) => (
  <div className="bg-white shadow-lg rounded-lg p-4 mb-4 hover:cursor-pointer">
    <div className="flex flex-row items-center gap-5">

      {/* Avatar */}
      <div className="relative w-20 h-20 overflow-hidden bg-gray-100 rounded-full flex-shrink-0">
        <svg className="absolute w-20 h-20 text-gray-400 left-0 top-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
        </svg>
      </div>

      {/* Student Info */}
      <div>
        <h2 className="text-xl font-bold">{student.name}</h2>
        <p><span className='font-semibold'>Age: </span>{student.age}</p>
        <p><span className='font-semibold'>Marks:</span> {student.marks}</p>
        <p><span className='font-semibold'>Roll Number:</span> {student.rollNumber}</p>
      </div>
    </div>
  </div>
);

export default StudentCard;
