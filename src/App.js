import { Routes, Route, Navigate } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';

import './App.css'
import LoginPage from './pages/LoginPage';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
            path="/home"
            element={
                <PrivateRoute>
                    <HomePage />
                </PrivateRoute>
            }
        />
        <Route
            path="/detail/:id"
            element={
                <PrivateRoute>
                    <DetailPage />
                </PrivateRoute>
            }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      
    </div>
  );
}

export default App;
