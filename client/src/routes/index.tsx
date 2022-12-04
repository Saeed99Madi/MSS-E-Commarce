import App from '../App';
import { MainDashboard } from '../components/dashboard';
import { ProductsList } from '../components/dashboard/Products';
import Dashboard from '../pages/dashboard';

const Routes = [
  {
    path: '/admin/dashboard',
    element: <Dashboard />,
    children: [
      { index: true, element: <MainDashboard /> },
      { path: 'products', element: <ProductsList /> },
    ],
  },
  {
    path: '/',
    element: <App />,
    // children: [{ index: true, element: <App /> }],
  },
];
export { Routes };
