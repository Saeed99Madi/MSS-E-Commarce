import App from '../App';
import { MainDashboard } from '../components/dashboard';
import { ProductsList } from '../components/dashboard/Products';
import Dashboard from '../pages/dashboard';

import DashboardLayout from '../layouts/DashboardLayout';
import { Categories } from '../components/dashboard/Categories';
import { ServicesList } from '../components/dashboard/Services';

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
    ],
  },
  {
    path: '/',
    element: <App />,
    // children: [{ index: true, element: <App /> }],
  },
];
export { Routes };
