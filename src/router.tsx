import { createHashRouter } from 'react-router-dom';
import Home from './pages/Home';
import RootLayout from './layouts/RootLayout';

const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
]);

export default router;
