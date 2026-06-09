import { Link, useLocation } from 'react-router-dom';
import { useEnrollmentContext } from '../context/EnrollmentContext';
import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const { enrolledCourses } = useEnrollmentContext();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">📚</span>
          <span>Portal ISIL</span>
        </Link>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="menu-icon">{menuOpen ? '✕' : '☰'}</span>
        </button>

        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
            Inicio
          </Link>
          <Link to="/cursos" className={`nav-link ${isActive('/cursos') ? 'active' : ''}`}>
            Cursos
          </Link>
          <Link to="/preinscripcion" className={`nav-link ${isActive('/preinscripcion') ? 'active' : ''}`}>
            Mi Preinscripción
            <span className="badge-pulse">{enrolledCourses.length}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}