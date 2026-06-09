import { createContext, useContext, useState, useEffect } from 'react';

const EnrollmentContext = createContext();

export function EnrollmentProvider({ children }) {
  const [enrolledCourses, setEnrolledCourses] = useState(() => {
    const saved = localStorage.getItem('enrolledCourses');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

  const addCourse = (course) => {
    if (!isEnrolled(course.id)) {
      setEnrolledCourses(prev => [...prev, course]);
    }
  };

  const removeCourse = (courseId) => {
    setEnrolledCourses(prev => prev.filter(c => c.id !== courseId));
  };

  const isEnrolled = (courseId) => {
    return enrolledCourses.some(c => c.id === courseId);
  };

  const totalCredits = enrolledCourses.reduce((sum, course) => sum + course.credits, 0);

  return (
    <EnrollmentContext.Provider value={{
      enrolledCourses,
      addCourse,
      removeCourse,
      isEnrolled,
      totalCredits
    }}>
      {children}
    </EnrollmentContext.Provider>
  );
}

export function useEnrollmentContext() {
  const context = useContext(EnrollmentContext);
  if (!context) {
    throw new Error('useEnrollmentContext debe usarse dentro de EnrollmentProvider');
  }
  return context;
}