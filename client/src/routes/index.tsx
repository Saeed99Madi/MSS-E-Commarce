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
import App from '../App';

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
    element: <App />,
    errorElement: <NotFound />,
    // children: [{ index: true, element: <App /> }],
  },
  {
    path: '/admin/login',
    element: <LoginDashboard />,
    errorElement: <NotFound />,
    // children: [{ index: true, element: <App /> }],
  },
  // {
  //   path: '*',
  //   element: <AuthGaurdDashboard />,
  //   // children: [{ index: true, element: <App /> }],
  // },
];

export { Routes };
