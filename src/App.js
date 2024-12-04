import React, { useEffect, useState, useRef } from 'react';
import StudentTable from './components/StudentTable';
import StudentCard from './components/StudentCard';
import Pagination from './components/Pagination';
import { getStudents } from './utils/getStudents';

const App = () => {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [hasMore, setHasMore] = useState(true); // Tracks if more data is available for infinite scrolling
  const [loading, setLoading] = useState(false); // For loading state
  const loaderRef = useRef(null); // Ref for the loading element

  const pageSize = 10; // Number of students per page
  const totalStudents = 16; // Total number of students (for demonstration purposes)
  const totalPages = Math.ceil(totalStudents / pageSize);

  // Fetch students based on the current page
  const fetchStudents = async (page, append = false) => {
    if (loading || (page > totalPages && isMobile)) return;

    setLoading(true);
    const data = await getStudents(pageSize, page);

    if (append) {
      setStudents((prevStudents) => [...prevStudents, ...data]);
    } else {
      setStudents(data);
    }

    // Check if all pages have been loaded
    if (data.length < pageSize || page >= totalPages) {
      setHasMore(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    const loadInitialData = async () => {
      if (isMobile) {
        // Fetch all students for mobile view at once
        const data = await getStudents(totalStudents, 1);
        setStudents(data);
      } else {
        // For desktop, fetch based on pagination logic
        await fetchStudents(currentPage);
      }
    };

    loadInitialData();
  }, [currentPage, isMobile]);

  // Detect screen size to toggle between mobile and desktop
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Infinite scrolling logic for mobile
  useEffect(() => {
    if (!isMobile || !hasMore || loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCurrentPage((prevPage) => {
            const nextPage = prevPage + 1;
            if (nextPage <= totalPages) {
              fetchStudents(nextPage, true);
            }
            return nextPage;
          });
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [isMobile, hasMore, loading]);

  return (
    <div className="flex flex-col h-screen">
      <h1 className="text-2xl font-bold text-center mb-4 border-b-2 py-2 shadow-b-md">
        Students Management Page
      </h1>
      <div className="p-4 flex-grow">
        {isMobile ? (
          <div>
            {students.map((student, index) => (
              <StudentCard key={index} student={student} />
            ))}
            {loading && <div className="text-center py-4">Loading...</div>}
            {!hasMore && !loading && (
              <div className="text-center py-4">No more students to load</div>
            )}
            <div ref={loaderRef}></div>
          </div>
        ) : (
          <div>
            <StudentTable students={students} />
            {/* Show loading on desktop if needed */}
            {loading && (
              <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-70 z-10">
                <div className="text-zinc-800 text-xl">Loading...</div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Show Pagination only on Desktop */}
      {!isMobile && (
        <div className="bg-white p-4 shadow-md">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => {
              setCurrentPage(page);
              fetchStudents(page);
            }}
          />
        </div>
      )}

      {/* Footer */}
      <div className="bg-slate-700">
        <div className="flex p-2 items-center justify-center">
          <p className="text-white">Developed by Ranjan Gupta</p>
        </div>
      </div>
    </div>
  );
};

export default App;
