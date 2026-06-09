import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEnrollment } from '../hooks/useEnrollment';
import { courses } from '../data/courses';
import { formatRating, formatCapacity, getCategoryColor } from '../utils/formatters';
import './CourseDetailPage.css';

export default function CourseDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isEnrolled, addCourse, removeCourse } = useEnrollment();

  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const found = courses.find(c => c.id === parseInt(id));
      setCourse(found || null);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  useEffect(() => {
    document.title = course ? `${course.title} - Portal ISIL` : 'Curso no encontrado - Portal ISIL';
  }, [course]);

  if (loading) {
    return (
      <div className="detail-loading">
        <div className="spinner"></div>
        <p>Cargando curso...</p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="detail-not-found">
        <h2>Curso no encontrado</h2>
        <p>El curso que buscas no existe en nuestro catálogo.</p>
        <Link to="/cursos" className="btn btn-primary">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  const enrolled = isEnrolled(course.id);
  const categoryColor = getCategoryColor(course.category);
  const capacityPercentage = (course.enrolled / course.capacity) * 100;

  return (
    <div className="course-detail-page">
      <button className="back-btn" onClick={() => navigate('/cursos')}>
        ← Volver al catálogo
      </button>

      <div className="detail-header">
        <div className="detail-badges">
          <span className="detail-category" style={{ backgroundColor: categoryColor }}>
            {course.category}
          </span>
          <span className={`detail-level level-${course.level.toLowerCase()}`}>
            {course.level}
          </span>
        </div>

        <h1 className="detail-title">{course.title}</h1>
        <p className="detail-instructor">Impartido por {course.instructor}</p>
      </div>

      <div className="detail-grid">
        <div className="detail-main">
          <section className="detail-section">
            <h2>Descripción</h2>
            <p>{course.description}</p>
          </section>

          <section className="detail-section">
            <h2>Temas del curso</h2>
            <div className="topics-grid">
              {course.topics.map((topic, index) => (
                <span key={index} className="topic-tag">{topic}</span>
              ))}
            </div>
          </section>

          <section className="detail-section">
            <h2>Información del curso</h2>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Duración</span>
                <span className="info-value">{course.duration}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Horario</span>
                <span className="info-value">{course.schedule}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Créditos</span>
                <span className="info-value">{course.credits}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Nivel</span>
                <span className="info-value">{course.level}</span>
              </div>
            </div>
          </section>
        </div>

        <div className="detail-sidebar">
          <div className="sidebar-card">
            <div className="sidebar-stat">
              <span className="sidebar-label">Rating</span>
              <span className="sidebar-value rating">{formatRating(course.rating)}</span>
            </div>

            <div className="sidebar-stat">
              <span className="sidebar-label">Capacidad</span>
              <span className="sidebar-value">{formatCapacity(course.enrolled, course.capacity)}</span>
              <div className="capacity-bar">
                <div
                  className="capacity-fill"
                  style={{ width: `${capacityPercentage}%` }}
                ></div>
              </div>
            </div>

            <div className="sidebar-stat">
              <span className="sidebar-label">Créditos</span>
              <span className="sidebar-value">{course.credits}</span>
            </div>

            <div className="sidebar-actions">
              {enrolled ? (
                <button className="btn btn-danger btn-block" onClick={() => removeCourse(course.id)}>
                  Quitar de preinscripción
                </button>
              ) : (
                <button className="btn btn-primary btn-block" onClick={() => addCourse(course)}>
                  Agregar a preinscripción
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}