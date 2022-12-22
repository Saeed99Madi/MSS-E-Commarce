import { Navigate } from 'react-router-dom';
import { MainDashboard } from '../components/dashboard';
import { ProductsList } from '../components/dashboard/Products';
// import Dashboard from '../pages/dashboard';

import DashboardLayout from '../layouts/DashboardLayout';
import { Categories } from '../components/dashboard/Categories';
import { ServicesList } from '../components/dashboard/Services';
import { SettingsManagement } from '../components/dashboard/SettingsManage';

import Dashboard from '../pages/dashboard';

import { LoginDashboard } from '../components/dashboard/Login';
import NotFound from '../pages/NotFound';

const Routes = [
  {
    path: '/admin/dashboard',
    element: <Dashboard />,
    children: [
      { index: true, element: <MainDashboard /> },
      {
        path: 'products',
        element: <ProductsList />,
      },
      {
        path: 'services',
        element: <ServicesList />,
      },
      {
        path: 'categories',
        element: (
          <DashboardLayout>
            <Categories />
          </DashboardLayout>
        ),
      },
      {
        path: 'edit/settings',
        element: <SettingsManagement />,
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: '',
    element: <Navigate to="/admin/dashboard" />,
    errorElement: <NotFound />,
  },
  {
    path: '/admin/login',
    element: <LoginDashboard />,
    errorElement: <NotFound />,
  },
];

export { Routes };
