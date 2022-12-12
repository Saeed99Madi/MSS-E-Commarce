import App from '../App';
import { MainDashboard } from '../components/dashboard';
import { ProductsList } from '../components/dashboard/Products';
import Dashboard from '../pages/dashboard';

import useProducts from '../hooks/getProducts';
import DashboardLayout from '../layouts/DashboardLayout';
import { Categories } from '../components/dashboard/Categories';

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
