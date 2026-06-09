import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomePage from '../pages/HomePage';
import CoursesPage from '../pages/CoursesPage';
import EnrollmentPage from '../pages/EnrollmentPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main-content">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cursos" element={<CoursesPage />} />
            <Route path="/preinscripcion" element={<EnrollmentPage />} />
            <Route path="*" element={
              <div className="not-found">
                <h1>404</h1>
                <p>Página no encontrada</p>
                <a href="/" className="btn btn-primary">Volver al inicio</a>
              </div>
            } />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}