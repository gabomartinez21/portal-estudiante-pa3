# Portal del Estudiante - ISIL

Aplicación web SPA desarrollada con React para la gestión de cursos e inscripciones del Instituto San Ignacio de Loyola (ISIL).

## Tecnologías usadas

- **React 18** - Librería principal para la construcción de interfaces
- **Vite** - Herramienta de build y desarrollo rápido
- **React Router DOM v6** - Navegación SPA (Single Page Application)
- **Context API** - Gestión de estado global (sin Redux ni Zustand)
- **CSS3** - Estilos personalizados (sin librerías de UI externas)

## Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## Estructura del proyecto

```
portal-estudiante/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Navbar.jsx       # Barra de navegación
│   │   ├── CourseCard.jsx   # Tarjeta de curso
│   │   ├── CourseList.jsx   # Lista de cursos
│   │   ├── SearchBar.jsx    # Barra de búsqueda
│   │   └── EnrollmentBadge.jsx
│   ├── pages/               # Vistas/páginas
│   │   ├── HomePage.jsx     # Página principal
│   │   ├── CoursesPage.jsx  # Catálogo de cursos
│   │   ├── CourseDetailPage.jsx
│   │   └── EnrollmentPage.jsx
│   ├── routes/
│   │   └── AppRouter.jsx    # Configuración de rutas
│   ├── context/
│   │   └── EnrollmentContext.jsx  # Estado global de inscripciones
│   ├── data/
│   │   └── courses.js       # Datos mock (12 cursos)
│   ├── hooks/
│   │   └── useEnrollment.js # Hook personalizado
│   ├── utils/
│   │   └── formatters.js    # Utilidades de formato
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md
```

## Vistas principales

### Inicio (`/`)
- Hero section con bienvenida personalizada
- Estadísticas: cursos disponibles, preinscritos, créditos
- Cursos destacados (primeros 3 del catálogo)

### Catálogo de Cursos (`/cursos`)
- Búsqueda en tiempo real por título, instructor o categoría
- Filtros por categoría
- Grid responsive de tarjetas de cursos
- Contador de cursos mostrados

### Detalle de Curso (`/cursos/:id`)
- Información completa del curso
- Temas, horario, duración, nivel
- Barra de capacidad visual
- Botón para agregar/quitar de preinscripción

### Mi Preinscripción (`/preinscripcion`)
- Lista de cursos seleccionados
- Resumen de créditos y cursos
- Persistencia en localStorage
- Alertas de límite de créditos

## Cambios realizados
- Se agregaron CourseCard.css, CourseCard.jsx, CourseDetailPage.css, CourseDetailPage.jsx, /data/courses.js
- Se agregó la ruta /cursos/:id en AppRouter
- Se habilitó navegación a detalle de cursos
- Se corrigió la redirección desde CourseCard

### Resultados
Ahora cada curso muestra su vista detallada correctamente.

## Decisiones técnicas

### Context API vs Redux
Se eligió Context API por ser la solución nativa de React para estado global, suficiente para las necesidades de la aplicación y sin dependencias adicionales.

### Datos mock
Los datos están definidos en `src/data/courses.js` como un array de 12 cursos con información realista de un instituto tecnológico.

### Persistencia
Se utiliza localStorage para guardar las inscripciones del estudiante, permitiendo que persistan entre sesiones del navegador.

### SPA sin recarga
React Router DOM permite navegación entre páginas sin recarga del navegador, mejorando la experiencia de usuario.

## Equipo

| Nombre | Rol |
|--------|-----|
| [Nombre del integrante 1] | Desarrollador Frontend |
| Kenneth Lee Quinto Orihuela | Desarrollador Frontend |

## Video explicativo

[INSERTAR LINK DE VIDEO DE YOUTUBE AQUÍ]
