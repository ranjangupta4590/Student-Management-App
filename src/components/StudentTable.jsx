import React from 'react';

const StudentTable = ({ students }) => {
  const headings = [
    'S. No.',
    'Roll Number',
    'Name',
    'Class',
    'Age',
    'Marks',
    'Average Marks',
    'City',
    'Attendance',
  ];

  return (
    <table className="w-full border-collapse border border-gray-200 text-sm hover:cursor-pointer">
      <thead>
        <tr className="bg-gray-200">
          {headings.map((item, index) => (
            <th key={index} className="border border-gray-300 px-4 py-2">
              {item}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {students.map((student, index) => (
          <tr
            key={index}
            className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
          >
            <td className="border border-gray-300 px-4 py-2 text-center">{student.serialNumber}</td>
            <td className="border border-gray-300 px-4 py-2 text-center">{student.rollNumber}</td>
            <td className="border border-gray-300 px-4 py-2 text-center">{student.name}</td>
            <td className="border border-gray-300 px-4 py-2 text-center">{student.class}</td>
            <td className="border border-gray-300 px-4 py-2 text-center">{student.age}</td>
            <td className="border border-gray-300 px-4 py-2 text-center">{student.marks}</td>
            <td className="border border-gray-300 px-4 py-2 text-center">{student.avgMarks}</td>
            <td className="border border-gray-300 px-4 py-2 text-center">{student.city}</td>
            <td className="border border-gray-300 px-4 py-2 text-center">{student.attendance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
