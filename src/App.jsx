import { EnrollmentProvider } from './context/EnrollmentContext';
import AppRouter from './routes/AppRouter';
import './index.css';

export default function App() {
  return (
    <EnrollmentProvider>
      <AppRouter />
    </EnrollmentProvider>
  );
}