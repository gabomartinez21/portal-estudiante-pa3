import { Link } from 'react-router-dom';
import { formatRating, formatCapacity, getCategoryColor, truncateText } from '../utils/formatters';
import './CourseCard.css';

export default function CourseCard({ course, onEnroll, onRemove, isEnrolled }) {
  const categoryColor = getCategoryColor(course.category);

  return (
    <div className="course-card">
      <div className="course-card-header">
        <span className="course-category" style={{ backgroundColor: categoryColor }}>
          {course.category}
        </span>
        <span className={`course-level level-${course.level.toLowerCase()}`}>
          {course.level}
        </span>
      </div>

      <h3 className="course-title">{course.title}</h3>
      <p className="course-instructor">{course.instructor}</p>

      <div className="course-meta">
        <span className="course-credits">📘 {course.credits} créditos</span>
        <span className="course-duration">⏱ {course.duration}</span>
      </div>

      <p className="course-description">{truncateText(course.description, 100)}</p>

      <div className="course-stats">
        <span className="course-rating">{formatRating(course.rating)}</span>
        <span className="course-capacity">{formatCapacity(course.enrolled, course.capacity)}</span>
      </div>

      <div className="course-actions">
        <Link to={`/cursos/${course.id}`} className="btn btn-secondary">
          Ver detalles
        </Link>
        {isEnrolled ? (
          <button className="btn btn-danger" onClick={() => onRemove(course.id)}>
            Quitar
          </button>
        ) : (
          <button className="btn btn-primary" onClick={() => onEnroll(course)}>
            Agregar
          </button>
        )}
      </div>
    </div>
  );
}