import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import { Routes } from './routes';

import './index.css';
import { ProvideAuthGaurd } from './context/AuthContext';

const router = createBrowserRouter(Routes);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <ProvideAuthGaurd>
    <RouterProvider router={router} />
  </ProvideAuthGaurd>,
);
