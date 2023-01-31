import { Routes, Route } from 'react-router-dom';
import { ProvideAuthGaurd } from './context/AuthContext';
import './App.css';
import ProtectedRoute from './routes/protectedRoute';
import Dashboard from './pages/dashboard';
import { MainDashboard } from './components/dashboard';
import { ProductsList } from './components/dashboard/Products';
import { ServicesList } from './components/dashboard/Services';
import DashboardLayout from './layouts/DashboardLayout';
import { Categories } from './components/dashboard/Categories';
import { SettingsManagement } from './components/dashboard/SettingsManage';
import NotFound from './pages/NotFound';
import { LoginDashboard } from './components/dashboard/Login';
import { Contacts } from './components/dashboard/Contacts';

const App = () => {
  return (
    <ProvideAuthGaurd>
      <Routes>
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
          errorElement={<NotFound />}
        >
          <Route
            index
            element={
              <ProtectedRoute>
                <MainDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="products"
            element={
              <ProtectedRoute>
                <ProductsList />
              </ProtectedRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <ProtectedRoute>
                <Contacts />
              </ProtectedRoute>
            }
          />
          <Route
            path="services"
            element={
              <ProtectedRoute>
                <ServicesList />
              </ProtectedRoute>
            }
          />
          <Route
            path="categories"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Categories />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="edit/settings"
            element={
              <ProtectedRoute>
                <SettingsManagement />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route
          path="/admin/login"
          element={<LoginDashboard />}
          errorElement={<NotFound />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ProvideAuthGaurd>
  );
};

export default App;
