import CourseCard from './CourseCard';
import './CourseList.css';

export default function CourseList({ courses, title, onEnroll, onRemove, isEnrolled }) {
  if (!courses || courses.length === 0) {
    return (
      <div className="course-list-empty">
        <p>No hay cursos disponibles</p>
      </div>
    );
  }

  return (
    <div className="course-list">
      {title && <h2 className="course-list-title">{title}</h2>}
      <div className="course-grid">
        {courses.map(course => (
          <CourseCard
            key={course.id}
            course={course}
            onEnroll={onEnroll}
            onRemove={onRemove}
            isEnrolled={isEnrolled(course.id)}
          />
        ))}
      </div>
    </div>
  );
}