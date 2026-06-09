import { useEnrollmentContext } from '../context/EnrollmentContext';

export function useEnrollment() {
  const { enrolledCourses, addCourse, removeCourse, isEnrolled, totalCredits } = useEnrollmentContext();

  const MAX_COURSES = 5;
  const MAX_CREDITS = 20;

  const canEnroll = (course) => {
    if (isEnrolled(course.id)) return true;
    if (enrolledCourses.length >= MAX_COURSES) return false;
    if (totalCredits + course.credits > MAX_CREDITS) return false;
    return true;
  };

  const enrollmentSummary = {
    totalCourses: enrolledCourses.length,
    totalCredits,
    maxCourses: MAX_COURSES,
    maxCredits: MAX_CREDITS,
    isAtMaxCourses: enrolledCourses.length >= MAX_COURSES,
    isAtMaxCredits: totalCredits >= MAX_CREDITS,
    isOverCredits: totalCredits > MAX_CREDITS
  };

  return {
    enrolledCourses,
    addCourse,
    removeCourse,
    isEnrolled,
    totalCredits,
    canEnroll,
    enrollmentSummary
  };
}