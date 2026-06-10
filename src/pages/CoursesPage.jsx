import { useState, useMemo, useEffect } from 'react';
import { useEnrollment } from '../hooks/useEnrollment';
import CourseList from '../components/CourseList';
import SearchBar from '../components/SearchBar';
import './CoursesPage.css';
import {courses} from '../data/courses'

const CATEGORIES = ['Todos', 'Frontend', 'Backend', 'Base de Datos', 'Mobile', 'IA', 'DevOps', 'Seguridad', 'Data Science', 'Cloud', 'Soft Skills'];

export default function CoursesPage() {
  console.log({courses})
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');
  const { isEnrolled, addCourse, removeCourse } = useEnrollment();

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        activeCategory === 'Todos' || course.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  useEffect(() => {
    document.title = 'Catálogo de Cursos - Portal ISIL';
  }, []);

  return (
    <div className="courses-page">
      <h1 className="page-title">Catálogo de Cursos</h1>

      <div className="courses-controls">
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Buscar por título, instructor o categoría..."
        />
      </div>

      <div className="category-filters">
        {CATEGORIES.map(category => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <p className="courses-count">
        Mostrando {filteredCourses.length} de {courses.length} cursos
      </p>

      <CourseList
        courses={filteredCourses}
        onEnroll={addCourse}
        onRemove={removeCourse}
        isEnrolled={isEnrolled}
      />
    </div>
  );
}