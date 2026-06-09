import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useEnrollment } from '../hooks/useEnrollment';
import CourseList from '../components/CourseList';
import './HomePage.css';

const courses = [
  {
    id: 1,
    title: "Desarrollo Web con React",
    instructor: "Dr. Carlos Mendoza",
    category: "Frontend",
    credits: 4,
    duration: "16 semanas",
    description: "Aprende a construir aplicaciones modernas con React.",
    enrolled: 18,
    capacity: 30,
    rating: 4.8,
    level: "Intermedio"
  }
];

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const { enrolledCourses, totalCredits, isEnrolled, addCourse, removeCourse } = useEnrollment();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const featuredCourses = courses.slice(0, 3);

  if (loading) {
    return (
      <div className="home-loading">
        <div className="spinner"></div>
        <p>Cargando portal...</p>
      </div>
    );
  }

  return (
    <div className="home-page">
      <section className="hero">
        <h1 className="hero-title">
          Bienvenido al Portal del Estudiante
        </h1>
        <p className="hero-subtitle">
          Gestiona tus cursos e inscripciones en el Instituto San Ignacio de Loyola
        </p>
        <Link to="/cursos" className="btn btn-primary btn-lg">
          Ver todos los cursos
        </Link>
      </section>

      <section className="stats-section">
        <div className="stat-card">
          <span className="stat-value">{courses.length}</span>
          <span className="stat-label">Cursos disponibles</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{enrolledCourses.length}</span>
          <span className="stat-label">Cursos preinscriptos</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{totalCredits}</span>
          <span className="stat-label">Créditos seleccionados</span>
        </div>
      </section>

      <section className="featured-section">
        <div className="section-header">
          <h2>Cursos destacados</h2>
          <Link to="/cursos" className="see-all-link">Ver todos →</Link>
        </div>
        <CourseList
          courses={featuredCourses}
          onEnroll={addCourse}
          onRemove={removeCourse}
          isEnrolled={isEnrolled}
        />
      </section>
    </div>
  );
}