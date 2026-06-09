import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useEnrollment } from '../hooks/useEnrollment';
import { getCategoryColor } from '../utils/formatters';
import './EnrollmentPage.css';

export default function EnrollmentPage() {
  const { enrolledCourses, totalCredits, removeCourse, enrollmentSummary } = useEnrollment();

  useEffect(() => {
    document.title = 'Mi Preinscripción - Portal ISIL';
  }, []);

  return (
    <div className="enrollment-page">
      <h1 className="page-title">Mi Preinscripción</h1>

      {enrolledCourses.length === 0 ? (
        <div className="enrollment-empty">
          <p className="empty-message">Aún no has seleccionado cursos</p>
          <Link to="/cursos" className="btn btn-primary">
            Explorar cursos
          </Link>
        </div>
      ) : (
        <>
          <div className="enrollment-summary">
            <div className="summary-card">
              <span className="summary-value">{enrollmentSummary.totalCourses}</span>
              <span className="summary-label">Cursos seleccionados</span>
            </div>
            <div className="summary-card">
              <span className="summary-value">{enrollmentSummary.totalCredits}</span>
              <span className="summary-label">Créditos totales</span>
            </div>
            <div className="summary-card">
              <span className="summary-value">{enrollmentSummary.maxCredits - enrollmentSummary.totalCredits}</span>
              <span className="summary-label">Créditos disponibles</span>
            </div>
          </div>

          {enrollmentSummary.isOverCredits && (
            <div className="alert alert-warning">
              Has superado el límite de 20 créditos permitidos. Por favor, ajusta tu selección.
            </div>
          )}

          <div className="enrollment-list">
            {enrolledCourses.map(course => (
              <div key={course.id} className="enrollment-item">
                <div className="enrollment-item-info">
                  <span
                    className="enrollment-item-category"
                    style={{ backgroundColor: getCategoryColor(course.category) }}
                  >
                    {course.category}
                  </span>
                  <div className="enrollment-item-details">
                    <h3>{course.title}</h3>
                    <p>{course.instructor} • {course.credits} créditos</p>
                  </div>
                </div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeCourse(course.id)}
                >
                  Quitar
                </button>
              </div>
            ))}
          </div>

          <div className="enrollment-actions">
            <p className="enrollment-note">
              Límite máximo: {enrollmentSummary.maxCourses} cursos y {enrollmentSummary.maxCredits} créditos
            </p>
          </div>
        </>
      )}
    </div>
  );
}