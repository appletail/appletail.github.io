import { createHashRouter } from 'react-router-dom';
import Home from '@/pages/Home';
import RootLayout from '@/layouts/RootLayout';
import pathName from '@/route/pathName';

const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: pathName.home,
        element: <Home />,
      },
      {
        path: pathName.project,
        element: <Home />,
      },
      {
        path: pathName.profile,
        element: <Home />,
      },
    ],
  },
]);

export default router;
