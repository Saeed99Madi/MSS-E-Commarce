import App from '../App';
import { MainDashboard } from '../components/dashboard';
import Dashboard from '../pages/dashboard';

const Routes = [
  {
    path: '/admin/dashboard',
    element: <Dashboard />,
    children: [{ index: true, element: <MainDashboard /> }],
  },
  {
    path: '/',
    element: <App />,
    // children: [{ index: true, element: <App /> }],
  },
];
export { Routes };
