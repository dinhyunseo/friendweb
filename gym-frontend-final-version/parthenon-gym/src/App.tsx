import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from './app/store';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Header } from './components/Header/Header';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Landing } from './pages/Landing/Landing';
import { Footer } from './components/Footer/Footer';
import { TrainingsPage } from './pages/TrainingsPage/TrainingsPage';
import { CheckoutPage } from './pages/Checkout/CheckoutPage';

function App() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return (
    <Router>
      <div className="app-container"> {/* Обертка для Flex */}
        <Header />
        
        <main className="content-wrapper"> {/* Растягиваемый контент */}
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" />} />
            <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/" />} />
            <Route path="/checkout" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />
            <Route path="/trainings" element={<TrainingsPage />} />
            <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute> } />
            <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;