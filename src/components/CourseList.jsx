import './CourseList.css';

export default function CourseList({ courses, title, onEnroll, onRemove, isEnrolled }) {
  return (
    <div className="course-list">
      {title && <h2 className="course-list-title">{title}</h2>}
      <div className="course-grid">
        <div className="course-card">
          <div className="course-card-header">
            <span className="course-category" style={{ backgroundColor: '#3b82f6' }}>Frontend</span>
            <span className="course-level level-intermedio">Intermedio</span>
          </div>
          <h3 className="course-title">Desarrollo Web con React</h3>
          <p className="course-instructor">Dr. Carlos Mendoza</p>
          <div className="course-meta">
            <span className="course-credits">📘 4 créditos</span>
            <span className="course-duration">⏱ 16 semanas</span>
          </div>
          <p className="course-description">Aprende a construir aplicaciones modernas con React.</p>
          <div className="course-stats">
            <span className="course-rating">★ 4.8</span>
            <span className="course-capacity">18/30 estudiantes</span>
          </div>
          <div className="course-actions">
            <a href="/cursos/1" className="btn btn-secondary">Ver detalles</a>
            <button className="btn btn-primary">Agregar</button>
          </div>
        </div>
      </div>
    </div>
  );
}